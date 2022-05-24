import express, { NextFunction, Request, Response } from 'express'

import { DefaultController } from './controller'
import { checkAdmin, checkAuth } from '../auth'
import { safeUse } from '../errors'
import { IRouter } from './interfaces'

const router = express.Router()

const useMiddleware =
  (condition: any) => (req: Request, res: Response, next: NextFunction) => {
    if (!condition) {
      return next()
    }
    return safeUse(condition(req, res, next))
  }

export function defaultRouter<T>({
  Model,
  baseUrl,
  createDoc,
  updateDoc,
  deleteDoc,
}: IRouter<T>) {
  const controller = new DefaultController(Model)

  router.post(
    `${baseUrl}`,
    safeUse((req: Request, res: Response) => {
      controller.get(req, res)
    })
  )

  if (createDoc.yes) {
    router.post(
      `${baseUrl}/create`,
      checkAdmin,
      useMiddleware(createDoc.validator),
      useMiddleware(createDoc.preAction),
      safeUse((req: Request, res: Response) => {
        controller.create(req, res)
      })
    )
  }

  if (updateDoc.yes) {
    router.post(
      `${baseUrl}/update`,
      checkAdmin,
      useMiddleware(updateDoc.validator),
      useMiddleware(updateDoc.preAction),
      safeUse((req: Request, res: Response) => {
        controller.update(req, res)
      })
    )
  }

  if (deleteDoc.yes) {
    router.post(
      `${baseUrl}/delete`,
      checkAdmin,
      useMiddleware(deleteDoc.validator),
      useMiddleware(deleteDoc.preAction),
      safeUse((req: Request, res: Response) => {
        controller.delete(req, res)
      })
    )
  }

  return router
}
