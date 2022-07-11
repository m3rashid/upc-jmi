import z from 'zod'

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  name: z.string().min(5),
  admin: z.boolean().default(false),
  adminUid: z.string().nullable(),
})
