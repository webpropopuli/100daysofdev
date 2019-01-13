/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 *  Gives us control over what's being created/registered in Gatsby
 *
 * Create a new page at an URL pointed to React <Component>
 */

const path = require('path')

// params passes in via Gatsby build tool
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          sort: { order: ASC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
              rawMarkdownBody
            }
          }
        }
      }
    `).then(results => {
      if (results.errors) {
        console.log(results.errors)
        return reject(results.errors)
      }

      const posts = results.data.allMarkdownRemark.edges
      results.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/layouts/post-layout.js'),
          context: {
            slug: node.frontmatter.slug,
            content: node.rawMarkdownBody,
            prev: index === 0 ? null : posts[index - 1],
            next: index === results.length - 1 ? null : posts[index + 1],
          },
        })
      })
      resolve()
    })
  })
}
