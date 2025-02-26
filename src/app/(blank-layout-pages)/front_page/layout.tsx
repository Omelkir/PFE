import type { ChildrenType } from '@core/types'

import Providers from '@components/Providers'
import HorizontalLayoutWrapper from '@/@layouts/HorizontalLayoutWrapper'
import HorizontalLayout from '@/@layouts/HoriLayout'
import Navbar from './nav_bar/navBar'
import Navigation from '@/components/layout/vertical/Navigation'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      {/* <HorizontalLayoutWrapper horizentalLayout={<HorizontalLayout nav={<Navbar />}>{children}</HorizontalLayout>} /> */}
      <div>
        <Navbar />
      </div>
      <div className='ml-3 mr-3'>{children}</div>
    </Providers>
  )
}

export default Layout
