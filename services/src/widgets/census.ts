import axios from "axios";
import cheerio from "cheerio";

import { PrismaClient, JsonObject } from "@prisma/client";

import start, { Logger } from "../widget";

interface Filter extends JsonObject {
  from: number;
  to: number;
}

interface Dataframe extends JsonObject {
  m: number;
  f: number;
  tot: number;
  fil?: Filter;
}

interface Data extends JsonObject {
  total: Dataframe;
  ranged?: Dataframe[];
}

function url(filter?: Filter) {
  const URL =
    "https://portale.comune.venezia.it/millefoglie/statistiche/scheda";
  const SHEET = "QUARTIERE-POPOLA";
  const GEO = "1$2$";
  if (filter) {
    return `${URL}/${SHEET}-${GEO}---${filter.from}-${filter.to}--`;
  } else {
    return `${URL}/${SHEET}-${GEO}--------`;
  }
}

async function fetchPopulation(fil?: Filter): Promise<Dataframe> {
  const res = await axios.get<string>(url(fil));
  if (res.status !== 200) throw new Error("Not 200");
  const $ = cheerio.load(res.data);
  const m = parseInt(
    $("table.sticky-enabled tr:last-child td:nth-last-child(3)").text()
  );
  const f = parseInt(
    $("table.sticky-enabled tr:last-child td:nth-last-child(2)").text()
  );
  const tot = parseInt(
    $("table.sticky-enabled tr:last-child td:last-child").text()
  );
  return {
    m,
    f,
    tot,
    fil,
  };
}

function getFilters(): Filter[] {
  const filters: Filter[] = [];
  for (let i = 0; i < 110; i += 5) {
    filters.push({ from: i, to: i + 4 });
  }
  return filters;
}

start({
  cron: "0 0 1 * * *", // every day at 1:00am
  name: "census",
  async setup(prisma: PrismaClient, logger: Logger): Promise<void> {},
  async run(prisma: PrismaClient, logger: Logger): Promise<void> {
    const filters = getFilters();

    const total = await fetchPopulation();

    const requests: Promise<Dataframe>[] = [];
    for (let filter of filters) {
      requests.push(fetchPopulation(filter));
    }

    let ranged: Dataframe[] | undefined;
    try {
      ranged = await Promise.all(requests);
    } catch (err) {
      logger.warning("ranged data return error", err);
    }

    const data: Data = {
      total,
      ranged,
    };

    await prisma.census_snapshot.create({
      data: {
        data: data,
      },
    });
  },
});
