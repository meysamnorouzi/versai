import { WORDPRESS_CONFIG, VERSAI_CUSTOM_FIELDS } from '../config/wordpress'
import { WordPressPost, WordPressMedia, WordPressCategory } from '../types'

// WordPress API Helper Functions

/**
 * Format WordPress post content for display
 */
export const formatWordPressContent = (content: string): string => {
  if (!content) return ''
  
  return content
    .replace(/<p>/g, '<p class="mb-4">')
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-6 text-gray-900">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-4 text-gray-800">')
    .replace(/<h3>/g, '<h3 class="text-xl font-medium mb-3 text-gray-700">')
    .replace(/<h4>/g, '<h4 class="text-lg font-medium mb-2 text-gray-700">')
    .replace(/<h5>/g, '<h5 class="text-base font-medium mb-2 text-gray-700">')
    .replace(/<h6>/g, '<h6 class="text-sm font-medium mb-2 text-gray-700">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-2">')
    .replace(/<li>/g, '<li class="text-gray-700">')
    .replace(/<blockquote>/g, '<blockquote class="border-r-4 border-versai-red-500 pr-4 py-2 mb-4 bg-gray-50">')
    .replace(/<a href="/g, '<a href="' + WORDPRESS_CONFIG.siteUrl + '/')
    .replace(/<img/g, '<img class="max-w-full h-auto rounded-lg mb-4"')
    .replace(/<table>/g, '<table class="min-w-full divide-y divide-gray-200 mb-4">')
    .replace(/<thead>/g, '<thead class="bg-gray-50">')
    .replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">')
    .replace(/<th>/g, '<th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">')
    .replace(/<td>/g, '<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">')
}

/**
 * Strip HTML tags from content
 */
export const stripHtml = (html: string): string => {
  if (!html) return ''
  
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

/**
 * Generate excerpt from content
 */
export const generateExcerpt = (content: string, maxLength: number = 200): string => {
  const plainText = stripHtml(content)
  if (plainText.length <= maxLength) return plainText
  
  return plainText.substring(0, maxLength).trim() + '...'
}

/**
 * Format WordPress date to Persian
 */
export const formatWordPressDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Get featured image URL from WordPress post
 */
export const getFeaturedImageUrl = (post: WordPressPost, size: string = 'large'): string => {
  if (!post.featured_media) return ''
  
  return `${WORDPRESS_CONFIG.siteUrl}/wp-content/uploads/${post.featured_media}-${size}.jpg`
}

/**
 * Get WordPress media URL
 */
export const getMediaUrl = (media: WordPressMedia, size: string = 'large'): string => {
  if (!media) return ''
  
  // Try to get specific size first
  if (media.media_details?.sizes?.[size]?.source_url) {
    return media.media_details.sizes[size].source_url
  }
  
  // Fallback to original URL
  return media.source_url
}

/**
 * Get post category names
 */
export const getPostCategories = (post: WordPressPost, categories: WordPressCategory[]): string[] => {
  if (!post.categories || !categories.length) return []
  
  return post.categories
    .map(catId => categories.find(cat => cat.id === catId)?.name)
    .filter(Boolean) as string[]
}

/**
 * Get post tag names
 */
export const getPostTags = (post: WordPressPost, tags: any[]): string[] => {
  if (!post.tags || !tags.length) return []
  
  return post.tags
    .map(tagId => tags.find(tag => tag.id === tagId)?.name)
    .filter(Boolean) as string[]
}

/**
 * Check if post is featured
 */
export const isFeaturedPost = (post: WordPressPost): boolean => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.FEATURED] === '1' || 
         post.meta?.[VERSAI_CUSTOM_FIELDS.FEATURED] === true
}

/**
 * Get post priority
 */
export const getPostPriority = (post: WordPressPost): number => {
  return parseInt(post.meta?.[VERSAI_CUSTOM_FIELDS.PRIORITY] || '0')
}

/**
 * Get post service type
 */
export const getPostServiceType = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.SERVICE_TYPE] || ''
}

/**
 * Get post visa type
 */
export const getPostVisaType = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.VISA_TYPE] || ''
}

/**
 * Get post country
 */
export const getPostCountry = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.COUNTRY] || ''
}

