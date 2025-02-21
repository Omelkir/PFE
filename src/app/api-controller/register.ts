import pool from '@/utils/connexion'
import bcrypt from 'bcrypt'

export const ajouter = async (req: any) => {
  try {
    const json: any = req

    const checkEmailSql = `SELECT * FROM medi_connect.compte WHERE email = ?`
    const [emailExists]: any = await pool.query(checkEmailSql, [json.email])

    if (emailExists.length > 0) {
      return { erreur: true, message: "L'email est déjà utilisé." }
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(json.mdp, saltRounds)

    const sql = `INSERT INTO medi_connect.compte (nom_ut,nom,prenom,email,mdp,role,spe,service) 
                 VALUES ('${json.nom_ut}','${json.nom}','${json.prenom}','${json.email}','${hashedPassword}','${json.role}','${json?.spe}','${json?.service}')`
    await pool.query(sql)

    return { erreur: false, data: true }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}
