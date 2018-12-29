import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'
import SEO from '../components/seo'

const ToDo = () => (
  <Layout>
    <SEO title="100daysofcode todo list" />
    <h1>
      No, no, not <i>that kind</i> of todo list - no coding required.
    </h1>

    <ul>
      <li>Design what I 'really' want</li>
      <li>Get excerpts to cut where I want.</li>
    </ul>
  </Layout>
)

export default ToDo
