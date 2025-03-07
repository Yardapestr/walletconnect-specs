// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WalletConnect Specs",
  tagline:
    "WalletConnect is an open protocol to communicate securely between Dapps and Wallets.",
  url: "https://specs.walletconnect.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "walletconnect",
  projectName: "walletconnect-specs",
  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      defer: true,
      "data-domain": "specs.walletconnect.com",
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: false,
          lastVersion: "current",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/WalletConnect/walletconnect-specs/blob/main/",
          versions: {
            current: {
              badge: false,
              label: "v2.x",
              path: "2.0",
            },
          },
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        items: [
          {
            type: "html",
            value:
              '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Specs<span></a>',
          },
          {
            href: "https://github.com/walletconnect/",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },

          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Main Docs",
                to: "https://docs.reown.com",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/WalletConnect/walletconnect-monorepo/discussions",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/kdTQHQ6AFQ",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/reown_",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://reown.com/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/walletconnect/walletconnect-specs/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reown, Inc.`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
        additionalLanguages: ["swift", "kotlin"],
      },
      algolia: {
        appId: "O3QBOMGZYQ",
        apiKey: "bbc3d1cf09dcdc00486f6abb9b276826",
        indexName: "specs-walletconnect",
        contextualSearch: true,
      },
    },
};

module.exports = config;
