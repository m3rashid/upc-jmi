import { config } from 'dotenv'
config()
import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import xss from 'xss-clean'
import helmet from 'helmet'

import routes from './routes'
import logger from './modules/utils/logger'
// import { errorHandler } from './middlewares/errors'

const appConfig = {
  corsOptions: {
    origin: 'http://localhost:3000',
    // process.env.NODE_ENV === 'production'
    //   ? 'https://something.netlify.app'
    //   : 'http://localhost:3000',
    optionsSuccessStatus: 200,
  },
  mongo: {
    connectionString: 'mongodb://localhost/upcjmi',
    // process.env.NODE_ENV === 'production'
    //   ? `mongodb://localhost/upcjmi`
    //   : 'mongodb://localhost/upcjmi',
  },
}

const app = express()
app.use(helmet())
app.use(xss())
app.use(cors(appConfig.corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.set('debug', process.env.NODE_ENV !== 'production')
app.use(routes)

// Global Error Handlers
// app.use((err: any, req: Request, res: Response, _: NextFunction) => {
//   logger.error(JSON.stringify(err))
//   return res.status(500).json({
//     message:
//       process.env.NODE_ENV !== 'production'
//         ? JSON.stringify(err.message) || 'Internal Server Error'
//         : 'Internal Server Error',
//   })
// })

// process.on('uncaughtException', (error: Error) => {
//   errorHandler.handleError(error)
//   if (!errorHandler.isTrustedError(error)) {
//     process.exit(1)
//   }
// })

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
