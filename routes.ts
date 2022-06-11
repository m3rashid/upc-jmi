import express, { Request, Response, NextFunction } from 'express'

import {
  createAccount,
  login,
  register,
  validateCreateAccount,
  validateLogin,
  validateRegister,
  createAdminAccount,
  getCurrentuser,
  checkAdmin,
  checkAuth,
} from './modules/auth'
import { validateCreateAdmin } from './modules/auth/validators'
import {
  authRateLimiter,
  regularRateLimiter,
} from './modules/utils/rateLimiters'

const router = express.Router()

// Global error checker
export const makeSafe =
  (check: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(check(req, res, next)).catch(next)
  }

// health check
router.get('/', regularRateLimiter, (_: Request, res: Response) => {
  res.json({ message: 'Server is OK' })
})

// </endpoint> <rateLimit> <validator> <auth> <controller>

// Auth Routes
router.post(
  '/api/auth/login',
  authRateLimiter,
  makeSafe(validateLogin),
  makeSafe(login)
)
router.post(
  '/api/auth/register',
  makeSafe(validateRegister),
  makeSafe(register)
)
router.post(
  '/api/auth/create-account',
  authRateLimiter,
  makeSafe(validateCreateAccount),
  makeSafe(createAccount)
)
router.post(
  '/api/auth/create-admin',
  authRateLimiter,
  makeSafe(validateCreateAdmin),
  makeSafe(createAdminAccount)
)
router.post(
  '/api/auth/get-admin',
  regularRateLimiter,
  checkAdmin,
  makeSafe(getCurrentuser)
)
router.post(
  '/api/auth/get-user',
  regularRateLimiter,
  checkAuth,
  makeSafe(getCurrentuser)
)

export default router
