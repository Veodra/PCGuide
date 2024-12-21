---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "给电脑小白的使用指南"
  tagline: 为对计算机有兴趣的电脑初学者而编
  actions:
    - theme: brand
      text: 阅读指南
      link: /guide
    - theme: alt
      text: 为指南做贡献
      link: /contribute

features:
  - icon: 🤔
    title: 易懂
    details: 为初学者而设计，让所有人都能看懂
  - icon: ⚡
    title: 便捷
    details: 响应式设计，手机也能轻松阅读
  - icon: 🏙️
    title: 现代
    details: 贴近生活使用，避免过时的信息
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, rgb(239, 184, 63) 25%, rgb(46, 175, 125) 50%, rgb(69, 120, 185) 75%);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #df56fe 50%, #69ecff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>