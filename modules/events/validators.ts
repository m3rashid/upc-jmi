import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

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

export const validateCreateEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await createEventSchema.validateAsync({ ...req.body })
  next()
}

export const validateEditEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await editEventSchema.validateAsync({ ...req.body })
  next()
}

export const validateDeleteEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await deleteEventSchema.validateAsync({ ...req.body })
  next()
}
