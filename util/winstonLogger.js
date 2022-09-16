//import { createLogger, format, transports } from "winston";

const winston = require("winston");
const createLogger = winston.createLogger;
//const util = require("util");
const format = winston.format;
const transports = winston.transports;

const {
  combine,
  timestamp,
  label,
  prettyPrint,
  printf,
  metadata,
  errors,
  colorize,
} = format;

// const myFormat = printf((info) => {
//   if (info instanceof Error) {
//     return `${info.timestamp} ${info.level}: ${info.message} ${info.stack}`; //[${info.label}]
//   }
//   return `${info.timestamp}  ${info.level}: ${info.message}`;
// });

// const combineMessageAndSplat = () => {
//   return {
//     transform: (info, opts) => {
//       //combine message and args if any

//       if (
//         info[Symbol.for("splat")] &&
//         Array.isArray(info[Symbol.for("splat")])
//       ) {
//         info.more = util.format(...(info[Symbol.for("splat")] || []));
//       }

//       return info;
//     },
//   };
// };

const options = {
  // level: "debug",
  format: combine(
    //label({ label: xxxxx }),
    // colorize(), //does cause error printing levels

    errors({ stack: true }), // <-- use errors format
    timestamp(),
    // metadata(),

    // printf(({ level, message, timestamp, stack, ...meta }) => {
    //   if (stack) {
    //     // print log trace
    //     return `${timestamp} ${level}: ${message} - ${stack}`;
    //   }
    //   return `${timestamp} ${level}: ${message} }`;
    //   // if (typeof info.message === 'object') {
    //   //   info.message = JSON.stringify(info.message, null, 3)
    //   // }
    // })

    //* format.json() // useful and less space consuming than prettyPrint
    //* combineMessageAndSplat(),
    prettyPrint()
    // myFormat
  ),
  //defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new transports.File({
    //   filename: "log.error.log",
    //   level: "error",
    //   maxsize: 5000000, // 5MB
    //   maxFiles: 2,
    // }),
    new transports.File({
      filename: "log.combined.log",
      level: "debug",
      maxsize: 5000000, // 5MB
      maxFiles: 2,
      // format: format.combine(
      //   // Render in one line in your log file.
      //   // If you use prettyPrint() here it will be really
      //   // difficult to exploit your logs files afterwards.
      //   format.json()
      // ),
    }), //REMIND: change to LEVEL TO INFO  in production
  ],
  exceptionHandlers: [
    new transports.File({
      filename: "log.exceptions.log",
      maxsize: 5000000, // 5MB
      maxFiles: 2,
    }),
  ],
};

const logger = createLogger(options);

// if (process.env.NODE_ENV !== "production") {
//   //console.log("logger", logger);

//   logger.debug("Logging initialized debug at", new Date());

//   logger.add(
//     new transports.Console({ level: "silly" }) //{       format: format.simple(),    }
//   );
// } else {
//   logger.debug("Logging initialized at", new Date());
// }

module.exports = logger;
