module.exports = {
  siteMetadata: {
    title: "Carter Stanton Dev",
    description: "The portfolio website for Carter Stanton.",
    author: {
      name: "Carter Stanton",
      url: "https://linkedin.com/carter-stanton-dev",
      email: "contact@carterstanton.dev",
    },
    siteUrl: "https://carterstanton.dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://carterstanton.dev",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
  ],
};
