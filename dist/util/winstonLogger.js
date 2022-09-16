"use strict";
const winston = require("winston");
const createLogger = winston.createLogger;
const format = winston.format;
const transports = winston.transports;
const { combine, timestamp, label, prettyPrint, printf, metadata, errors, colorize, } = format;
const options = {
    format: combine(errors({ stack: true }), timestamp(), prettyPrint()),
    transports: [
        new transports.File({
            filename: "log.combined.log",
            level: "debug",
            maxsize: 5000000,
            maxFiles: 2,
        }),
    ],
    exceptionHandlers: [
        new transports.File({
            filename: "log.exceptions.log",
            maxsize: 5000000,
            maxFiles: 2,
        }),
    ],
};
const logger = createLogger(options);
module.exports = logger;
//# sourceMappingURL=winstonLogger.js.map