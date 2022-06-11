import Joi from 'joi'

import { initValidator } from '../utils/validator'

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

const createAdmin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref('password'),
  name: Joi.string().min(3).max(30).required(),
  adminUid: Joi.string().required(),
})

export const validateLogin = initValidator(loginSchema)
export const validateRegister = initValidator(registerSchema)
export const validateCreateAccount = initValidator(createAccount)
export const validateCreateAdmin = initValidator(createAdmin)
