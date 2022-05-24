import MtechStudent, { IMtechStudent } from '../models/mtech'
import { defaultRouter } from '../../main'

export const router = defaultRouter<IMtechStudent>({
  Model: MtechStudent,
  baseUrl: '/api/students/mtech',
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
