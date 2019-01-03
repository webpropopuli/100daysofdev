import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header-css'

//! a variable that is an image. Easy. Thanks webpack
import logo from '../images/wpp-logo.png'

const Header = ({ siteTitle, menuLinks }) => (
  <div style={styles.Header}>
    <div style={styles.myHdrContainer}>
      <div style={styles.myHdrFlexRow}>
        <img style={styles.myLogoImg} src={logo} alt="webpropopuli" />
        <div>
          <h1 style={styles.title}>
            <Link to="/" style={styles.myLink}>
              {siteTitle}
            </Link>
          </h1>
          <p style={styles.subtitle}>...a #100daysofcode journal</p>
        </div>
      </div>
      <nav style={styles.menuNav}>
        {menuLinks.map(link => (
          <li key={link.name} style={styles.menuNavLi}>
            <Link to={link.link} style={styles.menuNavLi}>
              {link.name}{' '}
            </Link>
          </li>
        ))}
      </nav>
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
