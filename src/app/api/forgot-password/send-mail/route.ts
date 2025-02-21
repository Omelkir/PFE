import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { to, subject, text } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'omelkirrebei22@gmail.com',
      pass: 'rebei202003'
    }
  })

  // try {
  await transporter.sendMail({
    from: 'omelkirrebei22@gmail.com',
    to,
    subject,
    text
  })

  return NextResponse.json({ erreur: false, message: 'Mail sent successfully' })
  //   } catch (error) {
  //     console.error('Error sending email:', error)
  //     return NextResponse.json({ erreur: true, message: 'Failed to send mail' }, { status: 500 })
  //   }
}
