import Grid from '@mui/material/Grid'
import HomePage from './home-page/home'
import { getServerMode } from '@/@core/utils/serverHelpers'

const FrontPage = () => {
  const mode = getServerMode()
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <HomePage mode={mode} />
      </Grid>
    </Grid>
  )
}

export default FrontPage
