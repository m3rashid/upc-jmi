import PhdStudent, { IPhdStudent } from '../models/phd'
import { defaultRouter } from '../../main'

export const router = defaultRouter<IPhdStudent>({
  Model: PhdStudent,
  baseUrl: '/api/students/phd',
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
