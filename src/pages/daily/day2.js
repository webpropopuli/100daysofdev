import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/post-layout'
import SEO from '../../components/seo'

const Day2 = () => (
  <Layout>
    <SEO title="100daysofcode log Day2" />
    <h1>Day2 is better than 1</h1>
    <p>Today's thought</p>
    <blockquote>Excuses are the walls in the House of Failure</blockquote>
    <p>
      That cheerful quote came to me this morning as I thought about how much
      more I could have done yesterday if I wasn't wasting time.
      <br />
      I wanted to be much further along in Gatsby by now, as I'm know that I
      can't do daily blogs by manually creating pages like this.
      <br />
      Though it's pretty slick how easy Gatsby makes it to create content
      hierarchy - just create the tree you want in your /src directory and add a
      file.
      <br />
      But it's somewhat ugly as I have to write code <strong>and</strong>{' '}
      content together. I'll roll this into the finished blog when it's ready.
      Let's see how the day goes....
    </p>
    <Link to="/">home</Link>
  </Layout>
)

export default Day2
