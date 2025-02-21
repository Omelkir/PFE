import { getServerMode } from '@core/utils/serverHelpers'
import HomePage from './home'

const Home = () => {
  const mode = getServerMode()

  return <HomePage />
}

export default Home
