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

const ForgotPassword = ({ mode }: { mode: Mode }) => {
  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  return (
    <div className='flex flex-col lg:flex-row min-h-screen items-center justify-center relative h-screen w-screen bg-white'>
      <div className='hidden lg:flex flex-1 justify-center items-center min-h-screen bg-gray-100'>
        <span className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </span>
        <img src='/images/pages/doc3.svg' className='max-w-[800px]' />
      </div>

      {/* Formulaire */}
      <div className='flex flex-col justify-center items-center w-full max-w-xl p-12 min-h-screen space-y-6'>
        <div className='mb-5'>
          <h3 className='text-3xl font-bold mb-3'>Forgot Password 🔒</h3>
          <Typography className='mbs-1 text-lg'>
            Enter your email and we&#39;ll send you instructions to reset your password
          </Typography>
        </div>
        <form noValidate autoComplete='off' className='w-full space-y-6 mt-8'>
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
          <Button
            fullWidth
            variant='contained'
            type='submit'
            sx={{
              height: 40,
              fontSize: '1rem'
            }}
          >
            Send reset link
          </Button>
          <Typography className='flex justify-center items-center mt-4' color='primary'>
            <Link href='/login' className='flex items-center'>
              <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
              <span>Back to Login</span>
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
