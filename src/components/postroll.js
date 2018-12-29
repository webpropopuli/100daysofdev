import React from 'react'
//import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import './layout.css'
import styles from './postroll-css'

const QUERY_Postroll = graphql`
  query PostrollQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Postroll = ({ children }) => (
  <StaticQuery
    query={QUERY_Postroll}
    render={({ allMarkdownRemark }) => (
      <>
        <aside style={styles.myBackground}>
          <h3>Earlier Posts</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
)

// Postroll.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Postroll
