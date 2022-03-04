// .vuepress/config.js
module.exports = {
  title: 'Wubo-ui',
  base: '/wubo-ui',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      }, {
        text: 'Github',
        link: 'https://github.com/JCUT-WB'
      },
      {
        text: 'Npm',
        link:'/'
      }
    ],
    sidebar: [
      '/',
      //主页
      '/componentDocs/card'
    ]
  }
}