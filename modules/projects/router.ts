import Project, { IProject } from './model'
import { defaultRouter } from '../main'

export const router = defaultRouter<IProject>({
  Model: Project,
  baseUrl: '/api/projects',
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
