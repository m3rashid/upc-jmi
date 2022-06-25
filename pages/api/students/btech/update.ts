import { NextApiRequest, NextApiResponse } from 'next'
import connectDb from '../../../../models'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDb()
  } catch (err: any) {
    console.log(err)
    return res.status(500).json(err.message || 'Internal Server error')
  }
}

export default handler
