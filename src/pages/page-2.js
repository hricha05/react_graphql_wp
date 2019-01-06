import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/layout'
import SEO from '../components/seo'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
})

function SecondPage( props ) {
  const { classes } = props
  
  return (

  <Layout>
    <SEO title="Page two" />
    <Paper elevation={0} className={classes.root}>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Paper>
  </Layout>
)}

SecondPage.PropTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles)(SecondPage);
