import pool from '@/utils/connexion'

export const ajouter = async (req: any) => {
  try {
    const json: any = req

    const sql = `INSERT INTO medi_connect.patient (nom,prenom,email,tel) 
                       VALUES ('${json.nom}', '${json.prenom}', '${json.email}', '${json.tel}')`
    await pool.query(sql)
    return { erreur: false, data: true }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}
export const liste = async (req: any) => {
  try {
    const json: any = req

    let sql = `SELECT *
    FROM medi_connect.patient`
    const params: any[] = []
    const [rows] = await pool.query(sql)
    return { erreur: false, data: rows }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}
export const modifier = async (req: any) => {
  try {
    const json: any = req
    let id = json.id
    let sql = `UPDATE medi_connect.patient SET nom ='${json.nom}',prenom ='${json.prenom}',email ='${json.email}',tel='${json.tel}' where id='${id}'`
    await pool.query(sql)
    return { erreur: false, data: true }
  } catch (error) {
    console.error('Erreur lors de l’enregistrement', error)
    return { erreur: true, message: 'Erreur lors de l’enregistrement' }
  }
}
export const supprimer = async (req: any) => {
  try {
    const id = req.params.id

    if (!id) {
      return { erreur: true, message: 'ID is required' }
    }

    const sql = `DELETE FROM tbl_client WHERE id='${id}'`
    const result: any = await pool.query(sql, [id])

    if (result.affectedRows === 0) {
      return { erreur: true, message: 'Patient non trouvé' }
    }

    return { erreur: false, data: true }
  } catch (error) {
    console.error('Error deleting:', error)
    return { erreur: true, message: 'Erreur lors de la suppression' }
  }
}
