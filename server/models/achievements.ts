import mongoose from 'mongoose'

export interface IImage {
  url: string
  public_id: string
}

export interface IAchievement {
  title: string
  body: string
  image?: IImage
}

const achievementSchema = new mongoose.Schema<IAchievement>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      url: { type: String },
      public_id: { type: String },
    },
  },
  { timestamps: true }
)

export const Achievement =
  mongoose.models.Achievement ||
  mongoose.model<IAchievement>('Achievement', achievementSchema)
