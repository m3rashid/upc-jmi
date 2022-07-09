import { ObjectId } from 'mongoose'

import { ROLE } from 'server/models/user'

export interface IUser {
  id: ObjectId
  email: string
  name: string
  role: ROLE
}
