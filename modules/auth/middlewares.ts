import { NextFunction, Request, Response } from 'express'

import logger from '../utils/logger'
import { verifyJWT } from './helpers'

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    if (!token) throw new Error('Unauthorized')

    const { valid, expired, payload } = verifyJWT(token)
    if (!valid || expired) throw new Error('Unauthorized')

    logger.info(payload?.sub)
    req.user = JSON.parse(payload?.sub as any)
    next()
  } catch (err) {
    logger.error(JSON.stringify(err))
    return res.send(401)
  }
}

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    if (!token) throw new Error('Unauthorized')

    const { valid, expired, payload } = verifyJWT(token)
    if (!valid || expired) throw new Error('Unauthorized')

    const user = JSON.parse(payload?.sub as any)
    if (user.role !== 'ADMIN') throw new Error('Not an admin')
    logger.info(payload?.sub)
    req.user = JSON.parse(payload?.sub as any)
    next()
  } catch (err) {
    logger.error(JSON.stringify(err))
    return res.send(401)
  }
}
