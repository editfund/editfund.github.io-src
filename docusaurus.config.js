// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Set the env variable to false so the excalidraw npm package doesn't throw
// process undefined as docusaurus doesn't expose env variables by default
//process.env.IS_PREACT = "false";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edit.Fund',
  tagline: '编辑、基金、财经文档、预言、投资组合、投资策略',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://edit.fund',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'editfund', // Usually your GitHub org/user name.
  projectName: 'editfund.github.io-src', // Usually your repo name.
  
  customFields: {
    // Put your custom environment here
    IS_PREACT: 'false',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          //remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        docs: {
          sidebarPath: './sidebars.js',
          // sidebarCollapsible: false,
          // sidebarCollapsed: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/editfund/editfund.github.io-src/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/editfund/editfund.github.io-src/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // https://github.com/easyops-cn/docusaurus-search-local#theme-options
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
    '@docusaurus/theme-live-codeblock',
  ],
  plugins: [
    '@docusaurus/theme-live-codeblock',
    //['drawio', { lib: 'https://editfund-founder.github.io/drawio/src/main/webapp/js/viewer.min.js' }],
    ['drawio', { lib: 'https://cdn-drawio.deno.dev/drawio/viewer.min.js' }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Edit.Fund',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '产品文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: '/buy',
            label: '购买',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品',
            items: [
              {
                label: 'AI(云服务)',
                to: '/docs/ai/CSV转drawio表格/',
              },
              {
                label: 'CY(图)',
                to: '/docs/cy/intro',
              },
              {
                label: 'EF(理财Git)',
                to: '/docs/ef/intro',
              },
              {
                label: 'SK(屏幕键)',
                to: '/docs/sk/intro',
              },
              {
                label: 'WK(手机做电脑键盘)',
                to: '/docs/wk/intro',
              },
            ],
          },
          {
            title: '用户社区',
            items: [
              {
                label: 'Mastodon',
                href: 'https://mas.to/@editfund',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/orgs/editfund/discussions',
              },
            ],
          },
          {
            title: '开发者',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/editfund/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '网站地图',
                to: '/cy',
              },
              {
                label: '网站地图',
                to: 'https://edit.fund/html-cy/wasm/index.html',
              },
              {
                label: '视频',
                to: '/video',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Edit.Fund`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    }),
};

export default config;
