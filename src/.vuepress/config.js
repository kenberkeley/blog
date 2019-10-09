require('dotenv').config()
const extractPermalinkFromPost = require('./_utils/extractPermalinkFromPost')
const YOUTUBE_LINK = '<a href="https://www.youtube.com/channel/UCFdirk72XzSXmJ0qTgoTHFQ" target="_blank">Aussie Coder 土澳码农</a>'

// References:
// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
// https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html
module.exports = ctx => ({
  title: '土澳码农 Aussie Coder',
  locales: {
    '/': { lang: 'zh-CN' }
  },
  evergreen: true,
  plugins: [
    ['@vuepress/google-analytics', {
      ga: process.env.GOOGLE_ANALYTICS_ID
    }],
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-replace-link'))
    },
    // TODO：https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/62
    replaceLink (link, env) {
      // env could be {} or { loader: {}, frontmatter: {...}, relativePath: '...' }
      const curFilePath = env.relativePath
      if (
        curFilePath && curFilePath.startsWith('_posts/') && // in _posts/
        link.startsWith('.') && link.endsWith('.md') // relative path
      ) {
        return extractPermalinkFromPost(curFilePath, link)
      }
      return link
    }
  },
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'zh-CN',
    personalInfo: {
      nickname: 'Ken',
      description: `欢迎订阅我的 YouTube:<br>${YOUTUBE_LINK}`,
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
        }
      }
    },
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
      { text: 'YouTube', link: '/youtube/', exact: false },
      { text: '打赏', link: '/tip/', exact: false }
    ],
    header: {
      showTitle: true,
    },
    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: `欢迎订阅我的 YouTube 频道 ${YOUTUBE_LINK}<br>` +
        '欢迎<a href="/tip/">打赏</a>鼓励我继续产出，如果文章对你有帮助的话<br>' +
        '欢迎转载，所有文章均为原创，转载请注明出处'
    },
    lastUpdated: true,
    comments: {
      platform: 'github',
      owner: 'kenberkeley',
      repo: 'blog',
      clientId: process.env.VSSUE_CLIENT_ID,
      clientSecret: process.env.VSSUE_CLIENT_SECRET,
      autoCreateIssue: true
    },
    pagination: {
      perPage: 20
    }
  }
})
