import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'
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

    <p>It's getting better every day...</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.2rem` }}>
      <Image imgName="gatsby-astronaut.png" />
    </div>
  </Layout>
)

export default IndexPage
