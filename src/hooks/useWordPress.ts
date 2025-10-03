import { useState, useEffect, useCallback } from 'react'
import { postsApi, mediaApi, categoriesApi, versaiApi } from '../services/wordpress'
import { WordPressPost, WordPressMedia, WordPressCategory } from '../types'
import { handleApiError } from '../utils/api'

interface UseWordPressPostsOptions {
  perPage?: number
  page?: number
  categories?: number[]
  search?: string
  autoFetch?: boolean
}

interface UseWordPressPostsReturn {
  posts: WordPressPost[]
  loading: boolean
  error: string | null
  totalPages: number
  currentPage: number
  fetchPosts: () => Promise<void>
  fetchPost: (id: number) => Promise<WordPressPost | null>
  fetchPostBySlug: (slug: string) => Promise<WordPressPost | null>
  refetch: () => Promise<void>
}

export const useWordPressPosts = (options: UseWordPressPostsOptions = {}): UseWordPressPostsReturn => {
  const {
    perPage = 10,
    page = 1,
    categories = [],
    search = '',
    autoFetch = true
  } = options

  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage] = useState(page)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await postsApi.getAll({
        per_page: perPage,
        page: currentPage,
        categories,
        search
      })
      
      setPosts(response)
      setTotalPages(Math.ceil(response.length / perPage))
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [perPage, currentPage, categories, search])

  const fetchPost = useCallback(async (id: number): Promise<WordPressPost | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const post = await postsApi.getById(id)
      return post
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPostBySlug = useCallback(async (slug: string): Promise<WordPressPost | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const posts = await postsApi.getBySlug(slug)
      return posts.length > 0 ? posts[0] : null
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const refetch = useCallback(() => {
    return fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    if (autoFetch) {
      fetchPosts()
    }
  }, [fetchPosts])

  return {
    posts,
    loading,
    error,
    totalPages,
    currentPage,
    fetchPosts,
    fetchPost,
    fetchPostBySlug,
    refetch
  }
}

interface UseWordPressMediaOptions {
  // autoFetch?: boolean // Unused for now
}

interface UseWordPressMediaReturn {
  media: WordPressMedia | null
  loading: boolean
  error: string | null
  fetchMedia: (id: number) => Promise<WordPressMedia | null>
  fetchMediaByUrl: (url: string) => Promise<WordPressMedia | null>
}

export const useWordPressMedia = (_options: UseWordPressMediaOptions = {}): UseWordPressMediaReturn => {
  // const { autoFetch = false } = options

  const [media, setMedia] = useState<WordPressMedia | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMedia = useCallback(async (id: number): Promise<WordPressMedia | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const mediaItem = await mediaApi.getById(id)
      setMedia(mediaItem)
      return mediaItem
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchMediaByUrl = useCallback(async (url: string): Promise<WordPressMedia | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const mediaItem = await mediaApi.getByUrl(url)
      setMedia(mediaItem)
      return mediaItem
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    media,
    loading,
    error,
    fetchMedia,
    fetchMediaByUrl
  }
}

interface UseWordPressCategoriesReturn {
  categories: WordPressCategory[]
  loading: boolean
  error: string | null
  fetchCategories: () => Promise<void>
  fetchCategory: (id: number) => Promise<WordPressCategory | null>
}

export const useWordPressCategories = (): UseWordPressCategoriesReturn => {
  const [categories, setCategories] = useState<WordPressCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await categoriesApi.getAll()
      setCategories(response)
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchCategory = useCallback(async (id: number): Promise<WordPressCategory | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const category = await categoriesApi.getById(id)
      return category
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return {
    categories,
    loading,
    error,
    fetchCategories,
    fetchCategory
  }
}

interface UseVersaiDataReturn {
  services: any[]
  successStories: any[]
  faqs: any[]
  loading: boolean
  error: string | null
  fetchServices: () => Promise<void>
  fetchSuccessStories: () => Promise<void>
  fetchFAQs: () => Promise<void>
  submitConsultation: (data: any) => Promise<boolean>
}

export const useVersaiData = (): UseVersaiDataReturn => {
  const [services, setServices] = useState<any[]>([])
  const [successStories, setSuccessStories] = useState<any[]>([])
  const [faqs, setFaqs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchServices = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await versaiApi.getServices()
      if (response.success) {
        setServices(response.data)
      }
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchSuccessStories = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await versaiApi.getSuccessStories()
      if (response.success) {
        setSuccessStories(response.data)
      }
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchFAQs = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await versaiApi.getFAQs()
      if (response.success) {
        setFaqs(response.data)
      }
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const submitConsultation = useCallback(async (data: any): Promise<boolean> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await versaiApi.submitConsultation(data)
      return response.success
    } catch (err) {
      const errorData = handleApiError(err)
      setError(errorData.message)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    services,
    successStories,
    faqs,
    loading,
    error,
    fetchServices,
    fetchSuccessStories,
    fetchFAQs,
    submitConsultation
  }
}
