'use client'

import type { ReactElement } from 'react'

type HorizontalLayoutWrapperProps = {
  horizentalLayout: ReactElement
}

const HorizontalLayoutWrapper = ({ horizentalLayout }: HorizontalLayoutWrapperProps) => {
  return <div className='flex flex-col min-h-screen'>{horizentalLayout}</div>
}

export default HorizontalLayoutWrapper
