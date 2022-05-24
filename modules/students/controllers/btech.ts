import BtechStudent, { IBtechStudent } from '../models/btech'
import { defaultRouter } from '../../main'

export const router = defaultRouter<IBtechStudent>({
  Model: BtechStudent,
  baseUrl: '/api/students/btech',
  createDoc: {
    yes: true,
  },
  updateDoc: {
    yes: true,
  },
  deleteDoc: {
    yes: true,
  },
})
