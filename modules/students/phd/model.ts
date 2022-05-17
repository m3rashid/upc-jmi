import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IPhdStudent {}

const phdStudentSchema = new mongoose.Schema<IPhdStudent>(
  {},
  { timestamps: true }
)

const PhdStudent = mongoose.model<IPhdStudent>('PhdStudent', phdStudentSchema)

export default PhdStudent
