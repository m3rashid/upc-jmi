import { NextFunction, Request, Response } from 'express'

import logger from '../utils/logger'

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  logger.error(JSON.stringify(err))
  return res.status(500).json({
    message:
      process.env.NODE_ENV !== 'production'
        ? JSON.stringify(err.message) || 'Internal Server Error'
        : 'Internal Server Error',
  })
}

export const safeUse =
  (check: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(check(req, res, next)).catch(next)
  }
