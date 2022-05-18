import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
})

const createAccount = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref('password'),
  name: Joi.string().min(3).max(30).required(),
  otp: Joi.number().integer().min(0).max(999999).required(),
}).with('password', 'confirmPassword')

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await loginSchema.validateAsync({ ...req.body })
  next()
}

export const validateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await registerSchema.validateAsync({ ...req.body })
  next()
}

export const validateCreateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await createAccount.validateAsync({ ...req.body })
  next()
}
