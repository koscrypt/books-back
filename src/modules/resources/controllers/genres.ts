import type { Request } from 'express'

import type { Genre } from '../types/genres'
import { models } from '../../../database'

const getGenresByLanguage = async (req: Request): Promise<Genre[]> => {
  const { languageId } = req.query
  const genres = await models.Genres.findAll({
    where: { LanguageId: languageId }
  })
  return genres
}

const createGenres = async (req: Request): Promise<Genre> => {
  const newGenre = await models.Genres.create({
    name: req.body.name
  }) as Genre

  return newGenre
}

const genresController = { createGenres, getGenresByLanguage }

export default genresController
