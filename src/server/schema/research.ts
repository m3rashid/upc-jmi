import z from 'zod'

export const createResearchSchema = z.object({})

export const updateResearchSchema = createResearchSchema.partial().extend({
  id: z.number().positive(),
})

export const deleteResearchSchema = z.object({
  id: z.number().positive(),
})
