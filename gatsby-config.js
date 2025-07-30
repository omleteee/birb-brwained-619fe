/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.birbwained.com`,
  },
  plugins: [],
}
module.exports = {
  siteMetadata: {
    title: `Birb Brained`,
    description: `A Flock of Artists - Creative collective specializing in rentals, commissions, collaborations and events.`,
    author: `@birbrained`,
    siteUrl: `https://birbrwained.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Birb Brained`,
        short_name: `Birb Brained`,
        start_url: `/`,
        background_color: `#f5f2e8`,
        theme_color: `#8b7ac7`,
        display: `minimal-ui`,
        icon: `src/images/birb-icon.png`, // This path is relative to the root of the site.
      },
    },
    // CSS processing
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
    // Font loading
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Georgia\:400,700`,
          `Crimson Text\:400,400i,600,700`
        ],
        display: 'swap'
      }
    },
    // PWA
    `gatsby-plugin-offline`,
  ],
}
