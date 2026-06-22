'use client'

import { useState, useEffect, useCallback } from 'react'
import { versaiApi } from '../services/wordpress'
import { VersaiBlogArticle } from '../types'
import { handleApiError } from '../utils/api'

interface UseVersaiBlogsOptions {
  perPage?: number
  page?: number
  category?: string
  country?: string
  featured?: boolean
  autoFetch?: boolean
}

export const useVersaiBlogs = (options: UseVersaiBlogsOptions = {}) => {
  const {
    perPage = 12,
    page: initialPage = 1,
    category,
    country,
    featured,
    autoFetch = true,
  } = options

  const [blogs, setBlogs] = useState<VersaiBlogArticle[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(initialPage)
  const [totalPages, setTotalPages] = useState(0)
  const [total, setTotal] = useState(0)

  const fetchBlogs = useCallback(
    async (pageToLoad: number, append = false) => {
      setLoading(true)
      setError(null)

      try {
        const response = await versaiApi.getBlogs({
          per_page: perPage,
          page: pageToLoad,
          category,
          country,
          featured,
        })

        if (response.success) {
          setBlogs((prev) => (append ? [...prev, ...response.data] : response.data))
          setTotalPages(response.pages)
          setTotal(response.total)
          setPage(pageToLoad)
        } else {
          setError('خطا در دریافت مقالات')
        }
      } catch (err) {
        const errorData = handleApiError(err)
        setError(errorData.message)
      } finally {
        setLoading(false)
      }
    },
    [perPage, category, country, featured]
  )

  const loadMore = useCallback(() => {
    if (!loading && page < totalPages) {
      return fetchBlogs(page + 1, true)
    }
  }, [fetchBlogs, loading, page, totalPages])

  const refetch = useCallback(() => fetchBlogs(1, false), [fetchBlogs])

  useEffect(() => {
    if (autoFetch) {
      fetchBlogs(1, false)
    }
  }, [autoFetch, fetchBlogs])

  return {
    blogs,
    loading,
    error,
    page,
    totalPages,
    total,
    fetchBlogs,
    loadMore,
    refetch,
    hasMore: page < totalPages,
  }
}

export const useVersaiBlog = (id: number | null) => {
  const [blog, setBlog] = useState<VersaiBlogArticle | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBlog = useCallback(async (blogId: number) => {
    setLoading(true)
    setError(null)

    try {
      const response = await versaiApi.getBlogById(blogId)
      if (response.success && response.data) {
        setBlog(response.data)
      } else {
        setError(response.message || 'مقاله یافت نشد')
      }
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (id) {
      fetchBlog(id)
    }
  }, [id, fetchBlog])

  return { blog, loading, error, refetch: () => id && fetchBlog(id) }
}

export default useVersaiBlogs
