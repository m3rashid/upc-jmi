import z from 'zod'

export const createAchievementSchema = z.object({})

export const updateAchievementSchema = createAchievementSchema
  .partial()
  .extend({
    id: z.number().positive(),
  })

export const deleteAchievementSchema = z.object({
  id: z.number().positive(),
})
