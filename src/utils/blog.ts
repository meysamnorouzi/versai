import { VersaiBlogArticle } from '../types'
import { formatDate } from './api'

const DEFAULT_BLOG_IMAGE = '/images/home-page/success-story1.png'

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
