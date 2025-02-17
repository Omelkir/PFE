import pool from '@/utils/connexion'

export const ajouter = async (req: any) => {
  try {
    const json: any = req

    const sql: any = `INSERT INTO medi_connect.compte (nom,email,mdp,role,spe) VALUES ('${json.nom}','${json.email}','${json.mdp}','${json.role}','${json?.spe}')`
    await pool.query(sql)

    return { erreur: false, data: true }
  } catch (error) {
    return { erreur: true, data: false }
  }
}

// export const liste = async (req: any) => {
//   try {
//     let QueryCondition = ``
//     if (req.query.display === '0') {
//       QueryCondition = `WHERE "isArchived"=${'0'}`
//     } else if (req.query.display === '1') {
//       QueryCondition = `WHERE "isArchived"=${'1'}`
//     } else if (req.query.display === '2') {
//       QueryCondition = ``
//     }
//     const stringSearch: any = req?.query?.filters?.toString() || 'e30='
//     const jsonFilter: any = JSON.parse(Buffer.from(stringSearch, 'base64').toString('utf-8'))
//     const queryConditions = []
//     for (const key in jsonFilter) {
//       if (jsonFilter[key].trim() !== '') {
//         queryConditions.push(`${key} LIKE '%${jsonFilter[key].trim()}%'`)
//       }
//     }
//     QueryCondition += queryConditions.length > 0 ? ' and ' + queryConditions.join(' AND ') : ''
//     const totalCountQuery = `SELECT COUNT(*) as count FROM ${'medi_connect'}.acompte ${QueryCondition}`
//     const totalCountResult: any = await pool.query(totalCountQuery)
//     const totalCount = totalCountResult[0][0].count

//     const currentPage = parseInt(req.query.page as string) || 1
//     const itemsPerPage = parseInt(req.query.limit as string) || 6
//     const offset = (currentPage - 1) * itemsPerPage

//     const reqSql = `SELECT * FROM ${'medi_connect'}.acompte ${QueryCondition} LIMIT
//         ${itemsPerPage}
//     OFFSET
//         ${offset}`
//     const [rows] = await pool.query(reqSql)
//     const data: any = rows
//     const pi: any = {
//       total: totalCount,
//       currentPage: currentPage,
//       count: data.length,
//       lastPage: Math.ceil(totalCount / itemsPerPage),
//       firstItem: offset + 1,
//       lastItem: offset + data.length,
//       perPage: itemsPerPage.toString(),
//       firstPageUrl: `/api/acompte/liste?search=&answer=null&limit=${itemsPerPage}&page=1`,
//       lastPageUrl: `/api/acompte/liste?search=&answer=null&limit=${itemsPerPage}&page=${Math.ceil(
//         totalCount / itemsPerPage
//       )}`,
//       nextPageUrl:
//         currentPage < Math.ceil(totalCount / itemsPerPage)
//           ? `/api/acompte/liste?search=&answer=null&limit=${itemsPerPage}&page=${currentPage + 1}`
//           : null,
//       prevPageUrl:
//         currentPage > 1 ? `/api/acompte/liste?search=&answer=null&limit=${itemsPerPage}&page=${currentPage - 1}` : null
//     }

//     return { error: false, data: data, paginatorInfo: pi }
//   } catch (error) {
//     return { error: true, data: null }
//   }
// }

// export const modifier = async (req: any) => {
//   try {
//     const json: any = req.body
//     const id: any = json.id
//     delete json.id
//     const sql: any = `UPDATE medi_connect.acompte SET id_client='${json.id_client}',responsable='${json.responsable}',tel='${json.tel}' where id='${id}'`
//     await pool.query(sql)

//     return { erreur: false, data: [] }
//   } catch (error) {
//     return { erreur: true, data: null }
//   }
// }

// export const archiver = async (userId: any) => {
//   console.log(`User with ID ${userId} deleted`)
// }
