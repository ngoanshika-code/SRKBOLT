import nodemailer from "nodemailer"

type EmailPayload = {
  subject: string
  html: string
}

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  EMAIL_FROM,
  EMAIL_TO,
} = process.env

const isEmailConfigured =
  Boolean(SMTP_HOST) &&
  Boolean(SMTP_PORT) &&
  Boolean(SMTP_USER) &&
  Boolean(SMTP_PASSWORD) &&
  Boolean(EMAIL_FROM)

let transporter: nodemailer.Transporter | null = null

if (isEmailConfigured) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })
} else {
  console.warn(
    "Email notifications are disabled because SMTP environment variables are missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and EMAIL_FROM to enable emails.",
  )
}

export async function sendNotificationEmail({ subject, html }: EmailPayload) {
  if (!transporter) {
    return
  }

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO || "ghodehimanshu453@gmail.com",
      subject,
      html,
    })
  } catch (error) {
    console.error("Failed to send notification email", error)
  }
}
