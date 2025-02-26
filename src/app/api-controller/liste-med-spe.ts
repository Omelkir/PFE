import pool from '@/utils/connexion'

export const liste = async (req: any) => {
  try {
    const { spe, nom_ut, ville } = req

    // Vérifier si tous les paramètres sont vides
    if (!spe && !nom_ut && !ville) {
      return { erreur: false, data: [] } // Retourner un tableau vide
    }

    // Début de la requête pour la table 'compte'
    let sql = `SELECT c.*, m.*, l.service
               FROM medi_connect.compte c
               LEFT JOIN medi_connect.medecin m ON c.id = m.idcompte	
               LEFT JOIN medi_connect.laboratoire l ON c.id = l.idcompte	
               WHERE 1=1`
    const params: any[] = []

    if (spe) {
      sql += ` AND m.spe = ?` // Recherche par 'spe' dans la table 'medecin'
      params.push(spe)
    }
    if (nom_ut) {
      sql += ` AND c.nom_ut = ?` // Recherche par 'nom_ut' dans la table 'compte'
      params.push(nom_ut)
    }
    if (ville) {
      sql += ` AND c.ville = ?` // Recherche par 'ville' dans la table 'compte'
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
