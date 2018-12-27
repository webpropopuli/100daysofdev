This is my journal site for my first #100daysofcode.

To start if off on day one, I figured I'd learn Gatsby for a few of days and create the journal so that I'm learning _and_ doing something useful.

<h1 align="center">
  My Gatsby Notes
</h1>
Random notes about building it:
- use gatsby-cli
- make sure everything is current. This thing pulls from everywhere and I lost an hour removing and re-adding things. Latest React, sharp, gatsby plugins etc.

##Day 2
Gatsby uses React Router instead of React Router

Assets:
Rather than dumping everything into a folder the HTML way, Gatsby is smarter. G can even convert small images into data URIs. Less requests, better life.

##Day 3
GraphQL: [http://localhost:8000/___graphql]
Data query lang. queries r kool...unlike REST api, we pass query to query component.
Name your queries - helps with internals and debugging

```
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}...
```

## Plugins are awesome

1. Helmet is for metadata
2. source-filesystem creates taxonomies and locations and monitors new path for content.

##Day4

- Posts dir is up and I'm just refreshing on using Markdown. Once there's a template, then we have consistency.
  -Frontmatter matters. This connected my head back to WordPress and how a blog might be laid out internally.

##Day6 - Creating pages programmatically

_itals with a link [link text here ](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
