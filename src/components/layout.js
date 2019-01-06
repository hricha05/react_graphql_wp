import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import SimpleAppBar from './appbar'
import './layout.css'



const styles = theme => ({
  root: {
    margin: `0 auto`,
    maxWidth: 1024,
    padding: theme.spacing.unit * 2,
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
})

function Layout (props) {
  const { classes } = props
  const { children } = props

  return (
    <div>
      <SimpleAppBar />
        <div className={ classes.root }>
            <Paper elevation={0} square={true}>
              {children}
            </Paper>
          <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
