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
const getGenresByLanguage = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { languageId } = req.query;
    const genres = yield database_1.models.Genres.findAll({
        where: { LanguageId: languageId }
    });
    return genres;
});
const createGenres = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newGenre = yield database_1.models.Genres.create({
        name: req.body.name
    });
    return newGenre;
});
const genresController = { createGenres, getGenresByLanguage };
exports.default = genresController;
