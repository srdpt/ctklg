"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const widget_1 = __importDefault(require("../widget"));
const url_1 = require("url");
const fs_1 = __importDefault(require("fs"));
async function fetchArrivals() {
  const data = {
    access_key: process.env.PLANES_AVIATION_STACK,
    arr_iata: process.env.PLANES_AIRPORT,
  };
  const params = new url_1.URLSearchParams(data);
  const res = await axios_1.default.get(
    `http://api.aviationstack.com/v1/flights?${params.toString()}`
  );
  fs_1.default.writeFileSync("data.json", JSON.stringify(res.data));
}
widget_1.default({
  cron: "0 0 1 * * *",
  name: "planes",
  async setup(prisma, logger) {},
  async run(prisma, logger) {
    await fetchArrivals();
  },
});
