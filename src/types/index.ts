// WordPress API Types
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
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  perPage: number
  totalPages: number
}
