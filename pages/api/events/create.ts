import { HydratedDocument } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

import connectDb from 'server/models'
import { Event, IEvent } from 'server/models/events'
import { requireAuth } from 'server/middlewares/auth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, image, tagline, shortIntro, description, venue, dateTime } =
    req.body

  await connectDb()
  if (!title) throw new Error('Title is required')
  // upload image to cloudinary first
  const newEvent: HydratedDocument<IEvent> = new Event({
    title,
    image,
    tagline,
    shortIntro,
    description,
    venue,
    dateTime,
  })
  const saved = await newEvent.save()
  return res.status(200).json(saved)
}

export default requireAuth(handler)
