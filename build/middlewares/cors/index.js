"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Log from '../logger'
// const whitelist: string[] = ['http://localhost:4000', 'http://localhost:3000', 'https://leafy-loader-393200.rj.r.appspot.com', 'https://www.bibliomobil.com', 'https://biblio-pwa.vercel.app', 'https://bibliomobil.com']
//
const corsConfig = {
    origin: function (origin, response) {
        response(null, true);
    }
};
exports.default = corsConfig;
