module.exports = (opts = {}) => {
  const { mdxLayouts = {} } = opts;
  return {
    siteMetadata: {
      title: 'How to GraphQL',
      description: 'GraphQL tutorials',
      keywords: 'GraphQL, Tutorials',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-typescript',
      'gatsby-transformer-remark',
      'gatsby-image',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-offline',
      {
        resolve: `gatsby-mdx`,
        options: {
          decks: [],
          defaultLayouts: {
            default: require.resolve('./src/components/postLayout.tsx'),
            ...mdxLayouts,
          },
          extensions: ['.mdx', '.md'],
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                classPrefix: 'language-',
                inlineCodeMarker: {
                  tsx: 'tsx',
                },
                aliases: {},
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'content',
          path: `${__dirname}/src/content`,
          ignore: ['**/.tsx*'],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
    ],
  };
};
