import mongoose from 'mongoose'

export interface IUser {
  email: string
  password: string
  name: string
  role: 'USER' | 'ADMIN'
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

export default mongoose.model<IUser>('User', userSchema)
