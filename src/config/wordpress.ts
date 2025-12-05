// WordPress API Configuration
export const WORDPRESS_CONFIG = {
  // API Endpoints
  apiUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2',
  siteUrl: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || 'https://your-wordpress-site.com',
  
  // Authentication
  apiKey: process.env.NEXT_PUBLIC_WORDPRESS_API_KEY || '',
  username: process.env.NEXT_PUBLIC_WORDPRESS_USERNAME || '',
  password: process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD || '',
  
  // Custom Endpoints
  customEndpoints: {
    services: '/versai/services',
    successStories: '/versai/success-stories',
    faqs: '/versai/faqs',
    consultation: '/versai/consultation',
    testimonials: '/versai/testimonials',
    countries: '/versai/countries',
    visaTypes: '/versai/visa-types'
  },
  
  // API Settings
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000,
  
  // Caching
  cacheTimeout: 5 * 60 * 1000, // 5 minutes
  enableCache: true,
  
  // Content Settings
  contentSettings: {
    stripHtml: true,
    maxExcerptLength: 200,
    enableFeaturedImage: true,
    enableCategories: true,
    enableTags: true,
    enableDate: true
  },
  
  // Pagination
  defaultPerPage: 10,
  maxPerPage: 100,
  
  // Error Handling
  showErrors: process.env.NODE_ENV === 'development',
  logErrors: true,
  
  // Security
  enableCORS: true,
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://versai.ir',
    'https://www.versai.ir'
  ]
}

// WordPress API Headers
export const getWordPressHeaders = () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  // Add authentication if available
  if (WORDPRESS_CONFIG.apiKey) {
    headers['Authorization'] = `Bearer ${WORDPRESS_CONFIG.apiKey}`
  } else if (WORDPRESS_CONFIG.username && WORDPRESS_CONFIG.password) {
    const credentials = btoa(`${WORDPRESS_CONFIG.username}:${WORDPRESS_CONFIG.password}`)
    headers['Authorization'] = `Basic ${credentials}`
  }

  return headers
}

// WordPress API URLs
export const getWordPressUrls = () => {
  return {
    posts: `${WORDPRESS_CONFIG.apiUrl}/posts`,
    pages: `${WORDPRESS_CONFIG.apiUrl}/pages`,
    media: `${WORDPRESS_CONFIG.apiUrl}/media`,
    categories: `${WORDPRESS_CONFIG.apiUrl}/categories`,
    tags: `${WORDPRESS_CONFIG.apiUrl}/tags`,
    users: `${WORDPRESS_CONFIG.apiUrl}/users`,
    comments: `${WORDPRESS_CONFIG.apiUrl}/comments`,
    custom: {
      services: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.services}`,
      successStories: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.successStories}`,
      faqs: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.faqs}`,
      consultation: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.consultation}`,
      testimonials: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.testimonials}`,
      countries: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.countries}`,
      visaTypes: `${WORDPRESS_CONFIG.apiUrl}${WORDPRESS_CONFIG.customEndpoints.visaTypes}`
    }
  }
}

// WordPress Content Types
export const WORDPRESS_CONTENT_TYPES = {
  POST: 'post',
  PAGE: 'page',
  MEDIA: 'media',
  CATEGORY: 'category',
  TAG: 'tag',
  USER: 'user',
  COMMENT: 'comment'
} as const

// WordPress Post Status
export const WORDPRESS_POST_STATUS = {
  PUBLISH: 'publish',
  DRAFT: 'draft',
  PRIVATE: 'private',
  PENDING: 'pending',
  FUTURE: 'future',
  TRASH: 'trash'
} as const

// WordPress Post Formats
export const WORDPRESS_POST_FORMATS = {
  STANDARD: 'standard',
  ASIDE: 'aside',
  CHAT: 'chat',
  GALLERY: 'gallery',
  LINK: 'link',
  IMAGE: 'image',
  QUOTE: 'quote',
  STATUS: 'status',
  VIDEO: 'video',
  AUDIO: 'audio'
} as const

// WordPress Custom Fields for Versai
export const VERSAI_CUSTOM_FIELDS = {
  SERVICE_TYPE: 'versai_service_type',
  VISA_TYPE: 'versai_visa_type',
  COUNTRY: 'versai_country',
  DURATION: 'versai_duration',
  PRICE: 'versai_price',
  FEATURED: 'versai_featured',
  PRIORITY: 'versai_priority',
  META_TITLE: 'versai_meta_title',
  META_DESCRIPTION: 'versai_meta_description',
  SEO_KEYWORDS: 'versai_seo_keywords'
} as const

// WordPress Categories for Versai
export const VERSAI_CATEGORIES = {
  SERVICES: 'services',
  SUCCESS_STORIES: 'success-stories',
  FAQ: 'faq',
  TESTIMONIALS: 'testimonials',
  NEWS: 'news',
  ARTICLES: 'articles',
  COUNTRIES: 'countries',
  VISA_TYPES: 'visa-types'
} as const

// WordPress Tags for Versai
export const VERSAI_TAGS = {
  FRANCE: 'france',
  CANADA: 'canada',
  IMMIGRATION: 'immigration',
  STUDY: 'study',
  WORK: 'work',
  FAMILY: 'family',
  INVESTMENT: 'investment',
  STUDENT_VISA: 'student-visa',
  WORK_VISA: 'work-visa',
  PERMANENT_RESIDENCE: 'permanent-residence'
} as const
