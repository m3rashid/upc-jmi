import * as trpc from '@trpc/server'

import {
  createResearchSchema,
  deleteResearchSchema,
  updateResearchSchema,
} from 'server/schema/research'
import { createRouter } from 'server/createRouter'

export const researchRouter = createRouter()
  .query('get-research', {
    async resolve({ ctx, input }) {
      try {
        const research = await (await ctx).prisma.research.findMany({})
        return research
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('create-research', {
    input: createResearchSchema,
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
  .mutation('update-research', {
    input: updateResearchSchema,
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
  .mutation('delete-research', {
    input: deleteResearchSchema,
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
