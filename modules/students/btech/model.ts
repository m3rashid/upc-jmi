import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IBtechStudent {}

const btechStudentSchema = new mongoose.Schema<IBtechStudent>(
  {},
  { timestamps: true }
)

const BtechStudent = mongoose.model<IBtechStudent>(
  'BtechStudent',
  btechStudentSchema
)

export default BtechStudent
