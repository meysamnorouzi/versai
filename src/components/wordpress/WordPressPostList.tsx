import React from 'react'
import { useWordPressPosts } from '../../hooks/useWordPress'
import Loading from '../ui/Loading'
import WordPressContent from './WordPressContent'

interface WordPressPostListProps {
  perPage?: number
  categories?: number[]
  search?: string
  showExcerpt?: boolean
  showFeaturedImage?: boolean
  className?: string
}

const WordPressPostList: React.FC<WordPressPostListProps> = ({
  perPage = 10,
  categories = [],
  search = '',
  showExcerpt = true,
  showFeaturedImage = true,
  className = ''
}) => {
  const {
    posts,
    loading,
    error,
    totalPages,
    currentPage,
    refetch
  } = useWordPressPosts({
    perPage,
    categories,
    search,
    autoFetch: true
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 mb-4">
          خطا در بارگذاری مطالب: {error}
        </div>
        <button
          onClick={refetch}
          className="bg-versai-red-500 text-white px-6 py-2 rounded-md hover:bg-versai-red-600 transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-4">
          هیچ مطلبی یافت نشد
        </div>
      </div>
    )
  }

  return (
    <div className={`wordpress-post-list ${className}`}>
      <div className="grid gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <WordPressContent
              post={post}
              showExcerpt={showExcerpt}
              showFeaturedImage={showFeaturedImage}
              className="p-6"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2 space-x-reverse">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md ${
                  page === currentPage
                    ? 'bg-versai-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => {
                  // Handle page change
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WordPressPostList
