'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import BlogCard from '@/src/components/blog/BlogCard'
import Loading from '@/src/components/ui/Loading'
import useWordPressArticles from '@/src/hooks/useWordPressArticles'
import { FALLBACK_BLOG_ARTICLES } from '@/src/config/fallbackBlogArticles'
import { BlogCardArticle, mapPostToCard, pickRandomSample } from '@/src/utils/blog'
import { RelatedArticlesSectionProps } from '../../types'

const RELATED_ARTICLES_POOL_SIZE = 30

const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({
  title = 'مقالات مرتبط',
  showViewAll = true,
  viewAllLink = '/articles',
  className = '',
  count = 3,
}) => {
  const pathname = usePathname()
  const { posts, loading, error } = useWordPressArticles({
    perPage: RELATED_ARTICLES_POOL_SIZE,
  })
  const [articles, setArticles] = useState<BlogCardArticle[]>([])

  useEffect(() => {
    if (loading) return

    const source =
      !error && posts.length > 0
        ? posts.map(mapPostToCard)
        : FALLBACK_BLOG_ARTICLES

    setArticles(pickRandomSample(source, count, `${pathname}-${Math.random()}`))
  }, [posts, loading, error, pathname, count])

  return (
    <section className={`py-16 px-4 ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-extrabold text-[#316086] leading-[1.4] text-right">
            {title}
          </h2>
          {showViewAll && (
            <a
              href={viewAllLink}
              className="flex items-center justify-end gap-1 flex-shrink-0 text-base sm:text-lg lg:text-[18px] font-semibold text-[#316086] hover:text-[#b23124] transition-colors duration-200"
            >
              نمایش همه
              <ArrowLeft className="w-6 h-6" />
            </a>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default RelatedArticlesSection
