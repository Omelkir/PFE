// // Type Imports
// import type { ChildrenType } from '@core/types'

// import Footer from './footer/Footer'
// import Hero from './Hero/Hero'
// import Services from './Services/Services'
// import Banner from './Banner/Banner'
// import Subscribe from './Subscribe/Subscribe'
// import Banner2 from './Banner/Banner2'

// const Layout = async ({ children }: ChildrenType) => {
//   // Vars
//   const direction = 'ltr'

//   return (
//     <div>
//       <Hero />
//       <Services />
//       <Banner />
//       <Subscribe />
//       <Banner2 />
//       <Footer />
//     </div>
//   )
// }

// export default Layout
// Type Imports
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
      <HorizontalLayoutWrapper horizentalLayout={<HorizontalLayout nav={<Navbar />}>{children}</HorizontalLayout>} />
    </Providers>
  )
}

export default Layout
