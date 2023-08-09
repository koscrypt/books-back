"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const whitelist = ['http://localhost:4000', 'http://localhost:3000', 'https://leafy-loader-393200.rj.r.appspot.com', 'http://localhost:4200', 'https://biblio-pwa.vercel.app'];
const corsConfig = {
    origin: function (origin, response) {
        if (whitelist.includes(origin) || origin === undefined) {
            response(null, true);
        }
        else {
            logger_1.default.error('Origin not allowed ' + origin);
            response('Origin not allowed');
        }
    }
};
exports.default = corsConfig;
