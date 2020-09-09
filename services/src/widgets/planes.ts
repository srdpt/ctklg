import axios from "axios";

import { PrismaClient } from "@prisma/client";

import start, { Logger } from "../widget";
import { URLSearchParams } from "url";
import fs from "fs";

async function fetchArrivals() {
  const data = {
    access_key: process.env.PLANES_AVIATION_STACK,
    arr_iata: process.env.PLANES_AIRPORT,
  };
  const params = new URLSearchParams(data);
  const res = await axios.get(
    `http://api.aviationstack.com/v1/flights?${params.toString()}`
  );
  fs.writeFileSync("data.json", JSON.stringify(res.data));
}

start({
  cron: "0 0 1 * * *", // every day at 1:00am
  name: "planes",
  async setup(prisma: PrismaClient, logger: Logger): Promise<void> {},
  async run(prisma: PrismaClient, logger: Logger): Promise<void> {
    await fetchArrivals();
  },
});
