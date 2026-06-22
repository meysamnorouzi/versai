import { VersaiBlogArticle, WordPressPost } from '../types'
import { formatDate } from './api'

const DEFAULT_BLOG_IMAGE = '/images/home-page/success-story1.png'

const stripHtml = (html: string): string =>
  html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()

export interface BlogCardArticle {
  id: number
  title: string
  image: string
  category: string
  date: string
}

export const mapBlogToCard = (blog: VersaiBlogArticle): BlogCardArticle => ({
  id: blog.id,
  title: blog.title,
  image: blog.featured_image || DEFAULT_BLOG_IMAGE,
  category: blog.blog_category || blog.country || 'عمومی',
  date: formatDate(blog.date),
})

export const getBlogAuthor = (blog: VersaiBlogArticle): string =>
  blog.author_name || blog.author || 'موسسه مهاجرتی ورسای'

export const getPostFeaturedImage = (post: WordPressPost): string => {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return media?.source_url || DEFAULT_BLOG_IMAGE
}

export const getPostCategory = (post: WordPressPost): string => {
  const termGroups = post._embedded?.['wp:term'] ?? []
  const categories = termGroups.find((group) => group[0]?.taxonomy === 'category')
  return categories?.[0]?.name ?? 'عمومی'
}

export const mapPostToCard = (post: WordPressPost): BlogCardArticle => ({
  id: post.id,
  title: stripHtml(post.title.rendered),
  image: getPostFeaturedImage(post),
  category: getPostCategory(post),
  date: formatDate(post.date),
})
