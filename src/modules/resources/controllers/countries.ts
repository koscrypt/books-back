import type { Request } from 'express'

import type { Country } from '../types/countries'
import { models } from '../../../database'

const listCountries = async (): Promise<Country[]> => {
  const countries = await models.Countries.findAll()
  return countries
}

const getCountriesByLanguage = async (req: Request): Promise<Country[]> => {
  const { languageId } = req.query
  const countries = await models.Countries.findAll({
    where: {
      LanguageId: languageId
    }
  })
  return countries
}

const createCountries = async (req: Request): Promise<Country> => {
  const newCountry = await models.Countries.create({
    name: req.body.name
  }) as Country

  return newCountry
}

const countriesController = { createCountries, listCountries, getCountriesByLanguage }

export default countriesController
