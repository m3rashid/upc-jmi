import * as trpc from '@trpc/server'

import {
  createPlacementSchema,
  deletePlacementSchema,
  updatePlacementSchema,
} from 'server/schema/placements'
import { createRouter } from 'server/createRouter'

export const placementsRouter = createRouter()
  .query('get-placements', {
    async resolve({ ctx, input }) {
      try {
        const placements = await (await ctx).prisma.placement.findMany({})
        return placements
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('create-placement', {
    input: createPlacementSchema,
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
  .mutation('update-placement', {
    input: updatePlacementSchema,
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
  .mutation('delete-placement', {
    input: deletePlacementSchema,
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
