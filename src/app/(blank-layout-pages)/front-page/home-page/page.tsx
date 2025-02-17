import { getServerMode } from '@core/utils/serverHelpers'
import HomePage from './home'

const Nav = () => {
  const mode = getServerMode()

  return <HomePage mode={mode} />
}

export default Nav
