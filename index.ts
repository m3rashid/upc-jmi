import { config } from 'dotenv'
config()
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import logger from './modules/utils/logger'
import { appConfig } from './modules/appConfig'
import { errorHandler, globalErrorHandler } from './modules/errors'

const app = express()
app.use(helmet())
app.use(xss())
app.use(cors(appConfig.corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.set('debug', process.env.NODE_ENV !== 'production')

app.use(routes)
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
    logger.info(`Server ready on port:${port}`)
    logger.info('Mongoose is connected')
  } catch (err) {
    logger.error(JSON.stringify(err))
    logger.error('MongoDB connection error')
    process.exit(1)
  }
})
