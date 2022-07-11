import * as trpc from '@trpc/server'

import {
  createCompanySchema,
  deleteCompanySchema,
  updateCompanySchema,
} from 'server/schema/companies'
import { createRouter } from 'server/createRouter'

export const companiesRouter = createRouter()
  .query('get-companies', {
    async resolve({ ctx, input }) {
      try {
        const companies = await (await ctx).prisma.company.findMany({})
        return companies
      } catch (err: any) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'Something went wrong',
        })
      }
    },
  })
  .mutation('create-company', {
    input: createCompanySchema,
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
  .mutation('update-company', {
    input: updateCompanySchema,
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
  .mutation('delete-company', {
    input: deleteCompanySchema,
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
