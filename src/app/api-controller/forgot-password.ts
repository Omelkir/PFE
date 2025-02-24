import pool from '@/utils/connexion'
import bcrypt from 'bcrypt'

export const forgotpass = async (req: any) => {
  try {
    const json: any = req

    const slq = `UPDATE  medi_connect.compte SET token = '${json.token}'' where email='${json.email}'`

    return { erreur: false, data: true }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}

// import pool from '@/utils/connexion'
// import crypto from 'crypto'
// import { hash } from 'bcrypt'

// export const requestResetPassword = async (email: string) => {
//   try {
//     const [rows]: any = await pool.query(`SELECT id FROM medi_connect.compte WHERE email = ?`, [email])

//     if (rows.length === 0) {
//       return { erreur: true, message: 'Email non trouvé' }
//     }

//     const token = crypto.randomBytes(32).toString('hex')
//     const expiration = new Date(Date.now() + 3600000) // 1 heure

//     await pool.query(`UPDATE medi_connect.compte SET reset_token = ?, reset_expires = ? WHERE email = ?`, [
//       token,
//       expiration,
//       email
//     ])

//     // Ici, envoyez le token par email (implémentez une fonction d'envoi d'email)
//     console.log(`Token de réinitialisation : ${token}`)

//     return { erreur: false, message: 'Un email avec un lien de réinitialisation a été envoyé.' }
//   } catch (error) {
//     console.error('Erreur lors de la demande de réinitialisation', error)
//     return { erreur: true, message: 'Erreur interne' }
//   }
// }

// export const resetPassword = async (token: string, newPassword: string) => {
//   try {
//     const [rows]: any = await pool.query(
//       `SELECT id FROM medi_connect.compte WHERE reset_token = ? AND reset_expires > NOW()`,
//       [token]
//     )

//     if (rows.length === 0) {
//       return { erreur: true, message: 'Token invalide ou expiré' }
//     }

//     const hashedPassword = await hash(newPassword, 10)
//     await pool.query(`UPDATE medi_connect.compte SET mdp = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?`, [
//       hashedPassword,
//       rows[0].id
//     ])

//     return { erreur: false, message: 'Mot de passe mis à jour avec succès' }
//   } catch (error) {
//     console.error('Erreur lors de la réinitialisation du mot de passe', error)
//     return { erreur: true, message: 'Erreur interne' }
//   }
// }
