// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DEALER MANAGEMENT SYSTEM',
  tagline: 'User Guide',
  url: 'https://dms-service.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-KALLA.ico',
  organizationName: 'CICT KALLA GROUP', // Usually your GitHub org/user name.
  projectName: 'dmsservices', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-lunr-search"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'KALLA Project Logo',
          src: 'img/logokg.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'systemoverview',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'blog', label: 'FAQ', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} DMS Services, Inc. Built with CICT Kalla Group.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

        //imageZoom: {
          // CSS selector to apply the plugin to, defaults to '.markdown img'
          //selector: '.markdown img',
          // Optional medium-zoom options
          // see: https://www.npmjs.com/package/medium-zoom#options
          // options: {
          //   margin: 24,
          //   background: '#BADA55',
          //   scrollOffset: 0,
          //   container: '#zoom-container',
          //   template: '#zoom-template',
          // },
        //},


    }),
};

module.exports = config;
