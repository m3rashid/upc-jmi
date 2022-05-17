import express, { Request, Response, NextFunction } from 'express'
// import {
//   authRateLimiter,
//   regularRateLimiter,
// } from './modules/utils/rateLimiters'

const router = express.Router()

// Global error checker
export const use =
  (check: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(check(req, res, next)).catch(next)
  }

// health check
router.get('/', (_: Request, res: Response) => {
  return res.json({ message: 'Server is OK' })
})

// </endpoint> <rateLimit> <validator> <auth> <controller>

export default router
