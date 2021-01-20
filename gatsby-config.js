module.exports = {
  siteMetadata: {
    title: `Mateusz Skrobiś - Front-End Developer`,
    description: `Frontend Developer, javascript, html, css`,
    author: `Mateusz Skrobiś`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ekg94fdnqwf9`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `G3YI_LzBjwnPBQnXgTezE-JwF7AqFtJMm7uXDND7YD0`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins"],
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
