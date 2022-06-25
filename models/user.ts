import mongoose from 'mongoose'

export type ROLE = 'USER' | 'ADMIN'

export interface IUser {
  email: string
  password: string
  name: string
  role: ROLE
}

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      trim: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
      trim: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.model<IUser>('User', userSchema)
