'use client'

// React Imports
import { useEffect, useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Register = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const [data, setData] = useState<any>({ email: '', mdp: '', role: '', nom: '', spe: 0 })

  const [controls, setControls] = useState<any>({
    email: false,
    mdp: false,
    nom: false,
    role: false,
    spe: 0
  })
  const options = [
    { label: 'Admin', value: 1 },
    { label: 'Médecin', value: 2 },
    { label: 'Laboratoire', value: 3 }
  ]
  const optionsMed = [
    { label: 'SP1', value: 1 },
    { label: 'SP2', value: 2 },
    { label: 'SP3', value: 3 }
  ]
  const clearForm = () => {
    setData({ email: '', mdp: '', role: '', nom: '' })
    setControls(false)
  }
  // useEffect(() => {
  //   if (data) {
  //     clearForm()
  //     setId(data.id)
  //     setEmail(data.email)
  //     setMdp(data.mdp)
  //     setNom(data.nom)
  //   } else {
  //     clearForm()
  //   }
  // }, [data])

  async function handleSave() {
    try {
      setControls((prev: any) => ({ ...prev, email: data.email?.trim() === '' }))
      setControls((prev: any) => ({ ...prev, mdp: data.mdp?.trim() === '' }))
      setControls((prev: any) => ({ ...prev, nom: data.nom?.trim() === '' }))
      setControls((prev: any) => ({ ...prev, role: data.role === '' }))
      const url = `${window.location.origin}/api/register/ajouter`
      const requestBody: any = JSON.stringify(data)

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody
      }
      await fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => setData(data))
      // console.log('ajouter')

      clearForm()
    } catch {
      console.log('erreur')
    }
  }
  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex flex-col lg:flex-row min-h-screen items-center justify-center relative h-screen w-screen bg-white'>
      <div className='hidden lg:flex flex-1 justify-center items-center min-h-screen bg-gray-100'>
        <span className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </span>
        <img src='/images/pages/doc2.svg' className='max-w-[800px]' />
      </div>

      {/* Formulaire */}
      <div className='flex flex-col justify-center items-center w-full max-w-xl p-12 min-h-screen space-y-6'>
        <div className='mb-5'>
          <h3 className='text-3xl font-bold mb-3'>Adventure starts here 🚀</h3>
          <Typography className='mbs-1 text-lg '>Make your app management easy and fun!</Typography>
        </div>
        <form noValidate autoComplete='off' className='w-full space-y-6 mt-8'>
          <div>
            <TextField
              fullWidth
              label='Username'
              value={data.nom}
              className={`${controls?.nom === true ? 'isReq' : ''}`}
              onChange={(e: any) => {
                if (e.target?.value.trim() === '') {
                  setControls({ ...controls, nom: true })
                  setData((prev: any) => ({
                    ...prev,
                    nom: e.target.value
                  }))
                } else {
                  setControls({ ...controls, nom: false })
                  setData((prev: any) => ({
                    ...prev,
                    nom: e.target.value
                  }))
                }
              }}
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
            {controls?.nom === true ? <span className='errmsg'>Please enter the name !</span> : null}
          </div>
          <div>
            <TextField
              fullWidth
              label='Email'
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
              value={data.email}
              className={`${controls?.email === true ? 'isReq' : ''}`}
              onChange={(e: any) => {
                if (e.target?.value.trim() === '') {
                  setControls({ ...controls, email: true })
                  setData((prev: any) => ({
                    ...prev,
                    email: e.target.value
                  }))
                } else {
                  setControls({ ...controls, email: false })
                  setData((prev: any) => ({
                    ...prev,
                    email: e.target.value
                  }))
                }
              }}
            />
            {controls?.email === true ? <span className='errmsg'>Please enter the email !</span> : null}
          </div>
          <div>
            <TextField
              fullWidth
              label='Password'
              type={isPasswordShown ? 'text' : 'password'}
              InputLabelProps={{
                sx: { fontSize: '1rem' }
              }}
              className={`${controls?.mdp === true ? 'isReq' : ''}`}
              InputProps={{
                sx: {
                  height: 60,
                  '&.Mui-focused': {
                    '& + .MuiInputLabel-root': {
                      fontSize: '1rem'
                    }
                  },
                  paddingRight: 5
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      size='large'
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              onChange={(e: any) => {
                if (e.target?.value.trim() === '') {
                  setControls({ ...controls, mdp: true })
                  setData((prev: any) => ({
                    ...prev,
                    mdp: e.target.value
                  }))
                } else {
                  setControls({ ...controls, mdp: false })
                  setData((prev: any) => ({
                    ...prev,
                    mdp: e.target.value
                  }))
                }
              }}
            />
            {controls?.mdp === true ? <span className='errmsg'>Please enter the password !</span> : null}
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                className={`${controls?.role === true ? 'isReq' : ''}`}
                value={data?.role || null}
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
            {controls?.role === true ? <span className='errmsg'>Please enter the role !</span> : null}
          </div>

          <div style={{ display: data?.role !== 2 ? 'none' : '' }}>
            <FormControl fullWidth>
              <InputLabel>Spéciallité</InputLabel>
              <Select
                value={data?.spe || null}
                onChange={(e: any) => {
                  if (e === null) {
                    setData({ ...data, spe: e.target.value })
                  } else {
                    setData({ ...data, spe: e.target.value })
                  }
                }}
              >
                {optionsMed.map(item => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <FormControlLabel
            control={<Checkbox />}
            label={
              <>
                <span>I agree to </span>
                <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                  privacy policy & terms
                </Link>
              </>
            }
          />
          <Button
            fullWidth
            variant='contained'
            type='button'
            sx={{
              height: 40,
              fontSize: '1rem'
            }}
            onClick={() => {
              if (data.email?.trim() !== '') handleSave()
            }}
          >
            Sign Up
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Already have an account?</Typography>
            <Typography component={Link} href='/login' color='primary'>
              Sign in instead
            </Typography>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
