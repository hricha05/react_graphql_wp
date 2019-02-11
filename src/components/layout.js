import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Divider } from '@material-ui/core'
import SimpleAppBar from './appbar'
import './layout.css'

function Layout ({ children }) {

  return <div>
      <SimpleAppBar />
      <Divider component='hr' varient='fullWidth' light={true} /> 
      <div style={{ margin: `0 auto` }}>
        {children}
        <Divider component='hr' light={true} variant='fullWidth' />
        <footer>
          <Paper square style={{ backgroundColor: '#716B7F', color: '#FFF' }}>
            <Typography component="p">
              © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Typography>
          </Paper>
        </footer>
      </div>
    </div>
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
