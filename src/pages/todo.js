import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ToDo = () => (
  <Layout>
    <SEO title="100daysofcode todo list" />
    <h1>
      No, no, not <i> that kind</i> of todo list
    </h1>

    <p>
      <ul>
        <li>Clean up posts/pages for first 4 days to get a template</li>
        <li>Remove 'page' Day2 as it's a post now</li>
      </ul>
    </p>
    <Link to="/">home</Link>
  </Layout>
)

export default ToDo
