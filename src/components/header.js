import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data }) => (
    <Link to="/" 
          style={{ 
            color: `black`,
            fontSize: 'x-large',
            textDecoration: `none`, 
          }
    }>
      {data.site.siteMetadata.title}
    </Link>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <Header data={data} {...props} />
    )}
  />
)

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}