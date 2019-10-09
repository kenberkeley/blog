const path = require('path')
const matter = require('gray-matter')

const SRC = path.resolve(__dirname, '../../')
const cache = {}

/**
 * @param  {string} curFilePath
 * @param  {string} relFilePath
 * @return {string} - frontmatter.permalink in relFilePath
 *
 * e.g.
 * const curFilePath = '_posts/my-it-job-hunting-experience-in-australia/0-preface/index.md'
 * const relFilePath = '../5-postface/index.md'
 * extractPermalinkFromPost(curFilePath, relFilePath) // '/posts/my-it-job-hunting-experience-in-australia/postface'
 */
module.exports = function extractPermalinkFromPost (curFilePath, relFilePath) {
  const curFileFullPath = path.join(SRC, curFilePath)
  const targetFileFullPath = path.resolve(path.dirname(curFileFullPath), relFilePath)

  const cachedPermalink = cache[targetFileFullPath]
  if (cachedPermalink) return cachedPermalink

  const { data: { permalink } } = matter.read(targetFileFullPath)
  if (!permalink) {
    throw new Error(`No permalink for ${targetFileFullPath}`)
  }
  return cache[targetFileFullPath] = permalink
}
