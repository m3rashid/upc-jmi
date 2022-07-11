import z from 'zod'

export const createPhdStudentSchema = z.object({})

export const updatePhdStudentSchema = createPhdStudentSchema.partial().extend({
  id: z.number().positive(),
})

export const deletePhdStudentSchema = z.object({
  id: z.number().positive(),
})
