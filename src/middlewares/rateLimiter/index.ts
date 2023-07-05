import rateLimit from 'express-rate-limit'
import type { Request, Response } from 'express'

import Log from '../logger'

export const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] as string ?? req.socket.remoteAddress
    Log.error('Too Much Attempts from ' + ip)
    res.status(429).json({ message: 'Too Much Attempts' })
  }
})

export const bruteLimiter = rateLimit({
  windowMs: 5 * 60 * 60 * 1000,
  max: 6,
  standardHeaders: false,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] as string ?? req.socket.remoteAddress
    Log.error('Too many failed login attempts from ' + ip)
    res.status(429).json({ message: 'Too many failed login attempts' })
  }
})
