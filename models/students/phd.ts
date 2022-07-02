import mongoose from 'mongoose'
import { IMtechStudent } from 'models/students/mtech'

export interface IPhdStudent extends IMtechStudent {
  supervisor: string
  topic: string
  orcId?: string
}

const phdStudentSchema = new mongoose.Schema<IPhdStudent>(
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
    supervisor: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    orcId: {
      type: String,
    },
  },
  { timestamps: true }
)

export const PhdStudent = mongoose.model<IPhdStudent>(
  'PhdStudent',
  phdStudentSchema
)
