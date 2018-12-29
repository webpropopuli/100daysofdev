import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './footer-css'

const Footer = ({ siteTitle }) => (
  <div style={styles.Footer}>
    <div style={styles.myFtrContainer}>
      <div style={styles.myFtrContent}>
        <h3 style={{ margin: 0 }}>
          <p>This is my amazing footer</p>
        </h3>
        <Link to="https://twitter.com/webpropopuli/" style={styles.myLink}>
          Twitter me
        </Link>
        <div style={styles.ftrNav}>
          <Link to="/">Home</Link>
          <Link to="/allposts">Blog</Link>
          <Link to="/todo">Todo List</Link>
        </div>
      </div>
    </div>
    © 2019, Built with <Link to="https://www.gatsbyjs.org">Gatsby</Link> by some
    amazing guy at <Link to="https://webpropopuli.com">webpropopuli</Link>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
