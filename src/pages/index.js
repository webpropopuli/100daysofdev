import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Listings from '../components/listings'

const IndexPage = () => (
  <Layout>
    <SEO
      title="David Marlowe | Developer | 100daysofcode blog"
      keywords={[`gatsby`, `blog`, `react`]}
    />
    <h1>Hi peoples...</h1>
    <p>Building a Gatsby blog to cover my 100daysofcode journey</p>
    <Listings />
    <p>This is gonna be awesome.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image imgName="gatsby-astronaut.png" />
    </div>
    <Link to="/todo/">Todo list</Link>
  </Layout>
)

export default IndexPage
