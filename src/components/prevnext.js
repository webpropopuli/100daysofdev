// In gatsby-node.js we set 'prev' and 'next' in the 'context' field of createPage.

import React from 'react'
import { Link } from 'gatsby'
import styles from './prevnext-css'

const PrevNext = props => {
  const { prev, next } = props

  return (
    <div>
      <div style={styles.PrevNext}>
        <div style={styles.lnkPrev}>
          {prev && (
            <Link to={`/posts${prev.frontmatter.slug}`}>
              Prev {prev.frontmatter.title}
            </Link>
          )}
        </div>
        <div style={styles.lnkNext}>
          {next && (
            <Link to={`/posts${next.frontmatter.slug}`}>
              Next {next.frontmatter.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrevNext
