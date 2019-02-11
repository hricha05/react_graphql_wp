import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import { Card, CardHeader, CardContent, CardActionArea, Divider, Typography } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles"

import Layout from '../components/layout'

const styles = {
  root: {
    marginTop: 50,
    padding: 0,
    // borderTop: '0.5px solid black'
  },
  posts: {
    // marginBottom: 50,
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 10,
    margin: '10px auto',
    padding: 50,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}

class PostsTemplate extends Component {
    render() {
        const data = this.props.data
        const {classes} = this.props

        return <Layout>
            <div className={classes.root}>
              <Typography component="h1" variant="h2" align='center'>
                Events
              </Typography>
              <Divider component="hr" variant="fullWidth" />
              <Grid container={true} alignContent="space-around" alignItems="center" spacing={24}>
                {data.allWordpressPost.edges.map(({ node }) => (
                  <Grid
                    key={node.slug}
                    className={classes.posts}
                    item
                    md={4}
                    zeroMinWidth
                  >
                    <Card
                      raised={true}
                      square={true}
                      className={classes.card}
                    >
                      <CardActionArea>
                        <Link
                          to={'post/' + node.slug}>
                          <CardHeader title={node.title} />
                        </Link>
                        <CardContent
                          dangerouslySetInnerHTML={{
                            __html: node.excerpt,
                          }}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Layout>
    }
}

PostsTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default withStyles(styles)(PostsTemplate)

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                }
            }
        }
    }
`