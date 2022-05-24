import Achievement, { IAchievement } from './model'
import { defaultRouter } from '../main'

export const router = defaultRouter<IAchievement>({
  Model: Achievement,
  baseUrl: '/api/achievements',
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
