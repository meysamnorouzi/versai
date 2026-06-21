import axios from 'axios'
import {
  WordPressPost,
  WordPressMedia,
  WordPressCategory,
  ApiResponse,
  VersaiApiListResponse,
  VersaiBlogArticle,
  ConsultationRequest,
} from '../types'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://versai.ir/admin/wp-json/wp/v2'

const VERSAI_API_URL =
  process.env.NEXT_PUBLIC_VERSAI_API_URL || 'https://versai.ir/admin/wp-json/versai/v1'

const API_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const versaiClient = axios.create({
  baseURL: VERSAI_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const postsApi = {
  getAll: async (params?: {
    per_page?: number
    page?: number
    categories?: number[]
    search?: string
  }): Promise<WordPressPost[]> => {
    const response = await api.get('/posts', { params })
    return response.data
  },

  getById: async (id: number): Promise<WordPressPost> => {
    const response = await api.get(`/posts/${id}`)
    return response.data
  },

  getBySlug: async (slug: string): Promise<WordPressPost[]> => {
    const response = await api.get('/posts', { params: { slug } })
    return response.data
  },
}

export const mediaApi = {
  getById: async (id: number): Promise<WordPressMedia> => {
    const response = await api.get(`/media/${id}`)
    return response.data
  },

  getByUrl: async (url: string): Promise<WordPressMedia> => {
    const response = await api.get('/media', { params: { search: url } })
    return response.data[0]
  },
}

export const categoriesApi = {
  getAll: async (): Promise<WordPressCategory[]> => {
    const response = await api.get('/categories')
    return response.data
  },

  getById: async (id: number): Promise<WordPressCategory> => {
    const response = await api.get(`/categories/${id}`)
    return response.data
  },
}

export const versaiApi = {
  getServices: async (): Promise<VersaiApiListResponse<unknown>> => {
    const response = await versaiClient.get('/services')
    return response.data
  },

  getSuccessStories: async (): Promise<VersaiApiListResponse<unknown>> => {
    const response = await versaiClient.get('/success-stories')
    return response.data
  },

  getFAQs: async (): Promise<VersaiApiListResponse<unknown>> => {
    const response = await versaiClient.get('/faqs')
    return response.data
  },

  getBlogs: async (params?: {
    per_page?: number
    page?: number
    category?: string
    country?: string
    featured?: boolean
  }): Promise<VersaiApiListResponse<VersaiBlogArticle>> => {
    const response = await versaiClient.get('/blogs', {
      params: {
        per_page: params?.per_page,
        page: params?.page,
        category: params?.category,
        country: params?.country,
        featured: params?.featured ? 'true' : undefined,
      },
    })
    return response.data
  },

  getBlogById: async (id: number): Promise<ApiResponse<VersaiBlogArticle>> => {
    const response = await versaiClient.get(`/blogs/${id}`)
    return response.data
  },

  getBlogCategories: async (): Promise<
    VersaiApiListResponse<{ id: number; name: string; slug: string }>
  > => {
    const response = await versaiClient.get('/blog-categories')
    return response.data
  },

  submitConsultation: async (
    data: ConsultationRequest
  ): Promise<ApiResponse<{ id: number }>> => {
    const response = await versaiClient.post('/consultation', data)
    return response.data
  },
}

export default api
