import { Router, type Request, type Response } from 'express'

import Log from '../../../middlewares/logger'

import authorsController from '../controllers/authors'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const authors = await authorsController.getAuthorsByLanguage(req)
    res.status(200).json(authors)
  } catch (error) {
    Log.error(error)
    res.status(500).json(error)
  }
}
)

router.post('/', async (req: Request, res: Response) => {
  try {
    const newAuthor = await authorsController.createAuthors(req)
    res.status(201).json(newAuthor)
  } catch (error) {
    Log.error(error)
    res.status(500).json(error)
  }
}
)

export default router
