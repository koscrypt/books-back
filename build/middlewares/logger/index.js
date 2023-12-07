"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
// const loggingWinston = new LoggingWinston()
const NODE_ENV = process.env.NODE_ENV;
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const selectTransport = (environment) => {
    if (environment === 'dev') {
        return [
            new winston_1.default.transports.Console(),
            new winston_1.default.transports.File({
                filename: 'logs/error.log',
                level: 'error'
            }),
            new winston_1.default.transports.File({ filename: 'logs/all.log' })
        ];
    }
    return [
        new winston_1.default.transports.Console(),
        // loggingWinston
    ];
};
const transports = selectTransport(NODE_ENV);
const logger = winston_1.default.createLogger({
    level: 'info',
    levels,
    format,
    transports
});
exports.default = logger;
