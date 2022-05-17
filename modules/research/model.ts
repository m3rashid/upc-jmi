import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IResearch {}

const researchSchema = new mongoose.Schema<IResearch>({}, { timestamps: true })

const Research = mongoose.model<IResearch>('Research', researchSchema)

export default Research
