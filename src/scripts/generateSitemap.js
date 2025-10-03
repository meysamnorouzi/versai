#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * Generates sitemap.xml for the Versai Immigration Institute website
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = 'https://versai.ir'
const CURRENT_DATE = new Date().toISOString().split('T')[0]

const pages = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'daily',
    lastmod: CURRENT_DATE
  },
  {
    url: '/services',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/about',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/contact',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/articles',
    priority: 0.7,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/france-immigration',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/canada-immigration',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/financial-residence',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/study-abroad',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    url: '/dashboard',
    priority: 0.3,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  }
]

function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  sitemap += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
  sitemap += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n'
  sitemap += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n'

  pages.forEach(page => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${SITE_URL}${page.url}</loc>\n`
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
    sitemap += `    <priority>${page.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  return sitemap
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /dashboard/
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /articles/`
}

// Generate and write files
const sitemapContent = generateSitemap()
const robotsContent = generateRobotsTxt()

const publicDir = path.join(__dirname, '..', '..', 'public')

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8')
console.log('✅ sitemap.xml generated successfully')

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf8')
console.log('✅ robots.txt generated successfully')

console.log('\n📊 Sitemap Statistics:')
console.log(`- Total pages: ${pages.length}`)
console.log(`- High priority pages: ${pages.filter(p => p.priority >= 0.9).length}`)
console.log(`- Medium priority pages: ${pages.filter(p => p.priority >= 0.7 && p.priority < 0.9).length}`)
console.log(`- Low priority pages: ${pages.filter(p => p.priority < 0.7).length}`)

console.log('\n🎯 SEO Files Generated:')
console.log('- sitemap.xml (XML sitemap for search engines)')
console.log('- robots.txt (Crawler instructions)')
console.log('\n✨ SEO setup complete!')
