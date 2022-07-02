import { NextApiRequest, NextApiResponse } from 'next'

import connectDb from 'server/models'
import { defaultHandler } from 'server/middlewares/default'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb()
}

export default defaultHandler(handler)
