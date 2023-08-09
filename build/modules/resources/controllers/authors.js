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
const getAuthorsByLanguage = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { languageId } = req.query;
    const authors = yield database_1.models.Authors.findAll({
        where: { LanguageId: languageId }
    });
    return authors;
});
const createAuthors = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newAuthor = yield database_1.models.Authors.create({
        name: req.body.name,
        CountryId: req.body.countryId,
        LanguageId: req.body.languageId
    });
    return newAuthor;
});
const authorsController = { createAuthors, getAuthorsByLanguage };
exports.default = authorsController;
