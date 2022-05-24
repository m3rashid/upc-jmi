import Research, { IResearch } from './model'
import { defaultRouter } from '../main'

export const router = defaultRouter<IResearch>({
  Model: Research,
  baseUrl: '/api/research',
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
