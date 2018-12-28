import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

import SimpleAppBar from './appbar'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    {/* <SimpleAppBar /> */}
    <SimpleAppBar />
      <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
        {children}
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
