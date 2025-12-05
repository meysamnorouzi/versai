import React from 'react'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import { FAQItem, RelatedArticle } from '@/src/types'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Icon from '@/src/components/ui/Icon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اقامت در فرانسه - راهنمای کامل اقامت دائم فرانسه | ورسای',
  description: 'راهنمای کامل روش‌های مختلف مهاجرت و اقامت در فرانسه شامل تولد، ازدواج، کاری، تحصیلی و سرمایه‌گذاری',
  keywords: 'اقامت فرانسه، اقامت دائم فرانسه، مهاجرت فرانسه، ملیت فرانسوی، ورسای',
  openGraph: {
    title: 'اقامت در فرانسه - راهنمای کامل اقامت دائم فرانسه | ورسای',
    description: 'راهنمای کامل روش‌های مختلف مهاجرت و اقامت در فرانسه',
    url: 'https://versai.ir/pr-france',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/pr-france',
  },
}

const PRFrancePage: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "اولین گام اقدام برای دوره‌های زبان چیست؟",
      answer: "اولین گام، ارزیابی شرایط و مدارک شما توسط مشاوران ورسای است."
    },
    {
      question: "مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟",
      answer: "مشاوره به صورت حضوری و آنلاین برگزار می‌شود و هزینه آن بر اساس نوع مشاوره متفاوت است."
    },
    {
      question: "مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟",
      answer: "معمولاً 3-6 ماه زمان نیاز است تا تمام مراحل آماده شود."
    },
    {
      question: "شرایط لازم برای شرکت در دوره زبان چیست؟",
      answer: "داشتن مدرک دیپلم، پاسپورت معتبر و تمکن مالی کافی از شرایط اصلی است."
    },
    {
      question: "آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟",
      answer: "بله، ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را انجام می‌دهد."
    },
    {
      question: "چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟",
      answer: "مدارک اصلی شامل پاسپورت، مدرک تحصیلی، گواهی تمکن مالی، بیمه درمانی و مدارک زبان فرانسه است."
    }
  ]

  const relatedArticles: RelatedArticle[] = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "/images/blog-page/Rectangle 41.png",
      link: "/articles/french-language-course-benefits",
      excerpt: "مروری بر مزایای دوره‌های زبان فرانسه و مسیرهای پذیرش."
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/blog-page/Rectangle 41(1).png",
      link: "/articles/spain-digital-nomad-visa",
      excerpt: "راهنمای سریع درخواست ویزای دیجیتال نومد اسپانیا."
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/blog-page/Rectangle 41(2).png",
      link: "/articles/ucly-university-lyon-france",
      excerpt: "آشنایی با دانشگاه UCLY لیون و امکانات آموزشی آن."
    }
  ]

  return (
    <div className="w-full bg-[#f2f1f1] text-lg text-[#6d6e70] font-['IRANYekanX']">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center text-[24px] sm:text-[28px] md:text-[32px] text-[#316086]">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold leading-[1.41]">
              اقامت در فرانسه
            </h1>
            <div className="max-w-4xl text-sm sm:text-base md:text-lg leading-[1.53] font-medium text-[#6d6e70] text-right">
              <p className="mb-3 sm:mb-4">
                مهاجرت به فرانسه روش های مختلفی دارد و هر فرد با توجه به شرایطی که دارد می تواند بهترین روش مهاجرت را انتخاب و اقدامات لازم را انجام دهد. نگران نباشید ما تمام این روش ها را می دانیم و با دغدغه های شما آشنا هستیم. در این مقاله سعی داریم به صورت مختصر و مفید اطلاعات مورد نیاز را در اختیار شما قرار دهیم،
              </p>
              <p>به طور کلی راه های مهاجرت به فرانسه عبارت اند از:</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Methods */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 text-center text-[#316086]">
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <Icon
                section="easyImmigration"
                name="group"
                className="w-10 h-10"
                alt="تولد"
              />
              <div className="text-center">تولد</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <Icon
                section="easyImmigration"
                name="component"
                className="w-10 h-10"
                alt="ازدواج"
              />
              <div className="text-center">ازدواج</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[83px]">
              <Icon
                section="easyImmigration"
                name="delivery"
                className="w-10 h-10"
                alt="پناهندگی"
              />
              <div className="text-center">پناهندگی</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[116px]">
              <Icon
                section="easyImmigration"
                name="coins"
                className="w-10 h-10"
                alt="سرمایه گذاری"
              />
              <div className="text-center">سرمایه گذاری</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[55px]">
              <Icon
                section="easyImmigration"
                name="clock"
                className="w-10 h-10"
                alt="کاری"
              />
              <div className="text-center">کاری</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[86px]">
              <Icon
                section="easyImmigration"
                name="medical"
                className="w-10 h-10"
                alt="تحصیلی"
              />
              <div className="text-center">تحصیلی</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative min-h-[250px] sm:min-h-[300px] md:h-[399px] text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img className="absolute top-[58px] left-0 w-full h-[200px] sm:h-[250px] md:h-[294px] object-cover" src="/images/france-pr-page/blue-img.png" alt="" />
          <div className="absolute top-0 left-0 sm:left-[146px] w-full sm:w-[490px] h-full">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/france-pr-page/france-map.svg" alt="" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-0">
          <div className="leading-[1.41] font-extrabold w-full max-w-[454px] [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            <p className="m-0">آینده‌تان در فرانسه،</p>
            <p className="m-0"> با یک مسیر ساده آغاز می‌شود.</p>
          </div>
          <div className="mt-6 sm:mt-8 rounded-[32px] bg-[#d74a3c] border border-[#e5867d] flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 text-left text-sm sm:text-base md:text-lg text-[#fdfeff]">
            <b className="leading-[1.1]">درخواست مشاوره</b>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-end gap-4 sm:gap-6 text-right text-[20px] sm:text-[22px] md:text-[24px] text-[#b23124]">
            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex items-start justify-start gap-2">
                <QuestionMarkCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <div className="max-w-[746px]">
                  <h2 className="leading-[1.1] text-[18px] sm:text-[20px] md:text-[24px] font-bold">چگونه می توانیم بعد از مهاجرت به فرانسه، اقامت دائم فرانسه را بگیریم؟</h2>
                </div>
              </div>
              <div className="w-full text-sm sm:text-base md:text-lg leading-[1.53] font-medium text-[#6d6e70]">
                <p className="mb-3 sm:mb-4">
                  افراد عادی معمولا اگر بتوانند به مدت 5 سال در فرانسه بمانند (از طریق روش های مهاجرت که اشاره می شود)، در این صورت می توانند تقاضای اقامت دائم نمایند. اما افرادی که از دانشگاه های فرانسه فارغ التحصیل شده اند، دو سال بعد از اتمام درس می توانند درخواست اقامت دائم نمایند. سوالی که در اینجا ممکن است برایتان پیش بیاید این است که بعد از پایان تحصیل فرد باید مجددا راهی برای ماندن در فرانسه پیدا کند، در این شرایط می توانید ویزای کار گرفته یا مجددا ادامه تحصیل دهید. در هر دو حالت فرد می تواند بعد از گذشت دو سال نسبت به دریافت اقامت دائم در فرانسه اقدام نماید.
                </p>
                <p>در موارد زیر چهار روش ذکر شده است که می توان به وسیله آن اقامت کشور فرانسه را دریافت کرد.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3 sm:gap-4 text-sm sm:text-base text-[#316086] text-right">
              <div className="flex items-center gap-2">
                <Icon section="easyImmigration" name="group" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="max-w-[614px] font-medium leading-[1.61]">
                  تولد در فرانسه: افرادی که در فرانسه متولد می شوند، در ۱۸ سالگی ملیت فرانسوی می گیرند.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon section="easyImmigration" name="group" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="max-w-[614px] font-medium leading-[1.61]">
                  داشتن پدر یا مادر فرانسوی: افرادی که والدین آن ها (پدر یا مادر) فرانسوی است.
                </div>
              </div>
              <div className="w-full flex items-center justify-start gap-2">
                <Icon section="easyImmigration" name="group" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="max-w-[907px] font-medium leading-[1.61]">
                  اقامت در فرانسه بیش از ۵ سال: افرادی که بیشتر از پنج سال در فرانسه اقامت داشته باشند می توانند برای اقامت فرانسه اقدام کنند.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon section="easyImmigration" name="group" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="max-w-[735px] font-medium leading-[1.61]">
                  ازدواج با فرد فرانسوی: از طریق ازدواج با یک فرانسوی بعد از ۴ سال می توان تقاضای ملیت فرانسوی کرد.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9565.PNG" />
        </div>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection
        articles={relatedArticles}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-8 sm:py-12 md:py-16"
      />

      {/* FAQ Section */}
      <FAQSection
        faqItems={faqItems}
        title="سوالات متداول"
        className="py-8 sm:py-12 md:py-16"
      />
    </div>
  )
}

export default PRFrancePage

