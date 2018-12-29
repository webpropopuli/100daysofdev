import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'

import Postroll from '../postroll'

import '.././layout.css'
import styles from './page-layout-css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(
      data // <<- render prop
    ) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: 'Gatsby blog, 100daysofcode, learning with purpose',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={styles.myHdrContainer}>{children}</div>

        <Postroll />
        <Footer />
        <footer>
          © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by
          some amazing guy at{' '}
          <a href="https://webpropopuli.com">webpropopuli</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
