import { config } from 'dotenv'
config()

import cors from 'cors'
import xss from 'xss-clean'
import helmet from 'helmet'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import { eventsRouter } from './modules/events'
import { appConfig } from './modules/appConfig'
import { projectsRouter } from './modules/projects'
import { researchRouter } from './modules/research'
import { companiesRouter } from './modules/companies'
import { placementsRouter } from './modules/placements'
import { achievementsRouter } from './modules/achievements'
import { errorHandler, globalErrorHandler } from './modules/errors'
import { btechRouter, mtechRouter, phdRouter } from './modules/students'

const app = express()
app.use(helmet())
app.use(xss())
app.use(cors(appConfig.corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.set('debug', process.env.NODE_ENV !== 'production')

app.use(routes)
app.use(eventsRouter)
app.use(achievementsRouter)
app.use(companiesRouter)
app.use(placementsRouter)
app.use(projectsRouter)
app.use(researchRouter)
app.use(btechRouter)
app.use(mtechRouter)
app.use(phdRouter)

app.use(globalErrorHandler)
process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error)
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1)
  }
})

const port = process.env.PORT || 5000
app.listen(port, async () => {
  try {
    await mongoose.connect(appConfig.mongo.connectionString)
    console.log(`Server ready on port:${port}`)
    console.log('Mongoose is connected')
  } catch (err) {
    console.error(JSON.stringify(err))
    console.error('MongoDB connection error')
    process.exit(1)
  }
})
