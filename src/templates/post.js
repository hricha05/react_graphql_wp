import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return <Layout>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
  }
}

PostTemplate.PropTypes = {
    data: PropTypes.shape
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
