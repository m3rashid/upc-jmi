import logger from '../utils/logger'
import { BaseError } from './errors'

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    logger.error(err)
    // await sendMailToAdminIfCritical()
    // await sendEventsToSentry()
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational
    }
    return false
  }
}

export const errorHandler = new ErrorHandler()
