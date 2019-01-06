import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
  }
})

function IndexPage(props) {
  const { classes } = props;

  return (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Paper className={ classes.root } elevation={0} square={false}>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </Paper>
      </Layout>
    );
}

IndexPage.PropTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
