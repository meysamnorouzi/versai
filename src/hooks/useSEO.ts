import { useEffect } from 'react'
import { SEO_CONFIG, STRUCTURED_DATA } from '../config/seo'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export const useSEO = (seoProps: SEOProps = {}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    noindex = false,
    nofollow = false
  } = seoProps

  useEffect(() => {
    // Update document title
    const fullTitle = title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.siteName
    document.title = fullTitle

    // Update meta description
    const metaDescription = description || SEO_CONFIG.siteDescription
    updateMetaTag('description', metaDescription)

    // Update meta keywords
    const metaKeywords = keywords || SEO_CONFIG.keywords.join(', ')
    updateMetaTag('keywords', metaKeywords)

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property')
    updateMetaTag('og:description', metaDescription, 'property')
    updateMetaTag('og:image', image || SEO_CONFIG.defaultImage, 'property')
    updateMetaTag('og:url', url || window.location.href, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', SEO_CONFIG.siteName, 'property')
    updateMetaTag('og:locale', 'fa_IR', 'property')

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:site', SEO_CONFIG.twitterHandle)
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', metaDescription)
    updateMetaTag('twitter:image', image || SEO_CONFIG.defaultImage)

    // Update canonical URL
    updateCanonicalUrl(url || window.location.href)

    // Update hreflang
    updateHreflang()

    // Update robots meta
    updateRobotsMeta(noindex, nofollow)

    // Add structured data
    addStructuredData()

    // Update article specific meta tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, 'property')
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, 'property')
      if (author) updateMetaTag('article:author', author, 'property')
      if (section) updateMetaTag('article:section', section, 'property')
      if (tags) {
        tags.forEach(tag => {
          addMetaTag('article:tag', tag, 'property')
        })
      }
    }

  }, [title, description, keywords, image, url, type, publishedTime, modifiedTime, author, section, tags, noindex, nofollow])

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    const meta = document.createElement('meta')
    meta.setAttribute(attribute, name)
    meta.content = content
    document.head.appendChild(meta)
  }

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }

  const updateHreflang = () => {
    // Remove existing hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflang.forEach(link => link.remove())

    // Add hreflang tags
    const currentUrl = window.location.href
    const baseUrl = SEO_CONFIG.siteUrl

    // Persian version
    addHreflangLink('fa-IR', currentUrl)
    
    // English version (if exists)
    const englishUrl = currentUrl.replace('/fa/', '/en/') || `${baseUrl}/en`
    addHreflangLink('en-US', englishUrl)

    // Default hreflang
    addHreflangLink('x-default', currentUrl)
  }

  const addHreflangLink = (hreflang: string, href: string) => {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = hreflang
    link.href = href
    document.head.appendChild(link)
  }

  const updateRobotsMeta = (noindex: boolean, nofollow: boolean) => {
    const robotsContent = []
    if (noindex) robotsContent.push('noindex')
    else robotsContent.push('index')
    
    if (nofollow) robotsContent.push('nofollow')
    else robotsContent.push('follow')

    updateMetaTag('robots', robotsContent.join(', '))
  }

  const addStructuredData = () => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add organization structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(STRUCTURED_DATA.organization)
    document.head.appendChild(script)

    // Add website structured data
    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.textContent = JSON.stringify(STRUCTURED_DATA.website)
    document.head.appendChild(websiteScript)
  }

  return {
    updateTitle: (newTitle: string) => {
      document.title = `${newTitle} | ${SEO_CONFIG.siteName}`
    },
    updateDescription: (newDescription: string) => {
      updateMetaTag('description', newDescription)
    }
  }
}

export default useSEO
