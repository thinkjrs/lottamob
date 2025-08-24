// scripts/gdoc-import.js
const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')
const { JSDOM } = require('jsdom')
const cheerio = require('cheerio')
const matter = require('gray-matter')
const slugify = require('slugify')

const DEFAULT_AUTHOR = 'lottamoberg'
const DEFAULT_LAYOUT = 'PostLayout'

const ZIP_PATH = path.resolve(
  process.argv[2] || `${process.env.HOME}/Downloads/May2025homepageupdate.zip`
)
const REPO_ROOT = path.resolve(process.argv[3] || `${process.env.HOME}/repos/lottamob`)
const OUT_DIR = path.join(REPO_ROOT, 'data', 'writings')
const PUBLIC_IMAGES_BASE = path.join(REPO_ROOT, 'public', 'static', 'images')
const TMP_DIR = path.join(REPO_ROOT, 'tmp', `gdoc-${Date.now()}`)

function toSlug(s) {
  return slugify((s || 'untitled').trim(), { lower: true, strict: true })
}
function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}
async function unzip(zipFile, outDir) {
  ensureDir(outDir)
  const buf = fs.readFileSync(zipFile)
  const zip = await JSZip.loadAsync(buf)
  for (const name of Object.keys(zip.files)) {
    const entry = zip.files[name]
    const dest = path.join(outDir, name)
    if (entry.dir) ensureDir(dest)
    else {
      ensureDir(path.dirname(dest))
      fs.writeFileSync(dest, await entry.async('nodebuffer'))
    }
  }
  return outDir
}
function findIndexHtml(root) {
  const stack = [root]
  let firstHtml = null
  while (stack.length) {
    const dir = stack.pop()
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const e of entries) {
      const p = path.join(dir, e.name)
      if (e.isDirectory()) stack.push(p)
      else if (e.isFile()) {
        if (e.name.toLowerCase() === 'index.html') return p
        if (!firstHtml && e.name.toLowerCase().endsWith('.html')) firstHtml = p
      }
    }
  }
  return firstHtml
}
function splitIntoBlocks($) {
  const blocks = []
  const paras = $('p')
  let i = 0
  while (i < paras.length) {
    const p = paras.eq(i)
    const txt = p.text().trim()
    const dateMatch = txt.match(/^(\d{4}-\d{2}-\d{2})$/)
    if (dateMatch) {
      const date = dateMatch[1]
      const p2 = paras.eq(i + 1)
      const titleRaw = (p2 && p2.text ? p2.text().trim() : '') || 'Untitled'
      const title = titleRaw.startsWith('#') ? titleRaw.replace(/^#\s*/, '') : titleRaw
      const $frag = cheerio.load('<div></div>')
      const container = $frag('div')
      let j = i + 2
      for (; j < paras.length; j++) {
        const pj = paras.eq(j)
        const t = pj.text().trim()
        if (/^\d{4}-\d{2}-\d{2}$/.test(t)) break
        container.append(pj.clone())
      }
      blocks.push({ date, title, $frag })
      i = j
      continue
    }
    i++
  }
  return blocks
}
function safeCopy(src, destDir, baseName) {
  ensureDir(destDir)
  const base = path.parse(baseName).name
  const ext = path.extname(baseName) || path.extname(src) || '.png'
  let candidate = path.join(destDir, base + ext)
  let k = 1
  while (fs.existsSync(candidate)) {
    candidate = path.join(destDir, `${base}-${k}${ext}`)
    k++
  }
  fs.copyFileSync(src, candidate)
  return candidate
}
async function htmlToMdx(html) {
  const { unified } = await import('unified')
  const rehypeParse = (await import('rehype-parse')).default
  const rehypeRemark = (await import('rehype-remark')).default
  const remarkGfm = (await import('remark-gfm')).default
  const remarkMdx = (await import('remark-mdx')).default
  const remarkStringify = (await import('remark-stringify')).default

  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkMdx)
    .use(remarkStringify, { fences: true, bullet: '-', listItemIndent: 'one' })
    .process(html)
  return String(file).trim()
}
async function processBlock(workRoot, block, docTitle) {
  const imagesDir = path.join(workRoot, 'images')
  const hasImages = fs.existsSync(imagesDir)
  const $ = block.$frag

  $('a').each((_, a) => {
    const href = $(a).attr('href')
    if (href) $(a).attr('href', href.replace(/&amp;/g, '&'))
  })

  const postSlug = toSlug(block.title || docTitle)
  const postImagesDir = path.join(PUBLIC_IMAGES_BASE, postSlug)
  ensureDir(postImagesDir)

  if (hasImages) {
    $('img').each((_, img) => {
      const srcAttr = $(img).attr('src')
      if (!srcAttr) return
      const localImg = path.join(workRoot, srcAttr)
      if (!fs.existsSync(localImg)) return
      const copied = safeCopy(localImg, postImagesDir, path.basename(localImg))
      const publicPath =
        '/' + path.relative(path.join(REPO_ROOT, 'public'), copied).split(path.sep).join('/')
      $(img).attr('src', publicPath)
      if (!$(img).attr('alt')) $(img).attr('alt', path.parse(copied).name)
      $(img).removeAttr('width').removeAttr('height').removeAttr('style')
    })
  }

  $('[style]').removeAttr('style')
  $('meta, script, style, font').remove()
  $('p:empty, span:empty, div:empty').remove()

  const bodyHtml = $('body').length ? $('body').html() || '' : $.root().html() || ''
  const contentMdx = await htmlToMdx(bodyHtml)
  const firstPara = contentMdx.split(/\n\n+/).find((s) => s && !s.startsWith('![](')) || ''
  const summary = firstPara.replace(/\n/g, ' ').slice(0, 320)

  const fm = matter.stringify(contentMdx, {
    title: (block.title || docTitle).trim(),
    date: block.date || new Date().toISOString().slice(0, 10),
    tags: [],
    draft: false,
    summary,
    authors: [DEFAULT_AUTHOR],
    layout: DEFAULT_LAYOUT,
  })

  ensureDir(OUT_DIR)
  const outFile = path.join(OUT_DIR, `${postSlug}.mdx`)
  fs.writeFileSync(outFile, fm + '\n')
  return outFile
}
async function run() {
  ensureDir(TMP_DIR)
  const unzipRoot = await unzip(ZIP_PATH, TMP_DIR)
  const indexPath = findIndexHtml(unzipRoot)
  if (!indexPath) {
    throw new Error(`index.html not found under ${unzipRoot}`)
  }

  const workRoot = path.dirname(indexPath)
  const html = fs.readFileSync(indexPath, 'utf8')
  const dom = new JSDOM(html)
  const docTitle = dom.window.document.title || 'Untitled'
  const $ = cheerio.load(html)

  const blocks = splitIntoBlocks($)
  if (!blocks.length) {
    blocks.push({
      date: new Date().toISOString().slice(0, 10),
      title: docTitle,
      $frag: cheerio.load($.root().html() || ''),
    })
  }

  const written = []
  for (const b of blocks) {
    const file = await processBlock(workRoot, b, docTitle)
    written.push(file)
    console.log(file)
  }
  console.log(`\nWrote ${written.length} post(s).`)
}
run().catch((e) => {
  console.error(e)
  process.exit(1)
})
