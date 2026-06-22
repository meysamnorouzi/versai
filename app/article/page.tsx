'use client'

import { usePathname } from 'next/navigation'
import ArticleDetail from '@/src/components/blog/ArticleDetail'

function getArticleIdFromPath(pathname: string): string {
  const match = pathname.match(/^\/article\/([^/?#]+)/)
  return match?.[1] ?? ''
}

export default function ArticlePage() {
  const pathname = usePathname()
  const id = getArticleIdFromPath(pathname)

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <p className="text-neutral-600">شناسه مقاله نامعتبر است.</p>
      </div>
    )
  }

  return <ArticleDetail id={id} />
}
