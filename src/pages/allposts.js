import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'
import SEO from '../components/seo'
import Listings from '../components/listings'

const styles = {
  pageContainer: {
    background: '#eee',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: 10,
  },
}

const AllPosts = () => (
  <Layout>
    <SEO title="100daysofcode blog entries" />
    <h1>All My Stuff...</h1>{' '}
    <div style={styles.pageContainer}>
      <div>
        <Listings />
      </div>
      <div>text for sidebar</div>
    </div>
  </Layout>
)

export default AllPosts
