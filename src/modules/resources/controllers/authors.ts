import type { Request } from 'express'

import type { Author } from '../types/authors'
import { models } from '../../../database'

const getAuthorsByLanguage = async (req: Request): Promise<Author[]> => {
  const { languageId } = req.query
  const authors = await models.Authors.findAll({
    where: { LanguageId: languageId }
  })
  return authors
}

const createAuthors = async (req: Request): Promise<Author> => {
  const newAuthor = await models.Authors.create({
    name: req.body.name,
    CountryId: req.body.countryId,
    LanguageId: req.body.languageId
  }) as Author

  return newAuthor
}

const authorsController = { createAuthors, getAuthorsByLanguage }

export default authorsController
