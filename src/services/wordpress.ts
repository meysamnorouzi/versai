import axios from 'axios'
import { WordPressPost, WordPressMedia, WordPressCategory, ApiResponse } from '../types'

const API_BASE_URL = import.meta.env.VITE_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Posts API
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
    const response = await api.get('/posts', {
      params: { slug }
    })
    return response.data
  },
}

// Media API
export const mediaApi = {
  getById: async (id: number): Promise<WordPressMedia> => {
    const response = await api.get(`/media/${id}`)
    return response.data
  },

  getByUrl: async (url: string): Promise<WordPressMedia> => {
    const response = await api.get('/media', {
      params: { search: url }
    })
    return response.data[0]
  },
}

// Categories API
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

// Custom API endpoints for Versai specific data
export const versaiApi = {
  getServices: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/versai/services')
    return response.data
  },

  getSuccessStories: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/versai/success-stories')
    return response.data
  },

  getFAQs: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/versai/faqs')
    return response.data
  },

  submitConsultation: async (data: {
    name: string
    phone: string
    email: string
    subject: string
    message: string
  }): Promise<ApiResponse<{ success: boolean }>> => {
    const response = await api.post('/versai/consultation', data)
    return response.data
  },
}

export default api
