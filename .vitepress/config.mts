import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "给电脑小白的电脑使用指南",
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
        text: '序言',
        items: [
          { text: 'Veodra PCGuide 序言', link: '/guide/' }
        ]
      }, 
      {
        text: '第一章：电脑基础知识',
        items: [
          { text: '1. 认识电脑硬件', link: '/guide/general/understand-computer-hardware' },
          { text: '2. 开关机操作', link: '/guide/general/power-on-off-operation' }
        ]
      },
      {
        text: '间章：分系统教学时间到！',
        items: [
          { text: '来看看你的电脑是什么系统吧', link: '/guide/which-system' }
        ]
      },
      {
        text: '第二章：电脑基础操作与界面（Windows版）',
        items: [
          { text: '1. Windows 系统简介', link: '/guide/windows/basic-operation-interface/os-introduction'},
          { text: '2. 鼠标操作', link: '/guide/windows/basic-operation-interface/mouse-operation'},
          { text: '3. 理解操作系统界面', link: '/guide/windows/basic-operation-interface/understand-os-interfaces'},
          { text: '4. 文件管理', link: '/guide/windows/basic-operation-interface/file-management'},
          { text: '5. 程序安装与启动', link: '/guide/windows/basic-operation-interface/program-installation-start'},
          { text: '6. 调整系统设置', link: '/guide/windows/basic-operation-interface/adjust-system-settings'}
        ]
      },
      {
        text: '第二章：电脑基础操作与界面（macOS版）',
        items: [
          { text: '暂未编写', link: '/guide/macos/'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Veodra/PCGuide' }
    ]
  }
})
