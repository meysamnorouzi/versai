import type { Metadata } from 'next'
import ArticleDetail from '@/src/components/blog/ArticleDetail'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params

  return {
    title: `مقاله ${id} - موسسه مهاجرتی ورسای`,
    description: 'مقاله موسسه مهاجرتی ورسای',
    openGraph: {
      url: `https://versai.ir/article/${id}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://versai.ir/article/${id}`,
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  return <ArticleDetail id={params.id} />
}
