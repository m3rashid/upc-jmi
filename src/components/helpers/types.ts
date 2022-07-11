export type ROLE = 'USER' | 'ADMIN'

export interface IUser {
  id: number
  email: string
  name: string
  role: ROLE
}
