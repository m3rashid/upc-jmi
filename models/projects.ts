import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IProject {}

const projectSchema = new mongoose.Schema<IProject>({}, { timestamps: true })

export const Project = mongoose.model<IProject>('Project', projectSchema)
