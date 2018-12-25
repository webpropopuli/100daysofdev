import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header-css'

//! a variable that is an image. Easy. Thanks webpack
import logo from '../images/wpp-logo.png'

const Header = ({ siteTitle }) => (
  <div style={styles.myHeader}>
    <div style={styles.myHdrContainer}>
      <div style={styles.myHdrContent}>
        <img style={styles.myLogoImg} src={logo} alt="logo" />
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={styles.myLink}>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
