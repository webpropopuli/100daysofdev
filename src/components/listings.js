import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import styles from './listings-css.js'

const QUERY_Listings = graphql`
  query BlogList {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listings = () => (
  <StaticQuery
    query={QUERY_Listings}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <article style={styles.article} key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <div style={styles.date}>{node.frontmatter.date}</div>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`} style={styles.read_more}>
            (more)
          </Link>
        </article>
      ))
    }
  />
)

export default Listings
