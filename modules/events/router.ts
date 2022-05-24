import Event, { IEvent } from './model'
import { defaultRouter } from '../main'
import {
  validateCreateEvent,
  validateDeleteEvent,
  validateEditEvent,
} from './validators'

export const router = defaultRouter<IEvent>({
  Model: Event,
  baseUrl: '/api/events',
  createDoc: {
    yes: true,
    validator: validateCreateEvent,
  },
  updateDoc: {
    yes: true,
    validator: validateEditEvent,
  },
  deleteDoc: {
    yes: true,
    validator: validateDeleteEvent,
  },
})
