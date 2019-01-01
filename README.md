This is my journal site for my first #100daysofcode.

To start if off on day one, I figured I'd learn Gatsby for a few of days and create the journal so that I'm learning _and_ doing something useful.

<h1 align="center">
  My Gatsby Notes
</h1>
Random notes about building it:
- use gatsby-cli also ```gatsby new myblog``` seems to work
- make sure everything is current. This thing pulls from everywhere and I lost an hour removing and re-adding things. Latest React, sharp, gatsby plugins etc.

##Day 2
Gatsby uses Reach Router instead of React Router. I have no clue why I care at the moment. One day, I'll wish I read this more times.

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

## Gatsby plugins are awesome

1. Helmet is for metadata
2. source-filesystem creates taxonomies and locations and monitors new path for content.
3. sitemap is obvious
4. remark is markdown related

##Making posts better

- Posts dir is up and I'm just refreshing on using Markdown. Once there's a template, then we have consistency.
  -Frontmatter matters. This connected my head back to WordPress and how a blog might be laid out internally.

##Creating pages programmatically

_itals with a link [link text here ](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## Deployment

1) Run gatsby build and attach any server-side errors that show up.
2) Just FTP the public dir up to shared hosting. Seriously - it's that easy.


[## Add more stuff
Look through the plugins, day-dream a bit and make it super cool.
