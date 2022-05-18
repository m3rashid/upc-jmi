import express, { Request, Response, NextFunction } from 'express'

import {
  createAccount,
  login,
  register,
  validateCreateAccount,
  validateLogin,
  validateRegister,
} from './modules/auth'
import {
  createEvent,
  deleteEvent,
  editEvent,
  validateCreateEvent,
  validateDeleteEvent,
  validateEditEvent,
} from './modules/events'
import {
  addBtechStudent,
  addMtechStudent,
  addPhdStudent,
  deleteBtechStudent,
  deleteMtechStudent,
  deletePhdStudent,
  editBtechStudent,
  editMtechStudent,
  editPhdStudent,
} from './modules/students'
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

// Auth Routes
router.post('/api/auth/login', validateLogin, login)
router.post('/api/auth/register', validateRegister, register)
router.post('/api/auth/create-account', validateCreateAccount, createAccount)

// Event Routes
router.post('/api/events/create', validateCreateEvent, createEvent)
router.post('/api/events/edit', validateEditEvent, editEvent)
router.post('/api/events/delete', validateDeleteEvent, deleteEvent)

// Student Routes
router.post('/api/students/btech/add', addBtechStudent)
router.post('/api/students/btech/edit', editBtechStudent)
router.post('/api/students/btech/delete', deleteBtechStudent)

router.post('/api/students/mtech/add', addMtechStudent)
router.post('/api/students/mtech/edit', editMtechStudent)
router.post('/api/students/mtech/delete', deleteMtechStudent)

router.post('/api/students/phd/add', addPhdStudent)
router.post('/api/students/phd/edit', editPhdStudent)
router.post('/api/students/phd/delete', deletePhdStudent)

export default router
