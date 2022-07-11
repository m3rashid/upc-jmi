import bcrypt from 'bcrypt'
import * as trpc from '@trpc/server'

import { createRouter } from 'server/createRouter'
import { createUserSchema } from 'server/schema/user'

export const userRouter = createRouter().mutation('register', {
  input: createUserSchema,
  async resolve({ ctx, input }) {
    const { email, password, confirmPassword, name, admin, adminUid } = input
    try {
      const alreadyUser = await (
        await ctx
      ).prisma.user.findUnique({ where: { email } })
      if (alreadyUser) throw new Error('User already exists')

      if (password !== confirmPassword)
        throw new Error('Passwords do not match')
      if (admin && !adminUid) throw new Error('No Admin UID provided')
      if (adminUid !== process.env.ADMIN_UID)
        throw new Error('Invalid Admin UID')

      const hash = await bcrypt.hash(password, 10)
      const user = await (
        await ctx
      ).prisma.user.create({
        data: { name, email, password: hash, role: admin ? 'ADMIN' : 'USER' },
      })
      return user
    } catch (err: any) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message || 'Something went wrong',
      })
    }
  },
})
