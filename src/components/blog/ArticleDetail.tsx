'use client'

import React from 'react'
import Link from 'next/link'
import Loading from '@/src/components/ui/Loading'
import { useVersaiBlog } from '@/src/hooks/useVersaiBlogs'
import { getBlogAuthor } from '@/src/utils/blog'
import { formatDate } from '@/src/utils/api'

const DEFAULT_IMAGE = '/images/home-page/success-story1.png'

interface ArticleDetailProps {
  id: string
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const articleId = parseInt(id, 10)
  const { blog, loading, error } = useVersaiBlog(Number.isNaN(articleId) ? null : articleId)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <Loading />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" dir="rtl">
        <p className="text-red-600">{error || 'مقاله یافت نشد'}</p>
        <Link href="/articles" className="text-cyan-800 hover:text-red-700 font-semibold">
          بازگشت به مقالات
        </Link>
      </div>
    )
  }

  const image = blog.featured_image || DEFAULT_IMAGE
  const category = blog.blog_category || blog.country || 'عمومی'
  const author = getBlogAuthor(blog)
  const date = formatDate(blog.date)

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-xs sm:text-sm text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-cyan-800 transition-colors">
                صفحه اصلی
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/articles" className="hover:text-cyan-800 transition-colors">
                مقالات
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 truncate max-w-[150px] sm:max-w-none">{blog.title}</li>
          </ol>
        </nav>

        <header className="mb-6 sm:mb-8">
          <div className="mb-3 sm:mb-4">
            <span className="inline-block bg-cyan-800 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-['IRANYekanX'] text-gray-900 leading-tight mb-3 sm:mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4 space-x-reverse">
            <span>نویسنده: {author}</span>
            <span>تاریخ: {date}</span>
            {blog.reading_time && <span>زمان مطالعه: {blog.reading_time}</span>}
          </div>
        </header>

        <div className="mb-6 sm:mb-8">
          <img
            src={image}
            alt={blog.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
          />
        </div>

        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed font-['IRANYekanX'] text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <Link
            href="/articles"
            className="inline-flex items-center text-cyan-800 hover:text-red-700 transition-colors font-semibold text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            بازگشت به مقالات
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
