import { NextRequest, NextResponse } from 'next/server'
import { verifierUtilisateur } from '@/app/api-controller/login'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = await verifierUtilisateur(body)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Erreur lors du traitement de la requête', error)
    return NextResponse.json({ erreur: true, message: 'Erreur lors du traitement de la requête' }, { status: 500 })
  }
}
