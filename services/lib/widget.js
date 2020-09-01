"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cron_1 = require("cron");
const winston_1 = __importDefault(require("winston"));
function start(widget) {
  const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(
      winston_1.default.format.label({ label: widget.name }),
      winston_1.default.format.splat()
    ),
    transports: [
      new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(
          winston_1.default.format.colorize(),
          winston_1.default.format.simple()
        ),
      }),
    ],
  });
  logger.info("initializing widget");
  const res = widget.setup(logger);
  if (typeof res === "object") {
    res.then(() => start());
  } else {
    start();
  }
  function start() {
    const job = new cron_1.CronJob(
      widget.cron,
      () => {
        logger.info("running widget");
        widget.run(logger);
      },
      null,
      undefined,
      undefined,
      undefined,
      true
    ); // last is true for testing
    logger.info("next run will be %s", job.nextDate().format());
    job.start();
  }
}
exports.default = start;
