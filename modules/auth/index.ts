export {
  login,
  register,
  createAccount,
  createAdminAccount,
  getCurrentuser,
} from './controllers'

export { checkAdmin, checkAuth } from './middlewares'

export {
  validateLogin,
  validateRegister,
  validateCreateAccount,
} from './validators'

import User from './model'
export { User }
export { IUser } from './model'
