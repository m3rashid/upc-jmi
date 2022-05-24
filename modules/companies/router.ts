import Company, { ICompany } from './model'
import { defaultRouter } from '../main'

export const router = defaultRouter<ICompany>({
  Model: Company,
  baseUrl: '/api/companies',
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
