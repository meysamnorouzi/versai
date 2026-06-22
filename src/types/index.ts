// WordPress API Types
export interface WordPressEmbeddedTerm {
  id: number
  name: string
  slug: string
  taxonomy: string
}

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media: number
  date: string
  slug: string
  categories: number[]
  tags: number[]
  meta?: Record<string, any>
  _embedded?: {
    'wp:featuredmedia'?: WordPressMedia[]
    'wp:term'?: WordPressEmbeddedTerm[][]
  }
}

export interface WordPressPostsListResult {
  posts: WordPressPost[]
  total: number
  totalPages: number
}

export interface WordPressMedia {
  id: number
  source_url: string
  alt_text: string
  caption: {
    rendered: string
  }
  media_details?: {
    sizes?: {
      [key: string]: {
        source_url: string
      }
    }
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline' | 'ghost' | 'ghost-red' | 'success' | 'error' | 'disabled'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  success?: boolean
  error?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'highlighted'
}

export interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  error?: string
}

export interface NavigationItem {
  label: string
  href: string
  hasDropdown?: boolean
  children?: NavigationItem[]
}

// Service Types
export interface ConsultationRequest {
  name: string
  phone: string
  email: string
  subject: string
  message: string
  form_source?: string
}

export interface VersaiBlogArticle {
  id: number
  title: string
  content: string
  excerpt: string
  featured_image: string | false
  slug: string
  date: string
  modified: string
  author: string
  blog_category: string
  country: string
  visa_type: string
  author_name: string
  reading_time: string
  featured: boolean
  priority: number
  meta_title: string
  meta_description: string
  seo_keywords: string
  comment_count: number
}

export interface Service {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

export interface SuccessStory {
  id: number
  title: string
  content: string
  image: string
  visaType: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedArticle {
  title: string
  image: string
  link: string
  category?: string
  date?: string
  excerpt?: string
}

export interface FAQSectionProps {
  faqItems: FAQItem[]
  title?: string
  className?: string
}

export interface RelatedArticlesSectionProps {
  articles: RelatedArticle[]
  title?: string
  showViewAll?: boolean
  viewAllLink?: string
  className?: string
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  success: boolean
  message?: string
}

export interface VersaiApiListResponse<T> {
  success: boolean
  data: T[]
  total: number
  pages: number
  message?: string
}
