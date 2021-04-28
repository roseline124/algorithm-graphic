const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Algorithm Visualizer",
    description: `don't think, see algorithm`,
    author: "@roseline124",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        algorithms: path.join(__dirname, "src/algorithms"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
  ],
}