/**
 * Get post price
 */
export const getPostPrice = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.PRICE] || ''
}

/**
 * Get post duration
 */
export const getPostDuration = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.DURATION] || ''
}

/**
 * Get post SEO title
 */
export const getPostSEOTitle = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.META_TITLE] || post.title.rendered
}

/**
 * Get post SEO description
 */
export const getPostSEODescription = (post: WordPressPost): string => {
  return post.meta?.[VERSAI_CUSTOM_FIELDS.META_DESCRIPTION] || 
         generateExcerpt(post.excerpt.rendered, 160)
}

/**
 * Get post SEO keywords
 */
export const getPostSEOKeywords = (post: WordPressPost): string[] => {
  const keywords = post.meta?.[VERSAI_CUSTOM_FIELDS.SEO_KEYWORDS]
  if (!keywords) return []
  
  return keywords.split(',').map((keyword: string) => keyword.trim()).filter(Boolean)
}

/**
 * Build WordPress API URL with parameters
 */
export const buildWordPressUrl = (
  endpoint: string,
  params: Record<string, any> = {}
): string => {
  const url = new URL(endpoint, WORDPRESS_CONFIG.apiUrl)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value.toString())
    }
  })
  
  return url.toString()
}

/**
 * Handle WordPress API errors
 */
export const handleWordPressError = (error: any): { message: string; code: string } => {
  if (error.response) {
    // Server responded with error status
    const status = error.response.status
    const data = error.response.data
    
    switch (status) {
      case 400:
        return { message: 'درخواست نامعتبر', code: 'BAD_REQUEST' }
      case 401:
        return { message: 'عدم دسترسی - لطفاً وارد شوید', code: 'UNAUTHORIZED' }
      case 403:
        return { message: 'دسترسی غیرمجاز', code: 'FORBIDDEN' }
      case 404:
        return { message: 'مطلب یافت نشد', code: 'NOT_FOUND' }
      case 429:
        return { message: 'تعداد درخواست‌ها بیش از حد مجاز', code: 'TOO_MANY_REQUESTS' }
      case 500:
        return { message: 'خطای سرور', code: 'SERVER_ERROR' }
      default:
        return { 
          message: data?.message || 'خطای نامشخص', 
          code: `HTTP_${status}` 
        }
    }
  } else if (error.request) {
    // Request was made but no response received
    return { message: 'خطا در ارتباط با سرور', code: 'NETWORK_ERROR' }
  } else {
    // Something else happened
    return { message: 'خطای غیرمنتظره', code: 'UNKNOWN_ERROR' }
  }
}

/**
 * Validate WordPress post data
 */
export const validateWordPressPost = (post: any): post is WordPressPost => {
  return (
    post &&
    typeof post.id === 'number' &&
    post.title &&
    typeof post.title.rendered === 'string' &&
    post.content &&
    typeof post.content.rendered === 'string' &&
    typeof post.date === 'string' &&
    typeof post.slug === 'string'
  )
}

/**
 * Sort posts by priority and date
 */
export const sortPostsByPriority = (posts: WordPressPost[]): WordPressPost[] => {
  return posts.sort((a, b) => {
    const priorityA = getPostPriority(a)
    const priorityB = getPostPriority(b)
    
    if (priorityA !== priorityB) {
      return priorityB - priorityA // Higher priority first
    }
    
    // If same priority, sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Filter posts by service type
 */
export const filterPostsByServiceType = (posts: WordPressPost[], serviceType: string): WordPressPost[] => {
  return posts.filter(post => getPostServiceType(post) === serviceType)
}

/**
 * Filter posts by country
 */
export const filterPostsByCountry = (posts: WordPressPost[], country: string): WordPressPost[] => {
  return posts.filter(post => getPostCountry(post) === country)
}

/**
 * Filter posts by visa type
 */
export const filterPostsByVisaType = (posts: WordPressPost[], visaType: string): WordPressPost[] => {
  return posts.filter(post => getPostVisaType(post) === visaType)
}

/**
 * Get featured posts
 */
export const getFeaturedPosts = (posts: WordPressPost[]): WordPressPost[] => {
  return posts.filter(isFeaturedPost)
}
