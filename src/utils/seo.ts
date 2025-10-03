import { SEO_CONFIG } from '../config/seo'

export const generateMetaTags = (pageData: {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
  } = pageData

  const fullTitle = title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.siteName
  const metaDescription = description || SEO_CONFIG.siteDescription
  const metaKeywords = keywords || SEO_CONFIG.keywords.join(', ')
  const metaImage = image || SEO_CONFIG.defaultImage
  const metaUrl = url || SEO_CONFIG.siteUrl

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: metaKeywords,
    image: metaImage,
    url: metaUrl,
    type,
    siteName: SEO_CONFIG.siteName,
    twitterHandle: SEO_CONFIG.twitterHandle
  }
}

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{
  name: string
  url: string
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  }
}

export const generateArticleStructuredData = (article: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime: string
  modifiedTime?: string
  author: string
  section?: string
  tags?: string[]
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": article.url,
    "image": article.image || SEO_CONFIG.defaultImage,
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": SEO_CONFIG.siteLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "articleSection": article.section,
    "keywords": article.tags?.join(', ')
  }
}

export const generateFAQStructuredData = (faqs: Array<{
  question: string
  answer: string
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const generateServiceStructuredData = (service: {
  name: string
  description: string
  url: string
  image?: string
  price?: string
  currency?: string
  availability?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "image": service.image || SEO_CONFIG.defaultImage,
    "provider": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName,
      "url": SEO_CONFIG.siteUrl
    },
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": service.currency || "IRR"
    } : undefined,
    "availability": service.availability || "InStock"
  }
}

export const generateLocalBusinessStructuredData = (business: {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  email?: string
  openingHours?: string[]
  priceRange?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.streetAddress,
      "addressLocality": business.address.addressLocality,
      "addressRegion": business.address.addressRegion,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.addressCountry
    },
    "telephone": business.telephone,
    "email": business.email,
    "openingHours": business.openingHours,
    "priceRange": business.priceRange,
    "url": SEO_CONFIG.siteUrl,
    "sameAs": Object.values(SEO_CONFIG.socialLinks)
  }
}

export const validateSEO = (pageData: {
  title?: string
  description?: string
  keywords?: string
  url?: string
}) => {
  const errors: string[] = []
  const warnings: string[] = []

  // Title validation
  if (!pageData.title) {
    errors.push('Title is required')
  } else if (pageData.title.length < 30) {
    warnings.push('Title should be at least 30 characters long')
  } else if (pageData.title.length > 60) {
    warnings.push('Title should be less than 60 characters long')
  }

  // Description validation
  if (!pageData.description) {
    errors.push('Description is required')
  } else if (pageData.description.length < 120) {
    warnings.push('Description should be at least 120 characters long')
  } else if (pageData.description.length > 160) {
    warnings.push('Description should be less than 160 characters long')
  }

  // Keywords validation
  if (!pageData.keywords) {
    warnings.push('Keywords are recommended for better SEO')
  } else if (pageData.keywords.split(',').length > 10) {
    warnings.push('Too many keywords (recommended: 5-10)')
  }

  // URL validation
  if (!pageData.url) {
    errors.push('URL is required')
  } else if (!pageData.url.startsWith('http')) {
    errors.push('URL must be absolute (start with http/https)')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}
