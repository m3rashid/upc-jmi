import { NextFunction, Request, Response } from 'express'

import logger from '../utils/logger'
import { verifyJWT } from './helpers'

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.send(401)
  }
  const { valid, expired, payload } = verifyJWT(token)
  if (!valid || expired) {
    return res.send(401)
  }
  // sub: { id: user._id, role: user.role }
  logger.info(payload?.sub)
  req.user = payload?.sub
  next()
}

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.send(401)
  }
  const { valid, expired, payload } = verifyJWT(token)
  if (!valid || expired) {
    return res.send(401)
  }
  logger.info(payload?.sub)
  req.user = payload?.sub

  // add additional checks for admin
  next()
}
