import z from 'zod'

export const createPlacementSchema = z.object({})

export const updatePlacementSchema = createPlacementSchema.partial().extend({
  id: z.number().positive(),
})

export const deletePlacementSchema = z.object({
  id: z.number().positive(),
})
