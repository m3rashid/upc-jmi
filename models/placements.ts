import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IPlacement {}

const placementSchema = new mongoose.Schema<IPlacement>(
  {},
  { timestamps: true }
)

export const Placement =
  mongoose.models.Placement ||
  mongoose.model<IPlacement>('Placement', placementSchema)
