import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'

import SimpleAppBar from './appbar'
import './layout.css'

function Layout ({ children }) {

  return (
    <div>
      <SimpleAppBar />
        <div
          style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
        <Paper  elevation={0} 
                square={true}
                style={{
                  width: '100%',
                }}>
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
}

export default Layout
