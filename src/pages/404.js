import React from 'react'

import Layout from '../components/layouts/page-layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Derp</h1>
    <p>You just hit a route that doesn&#39;t exist... OMG the sadness.</p>
  </Layout>
)

export default NotFoundPage
