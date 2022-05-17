import mongoose from 'mongoose'

/**
 * InComplete model
 */
export interface IEvent {}

const eventSchema = new mongoose.Schema<IEvent>({}, { timestamps: true })

const Event = mongoose.model<IEvent>('Event', eventSchema)
export default Event
