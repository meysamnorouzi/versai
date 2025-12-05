import { MetadataRoute } from 'next'

const SITE_URL = 'https://versai.ir'
const CURRENT_DATE = new Date().toISOString().split('T')[0]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      url: SITE_URL,
      lastModified: CURRENT_DATE,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/language-course`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/canada-express-entry`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/canada-immigration`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pr-france`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/france-office`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/france-study`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/france-visa`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/germany`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/italy`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sweden`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/turkey`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  return pages
}

