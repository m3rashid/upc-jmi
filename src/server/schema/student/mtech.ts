import z from 'zod'

export const createMtechStudentSchema = z.object({})

export const updateMtechStudentSchema = createMtechStudentSchema
  .partial()
  .extend({
    id: z.number().positive(),
  })

export const deleteMtechStudentSchema = z.object({
  id: z.number().positive(),
})
