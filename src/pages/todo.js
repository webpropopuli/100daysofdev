import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ToDo = () => (
  <Layout>
    <SEO title="100daysofcode todo list" />
    <h1>
      No, no, not <i>that kind</i> of todo list - no coding required.
    </h1>

    <ul>
      <li>Remove 'page' Day2 as it's a post now</li>
      <li>Add some decent styling somehow</li>
    </ul>

    <Link to="/">home</Link>
  </Layout>
)

export default ToDo
