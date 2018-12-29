import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './footer-css'

const Footer = ({ siteTitle }) => (
  <div style={styles.myFooter}>
    <div style={styles.myFtrContainer}>
      <div style={styles.myFtrContent}>
        <h1 style={{ margin: 0 }}>
          <p>This is my amazing footer</p>
          <Link to="https://twitter.com/webpropopuli/" style={styles.myLink}>
            Twitter me
          </Link>
        </h1>
      </div>
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
