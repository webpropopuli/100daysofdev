//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './footer-css'

const Footer = ({ siteTitle }) => (
  <div style={styles.Footer}>
    <div style={styles.ftrContainer}>
      <div style={styles.myRow}>
        <h3 style={{ margin: 0 }}>
          <p>This is my amazing footer</p>
        </h3>
        <p> Honestly, I don't have much to say down here...</p>
        <a href="https://twitter.com/webpropopuli/" style={styles.myLink}>
          Tweet me
        </a>
      </div>{' '}
    </div>
    <div style={styles.ftrCredits}>
      © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by some
      amazing guy at <a href="https://webpropopuli.com">webpropopuli</a>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
