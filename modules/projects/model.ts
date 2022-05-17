import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IProject {}

const projectSchema = new mongoose.Schema<IProject>({}, { timestamps: true })

const Project = mongoose.model<IProject>('Project', projectSchema)

export default Project
