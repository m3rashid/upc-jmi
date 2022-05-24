import Placement, { IPlacement } from './model'
import { defaultRouter } from '../main'

export const router = defaultRouter<IPlacement>({
  Model: Placement,
  baseUrl: '/api/placements',
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
