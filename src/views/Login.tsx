'use client'

// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { Box } from '@mui/material'
import { getStorageData, setStorageData } from '@/utils/helpers'

const Login = ({ mode }: { mode: Mode }) => {
  const router = useRouter()
  const isLogged: any =
    getStorageData('typeOfLogger') !== -1 &&
    getStorageData('typeOfLogger') !== null &&
    getStorageData('typeOfLogger') !== undefined

  if (isLogged) {
    router.push('/')
  }
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [mdp, setMdp] = useState<string>('')
  const [typeOfLogger, setTypeOfLogger] = useState<number>(-1)
  const [controls, setControls] = useState<any>({
    email: false,
    mdp: false
  })
  async function handleSave() {
    try {
      setControls((prev: any) => ({ ...prev, email: email?.trim() === '' }))
      setControls((prev: any) => ({ ...prev, mdp: mdp?.trim() === '' }))

      if (email === 'admin' && mdp === 'admin') {
        setStorageData('typeOfLogger', 1)
        router.push('/')
      } else if (email === 'med' && mdp === 'med') {
        setStorageData('typeOfLogger', 2)
        router.push('/')
      } else if (email === 'labo' && mdp === 'labo') {
        setStorageData('typeOfLogger', 3)
        router.push('/')
      } else {
        setTypeOfLogger(0)
      }
    } catch {}
  }

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks

  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/')
  }

  // return (
  //   <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
  //     <Card className='flex flex-col sm:is-[450px]'>
  //       <CardContent className='p-6 sm:!p-12'>
  //         <Link href='/' className='flex justify-center items-center mbe-6'>
  //           <Logo />
  //         </Link>
  //         <div className='flex flex-col gap-5'>
  //           <div>
  //             <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
  //             {/* <Typography className='mbs-1'>Please sign-in to your account and start the adventure</Typography> */}
  //           </div>
  //           <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
  //             <TextField autoFocus fullWidth label='Email' />
  //             <TextField
  //               fullWidth
  //               label='Password'
  //               id='outlined-adornment-password'
  //               type={isPasswordShown ? 'text' : 'password'}
  //               InputProps={{
  //                 endAdornment: (
  //                   <InputAdornment position='end'>
  //                     <IconButton
  //                       size='small'
  //                       edge='end'
  //                       onClick={handleClickShowPassword}
  //                       onMouseDown={e => e.preventDefault()}
  //                     >
  //                       <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
  //                     </IconButton>
  //                   </InputAdornment>
  //                 )
  //               }}
  //             />
  //             <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
  //               <FormControlLabel control={<Checkbox />} label='Remember me' />
  //               <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
  //                 Forgot password?
  //               </Typography>
  //             </div>
  //             <Button fullWidth variant='contained' type='submit'>
  //               Log In
  //             </Button>
  //             <div className='flex justify-center items-center flex-wrap gap-2'>
  //               <Typography>New on our platform?</Typography>
  //               <Typography component={Link} href='/register' color='primary'>
  //                 Create an account
  //               </Typography>
  //             </div>
  //             <Divider className='gap-3'>or</Divider>
  //             <div className='flex justify-center items-center gap-2'>
  //               <IconButton size='small' className='text-facebook'>
  //                 <i className='ri-facebook-fill' />
  //               </IconButton>
  //               <IconButton size='small' className='text-twitter'>
  //                 <i className='ri-twitter-fill' />
  //               </IconButton>
  //               <IconButton size='small' className='text-github'>
  //                 <i className='ri-github-fill' />
  //               </IconButton>
  //               <IconButton size='small' className='text-googlePlus'>
  //                 <i className='ri-google-fill' />
  //               </IconButton>
  //             </div>
  //           </form>
  //         </div>
  //       </CardContent>
  //     </Card>
  //     <Illustrations maskImg={{ src: authBackground }} />
  //   </div>
  // )

  return (
    <div className='flex flex-col lg:flex-row min-h-screen items-center justify-center relative h-screen w-screen bg-white'>
      <div className='hidden lg:flex flex-1 justify-center items-center min-h-screen bg-gray-100'>
        <span className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </span>
        <img src='/images/pages/doc1.svg' className='max-w-[800px]' />
      </div>

      {/* Formulaire */}
      <div className='flex flex-col justify-center items-center w-full max-w-xl p-12 min-h-screen space-y-6'>
        <div className='mb-5'>
          <h3 className='text-3xl font-bold mb-3'>Welcome to MediConnect ! 👋🏻</h3>
          <Typography className='mbs-1 text-lg '>Please sign-in to your account and start the adventure</Typography>
        </div>
        <form className='w-full space-y-6 mt-8'>
          <div>
            <TextField
              fullWidth
              className={`${controls?.email === true ? 'isReq' : ''}`}
              label='Email'
              type='email'
              autoFocus
              InputLabelProps={{
                sx: { fontSize: '1rem' } // Taille par défaut du label
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
              onChange={(e: any) => {
                if (e.target?.value.trim() === '') {
                  setControls({ ...controls, email: true })
                  setEmail('')
                } else {
                  setControls({ ...controls, email: false })
                  setEmail(e.target.value)
                }
              }}
            />
            {controls.email === true ? <span className='errmsg'>Please enter the email !</span> : null}
          </div>
          <div>
            <TextField
              fullWidth
              className={`${controls?.mdp === true ? 'isReq' : ''}`}
              label='Password'
              id='outlined-adornment-password'
              type={isPasswordShown ? 'text' : 'password'}
              InputLabelProps={{
                sx: { fontSize: '1rem' }
              }}
              onChange={(e: any) => {
                if (e.target?.value.trim() === '') {
                  setControls({ ...controls, mdp: true })
                  setMdp('')
                } else {
                  setControls({ ...controls, mdp: false })
                  setMdp(e.target.value)
                }
              }}
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
            />
            {controls?.mdp === true ? <span className='errmsg'>Please enter the password !</span> : null}
          </div>
          {typeOfLogger === -1 ? <span className='errmsg'>Please enter the password !</span> : null}
          <Box
            className='flex justify-between items-center'
            sx={{
              fontSize: '1rem'
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label='Remember me'
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '1rem'
                }
              }}
            />
            <Link href='/forgot-password' className='text-primary'>
              Forgot password?
            </Link>
          </Box>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            sx={{
              height: 40,
              fontSize: '1rem'
            }}
            onClick={() => {
              handleSave()
            }}
          >
            Log In
          </Button>
          <Box
            className='text-center'
            sx={{
              fontSize: '1rem'
            }}
          >
            <span>New on our platform? </span>
            <Link href='/register' className='text-primary'>
              Create an account
            </Link>
          </Box>
        </form>
      </div>
    </div>
  )
}

export default Login
