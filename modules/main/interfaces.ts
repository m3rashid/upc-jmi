import mongoose from 'mongoose'

export interface IAdminRouteTypes {
  yes: boolean
  validator?: any
  preAction?: any
}

export interface IRouter<T> {
  Model: mongoose.Model<T>
  baseUrl: string
  createDoc: IAdminRouteTypes
  updateDoc: IAdminRouteTypes
  deleteDoc: IAdminRouteTypes
}
