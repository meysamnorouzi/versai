import React from 'react'
import { ChevronDown, Phone, MessageCircle, Star } from 'lucide-react'
import Button from '@/src/components/ui/Button'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مهاجرت به ترکیه | موسسه مهاجرتی ورسای',
  description: 'راهنمای کامل مهاجرت به ترکیه، انواع ویزا، شرایط اقامت و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای',
  keywords: 'مهاجرت ترکیه، ویزای ترکیه، اقامت ترکیه، تحصیل ترکیه، کار ترکیه، ورسای',
  openGraph: {
    title: 'مهاجرت به ترکیه | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل مهاجرت به ترکیه، انواع ویزا، شرایط اقامت',
    url: 'https://versai.ir/turkey',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/turkey',
  },
}

const TurkeyPage: React.FC = () => {
  const faqItems = [
    {
      question: 'چه روش‌هایی برای مهاجرت به ترکیه وجود دارد؟',
      answer: 'روش‌های مختلف مهاجرت به ترکیه شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج، خرید ملک و ویزای توریستی است. هر روش شرایط و مدارک خاص خود را دارد.'
    },
    {
      question: 'آیا برای کار در ترکیه نیاز به مدرک زبان ترکی دارم؟',
      answer: 'در بسیاری از مشاغل، تسلط به زبان ترکی ضروری است. اما در برخی مشاغل بین‌المللی، زبان انگلیسی نیز کافی است. یادگیری زبان ترکی برای زندگی روزمره مهم است.'
    },
    {
      question: 'شرایط تحصیل در ترکیه چگونه است؟',
      answer: 'ترکیه دارای دانشگاه‌های معتبر و هزینه‌های تحصیلی مقرون به صرفه است. برای تحصیل نیاز به مدرک زبان ترکی یا انگلیسی، مدارک تحصیلی و تمکن مالی دارید.'
    },
    {
      question: 'چقدر زمان می‌برد تا اقامت دائم ترکیه را دریافت کنم؟',
      answer: 'معمولاً پس از 8 سال اقامت قانونی در ترکیه می‌توانید برای اقامت دائم درخواست دهید.'
    },
    {
      question: 'آیا می‌توانم خانواده‌ام را با خود به ترکیه ببرم؟',
      answer: 'بله، در صورت داشتن ویزای کاری یا تحصیلی معتبر، می‌توانید برای خانواده‌تان ویزای همراه دریافت کنید.'
    },
    {
      question: 'هزینه زندگی در ترکیه چقدر است؟',
      answer: 'هزینه زندگی در ترکیه نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است. به طور متوسط ماهانه 400-800 دلار برای یک نفر کافی است.'
    }
  ]

  const blogArticles = [
    {
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/blog-page/Rectangle 41.png',
      link: '/articles/french-language-course-benefits',
      excerpt: 'دلایل محبوبیت دوره‌های زبان فرانسه برای مهاجرت.'
    },
    {
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/blog-page/Rectangle 41(1).png',
      link: '/articles/spain-digital-nomad-visa',
      excerpt: 'گام‌های کلیدی برای دریافت ویزای نومد اسپانیا.'
    },
    {
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/blog-page/Rectangle 41(2).png',
      link: '/articles/ucly-university-lyon',
      excerpt: 'درباره دانشگاه UCLY و مزایای تحصیل در لیون.'
    }
  ]

  const recommendations = [
    'ترکیه کشوری زیبا با فرهنگ غنی و موقعیت استراتژیک بین اروپا و آسیا است.',
    'اقتصاد ترکیه در حال رشد است و فرصت‌های شغلی زیادی در زمینه‌های مختلف دارد.',
    'هزینه زندگی در ترکیه نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است.',
    'ترکیه در قلب منطقه‌ای قرار دارد که دسترسی آسان به اروپا، آسیا و خاورمیانه دارد.',
    'برای موفقیت در ترکیه، یادگیری زبان ترکی و آشنایی با فرهنگ محلی مهم است.'
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-4 sm:mb-6 md:mb-8">
              مهاجرت به ترکیه
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-4 sm:mb-6">
                ترکیه به عنوان پل ارتباطی بین اروپا و آسیا و کشوری با تاریخ غنی و فرهنگ متنوع، فرصت‌های منحصر به فردی برای مهاجران فراهم می‌کند. این کشور با داشتن موقعیت استراتژیک، اقتصاد در حال رشد و هزینه‌های زندگی مقرون به صرفه، یکی از محبوب‌ترین مقاصد مهاجرتی منطقه محسوب می‌شود.
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-4 sm:mb-6">
                ترکیه با جمعیتی بیش از 84 میلیون نفر و اقتصاد پویا، در زمینه‌های مختلف از جمله توریسم، تولید، فناوری، کشاورزی و خدمات فرصت‌های شغلی فراوانی ارائه می‌دهد. این کشور همچنین دارای دانشگاه‌های معتبر و سیستم آموزشی با کیفیت است.
              </p>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                سیستم مهاجرتی ترکیه در سال‌های اخیر بهبود یافته و برنامه‌های مختلفی برای جذب نیروی کار متخصص، دانشجویان بین‌المللی و سرمایه‌گذاران دارد. خرید ملک در ترکیه نیز یکی از راه‌های محبوب برای دریافت اقامت است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img 
                src="https://placehold.co/446x502" 
                alt="Turkish immigration methods"
                className="w-full h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  روش‌های مختلف مهاجرت به ترکیه
                </h2>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    ترکیه روش‌های متنوعی برای مهاجرت ارائه می‌دهد که شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج، خرید ملک و ویزای توریستی می‌شود. هر روش شرایط و مدارک خاص خود را دارد.
                  </p>
                  <p>
                    ویزای کاری ترکیه برای متخصصان، ویزای تحصیلی برای دانشجویان، ویزای سرمایه‌گذاری برای کارآفرینان و خرید ملک برای دریافت اقامت از جمله گزینه‌های موجود است.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  مزایای مهاجرت به ترکیه
                </h3>
                <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-2 sm:space-y-3 list-disc list-inside">
                    <li>
                      موقعیت استراتژیک بین اروپا و آسیا
                    </li>
                    <li>
                      هزینه زندگی مقرون به صرفه نسبت به اروپا
                    </li>
                    <li>
                      اقتصاد در حال رشد و فرصت‌های شغلی متنوع
                    </li>
                    <li>
                      فرهنگ غنی و تاریخ طولانی
                    </li>
                    <li>
                      دسترسی آسان به سایر کشورهای منطقه
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-red-900/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1440x320" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-stone-50 leading-[1.41] mb-6 sm:mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            برای مشاوره تخصصی مهاجرت به ترکیه از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
          </h2>
          <Button 
            variant="primary" 
            size="md"
            className="bg-red-500 hover:bg-red-600 border border-red-400"
          >
            درخواست مشاوره
          </Button>
        </div>
      </section>

      {/* Versailles Recommendations Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6 sm:mb-8">
                توصیه‌های ورسای به شما
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#b23124]" />
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <img 
                src="https://placehold.co/627x279" 
                alt="Study in Turkey"
                className="w-full h-[200px] sm:h-[250px] md:h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در ترکیه چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>
                  برای مشاوره تخصصی مهاجرت به ترکیه، با ما در ارتباط باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection 
        articles={blogArticles.map(article => ({
          ...article,
          link: article.link || '/articles'
        }))}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-8 sm:py-12 md:py-16 px-4"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqItems={faqItems}
        title="سوالات متداول"
        className="py-8 sm:py-12 md:py-16 px-4"
      />
    </div>
  )
}

export default TurkeyPage

