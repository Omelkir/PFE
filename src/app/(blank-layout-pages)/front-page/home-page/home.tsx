'use client'

import Footer from '@/@layouts/components/vertical/Footer'
import DirectionalIcon from '@/components/DirectionalIcon'
import FooterContent from '@/components/layout/vertical/FooterContent'
import Award from '@/views/dashboard/Award'
import { Box, Button, Grid, Slider, TextField } from '@mui/material'
import {
  IconBuildingHospital,
  IconCalendarWeek,
  IconCircleLetterDFilled,
  IconCircleLetterOFilled,
  IconDental,
  IconEyeglass,
  IconHeart,
  IconHeartFilled,
  IconLetterD,
  IconLungs,
  IconLungsFilled,
  IconMoodKid,
  IconStethoscope,
  IconUserFilled
} from '@tabler/icons-react'
import { Mode } from 'fs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const router = useRouter()
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} className='bg2'>
          <Grid item xs={12} md={12} className='text-center md:text-left md:ml-24 mt-12 md:mt-24'>
            <h1 className='text-xl md:text-3xl maintxt'>Réservez votre consultation en toute simplicité !</h1>
            <h1 className='text-xl md:text-3xl maintxt'>
              Accédez rapidement aux résultats de vos analyses médicales !
            </h1>
            <h4 className='text-md md:text-lg mt-4 subtitle'>
              Trouvez rapidement les meilleurs professionnels de santé près de chez vous.
            </h4>
            <Grid item xs={6} md={6} className='mt-3 md:mt-12'>
              <Button
                fullWidth
                className='w-3/4 md:w-1/2 rounded-4xl p-3 md:p-6'
                variant='contained'
                type='submit'
                sx={{
                  height: 40,
                  fontSize: '1rem'
                }}
                onClick={() => {
                  router.push('/rendez_vous')
                }}
              >
                Prendre rendez-vous
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container spacing={6} xs={12} md={12} className='p-6 pl-12' style={{ backgroundColor: '#e0ecf3' }}>
          <Grid item xs={1} md={1}>
            <IconDental stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Médecine dentaire</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconHeartFilled stroke={2} color='#00234b' size={50} className='posX' />
            <h5 style={{ color: '#00234b' }}> Cardiologie</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconCircleLetterDFilled stroke={2} color='#00234b' size={50} className='posX' />
            <h5 style={{ color: '#00234b' }}> Dermatologie</h5>
          </Grid>

          <Grid item xs={1} md={1}>
            <IconEyeglass stroke={2} color='#00234b' size={50} className='posX' />
            <h5 style={{ color: '#00234b' }}>Ophtalmologie</h5>
          </Grid>

          <Grid item xs={1} md={1}>
            <IconCircleLetterOFilled stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>O.R.L</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconStethoscope stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Orthopédie - Traumatologie</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconMoodKid stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Pédiatrie</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconStethoscope stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Gastro-entérologue</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconLungsFilled stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Pneumologie</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconStethoscope stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}> Médecine interne</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconStethoscope stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Rhumatologie</h5>
          </Grid>
          <Grid item xs={1} md={1}>
            <IconStethoscope stroke={2} color='#00234b' size={50} />
            <h5 style={{ color: '#00234b' }}>Néphrologie</h5>
          </Grid>
        </Grid> */}
      </Grid>

      <div className='flex-1 pt-12 p-12 text-center md:text-center quesection'>
        <h1 className='text-2xl md:text-2xl font-bold text-[#00234b]'>Contactez-nous</h1>
        <div className='flex justify-center'>
          <form noValidate autoComplete='off' className='w-full max-w-4xl space-y-6 mt-12'>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Nom'
                  autoFocus
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                  InputProps={{
                    sx: {
                      height: 60,
                      '&.Mui-focused': {
                        '& + .MuiInputLabel-root': {
                          fontSize: '1rem'
                        }
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Email'
                  autoFocus
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                  InputProps={{
                    sx: {
                      height: 60,
                      '&.Mui-focused': {
                        '& + .MuiInputLabel-root': {
                          fontSize: '1rem'
                        }
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Téléphone'
                  autoFocus
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                  InputProps={{
                    sx: {
                      height: 60,
                      '&.Mui-focused': {
                        '& + .MuiInputLabel-root': {
                          fontSize: '1rem'
                        }
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Sujet'
                  autoFocus
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                  InputProps={{
                    sx: {
                      height: 60,
                      '&.Mui-focused': {
                        '& + .MuiInputLabel-root': {
                          fontSize: '1rem'
                        }
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label='Message'
                  multiline
                  minRows={3}
                  maxRows={6}
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <div className='flex justify-center'>
                  <Button
                    fullWidth
                    className='w-1/4 rounded-4xl p-6'
                    variant='contained'
                    type='submit'
                    sx={{
                      height: 40,
                      fontSize: '1rem'
                    }}
                  >
                    Envoyer
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>{' '}
      </div>

      <Grid xs={12} md={12} className='overlay p-12 pl-24'>
        <Grid container spacing={6} className='posGrid'>
          <Grid xs={2} md={2}>
            <IconBuildingHospital stroke={1} color='white' size={70} />
            <div className='posY' style={{ display: 'inline-block', marginLeft: '12px' }}>
              <h2 style={{ color: 'white' }}>3,468</h2>
              <h5 style={{ color: 'white' }}>Hospital</h5>
            </div>
          </Grid>
          <Grid xs={2} md={2}>
            <IconUserFilled stroke={1} color='white' size={70} />
            <div className='posY' style={{ display: 'inline-block', marginLeft: '12px' }}>
              <h2 style={{ color: 'white' }}>557</h2>
              <h5 style={{ color: 'white' }}>Specialist Doctors</h5>
            </div>
          </Grid>

          <Grid xs={2} md={2}>
            <IconCalendarWeek stroke={1} color='white' size={70} />
            <div className='posY' style={{ display: 'inline-block', marginLeft: '12px' }}>
              <h2 style={{ color: 'white' }}>32</h2>
              <h5 style={{ color: 'white' }}>Years of Experience</h5>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
