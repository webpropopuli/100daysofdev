import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layouts/page-layout'
import SEO from '../components/seo'

const ToDo = () => (
  <Layout>
    <SEO title="100daysofcode todo list" />
    <h2>
      No, no, not <i>that kind</i> of todo list - no coding required.
    </h2>

    <ul style={{ marginTop: 20 }}>
      <li> Design what I 'really' want</li>
      <li> Get excerpts to cut where I want - &lt;more&gt; tag?</li>
      <li>
        set transform origin on the logo (though I kinda like that it
        overflows...)
      </li>
      <li>Lose the stupid Gatsby astronaut</li>
      <li> Turn todos into a new taxonomy</li>
      <li>
        {' '}
        set each page to <code>min-height: 100vh</code>{' '}
      </li>
      <li> Pull in todos from Todoist?</li>
    </ul>
  </Layout>
)

export default ToDo
