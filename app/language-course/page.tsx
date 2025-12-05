import React from 'react'
import LanguageCourseHero from '@/src/components/language-course/LanguageCourseHero'
import LanguageCourseBenefits from '@/src/components/language-course/LanguageCourseBenefits'
import LanguageCourseCTA from '@/src/components/language-course/LanguageCourseCTA'
import UCLYUniversitySection from '@/src/components/language-course/UCLYUniversitySection'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import FAQSection from '@/src/components/ui/FAQSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دوره زبان فرانسه - مهاجرت آسان با ورسای',
  description: 'دوره زبان فرانسه در دانشگاه UCLY لیون. نماینده رسمی دانشگاه UCLY در ایران. مهاجرت آسان و سریع به فرانسه.',
  keywords: 'دوره زبان فرانسه, دانشگاه UCLY, مهاجرت به فرانسه, تحصیل در فرانسه, ورسای',
  openGraph: {
    title: 'دوره زبان فرانسه - مهاجرت آسان با ورسای',
    description: 'دوره زبان فرانسه در دانشگاه UCLY لیون. نماینده رسمی دانشگاه UCLY در ایران. مهاجرت آسان و سریع به فرانسه.',
    url: 'https://versai.ir/language-course',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/language-course',
  },
}

const LanguageCoursePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2f1f1]">
      <LanguageCourseHero />
      <LanguageCourseBenefits />
      <LanguageCourseCTA />
      <UCLYUniversitySection />
      <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9567.PNG" />
      <RelatedArticlesSection 
        articles={[
          {
            title: "مزایای دوره زبان کشور فرانسه",
            image: "/images/france-pr-page/success-story1.png",
            link: "/france-study"
          },
          {
            title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
            image: "/images/france-pr-page/success-story2.png",
            link: "/france-visa"
          },
          {
            title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
            image: "/images/france-pr-page/success-story3.png",
            link: "/france-study"
          }
        ]}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-16"
      />
      <FAQSection 
        faqItems={[
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
        ]}
        title="سوالات متداول"
        className="py-12 lg:py-20 bg-[#f2f1f1]"
      />
    </div>
  )
}

export default LanguageCoursePage

