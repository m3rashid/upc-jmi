import mongoose from 'mongoose'

import { IImage } from './achievements'

export interface IEvent {
  title: string
  image: IImage
  tagline: string
  shortIntro: string
  description: string
  venue: String
  dateTime: Date | string
}

const eventSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      url: { type: String },
      public_id: { type: String },
    },
    tagline: {
      type: String,
    },
    shortIntro: {
      type: String,
    },
    description: {
      type: String,
    },
    venue: {
      type: String,
    },
    dateTime: {
      type: String,
    },
  },
  { timestamps: true }
)

export const Event =
  mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema)
