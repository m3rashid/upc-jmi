import Joi from 'joi'

import { initValidator } from '../utils/validator'

const createEventSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  tagline: Joi.string(),
  shortIntro: Joi.string().required(),
  description: Joi.string().required(),
  venue: Joi.string().required(),
  dateTime: Joi.string().required(),
})

const editEventSchema = createEventSchema.keys({})

const deleteEventSchema = Joi.object({
  eventId: Joi.string().required(),
})

export const validateCreateEvent = initValidator(createEventSchema)
export const validateEditEvent = initValidator(editEventSchema)
export const validateDeleteEvent = initValidator(deleteEventSchema)
