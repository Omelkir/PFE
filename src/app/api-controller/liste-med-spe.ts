import pool from '@/utils/connexion'

export const liste = async (req: any) => {
  try {
    const { spe, nom_ut, ville } = req

    let sql = `SELECT *
               FROM medi_connect.compte
               WHERE 1=1 and role=2`
    const params: any[] = []

    if (spe) {
      sql += ` AND spe = ?`
      params.push(spe)
    }
    if (nom_ut) {
      sql += ` AND nom_ut = ?`
      params.push(nom_ut)
    }
    if (ville) {
      sql += ` AND ville = ?`
      params.push(ville)
    }

    const [rows] = await pool.query(sql, params)
    console.log('Résultats de la requête:', rows)

    return { erreur: false, data: rows }
  } catch (error) {
    console.error('Erreur SQL:', error)
    return { erreur: true, message: 'Erreur lors de la récupération des données' }
  }
}
