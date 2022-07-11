import * as trpc from '@trpc/server'

import {
  createProjectSchema,
  deleteProjectSchema,
  updateProjectSchema,
} from 'server/schema/projects'
import { createRouter } from 'server/createRouter'

export const projectsRouter = createRouter()
  .query('get-projects', {
    async resolve({ ctx, input }) {
      try {
        const projects = await (await ctx).prisma.project.findMany({})
        return projects
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('create-project', {
    input: createProjectSchema,
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
  .mutation('update-project', {
    input: updateProjectSchema,
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
  .mutation('delete-project', {
    input: deleteProjectSchema,
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
