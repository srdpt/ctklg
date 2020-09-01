import "dotenv/config";

import { CronJob } from "cron";
import winston, { Logger } from "winston";

export { Logger } from "winston";

interface Widget {
  name: string;
  cron: string;
  setup: (logger: Logger) => Promise<void> | void;
  run: (logger: Logger) => Promise<void> | void;
}

export default function start(widget: Widget) {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.label({ label: widget.name }),
      winston.format.splat()
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
      }),
      // new winston.transports.File({
      //   filename: `${widget.name}.log`,
      //   format: winston.format.json(),
      // }), // only in prod
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
    const job = new CronJob(
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
