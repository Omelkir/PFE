import Medecin from '@/views/Medecin'
import { getServerMode } from '@core/utils/serverHelpers'

const MedecinPage = () => {
  // Vars
  const mode = getServerMode()

  return <Medecin />
}

export default MedecinPage
