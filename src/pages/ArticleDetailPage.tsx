import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useSEO from '../hooks/useSEO'

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  
  // Mock article data - in a real app, this would come from an API
  const article = {
    id: parseInt(id || '1'),
    title: 'مزایای دوره زبان کشور فرانسه',
    content: `
      <p>دوره زبان فرانسه یکی از بهترین راه‌های یادگیری زبان فرانسه و آماده‌سازی برای زندگی در فرانسه است. این دوره‌ها مزایای متعددی دارند که در ادامه به بررسی آن‌ها می‌پردازیم.</p>
      
      <h3>مزایای اصلی دوره زبان فرانسه:</h3>
      <ul>
        <li>یادگیری زبان فرانسه در محیطی بومی و طبیعی</li>
        <li>آشنایی با فرهنگ و آداب و رسوم فرانسوی</li>
        <li>فرصت برقراری ارتباط با افراد محلی</li>
        <li>بهبود مهارت‌های زبانی در کوتاه‌ترین زمان</li>
        <li>آماده‌سازی برای تحصیل یا کار در فرانسه</li>
      </ul>
      
      <p>شرکت در دوره‌های زبان فرانسه نه تنها مهارت‌های زبانی شما را تقویت می‌کند، بلکه فرصت‌های جدیدی برای آینده‌تان فراهم می‌آورد.</p>
    `,
    image: '/images/home-page/success-story1.png',
    category: 'فرانسه',
    date: '۱۴۰۳/۰۱/۱۵',
    author: 'موسسه مهاجرتی ورسای'
  }

  // SEO Configuration
  useSEO({
    title: `${article.title} - موسسه مهاجرتی ورسای`,
    description: `مقاله ${article.title} - ${article.category}`,
    keywords: 'دوره زبان، فرانسه، مهاجرت، یادگیری زبان',
    url: `https://versai.ir/article/${id}`,
    type: 'article'
  })

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
            <li><Link to="/" className="hover:text-cyan-800 transition-colors">صفحه اصلی</Link></li>
            <li>/</li>
            <li><Link to="/articles" className="hover:text-cyan-800 transition-colors">مقالات</Link></li>
            <li>/</li>
            <li className="text-gray-900">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-cyan-800 text-white text-sm font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-['IRANYekanX'] text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4 space-x-reverse">
            <span>نویسنده: {article.author}</span>
            <span>تاریخ: {article.date}</span>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed font-['IRANYekanX']"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Back to Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-cyan-800 hover:text-red-700 transition-colors font-semibold"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            بازگشت به مقالات
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailPage
