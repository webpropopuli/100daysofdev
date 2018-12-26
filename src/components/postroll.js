import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
//import styles from './postroll-css'

const Postroll = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PostrollQuery {
        allMarkdownRemark {
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
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Earlier Posts</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li>{edge.node.frontmatter.title}</li>
          ))}
        </aside>
      </>
    )}
  />
)

Postroll.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Postroll
