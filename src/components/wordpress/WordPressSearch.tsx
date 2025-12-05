'use client'

import React, { useState, useCallback } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useWordPressPosts } from '../../hooks/useWordPress'
import Loading from '../ui/Loading'
import WordPressPostList from './WordPressPostList'

interface WordPressSearchProps {
  placeholder?: string
  className?: string
}

const WordPressSearch: React.FC<WordPressSearchProps> = ({
  placeholder = 'جستجو در مطالب...',
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const {
    posts,
    loading,
    error,
    fetchPosts
  } = useWordPressPosts({
    search: searchTerm,
    autoFetch: false
  })

  const handleSearch = useCallback(async (term: string) => {
    if (term.trim() === '') return
    
    setIsSearching(true)
    setSearchTerm(term)
    
    try {
      await fetchPosts()
    } finally {
      setIsSearching(false)
    }
  }, [fetchPosts])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    
    // Debounced search
    if (value.trim() === '') {
      setSearchTerm('')
    }
  }

  return (
    <div className={`wordpress-search ${className}`}>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-versai-red-500 focus:border-versai-red-500"
          />
          <button
            type="submit"
            disabled={loading || isSearching}
            className="absolute inset-y-0 left-0 pl-3 flex items-center"
          >
            <span className="sr-only">جستجو</span>
            {loading || isSearching ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-versai-red-500"></div>
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5 text-versai-red-500" />
            )}
          </button>
        </div>
      </form>

      {/* Search Results */}
      {searchTerm && (
        <div className="search-results">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              نتایج جستجو برای "{searchTerm}"
            </h2>
            <p className="text-gray-600">
              {posts.length} مطلب یافت شد
            </p>
          </div>

          {loading ? (
            <Loading />
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-600 mb-4">
                خطا در جستجو: {error}
              </div>
              <button
                onClick={() => handleSearch(searchTerm)}
                className="bg-versai-red-500 text-white px-6 py-2 rounded-md hover:bg-versai-red-600 transition-colors"
              >
                تلاش مجدد
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-4">
                هیچ مطلبی برای "{searchTerm}" یافت نشد
              </div>
              <button
                onClick={() => setSearchTerm('')}
                className="text-versai-red-500 hover:text-versai-red-600 transition-colors"
              >
                پاک کردن جستجو
              </button>
            </div>
          ) : (
            <WordPressPostList
              perPage={10}
              showExcerpt={true}
              showFeaturedImage={true}
            />
          )}
        </div>
      )}

      {/* Recent Posts (when no search) */}
      {!searchTerm && (
        <div className="recent-posts">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            مطالب اخیر
          </h2>
          <WordPressPostList
            perPage={6}
            showExcerpt={true}
            showFeaturedImage={true}
          />
        </div>
      )}
    </div>
  )
}

export default WordPressSearch
