import { NextApiRequest, NextApiResponse } from 'next'

import { defaultHandler } from 'middlewares/default'

import connectDb from 'models'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, confirmPassword, name, admin, adminUid } = req.body
  if (!email || !password || !confirmPassword || !name) {
    throw new Error('Please fill in all fields')
  }
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match')
  }
  if (admin && !adminUid) {
    throw new Error('Please provide a valid admin uid')
  }
  if (adminUid !== process.env.ADMIN_UID) {
    throw new Error('Invalid admin uid')
  }
  await connectDb()
}

export default defaultHandler(handler)
