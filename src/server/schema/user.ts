import z from 'zod'

const minimum_password_length = 5

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(minimum_password_length),
  confirmPassword: z.string().min(minimum_password_length),
  name: z.string().min(5),
  admin: z.boolean().default(false),
  adminUid: z.string().nullish(),
})

export type ICreateUser = z.TypeOf<typeof createUserSchema>
