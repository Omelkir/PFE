'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Form from '@components/Form'
import DirectionalIcon from '@components/DirectionalIcon'
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import router from 'next/router'
import { log } from 'console'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

const RendezVous = () => {
  const [data, setData] = useState<any>({ email: '', mdp: '', role: '', nom: '', spe: 0 })

  const [controls, setControls] = useState<any>({
    email: false,
    mdp: false,
    nom: false,
    role: false,
    spe: 0
  })
  const options = [
    { label: 'Médecin', value: 2 },
    { label: 'Laboratoire', value: 3 }
  ]
  // Hooks

  return (
    <div className='flex flex-col w-full md:w-full lg:flex-row min-h-screen items-center justify-center relative h-screen w-screen bg-white'>
      <div className='hidden lg:flex flex-1 justify-center items-center min-h-screen bg-gray-100'>
        <span className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </span>
        <img src='/images/rend1.svg' className='max-w-[800px]' />
      </div>

      {/* Formulaire */}
      <div className='flex flex-col justify-center items-center w-full max-w-xl p-12 min-h-screen space-y-6'>
        <div className='mb-5'>
          <h3 className='text-3xl font-bold text-center md:text-center mb-3'>Rendez-vous</h3>
        </div>
        <form noValidate autoComplete='off' className='w-full space-y-6 mt-8'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  // className={`${controls?.role === true ? 'isReq' : ''}`}
                  // value={data?.role || null}
                  label='Type'
                  onChange={(e: any) => {
                    console.log(e)

                    if (e === null) {
                      setControls({ ...controls, role: true })
                      setData((prev: any) => ({
                        ...prev,
                        role: e.target.value
                      }))
                    } else {
                      setControls({ ...controls, role: false })
                      setData((prev: any) => ({
                        ...prev,
                        role: e.target.value
                      }))
                    }
                  }}
                >
                  {options.map(item => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                {' '}
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
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                {' '}
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
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              {' '}
              <div>
                {' '}
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
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              {' '}
              <div>
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
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: data?.role !== 2 ? 'none' : '' }}>
              <div>
                {' '}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel>Spécialité</InputLabel>
                  <Select
                    label='Spécialité'
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
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: data?.role !== 2 ? 'none' : '' }}>
              <div>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ fontSize: '1rem' }}>Médecin</InputLabel>
                  <Select
                    label='Médecin'
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
              </div>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: data?.role !== 3 ? 'none' : '' }}>
              <div>
                {' '}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel>Service</InputLabel>
                  <Select
                    label='Service'
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
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: data?.role !== 3 ? 'none' : '' }}>
              <div>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ fontSize: '1rem' }}>Laboratoire</InputLabel>
                  <Select
                    label='Laboratoire'
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
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div>
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
              </div>
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant='contained'
            type='button'
            sx={{
              height: 40,
              fontSize: '1rem'
            }}
            onClick={() => {
              console.log("Bouton cliqué, redirection vers la page d'accueil")
              router.push('/rendez_vous')
            }}
          >
            Prendre rendez-vous
          </Button>
          <Typography className='flex justify-center items-center mt-4' color='primary'>
            <Link href='/front-page' className='flex items-center'>
              <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
              <span>Back</span>
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  )
}

export default RendezVous
