import { SEO_CONFIG } from '../config/seo'

export interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export const generateSitemap = (): string => {
  const baseUrl = SEO_CONFIG.siteUrl
  const currentDate = new Date().toISOString().split('T')[0]

  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/articles`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/france-immigration`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/canada-immigration`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/financial-residence`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/study-abroad`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }
  ]

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  sitemap += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
  sitemap += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n'
  sitemap += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n'

  urls.forEach(url => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${url.loc}</loc>\n`
    sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`
    sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`
    sitemap += `    <priority>${url.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  return sitemap
}

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SEO_CONFIG.siteUrl}/sitemap.xml

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
