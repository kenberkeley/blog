require('dotenv-safe').config()
const safeExternalLinkGen = require('./_utils/safeExternalLinkGen')
const extractPermalinkFromPost = require('./_utils/extractPermalinkFromPost')

const TITLE = 'Aussie Coder 土澳码农'
const HOSTNAME = 'https://kenberkeley.github.io'
const ISSUES = { text: 'Issues', link: 'https://github.com/kenberkeley/blog/issues' }
const SUBSCRIBE_CN = { text: '邮件订阅', link: 'https://mailchi.mp/a019f810e55d/aussiecoder' }
const SUBSCRIBE_EN = { text: 'Email Subscribe', link: 'https://mailchi.mp/cb2708d60b30/aussiecoderken' }
const YOUTUBE = { text: TITLE, link: 'https://www.youtube.com/channel/UCFdirk72XzSXmJ0qTgoTHFQ' }

// References:
// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
// https://github.com/meteorlxy/vuepress-theme-meteorlxy/blob/master/docs/.vuepress/config.js
module.exports = ctx => ({
  title: TITLE,
  locales: {
    '/': { lang: 'en' }
  },
  evergreen: true,
  plugins: [
    'vuepress-plugin-check-md',
    ['@vuepress/google-analytics', {
      ga: process.env.GOOGLE_ANALYTICS_ID
    }],
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['vuepress-plugin-sitemap', {
      hostname: HOSTNAME
    }],
    ['vuepress-plugin-canonical', {
      baseURL: HOSTNAME,
      stripExtension: true
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
    lang: Object.assign(
      require('vuepress-theme-meteorlxy/lib/langs/en-US'),
      // https://github.com/meteorlxy/vuepress-theme-meteorlxy/blob/master/lib/langs/en-US.js#L4
      { posts: 'Articles' }
    ),
    personalInfo: {
      nickname: 'Ken',
      description: `YouTube:<br>${safeExternalLinkGen(YOUTUBE)}`,
      email: 'kenhuang.au@gmail.com',
      location: 'Melbourne, VIC',
      organization: 'Sportsbet',
      avatar: '/avatar.jpg',
      sns: {
        github: {
          account: 'kenberkeley',
          link: 'https://github.com/kenberkeley/blog'
        },
        linkedin: {
          account: 'ken--huang',
          link: 'https://linkedin.com/in/ken--huang'
        }
      }
    },
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Articles', link: '/posts/' },
      { text: 'BuyMeACoffee', link: '/tip/' },
      { text: 'YouTube', link: YOUTUBE.link },
      ISSUES
    ],
    header: {
      showTitle: true,
    },
    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: '<span style="font-size: 14px">' +
        '欢迎<a href="/tip/">打赏</a>鼓励我继续产出，如果文章对你有帮助的话<br>' +
        `欢迎订阅我的 YouTube 频道 ${safeExternalLinkGen(YOUTUBE)}<br>` +
        `欢迎${safeExternalLinkGen(SUBSCRIBE_CN)}，所有文章均为原创，转载请注明出处<br>` +
        `若有建议、意见或者其他疑问等，欢迎到 ${safeExternalLinkGen(ISSUES)} 交流<br>` +
        '<br>' +
        'You can <a href="/tip/">BuyMeACoffee</a> to encourage me if it helps<br>' +
        `This is my YouTube channel ${safeExternalLinkGen(YOUTUBE)}<br>` +
        `Welcome ${safeExternalLinkGen(SUBSCRIBE_EN)} / Repost with original link<br>` +
        `If any suggestions or questions, please raise in ${safeExternalLinkGen(ISSUES)}` +
      '</span>'
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
