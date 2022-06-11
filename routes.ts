import express, { Request, Response, NextFunction } from 'express'

import {
  createAccount,
  login,
  register,
  validateCreateAccount,
  validateLogin,
  validateRegister,
} from './modules/auth'
import { createAdminAccount } from './modules/auth/controllers'
import { validateCreateAdmin } from './modules/auth/validators'
import { authRateLimiter } from './modules/utils/rateLimiters'

const router = express.Router()

// Global error checker
export const makeSafe =
  (check: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(check(req, res, next)).catch(next)
  }

// health check
router.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Server is OK' })
})

// </endpoint> <rateLimit> <validator> <auth> <controller>

// Auth Routes
router.post('/api/auth/login', authRateLimiter, validateLogin, makeSafe(login))
router.post('/api/auth/register', validateRegister, makeSafe(register))
router.post(
  '/api/auth/create-account',
  authRateLimiter,
  validateCreateAccount,
  makeSafe(createAccount)
)
router.post(
  '/api/auth/create-admin',
  authRateLimiter,
  validateCreateAdmin,
  makeSafe(createAdminAccount)
)

export default router
