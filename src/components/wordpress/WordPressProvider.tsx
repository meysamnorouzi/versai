import React, { createContext, useContext, ReactNode } from 'react'
import { WordPressPost, WordPressCategory, WordPressMedia } from '../../types'

interface WordPressContextType {
  // Posts
  posts: WordPressPost[]
  loadingPosts: boolean
  errorPosts: string | null
  
  // Categories
  categories: WordPressCategory[]
  loadingCategories: boolean
  errorCategories: string | null
  
  // Media
  media: WordPressMedia | null
  loadingMedia: boolean
  errorMedia: string | null
  
  // Actions
  refreshPosts: () => void
  refreshCategories: () => void
  getPostById: (id: number) => WordPressPost | undefined
  getCategoryById: (id: number) => WordPressCategory | undefined
  getMediaById: (id: number) => WordPressMedia | undefined
}

const WordPressContext = createContext<WordPressContextType | undefined>(undefined)

interface WordPressProviderProps {
  children: ReactNode
  posts?: WordPressPost[]
  categories?: WordPressCategory[]
  media?: WordPressMedia | null
  loadingPosts?: boolean
  loadingCategories?: boolean
  loadingMedia?: boolean
  errorPosts?: string | null
  errorCategories?: string | null
  errorMedia?: string | null
  onRefreshPosts?: () => void
  onRefreshCategories?: () => void
}

export const WordPressProvider: React.FC<WordPressProviderProps> = ({
  children,
  posts = [],
  categories = [],
  media = null,
  loadingPosts = false,
  loadingCategories = false,
  loadingMedia = false,
  errorPosts = null,
  errorCategories = null,
  errorMedia = null,
  onRefreshPosts,
  onRefreshCategories
}) => {
  const getPostById = (id: number) => {
    return posts.find(post => post.id === id)
  }

  const getCategoryById = (id: number) => {
    return categories.find(category => category.id === id)
  }

  const getMediaById = (id: number) => {
    return media?.id === id ? media : undefined
  }

  const value: WordPressContextType = {
    posts,
    categories,
    media,
    loadingPosts,
    loadingCategories,
    loadingMedia,
    errorPosts,
    errorCategories,
    errorMedia,
    refreshPosts: onRefreshPosts || (() => {}),
    refreshCategories: onRefreshCategories || (() => {}),
    getPostById,
    getCategoryById,
    getMediaById
  }

  return (
    <WordPressContext.Provider value={value}>
      {children}
    </WordPressContext.Provider>
  )
}

export const useWordPressContext = (): WordPressContextType => {
  const context = useContext(WordPressContext)
  if (context === undefined) {
    throw new Error('useWordPressContext must be used within a WordPressProvider')
  }
  return context
}

// Higher-order component for WordPress integration
export const withWordPress = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <WordPressProvider>
        <Component {...props} />
      </WordPressProvider>
    )
  }
}
