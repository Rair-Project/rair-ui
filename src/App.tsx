import React from 'react'
import Layout from './components/Layout'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const App: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper>
            <h1>Place Holder</h1>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper>
            <h1>Place Holder</h1>
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper>
              <h1>Place Holder</h1>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default App
