import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex-vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/LMZO-Documents/',
  title: "LMZO Documents",
  description: "Write Down My Own Thoughts Here",
  cleanUrls: true,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.38/dist/katex.min.css' }]
  ],
  markdown: {
    config: (md) => {
      md.use(markdownItKatex, {
        throwOnError: false,
        errorColor: '#cc0000',
        output: 'html'
      })
    },
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '项目',
        items: [
          { text: 'Phigros', link: '/Phigros' }
        ],
      }
    ],

    sidebar: [
      {
        text: '项目',
        items: [
          { text: 'Phigros', link: '/Phigros' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
