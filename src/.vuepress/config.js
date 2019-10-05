require('dotenv').config()
// References:
// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
// https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html
module.exports = ctx => ({
  title: '土澳码农 · Aussie Coder',
  description: '土澳码农的博客 · Aussie Coder\'s blog',
  locales: {
    '/': { lang: 'zh-CN' }
  },
  evergreen: true,
  plugins: [
    ['@vuepress/google-analytics', {
      ga: process.env.GOOGLE_ANALYTICS_ID
    }]
  ],
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'zh-CN',
    personalInfo: {
      nickname: '土澳码农',
      description: 'Aussie Coder',
      email: 'kenhuang.au@gmail.com',
      location: 'Melbourne, VIC',
      organization: 'Sportsbet',
      avatar: '/avatar.jpg',
      sns: {
        github: {
          account: 'kenberkeley',
          link: 'https://github.com/kenberkeley'
        },
        linkedin: {
          account: 'ken--huang',
          link: 'https://linkedin.com/in/ken--huang'
        },
        medium: {
          account: '@kenhuang.au',
          link: 'https://medium.com/@kenhuang.au'
        },
        zhihu: {
          account: 'kenberkeley',
          link: 'https://zhihu.com/people/kenberkeley'
        }
      }
    },
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
      { text: 'YouTube', link: 'https://youtube.com/channel/UCFdirk72XzSXmJ0qTgoTHFQ' }
    ],
    header: {
      showTitle: true,
    },
    footer: {
      custom: '欢迎订阅 <a href="https://youtube.com/channel/UCFdirk72XzSXmJ0qTgoTHFQ" target="_blank">我的 YouTube 频道</a>'
    },
    lastUpdated: true,
    comments: {
      platform: 'github',
      owner: 'kenberkeley',
      repo: 'blog',
      clientId: process.env.VSSUE_CLIENT_ID,
      clientSecret: process.env.VSSUE_CLIENT_SECRET,
      autoCreateIssue: ctx.isProd
    },
    pagination: {
      perPage: 20
    }
  }
})
