import express, { Request, Response, NextFunction } from 'express'

import {
  createAccount,
  login,
  register,
  validateCreateAccount,
  validateLogin,
  validateRegister,
} from './modules/auth'

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
router.get('/', (_: Request, res: Response) =>
  res.json({ message: 'Server is OK' })
)

// </endpoint> <rateLimit> <validator> <auth> <controller>

// Auth Routes
router.post('/api/auth/login', validateLogin, login)
router.post('/api/auth/register', validateRegister, register)
router.post('/api/auth/create-account', validateCreateAccount, createAccount)

export default router
