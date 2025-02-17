'use client'

import DirectionalIcon from '@/components/DirectionalIcon'
import Award from '@/views/dashboard/Award'
import { Button, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Mode } from 'fs'
import { useState } from 'react'

const HomePage = ({ mode }: { mode: Mode }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div>
      <Grid item xs={12} md={12} className='bg2 flex flex-wrap w-full text-center md:text-left single_slider p-60'>
        <h1 className='text-xl md:text-3xl maintxt'>Réservez votre consultation en toute simplicité !</h1>
        <h1 className='text-xl md:text-3xl maintxt'>Accédez rapidement aux résultats de vos analyses médicales !</h1>
        <h4 className='text-md md:text-lg mt-4 subtitle'>
          Trouvez rapidement les meilleurs professionnels de santé près de chez vous.
        </h4>
        <Grid item xs={12} md={12}>
          <div className='flex mt-6'>
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
              Prendre rendez-vous
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* <div className='flex-1 pt-12 p-12 text-center md:text-center quesection'>
        <h1 className='text-2xl md:text-2xl font-bold text-[#00234b]'>Rendez-vous</h1>

        <div className='flex justify-center'>
          <form noValidate autoComplete='off' className='w-full max-w-4xl space-y-6 mt-12'>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='Prenom'
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type='date'
                  InputLabelProps={{
                    sx: { fontSize: '1rem' }
                  }}
                  InputProps={{
                    sx: {
                      height: 60,
                      fontSize: '1rem'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel>Sélectionnez la spécialité</InputLabel>
                  <Select
                    label='Sélectionnez la spécialité'
                    sx={{
                      height: 60,
                      fontSize: '1rem',
                      '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center'
                      }
                    }}
                  >
                    <MenuItem value='option1'>Option 1</MenuItem>
                    <MenuItem value='option2'>Option 2</MenuItem>
                    <MenuItem value='option3'>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ fontSize: '1rem' }}>Sélectionnez le médecin</InputLabel>
                  <Select
                    label='Sélectionnez le médecin'
                    sx={{
                      height: 60,
                      fontSize: '1rem',
                      '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center'
                      }
                    }}
                  >
                    <MenuItem value='option1'>Option 1</MenuItem>
                    <MenuItem value='option2'>Option 2</MenuItem>
                    <MenuItem value='option3'>Option 3</MenuItem>
                  </Select>
                </FormControl>
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
                    Prendre rendez-vous
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <div className='flex-1 pt-12 pb-12 text-center md:text-center'>
        <h1 className='text-2xl md:text-2xl font-bold maintxt' style={{ color: '#00234b' }}>
          Pourquoi prendre rendez-vous avec MediConnect ?
        </h1>
        <h3 className='p-6 subtitle pb-24' style={{ color: '#00234b' }}>
          Avec MediConnect, prenez rendez-vous en ligne avec votre médecin autrement
        </h3>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <img src='/images/step1.svg' />
            <h3 className='text-center md:text-center txt'>Accédez rapidement à votre médecin</h3>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src='/images/step2.svg' />
            <h3 className='text-center md:text-center txt'>Prenez rendez-vous en ligne à tout moment</h3>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src='/images/step3.svg' />
            <h3 className='text-center md:text-center txt'>Recevez des sms/mail de rappel personnalisés</h3>
          </Grid>
        </Grid>
      </div> */}
    </div>
  )
}

export default HomePage
