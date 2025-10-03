import React from 'react'
import { WordPressPost } from '../../types'
import { formatWordPressContent } from '../../utils/api'

interface WordPressContentProps {
  post: WordPressPost
  showExcerpt?: boolean
  showFeaturedImage?: boolean
  className?: string
}

const WordPressContent: React.FC<WordPressContentProps> = ({
  post,
  showExcerpt = false,
  showFeaturedImage = true,
  className = ''
}) => {
  const formatContent = (content: string) => {
    return formatWordPressContent(content)
  }

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  }

  return (
    <article className={`wordpress-content ${className}`}>
      {/* Featured Image */}
      {showFeaturedImage && post.featured_media && (
        <div className="mb-6">
          <img
            src={`https://your-wordpress-site.com/wp-content/uploads/featured-${post.featured_media}.jpg`}
            alt={stripHtml(post.title.rendered)}
            className="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {stripHtml(post.title.rendered)}
      </h1>

      {/* Excerpt */}
      {showExcerpt && post.excerpt.rendered && (
        <div 
          className="text-lg text-gray-600 mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: formatContent(post.excerpt.rendered) 
          }}
        />
      )}

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: formatContent(post.content.rendered) 
        }}
      />

      {/* Meta Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            منتشر شده در {new Date(post.date).toLocaleDateString('fa-IR')}
          </span>
          <div className="flex items-center space-x-4 space-x-reverse">
            {post.categories && post.categories.length > 0 && (
              <span>
                دسته‌بندی: {post.categories.join(', ')}
              </span>
            )}
            {post.tags && post.tags.length > 0 && (
              <span>
                برچسب‌ها: {post.tags.join(', ')}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default WordPressContent
