import { NextFunction, Request, Response } from 'express'

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  console.error(err)
  return res.status(500).json({
    message:
      process.env.NODE_ENV !== 'production'
        ? err.message
        : 'Internal Server Error',
  })
}

export const safeUse =
  (check: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(check(req, res, next)).catch(next)
  }
