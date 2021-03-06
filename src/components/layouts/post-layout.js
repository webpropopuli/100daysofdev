import React, { Component } from 'react'
import Layout from './page-layout'
import PrevNext from '../prevnext'

import { graphql } from 'gatsby'

// Page queries: this is a registered page. These take params
// Static queries are use anywhere but don't take params and can't use context

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { prev, next } = this.props.pageContext

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        slug
        category
      }
    }
  }
`
