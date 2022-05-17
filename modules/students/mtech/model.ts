import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IMtechStudent {}

const mtechStudentSchema = new mongoose.Schema<IMtechStudent>(
  {},
  { timestamps: true }
)

const MtechStudent = mongoose.model<IMtechStudent>(
  'MtechStudent',
  mtechStudentSchema
)

export default MtechStudent
