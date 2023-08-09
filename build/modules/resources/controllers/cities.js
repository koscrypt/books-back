"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../../database");
const listCities = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { countryId } = req.query;
    const cities = yield database_1.models.Cities.findAll({
        where: { CountryId: countryId }
    });
    return cities;
});
const createCities = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newCity = yield database_1.models.Cities.create({
        name: req.body.name,
        CountryId: req.body.countryId
    });
    return newCity;
});
const citiesController = { createCities, listCities };
exports.default = citiesController;
