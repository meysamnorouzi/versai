'use client'

import React from 'react'
import BlogCard from '@/src/components/blog/BlogCard'
import Button from '@/src/components/ui/Button'
import Loading from '@/src/components/ui/Loading'
import useWordPressArticles from '@/src/hooks/useWordPressArticles'
import { mapPostToCard } from '@/src/utils/blog'

const ArticlesList: React.FC = () => {
  const { posts, loading, error, hasMore, loadMore, refetch } = useWordPressArticles({
    perPage: 12,
  })

  const articles = posts.map(mapPostToCard)

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden" dir="rtl">
      <div className="absolute flex inset-[-17.41%_-50.09%_59.47%_-21.81%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[1949.324px] rotate-[21.716deg] w-[1888.097px]">
          <div className="relative size-full opacity-30">
            <div className="absolute bottom-[-0.01%] left-[-0.01%] right-0 top-[-0.01%]">
              <div className="w-full h-full border border-slate-400/50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.91%_-50.09%_23.14%_-21.81%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[1949.324px] rotate-[21.716deg] w-[1888.097px]">
          <div className="relative size-full opacity-30">
            <div className="absolute bottom-[-0.01%] left-[-0.01%] right-0 top-[-0.01%]">
              <div className="w-full h-full border border-slate-400/50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center py-8 sm:py-12 md:py-16">
          <h1 className="text-cyan-800 text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-7 sm:leading-8 md:leading-10 px-4 sm:px-0">
            مقالات ورسای
          </h1>
        </div>

        <div className="text-right max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <h2 className="text-cyan-800 text-lg sm:text-xl md:text-2xl font-semibold font-['IRANYekanX'] leading-relaxed">
            آخرین مقالات منتشر شده
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
          {loading && articles.length === 0 && (
            <div className="flex justify-center py-16">
              <Loading />
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                type="button"
                onClick={refetch}
                className="bg-cyan-800 hover:bg-cyan-900 text-white px-6 py-2 rounded-2xl font-semibold"
              >
                تلاش مجدد
              </button>
            </div>
          )}

          {!error && articles.length === 0 && !loading && (
            <p className="text-center text-gray-600 py-16">مقاله‌ای یافت نشد.</p>
          )}

          {articles.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Button variant="secondary" size="lg" onClick={loadMore} disabled={loading}>
                {loading ? 'در حال بارگذاری...' : 'مشاهده مقالات بیشتر'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticlesList
