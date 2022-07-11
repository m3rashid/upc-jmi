import z from 'zod'

export const createBtechStudentSchema = z.object({})

export const updateBtechStudentSchema = createBtechStudentSchema
  .partial()
  .extend({
    id: z.number().positive(),
  })

export const deleteBtechStudentSchema = z.object({
  id: z.number().positive(),
})
