// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import Providers from '@components/Providers'
import NavBar from './navBar/nav'
import HorizontalLayoutWrapper from '@/@layouts/HorizontalLayoutWrapper'
import HorizontalLayout from '@/@layouts/HoriLayout'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <HorizontalLayoutWrapper horizentalLayout={<HorizontalLayout nav={<NavBar />}>{children}</HorizontalLayout>} />
    </Providers>
  )
}

export default Layout
