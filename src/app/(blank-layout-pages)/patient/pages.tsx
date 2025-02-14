import Patient from '@views/Patient'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const PatientPage = () => {
  // Vars
  const mode = getServerMode()

  return <Patient />
}

export default PatientPage
