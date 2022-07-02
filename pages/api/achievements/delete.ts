import { NextApiRequest, NextApiResponse } from 'next'

import connectDb from 'models'
import { requireAuth } from 'middlewares/auth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb()
}

export default requireAuth(handler)
