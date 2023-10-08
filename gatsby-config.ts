import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Open Money Market`,
    siteUrl: `https://www.xbank.plus`,
    author: 'xBank',
    description:
      'xBank-open money market matches money demands and supplies to Web3 new adopters with money leverages via NFT Buy Now Pay Later (BNPL), Collateral Selling and Trading Up services',
    twitterUsername: `xBank_Official`,
    keyword:
      'best web 3 projects,web 3 benefits,web3 community,xbank3.0,xbank,xbank web3,xbank plus',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `xBank`,
        short_name: `xBank`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@': 'src',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,

        // theme: theme,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     name: `locale`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`en`, `zh`, `de`],
    //     defaultLanguage: `en`,
    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     // siteUrl: `https://example.com`,
    //     // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
    //     trailingSlash: 'always',
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //   },
    // },
  ],
};

export default config;
