import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IResearch {}

const researchSchema = new mongoose.Schema<IResearch>({}, { timestamps: true })

export const Research =
  mongoose.models.Research ||
  mongoose.model<IResearch>('Research', researchSchema)
