import type { Request } from 'express'

import type { Book } from '../types/books'
import { models } from '../../../database'

const getBooksByLanguage = async (req: Request): Promise<Book[]> => {
  const { languageId } = req.query
  const books = await models.Books.findAll({
    where: { LanguageId: languageId },
    include: [
      {
        model: models.Authors
      },
      {
        model: models.Countries
      },
      {
        model: models.Genres
      }]
  })
  return books
}

const createBooks = async (req: Request): Promise<Book> => {
  const newBook = await models.Books.create({
    name: req.body.name,
    isFree: req.body.isFree,
    URL: req.body.URL,
    LanguageId: req.body.languageId,
    AuthorId: req.body.authorId,
    CountryId: req.body.countryId,
    image: req.body.image,
    GenreId: req.body.genreId
  }) as Book

  return newBook
}

const booksController = { createBooks, getBooksByLanguage }

export default booksController
