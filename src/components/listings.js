import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

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
        <article style={{ marginBottom: 20 }} key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          {node.frontmatter.date}
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>(more)</Link>
        </article>
      ))
    }
  />
)

export default Listings
