import { Request, Response } from 'express'
import mongoose from 'mongoose'

export class DefaultController<T> {
  private Model

  constructor(Model: mongoose.Model<T>) {
    this.Model = Model
  }

  async create(req: Request, res: Response) {
    const newDoc: mongoose.HydratedDocument<T> = new this.Model({ ...req.body })
    const data = await newDoc.save()
    return res.status(201).json({ message: 'Asset created', data })
  }

  async update(req: Request, res: Response) {
    const id = req.params.id
    const data = await this.Model.findByIdAndUpdate(id, {
      $set: { ...req.body },
    })
    return res.status(204).json({ message: 'Asset updated', data })
  }

  async delete(req: Request, res: Response) {
    await this.Model.findByIdAndRemove(req.body.id)
    return res.status(200).json({ message: 'Asset Deleted', data: null })
  }

  async get(req: Request, res: Response) {
    const data = await this.Model.find().lean()
    return res.status(200).json({ message: 'Asset got', data })
  }
}
