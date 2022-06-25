import mongoose from 'mongoose'

export interface IAchievement {
  title: string
  body?: string
  link?: string
}

export interface IBtechStudent {
  name: string
  rollNo: string
  mailId: string
  githubUrl?: string
  linkedinUrl?: string
  tech?: string[]
  websiteLink?: string
  achievements?: IAchievement[]
}

const btechStudentSchema = new mongoose.Schema<IBtechStudent>(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    mailId: {
      type: String,
      required: true,
    },
    githubUrl: String,
    linkedinUrl: String,
    tech: [String],
    websiteLink: String,
    achievements: [
      {
        title: String,
        body: String,
        link: String,
      },
    ],
  },
  { timestamps: true }
)

export const BtechStudent = mongoose.model<IBtechStudent>(
  'BtechStudent',
  btechStudentSchema
)
