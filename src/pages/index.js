import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="David Marlowe | Developer | 100daysofcode blog"
      keywords={[`gatsby`, `blog`, `react`]}
    />
    <h1>Hi peoples...</h1>
    <p>Building a Gatsby blog to cover my 100daysofcode journey</p>
    <p>This is gonna be awesome.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/todo/">Todo list</Link>
  </Layout>
)

export default IndexPage
