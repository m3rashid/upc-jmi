import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IPlacement {}

const placementSchema = new mongoose.Schema<IPlacement>(
  {},
  { timestamps: true }
)

const Placement = mongoose.model<IPlacement>('Placement', placementSchema)
export default Placement
