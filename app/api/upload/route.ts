import { NextRequest, NextResponse } from 'next/server'
import { uploadImageToCloudinary, CloudinaryAccount } from '@/lib/cloudinary'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const accountParam = formData.get('account') as string
    const account: CloudinaryAccount = (accountParam === 'secondary' ? 'secondary' : 'primary')
    const folder = formData.get('folder') as string | null
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate account parameter if provided
    if (accountParam && accountParam !== 'primary' && accountParam !== 'secondary') {
      return NextResponse.json(
        { error: 'Invalid account parameter. Must be "primary" or "secondary".' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const allowedVideoTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo']
    const allowedTypes = [...allowedImageTypes, ...allowedVideoTypes]
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images and videos are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size (10MB limit for videos, 5MB for images)
    const maxImageSize = 5 * 1024 * 1024 // 5MB
    const maxVideoSize = 10 * 1024 * 1024 // 10MB
    const maxSize = file.type.startsWith('video/') ? maxVideoSize : maxImageSize
    
    if (file.size > maxSize) {
      const sizeLimit = file.type.startsWith('video/') ? '10MB' : '5MB'
      return NextResponse.json(
        { error: `File too large. Maximum size is ${sizeLimit}.` },
        { status: 400 }
      )
    }

    const imageUrl = await uploadImageToCloudinary(file, account, folder || undefined)
    
    return NextResponse.json(
      { 
        message: 'File uploaded successfully',
        imageUrl,
        fileType: file.type.startsWith('video/') ? 'video' : 'image'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error uploading file:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to upload file'
    
    // Provide more helpful error messages
    let userMessage = 'Failed to upload file'
    if (errorMessage.includes('Cloudinary is not configured')) {
      userMessage = 'Cloudinary is not configured. Please set up your Cloudinary credentials in the .env file.'
    } else if (errorMessage.includes('api_key')) {
      userMessage = 'Cloudinary API key is missing. Please check your .env file.'
    } else if (errorMessage.includes('Must supply')) {
      userMessage = 'Cloudinary configuration is incomplete. Please check your .env file for CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.'
    }
    
    return NextResponse.json(
      { error: userMessage, details: errorMessage },
      { status: 500 }
    )
  }
}
