// 'use client'
// import { Button, Card, CardContent, Grid, TextField } from '@mui/material'

// import { IconUserPlus } from '@tabler/icons-react'
// import Arrow from '@/views/dashboard/Arrow'
// import PatientModal from '@/components/modals/patient'
// import { useState } from 'react'
// import Table from './Table'

// const Patient = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   return (
//     <div>
//       <Card>
//         <CardContent>
//           <Arrow title='Dashboard' subTitle='Patient' />

//           <Button
//             fullWidth
//             variant='contained'
//             color='primary'
//             className='h-12 w-1/6 mb-12'
//             onClick={() => setIsModalOpen(true)}
//           >
//             Ajouter un patient
//           </Button>
//           <PatientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//           <Grid item xs={12}>
//             <Table />
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
// export default Patient
'use client'

import { Button, Card, CardContent, Grid } from '@mui/material'
import { IconUserPlus } from '@tabler/icons-react'
import Arrow from '@/views/dashboard/Arrow'
import PatientModal from '@/components/modals/patient'
import { useState } from 'react'
import Table from './Table'

const Patient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<any>(null)

  const handleOpenModal = (patient: any = null) => {
    setSelectedPatient(patient) // Définit les données du patient s'il y en a, sinon null
    setIsModalOpen(true)
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Arrow title='Dashboard' subTitle='Patient' />

          <Button
            fullWidth
            variant='contained'
            color='primary'
            className='h-12 w-1/6 mb-12'
            onClick={() => handleOpenModal()} // Ouvre le modal en mode ajout
          >
            <IconUserPlus className='mr-2' /> Ajouter un patient
          </Button>

          <PatientModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            patientData={selectedPatient} // Passe les données du patient sélectionné
          />

          <Grid item xs={12}>
            <Table onEditPatient={handleOpenModal} />
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Patient
