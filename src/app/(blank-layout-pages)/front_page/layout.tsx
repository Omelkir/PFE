// Type Imports
import type { ChildrenType } from '@core/types'
import Providers from '@components/Providers'
import HorizontalLayoutWrapper from '@/@layouts/HorizontalLayoutWrapper'
import HorizontalLayout from '@/@layouts/HoriLayout'
import NavBar from './nav_bar/navBar'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return <NavBar />
}

export default Layout
