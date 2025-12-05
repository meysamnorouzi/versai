import React from 'react'
import BlogCard from '@/src/components/blog/BlogCard'
import Button from '@/src/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مقالات ورسای - موسسه مهاجرتی ورسای',
  description: 'مقالات منتشر شده در یک ماه گذشته - موسسه مهاجرتی ورسای',
  keywords: 'مقالات، مهاجرت، فرانسه، کانادا، ویزا، اقامت',
  openGraph: {
    title: 'مقالات ورسای - موسسه مهاجرتی ورسای',
    description: 'مقالات منتشر شده در یک ماه گذشته',
    url: 'https://versai.ir/articles',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/articles',
  },
}

const BlogListPage: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/home-page/success-story1.png',
      category: 'فرانسه',
      date: '۱۴۰۳/۰۱/۱۵'
    },
    {
      id: 2,
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/home-page/success-story2.png',
      category: 'اسپانیا',
      date: '۱۴۰۳/۰۱/۱۲'
    },
    {
      id: 3,
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/home-page/success-story3.png',
      category: 'فرانسه',
      date: '۱۴۰۳/۰۱/۱۰'
    },
    {
      id: 4,
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/home-page/success-story1.png',
      category: 'فرانسه',
      date: '۱۴۰۳/۰۱/۰۸'
    },
    {
      id: 5,
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/home-page/success-story2.png',
      category: 'اسپانیا',
      date: '۱۴۰۳/۰۱/۰۵'
    },
    {
      id: 6,
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/home-page/success-story3.png',
      category: 'فرانسه',
      date: '۱۴۰۳/۰۱/۰۳'
    },
    {
      id: 7,
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/home-page/success-story1.png',
      category: 'فرانسه',
      date: '۱۴۰۳/۰۱/۰۱'
    },
    {
      id: 8,
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/home-page/success-story2.png',
      category: 'اسپانیا',
      date: '۱۴۰۲/۱۲/۲۸'
    },
    {
      id: 9,
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/home-page/success-story3.png',
      category: 'فرانسه',
      date: '۱۴۰۲/۱۲/۲۵'
    },
    {
      id: 10,
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/home-page/success-story1.png',
      category: 'فرانسه',
      date: '۱۴۰۲/۱۲/۲۲'
    },
    {
      id: 11,
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/home-page/success-story2.png',
      category: 'اسپانیا',
      date: '۱۴۰۲/۱۲/۲۰'
    },
    {
      id: 12,
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/home-page/success-story3.png',
      category: 'فرانسه',
      date: '۱۴۰۲/۱۲/۱۸'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute flex inset-[-17.41%_-50.09%_59.47%_-21.81%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[1949.324px] rotate-[21.716deg] w-[1888.097px]">
          <div className="relative size-full opacity-30">
            <div className="absolute bottom-[-0.01%] left-[-0.01%] right-0 top-[-0.01%]">
              <div className="w-full h-full border border-slate-400/50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.91%_-50.09%_23.14%_-21.81%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[1949.324px] rotate-[21.716deg] w-[1888.097px]">
          <div className="relative size-full opacity-30">
            <div className="absolute bottom-[-0.01%] left-[-0.01%] right-0 top-[-0.01%]">
              <div className="w-full h-full border border-slate-400/50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Title */}
        <div className="text-center py-16">
          <h1 className="text-cyan-800 text-3xl font-extrabold font-['IRANYekanX'] leading-10">
            مقالات ورسای
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-right max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-cyan-800 text-2xl font-semibold font-['IRANYekanX'] leading-relaxed">
            مقالات منتشر شده در یک ماه گذشته
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              مشاهده مقالات بیشتر
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListPage

