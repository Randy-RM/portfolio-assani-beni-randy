import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Assani Beni Randy RM`,
    siteUrl: process.env.HOME_LOCATION,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/src/contents`,
      },
      __key: "contents",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 1,
      },
    },
  ],
};

export default config;
