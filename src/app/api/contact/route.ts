import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

// Email configuration - will be updated with actual server data
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'mail.filakaros.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info@filakaros.com',
    pass: process.env.SMTP_PASS || '', // Password will be added from environment variables
  },
}

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: EMAIL_CONFIG.host,
    port: EMAIL_CONFIG.port,
    secure: EMAIL_CONFIG.secure,
    auth: EMAIL_CONFIG.auth,
    tls: {
      rejectUnauthorized: false // For servers with self-signed certificates
    }
  })
}

// Validate contact form data
interface ContactFormData {
  name: string
  email: string
  subject: string
  type: string
  message: string
}

const validateContactForm = (data: ContactFormData) => {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters long')
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!data.subject || data.subject.trim().length < 5) {
    errors.push('Subject is required and must be at least 5 characters long')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters long')
  }

  return errors
}

// POST handler for sending messages
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData
    const { name, email, subject, type, message } = body

    // Validate form data
    const validationErrors = validateContactForm(body)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation errors found',
          errors: validationErrors
        },
        { status: 400 }
      )
    }
    
    // Create transporter
    const transporter = createTransporter()

    // Define inquiry types
    const inquiryTypes = {
      general: 'General Inquiry',
      partnership: 'Partnership',
      support: 'Technical Support',
      media: 'Media & Press'
    }

    const inquiryType = inquiryTypes[type as keyof typeof inquiryTypes] || 'General Inquiry'
    
    // Setup email content
    const mailOptions = {
      from: `"${name}" <${EMAIL_CONFIG.auth.user}>`,
      to: EMAIL_CONFIG.auth.user,
      replyTo: email,
      subject: `[${inquiryType}] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #6366f1; text-align: center; margin-bottom: 30px;">
              New Message from Filakaros Website
            </h2>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Sender Information:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>

            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="color: #666; font-size: 14px;">
                This message was sent from the contact form on Filakaros website
              </p>
              <p style="color: #666; font-size: 12px;">
                Date: ${new Date().toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Message from Filakaros Website

        Sender Information:
        Name: ${name}
        Email: ${email}
        Inquiry Type: ${inquiryType}
        Subject: ${subject}

        Message:
        ${message}

        Date: ${new Date().toLocaleString('en-US')}
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to sender
    const confirmationMail = {
      from: EMAIL_CONFIG.auth.user,
      to: email,
      subject: 'Message Received - Filakaros',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #6366f1; text-align: center; margin-bottom: 30px;">
              Thank You for Contacting Us
            </h2>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Dear ${name},
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out to the Filakaros team. We have received your message regarding "${subject}" and will get back to you as soon as possible.
            </p>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message Summary:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p><strong>Date Sent:</strong> ${new Date().toLocaleString('en-US')}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              In the meantime, you can follow our latest news and updates through our social channels:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://t.me/ikarosworld" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #0088cc; color: white; text-decoration: none; border-radius: 5px;">Telegram</a>
              <a href="https://x.com/IkarosWorld1975" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #1da1f2; color: white; text-decoration: none; border-radius: 5px;">Twitter</a>
              <a href="https://www.facebook.com/share/1Yv6gECr65/" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #1877f2; color: white; text-decoration: none; border-radius: 5px;">Facebook</a>
              <a href="https://www.instagram.com/ikaros.worlds" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #e4405f; color: white; text-decoration: none; border-radius: 5px;">Instagram</a>
            </div>

            <p style="font-size: 14px; color: #666; text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              Best regards,<br>
              Filakaros Team
            </p>
          </div>
        </div>
      `
    }
    
    await transporter.sendMail(confirmationMail)
    
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    })

  } catch (error) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while sending your message. Please try again later.'
      },
      { status: 500 }
    )
  }
}

// GET handler for testing API status
export async function GET() {
  return NextResponse.json({
    status: 'active',
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  })
}
