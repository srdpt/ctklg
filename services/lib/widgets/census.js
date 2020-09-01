"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const widget_1 = __importDefault(require("../widget"));
function url(filter) {
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
async function fetchPopulation(fil) {
  const res = await axios_1.default.get(url(fil));
  if (res.status !== 200) throw new Error("Not 200");
  const $ = cheerio_1.default.load(res.data);
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
function getFilters() {
  const filters = [];
  for (let i = 0; i < 110; i += 5) {
    filters.push({ from: i, to: i + 4 });
  }
  return filters;
}
widget_1.default({
  cron: "0 0 1 * * *",
  name: "census",
  async setup(logger) {
    const filters = getFilters();
    const total = await fetchPopulation();
    const requests = [];
    for (let filter of filters) {
      requests.push(fetchPopulation(filter));
    }
    let ranged;
    try {
      ranged = await Promise.all(requests);
    } catch (err) {
      logger.warning("ranged data return error", err);
    }
    const data = {
      total,
      ranged,
    };
    logger.info("population:", { data: data });
  },
  async run(logger) {},
});
