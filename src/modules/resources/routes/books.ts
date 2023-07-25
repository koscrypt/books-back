import { Router, type Request, type Response } from 'express'

import Log from '../../../middlewares/logger'

import booksController from '../controllers/books'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const books = await booksController.getBooksByLanguage(req)
    res.status(200).json(books)
  } catch (error) {
    Log.error(error)
    res.status(400).json({ message: 'Error getting books' })
  }
})

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const newBook = await booksController.createBooks(req)
    res.status(201).json(newBook)
  } catch (error) {
    Log.error(error)
    res.status(400).json({ message: 'Error creating book' })
  }
})

export default router
