import { Request, Response } from 'express'
import { HydratedDocument } from 'mongoose'

import User, { IUser } from './model'
import Otp, { IOtp } from './otp/model'
import { generateOtp } from './otp/helpers'
import logger from '../utils/logger'
import { hashPassword, comparePassword, issueJWT } from './helpers'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) throw new Error('User not found')

  const match = await comparePassword(password, user.password)
  if (!match) throw new Error('Credentials Invalid')

  const { token } = issueJWT(user)
  return res.status(200).json({ token, user: { ...user, password: '' } })
}

export const register = async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (user) throw new Error('Already Present')

  let otpToSend: number
  let emailToSend: string
  const savedOtp = await Otp.findOne({ email })
  if (savedOtp) {
    otpToSend = savedOtp.otp
    emailToSend = savedOtp.email
  } else {
    const dbOtp: HydratedDocument<IOtp> = new Otp({
      email,
      otp: generateOtp(),
    })
    await dbOtp.save()
    otpToSend = dbOtp.otp
    emailToSend = dbOtp.email
  }

  // TODO send mail to the user with the OTP
  logger.info(JSON.stringify({ emailToSend, otpToSend }))
  return res.status(200).json({ message: 'OTP sent to your email' })
}

export const createAccount = async (req: Request, res: Response) => {
  const { email, otp } = req.body

  const dbOtp = await Otp.findOne({ email, otp })
  logger.info(JSON.stringify({ dbOtp, otp: parseInt(otp) }))
  if (!dbOtp || parseInt(otp) !== dbOtp.otp) throw new Error('Invalid OTP')

  const hash: string = await hashPassword(req.body.password)
  const newUser: HydratedDocument<IUser> = new User({
    email,
    password: hash,
    name: req.body.name,
  })
  await newUser.save()
  await Otp.deleteOne({ email })
  const { token } = issueJWT(newUser)
  return res.status(200).json({ token, user: { ...newUser, password: '' } })
}

export const createAdminAccount = async (req: Request, res: Response) => {
  const { email, password, name, adminUid } = req.body
  if (!adminUid || adminUid !== process.env.ADMIN_UID)
    throw new Error('Invalid Admin UID')
  const hash: string = await hashPassword(password)
  const newUser: HydratedDocument<IUser> = new User({
    email,
    password: hash,
    name: name,
    role: 'ADMIN',
  })
  const saved = await newUser.save()
  const { token } = issueJWT(newUser)
  return res.status(200).json({ token, user: { ...saved, password: '' } })
}
