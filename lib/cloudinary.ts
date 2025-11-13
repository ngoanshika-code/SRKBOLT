import { v2 as cloudinary } from 'cloudinary'

// Validate environment variables
const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

if (!cloudName || !apiKey || !apiSecret) {
  console.warn('⚠️ Cloudinary environment variables are not set. Image uploads will fail.')
  console.warn('Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file')
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
})

export default cloudinary

export async function uploadImageToCloudinary(file: File): Promise<string> {
  try {
    // Check if Cloudinary is configured
    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error('Cloudinary is not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET environment variables.')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: process.env.CLOUDINARY_FOLDER || 'products',
          resource_type: file.type.startsWith('video/') ? 'video' : 'auto',
          quality: 'auto',
          fetch_format: 'auto',
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error)
            reject(new Error(error.message || 'Failed to upload to Cloudinary'))
          } else {
            resolve(result!.secure_url)
          }
        }
      ).end(buffer)
    })
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    throw error
  }
}

export async function deleteImageFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
    throw error
  }
}
