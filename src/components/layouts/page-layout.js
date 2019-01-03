import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'

//import Postroll from '../archives'

import '.././layout.css'
import styles from './page-layout-css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
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

        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div style={styles.myPageContainer}> {children}</div>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
