import bcrypt from 'bcrypt'
import * as trpc from '@trpc/server'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

import { createRouter } from 'server/createRouter'
import { createUserSchema } from 'server/schema/user'

export const userRouter = createRouter().mutation('register-user', {
  input: createUserSchema,
  async resolve({ ctx, input }) {
    const { email, password, confirmPassword, name, admin, adminUid } = input
    try {
      if (password !== confirmPassword)
        throw new Error('Passwords do not match')

      if (admin && !adminUid)
        throw new Error('Please provide a valid admin uid')

      if (adminUid !== process.env.ADMIN_UID)
        throw new Error('Invalid admin uid')

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await (
        await ctx
      ).prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: admin ? 'ADMIN' : 'USER',
        },
      })
      return user
    } catch (err: any) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new trpc.TRPCError({
            code: 'CONFLICT',
            message: 'User already exists',
          })
        }
      }
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message || 'Something went wrong',
      })
    }
  },
})
