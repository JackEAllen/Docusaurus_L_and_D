// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IBEX Experiment Control Software',
  tagline: 'Controls Systems are Cool!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/IBEX_logo.jpg',
  organizationName: 'ISISComputingGroup', // Usually your GitHub org/user name.
  projectName: 'IBEX', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IBEX',
        logo: {
          alt: 'IBEX Logo',
          src: 'img/IBEX_logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ISISComputingGroup/IBEX',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'STFC ISIS Website',
                href: 'https://www.isis.stfc.ac.uk/Pages/IBEX.aspx',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ISISComputingGroup/IBEX',
              },
              {
                label: 'Sharepoint',
                href: 'https://stfc365.sharepoint.com/sites/isis-hub/SitePages/ISIS-Experiment-Controls.aspx',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ISISComputingGroup/IBEX',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IBEX Experiment Controls Group, ISIS, STFC, UKRI`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
