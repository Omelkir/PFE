import { requestResetPassword, resetPassword } from '@/app/api-controller/forgot-password'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, token, newPassword } = await req.json()

    if (email) {
      const result = await requestResetPassword(email)
      return NextResponse.json(result)
    }

    if (token && newPassword) {
      const result = await resetPassword(token, newPassword)
      return NextResponse.json(result)
    }

    return NextResponse.json({ erreur: true, message: 'Données invalides' }, { status: 400 })
  } catch (error) {
    console.error('Erreur API reset-password', error)
    return NextResponse.json({ erreur: true, message: 'Erreur interne' }, { status: 500 })
  }
}
