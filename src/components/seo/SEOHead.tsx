import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
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
  structuredData?: object
}

const SEOHead: React.FC<SEOHeadProps> = ({
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
  nofollow = false,
  structuredData
}) => {
  const siteName = 'موسسه مهاجرتی ورسای'
  const siteUrl = 'https://versai.ir'
  const defaultImage = 'https://versai.ir/images/og-image.jpg'
  const twitterHandle = '@versai_immigration'

  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const metaDescription = description || 'اقامت تمکن مالی و تحصیلی فرانسه - کانادا'
  const metaKeywords = keywords || 'مهاجرت به فرانسه، مهاجرت به کانادا، اقامت فرانسه، اقامت کانادا، تمکن مالی، تحصیل در فرانسه، تحصیل در کانادا'
  const metaImage = image || defaultImage
  const metaUrl = url || siteUrl

  const robotsContent = []
  if (noindex) robotsContent.push('noindex')
  else robotsContent.push('index')
  
  if (nofollow) robotsContent.push('nofollow')
  else robotsContent.push('follow')

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={robotsContent.join(', ')} />
      <meta name="language" content="Persian" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="fa-IR" href={metaUrl} />
      <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fa_IR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:site" content={twitterHandle} />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead
