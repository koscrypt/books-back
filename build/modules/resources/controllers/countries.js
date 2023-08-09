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
const listCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const countries = yield database_1.models.Countries.findAll();
    return countries;
});
const getCountriesByLanguage = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { languageId } = req.query;
    const countries = yield database_1.models.Countries.findAll({
        where: {
            LanguageId: languageId
        }
    });
    return countries;
});
const createCountries = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newCountry = yield database_1.models.Countries.create({
        name: req.body.name
    });
    return newCountry;
});
const countriesController = { createCountries, listCountries, getCountriesByLanguage };
exports.default = countriesController;
