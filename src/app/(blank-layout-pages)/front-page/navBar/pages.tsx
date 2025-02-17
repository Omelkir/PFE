import { getServerMode } from '@core/utils/serverHelpers'
import NavBar from './nav'

const Nav = () => {
  const mode = getServerMode()

  return <NavBar />
}

export default Nav
