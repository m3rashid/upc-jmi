import { NextApiRequest, NextApiResponse } from 'next'

import connectDb from 'server/models'
import { requireAuth } from 'server/middlewares/auth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb()
}

export default requireAuth(handler)
