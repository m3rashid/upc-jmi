import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IAchievement {
  title: string
  body: string
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
  },
  { timestamps: true }
)

export const Achievement =
  mongoose.models.Achievement ||
  mongoose.model<IAchievement>('Achievement', achievementSchema)
