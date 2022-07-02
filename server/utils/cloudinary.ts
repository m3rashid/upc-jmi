import path from 'path'
import sharp from 'sharp'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const deleteFromCloudinary = async (public_id?: string) => {
  if (!public_id) {
    return
  }
  await cloudinary.uploader.destroy(public_id)
}

export const cloudinaryInitial = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`

export const uploadFiles = async (file: any) => {
  let filePath = path.resolve(__dirname, `../uploads/resized/${file.filename}`)
  await sharp(file.path).resize({ width: 700 }).toFile(filePath)
  return await cloudinary.uploader.upload(filePath)
}
