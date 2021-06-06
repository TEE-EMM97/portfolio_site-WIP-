const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.name,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-remark-emojis",
      options: {
        // Deactivate the plugin globally (default: true)
        active: true,
        // Add a custom css class
        class: "emoji-icon",
        class: "emoji-100",
        // In order to avoid pattern mismatch you can specify
        // an escape character which will be prepended to the
        // actual pattern (e.g. `#:poop:`).
        escapeCharacter: "#", // (default: '')
        // Select the size (available size: 16, 24, 32, 64)
        size: 64,
        // Add custom styles
        styles: {
          display: "inline",
          margin: "0",
          "margin-top": "1px",
          position: "relative",
          top: "5px",
          width: "25px",
        },
      },
    },`gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
