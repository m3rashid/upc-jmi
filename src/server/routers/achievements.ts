import * as trpc from '@trpc/server'

import {
  createAchievementSchema,
  deleteAchievementSchema,
  updateAchievementSchema,
} from 'server/schema/achievements'
import { createRouter } from 'server/createRouter'

export const achievementRouter = createRouter()
  .query('get-achievements', {
    async resolve({ ctx, input }) {
      try {
        const achievements = await (await ctx).prisma.achievement.findMany({})
        return achievements
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('create-achievement', {
    input: createAchievementSchema,
    async resolve({ ctx, input }) {
      try {
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('update-achievement', {
    input: updateAchievementSchema,
    async resolve({ ctx, input }) {
      try {
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('delete-achievement', {
    input: deleteAchievementSchema,
    async resolve({ ctx, input }) {
      try {
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
