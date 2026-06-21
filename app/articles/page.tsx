import type { Metadata } from 'next'
import ArticlesList from '@/src/components/blog/ArticlesList'

export const metadata: Metadata = {
  title: 'مقالات ورسای - موسسه مهاجرتی ورسای',
  description: 'مقالات منتشر شده - موسسه مهاجرتی ورسای',
  keywords: 'مقالات، مهاجرت، فرانسه، کانادا، ویزا، اقامت',
  openGraph: {
    title: 'مقالات ورسای - موسسه مهاجرتی ورسای',
    description: 'مقالات منتشر شده',
    url: 'https://versai.ir/articles',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/articles',
  },
}

export default function ArticlesPage() {
  return <ArticlesList />
}
