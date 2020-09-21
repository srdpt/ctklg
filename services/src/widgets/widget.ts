import dotenv from "dotenv";

dotenv.config({ path: ".env" });
dotenv.config({ path: "prisma/.env" });

import { CronJob } from "cron";
import winston, { Logger } from "winston";

export { Logger } from "winston";

import { PrismaClient } from "@prisma/client";

interface Widget {
  name: string;
  cron: string;
  setup: (prisma: PrismaClient, logger: Logger) => Promise<void> | void;
  run: (prisma: PrismaClient, logger: Logger) => Promise<void> | void;
}

export default function start(widget: Widget) {
  const prisma = new PrismaClient();
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
  const res = widget.setup(prisma, logger);
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
        widget.run(prisma, logger);
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
