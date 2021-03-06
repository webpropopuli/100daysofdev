import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'

import SEO from '../components/seo'

const AboutPage = () => (
  // I suspect this gets fed to React's render()...
  <Layout>
    <SEO
      title="David Marlowe, developer"
      keywords={[`about`, `David Marlowe`, `developer for hire`]}
    />
    <h1>Who's fault is this?</h1>
    <p>
      Hi. I'm David Marlowe, an old-school coder from the 80's (see "X-files")
      and rediscovering code after a *huge vacation. Fifteen years is enough of
      a break for me.
    </p>
    <p>Now I'm gonna go build something great.</p>
  </Layout>
)

export default AboutPage
