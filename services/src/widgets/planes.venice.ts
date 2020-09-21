import axios from "axios";

import { PrismaClient } from "@prisma/client";

import start, { Logger } from "./widget";
import { URLSearchParams } from "url";

import { Plane } from "./planes.types";

const AIRPORT = process.env.PLANES_AIRPORT!;

const TIMES = {
  "12_AM__3_AM": 1,
  "3_AM__6_AM": 2,
  "6_AM__9_AM": 3,
  "9_AM__12_PM": 4,
  "12_PM__3_PM": 5,
  "3_PM__6_PM": 6,
  "6_PM__9_PM": 7,
  "9_PM__12_AM": 8,
};

const BASE = "https://www.flightstats.com/go/weblet";

const CONFIG = {
  guid: "49e3481552e7c4c9:-f32609:127e340f1b9:538d",
  weblet: "status",
  action: "AirportFlightStatus",
  airportCode: AIRPORT,
  airportQueryType: "1",
};

function url(): string {
  const params = new URLSearchParams(Object.entries(CONFIG));
  return `${BASE}?${params.toString()}`;
}

async function planes(filter: keyof typeof TIMES): Promise<Plane[]> {
  const airportQueryTimePeriod = TIMES[filter];
  const res = await axios.post(url(), {
    airportQueryTimePeriod,
  });
  return [];
}

start({
  cron: "0 0 1 * * *", // every day at 1:00am
  name: "planes",
  async setup(prisma: PrismaClient, logger: Logger): Promise<void> {},
  async run(prisma: PrismaClient, logger: Logger): Promise<void> {
    console.log(planes("6_AM__9_AM"));
  },
});
