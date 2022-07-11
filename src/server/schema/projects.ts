import z from 'zod'

export const createProjectSchema = z.object({})

export const updateProjectSchema = createProjectSchema.partial().extend({
  id: z.number().positive(),
})

export const deleteProjectSchema = z.object({
  id: z.number().positive(),
})
