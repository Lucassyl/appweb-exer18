import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 18",
  description: "Revue de code documentée",
  base: '/appweb-exer18/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/Lucas-Sylvain' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Review TP1 Lucas', link: '/Lucas-Sylvain' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
