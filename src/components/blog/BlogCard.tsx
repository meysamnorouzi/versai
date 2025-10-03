import React from 'react'
import { Link } from 'react-router-dom'

interface Article {
  id: number
  title: string
  image: string
  category: string
  date: string
}

interface BlogCardProps {
  article: Article
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="group block">
      <div className="w-full h-96 relative cursor-pointer">
        {/* Card Container */}
        <div className="absolute border border-[#cbcbcb] border-solid inset-0 rounded-[16px] overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
          {/* Image Background */}
          <div className="absolute inset-0">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute bg-gradient-to-b from-[45.673%] from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[#1e3950] to-[92.788%]" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            {/* Category Badge */}
            <div className="mb-2">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            
            {/* Title */}
            <div className="text-right">
              <h3 className="font-['IRANYekanX'] font-semibold text-white text-lg leading-[1.4] line-clamp-2 group-hover:text-red-200 transition-colors">
                {article.title}
              </h3>
            </div>
            
            {/* Date */}
            <div className="mt-2 text-right">
              <span className="text-white/80 text-sm font-medium">
                {article.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
