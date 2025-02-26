import pool from '@/utils/connexion'
import bcrypt from 'bcrypt'

export const ajouter = async (req: any) => {
  try {
    const json: any = req

    // Vérifier si l'email existe déjà
    const checkEmailSql = `SELECT * FROM medi_connect.compte WHERE email = ?`
    const [emailExists]: any = await pool.query(checkEmailSql, [json.email])

    if (emailExists.length > 0) {
      return { erreur: true, message: "L'email est déjà utilisé." }
    }

    // Hash le mot de passe
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(json.mdp, saltRounds)

    // Ajout dans la table 'compte'
    const sqlCompte = `INSERT INTO medi_connect.compte (nom_ut, email, mdp, role) 
                       VALUES ('${json.nom_ut}', '${json.email}', '${hashedPassword}', '${json.role}')`
    const [compteResult]: any = await pool.query(sqlCompte)

    // Si l'utilisateur est un médecin
    if (json.role === 2) {
      const sqlMedecin = `INSERT INTO medi_connect.medecin (idcompte, spe,image,tarif,horaires,ville,info) 
                          VALUES (${compteResult.insertId}, '${json.spe}', '${json.image}', '${json.tarif}', '${json.horaires}', '${json.ville}', '${json.info}')`
      await pool.query(sqlMedecin)
    }

    // Si l'utilisateur est un laboratoire
    if (json.role === 3) {
      const sqlLabo = `INSERT INTO medi_connect.labo (idcompte, service) 
                       VALUES (${compteResult.insertId}, '${json.service}')`
      await pool.query(sqlLabo)
    }
    return { erreur: false, data: true }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}
