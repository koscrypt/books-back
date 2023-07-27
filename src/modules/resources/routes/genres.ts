import { Router, type Request, type Response } from 'express'

import Log from '../../../middlewares/logger'

import genresController from '../controllers/genres'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const genres = await genresController.getGenresByLanguage(req)
    res.status(200).json(genres)
  } catch (error) {
    Log.error(error)
    res.status(500).json(error)
  }
}
)

router.post('/', async (req: Request, res: Response) => {
  try {
    const newGenre = await genresController.createGenres(req)
    res.status(201).json(newGenre)
  } catch (error) {
    Log.error(error)
    res.status(500).json(error)
  }
}
)

export default router
