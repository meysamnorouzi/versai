import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import LanguageCourseSection from '../components/home/LanguageCourseSection'
import CTABanner from '../components/home/CTABanner'
import ConsultationForm from '../components/ui/ConsultationForm'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import FAQSection from '../components/ui/FAQSection'
import useSEO from '../hooks/useSEO'
import { PAGE_SEO } from '../config/seo'

const HomePage: React.FC = () => {
  // SEO Configuration
  useSEO({
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    keywords: PAGE_SEO.home.keywords,
    url: 'https://versai.ir/',
    type: 'website'
  })

  const faqItems = [
    {
      question: 'اولین گام اقدام برای دوره‌های زبان چیست؟',
      answer: 'برای شروع دوره زبان در فرانسه، ابتدا باید از دانشگاه یا موسسه آموزشی مورد نظر پذیرش بگیرید. این فرآیند شامل تکمیل فرم درخواست، ارائه مدارک تحصیلی و زبان، و در برخی موارد شرکت در مصاحبه است.'
    },
    {
      question: 'مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟',
      answer: 'مشاوره در ورسای به صورت حضوری، آنلاین یا تلفنی برگزار می‌شود. هزینه مشاوره بسته به نوع خدمات و مدت زمان مشاوره متفاوت است. برای اطلاع از هزینه‌های دقیق، با ما تماس بگیرید.'
    },
    {
      question: 'مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟',
      answer: 'مدت زمان آماده‌سازی برای شروع دوره زبان معمولاً بین 3 تا 6 ماه است. این زمان شامل اخذ پذیرش، تهیه مدارک، اخذ ویزا و رزرو خوابگاه می‌شود.'
    },
    {
      question: 'شرایط لازم برای شرکت در دوره زبان چیست؟',
      answer: 'شرایط اصلی شامل داشتن مدرک دیپلم، سن مناسب (معمولاً 18 تا 30 سال)، و تمکن مالی کافی برای تأمین هزینه‌های تحصیل و زندگی در فرانسه است.'
    },
    {
      question: 'آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟',
      answer: 'بله، ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری کانادا را به صورت کامل انجام می‌دهد. این شامل ارزیابی مدارک، محاسبه امتیاز CRS، و پیگیری مراحل اداری است.'
    },
    {
      question: 'چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟',
      answer: 'مدارک اصلی شامل مدرک تحصیلی، ریزنمرات، مدرک زبان (در صورت وجود)، نامه پذیرش از دانشگاه، و مدارک مالی برای اثبات تمکن مالی است.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LanguageCourseSection />
      <CTABanner />
      <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9566.PNG" />
      <RelatedArticlesSection 
        articles={[
          {
            title: "مزایای دوره زبان کشور فرانسه",
            image: "/images/blog-page/Rectangle 41.png",
            link: "/france-study",
            excerpt: "اگر دنبال تقویت زبان فرانسه هستید، این مطلب را بخوانید."
          },
          {
            title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
            image: "/images/blog-page/Rectangle 41(1).png",
            link: "/france-visa",
            excerpt: "راهنمای مختصر دریافت ویزای دیجیتال نومد اسپانیا."
          },
          {
            title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
            image: "/images/blog-page/Rectangle 41(2).png",
            link: "/france-study",
            excerpt: "آشنایی کوتاه با دانشگاه UCLY و شهر لیون."
          }
        ]}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-16"
      />
      <FAQSection 
        faqItems={faqItems}
        title="سوالات متداول"
        className="py-12 lg:py-20 bg-[#f2f1f1]"
      />
    </div>
  )
}

export default HomePage
