import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "给电脑小白的使用指南",
  description: "为对计算机有兴趣的电脑初学者而编",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '贡献', link: '/contribute/'}
    ],

    sidebar: [
      {
        text: '计算机基础知识',
        items: [
          { text: '基础知识入门 🎉', link: '/guide/' }
        ]
      }, 
      {
        text: 'Windows 使用指南',
        items: [
          { text: 'Windows 索引', link: '/guide/windows/' },
          { text: '拿到电脑后，我该怎么做 🤔', link: '/guide/windows/first' },
          { text: '假如你的电脑乱糟糟 🤯', link: '/guide/windows/clean-rubbish' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Elatitech/ComputerGuideForNoobs' }
    ]
  }
})
