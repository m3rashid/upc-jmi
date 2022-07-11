import z from 'zod'

export const createCompanySchema = z.object({})

export const updateCompanySchema = createCompanySchema.partial().extend({
  id: z.number().positive(),
})

export const deleteCompanySchema = z.object({
  id: z.number().positive(),
})
