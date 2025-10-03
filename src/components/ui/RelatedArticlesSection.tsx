import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { RelatedArticlesSectionProps } from '../../types'

const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ 
  articles, 
  title = 'مقالات مرتبط',
  showViewAll = true,
  viewAllLink = '/articles',
  className = ''
}) => {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] font-extrabold text-[#316086] leading-[1.4]">
            {title}
          </h2>
          {showViewAll && (
            <a 
              href={viewAllLink}
              className="flex items-center gap-1 text-[18px] font-semibold text-[#316086] hover:text-[#b23124] transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
              نمایش همه
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link}
              className="relative group cursor-pointer block"
            >
              <div className="relative h-[388px] rounded-2xl border border-stone-300 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-[18px] font-semibold text-white leading-[1.4]">
                    {article.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedArticlesSection
