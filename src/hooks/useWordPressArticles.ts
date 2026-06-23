'use client'

import { useState, useEffect, useCallback } from 'react'
import { postsApi } from '../services/wordpress'
import { WordPressPost } from '../types'
import { handleApiError } from '../utils/api'

interface UseWordPressArticlesOptions {
  perPage?: number
  page?: number
  categories?: number[]
  search?: string
  orderby?: string
  order?: string
  autoFetch?: boolean
}

export const useWordPressArticles = (options: UseWordPressArticlesOptions = {}) => {
  const {
    perPage = 12,
    page: initialPage = 1,
    categories,
    search,
    orderby,
    order,
    autoFetch = true,
  } = options

  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(initialPage)
  const [totalPages, setTotalPages] = useState(0)
  const [total, setTotal] = useState(0)

  const fetchPosts = useCallback(
    async (pageToLoad: number, append = false) => {
      setLoading(true)
      setError(null)

      try {
        const response = await postsApi.getAll({
          per_page: perPage,
          page: pageToLoad,
          categories,
          search,
          orderby,
          order,
        })

        setPosts((prev) => (append ? [...prev, ...response.posts] : response.posts))
        setTotalPages(response.totalPages)
        setTotal(response.total)
        setPage(pageToLoad)
      } catch (err) {
        const errorData = handleApiError(err)
        setError(errorData.message)
      } finally {
        setLoading(false)
      }
    },
    [perPage, categories, search, orderby, order]
  )

  const loadMore = useCallback(() => {
    if (!loading && page < totalPages) {
      return fetchPosts(page + 1, true)
    }
  }, [fetchPosts, loading, page, totalPages])

  const refetch = useCallback(() => fetchPosts(1, false), [fetchPosts])

  useEffect(() => {
    if (autoFetch) {
      fetchPosts(1, false)
    }
  }, [autoFetch, fetchPosts])

  return {
    posts,
    loading,
    error,
    page,
    totalPages,
    total,
    fetchPosts,
    loadMore,
    refetch,
    hasMore: page < totalPages,
  }
}

export const useWordPressArticle = (id: number | null) => {
  const [post, setPost] = useState<WordPressPost | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPost = useCallback(async (postId: number) => {
    setLoading(true)
    setError(null)

    try {
      const data = await postsApi.getById(postId)
      setPost(data)
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (id) {
      fetchPost(id)
    }
  }, [id, fetchPost])

  return { post, loading, error, refetch: () => id && fetchPost(id) }
}

export default useWordPressArticles
