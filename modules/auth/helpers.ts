import { HydratedDocument } from 'mongoose'
import JWT from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import bcrypt from 'bcrypt'

import { IUser } from './model'
import logger from '../utils/logger'

const privateKey = fs.readFileSync(
  path.join(__dirname, './keys/private.pem'),
  'utf8'
)
const publicKey = fs.readFileSync(
  path.join(__dirname, './keys/public.pem'),
  'utf8'
)

export const issueJWT = (user: HydratedDocument<IUser>) => {
  const expiresIn = '1d'
  const payload = { sub: { id: user._id, role: user.role }, iat: Date.now() }
  const signedToken = JWT.sign(payload, privateKey, {
    expiresIn,
    algorithm: 'RS256',
  })
  return {
    token: 'Bearer ' + signedToken,
  }
}

export const verifyJWT = (token: string) => {
  try {
    const extractedToken = token.split(' ')[1]
    const payload = JWT.verify(extractedToken, publicKey, {
      algorithms: ['RS256'],
    })
    return { valid: true, expired: false, payload }
  } catch (err: any) {
    logger.error(JSON.stringify(err))
    return {
      valid: false,
      expired: err.message === 'jwt expired',
      payload: null,
    }
  }
}

const saltRounds = parseInt(process.env.SALT_ROUNDS!)

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

export const comparePassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash)
  return match
}
