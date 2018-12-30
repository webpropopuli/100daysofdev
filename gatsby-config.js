module.exports = {
  siteMetadata: {
    title: `100daysofdavid`,
    description: `Doing #100daysofcode. I'm David. Get it?`,
    author: `david@webpropopuli`,
    siteUrl: 'https://100days.webpropopuli.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100-days-of-david`,
        short_name: `100days`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',
    {
      // Create posts dir named 'posts'
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      // Create posts dir named 'posts'
      resolve: 'gatsby-transformer-remark',
      options: {
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-plugin-sitemap',
  ],
}
