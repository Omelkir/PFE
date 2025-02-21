import pool from '@/utils/connexion'
import bcrypt from 'bcrypt'

export const verifierUtilisateur = async (req: any) => {
  try {
    const { email, mdp } = req

    const sql = `SELECT * FROM medi_connect.compte WHERE email = ?`
    const [rows]: any = await pool.query(sql, [email])

    if (rows.length === 0) {
      return { erreur: true, message: 'Identifiants incorrects' }
    }

    const user = rows[0]

    const match = await bcrypt.compare(mdp, user.mdp)
    if (!match) {
      return { erreur: true, message: 'Identifiants incorrects' }
    }

    return { erreur: false, role: user.role }
  } catch (error) {
    console.error(error)
    return { erreur: true, message: 'Erreur serveur' }
  }
}
