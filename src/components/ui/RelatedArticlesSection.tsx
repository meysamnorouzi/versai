import React from 'react'
import { ArrowLeft } from 'lucide-react'
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
          <div className='w-28'></div>
          <h2 className="text-[24px] font-extrabold text-[#316086] leading-[1.4]">
            {title}
          </h2>
          {showViewAll && (
            <a
              href={viewAllLink}
              className="flex items-center gap-1 text-[18px] font-semibold text-[#316086] hover:text-[#b23124] transition-colors duration-200"
            >
              نمایش همه
              <ArrowLeft className="w-6 h-6" />

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
                {/* Background image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Default gradient overlay (visible when not hovered) */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background: 'linear-gradient(to top, #1E3950 0%, rgba(30, 57, 80, 0.8) 15%, transparent 30%, transparent 100%)'
                  }}
                />

                {/* Rising blue overlay (covers full height on hover) */}
                <div
                  className="absolute inset-0 bg-[#1E3950] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-90"
                />

                {/* Bottom content visible by default: category, title, date */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-500">
                  {/* Category badge */}
                  {article.category && (
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  )}
                  {/* Title */}
                  <div className="text-right">
                    <div className="text-white text-lg font-semibold font-['IRANYekanX'] leading-[1.4] line-clamp-2">
                      {article.title}
                    </div>
                  </div>
                  {/* Date */}
                  {article.date && (
                    <div className="mt-2 text-right">
                      <span className="text-white/85 text-sm font-medium">{article.date}</span>
                    </div>
                  )}
                </div>

                {/* Hover content: title and description that rise from bottom */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-start text-right pointer-events-none">
                  <h3 className="text-white text-[20px] leading-[140%] font-['IRANYekanX'] font-extrabold max-w-[287px] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="mt-3 text-white/85 text-sm leading-[148%] font-medium max-w-[287px] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                      {article.excerpt}
                    </p>
                  )}
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
