import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data }) => (
  <div>
    <div>
      <h2 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `black`, textDecoration: `none`, }}>
          {data.site.siteMetadata.title}
        </Link>
      </h2>
    </div>
  </div>
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
    render={data => <Header data={data} {...props} />}
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
