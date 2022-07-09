import bcrypt from 'bcrypt'
import { HydratedDocument } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

import connectDb from 'server/models'
import { IUser, User } from 'server/models/user'
import { defaultHandler } from 'server/middlewares/default'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, confirmPassword, name, admin, adminUid } = req.body
  if (!email || !password || !confirmPassword || !name)
    throw new Error('Please fill in all fields')

  if (password !== confirmPassword) throw new Error('Passwords do not match')

  if (admin && !adminUid) throw new Error('Please provide a valid admin uid')

  if (adminUid !== process.env.ADMIN_UID) throw new Error('Invalid admin uid')

  const hashedPassword = await bcrypt.hash(password, 10)
  await connectDb()

  const newUser: HydratedDocument<IUser> = new User({
    name,
    email,
    password: hashedPassword,
    role: admin ? 'ADMIN' : 'USER',
  })
  const saved = await newUser.save()
  return res.status(200).json(saved)
}

export default defaultHandler(handler)
