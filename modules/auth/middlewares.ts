import { NextFunction, Request, Response } from 'express'

import { verifyJWT } from './helpers'

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    if (!token) throw new Error('Unauthorized')

    const { valid, expired, payload } = verifyJWT(token)
    if (!valid || expired) throw new Error('Unauthorized')

    console.log(payload?.sub)
    req.user = JSON.parse(payload?.sub as any)
    next()
  } catch (err: any) {
    console.error(err)
    return res.sendStatus(401)
  }
}

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    if (!token) throw new Error('Unauthorized')

    const { valid, expired, payload } = verifyJWT(token)
    if (!valid || expired) throw new Error('Unauthorized')

    const user = payload?.sub as any
    if (user.role !== 'ADMIN') throw new Error('Not an admin')
    req.user = user
    next()
  } catch (err: any) {
    console.error(err)
    return res.sendStatus(401)
  }
}
