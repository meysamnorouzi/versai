import React from 'react'
import { BookOpen, Briefcase, GraduationCap, Star, Wallet } from 'lucide-react'
import Button from '@/src/components/ui/Button'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import { DEFAULT_RELATED_ARTICLES } from '@/src/config/relatedArticles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تحصیل در هلند - فرصت استثنائی تحصیل در دانشگاه‌های هلند | ورسای',
  description: 'راهنمای تحصیل در هلند شامل شرایط پذیرش، شهریه University of Groningen، ویزای Orientation Year و هزینه زندگی دانشجویی در هلند.',
  keywords: 'تحصیل هلند, دانشگاه گرونینگن, University of Groningen, ویزای Orientation Year, مهاجرت هلند, ورسای',
  openGraph: {
    title: 'تحصیل در هلند - فرصت استثنائی تحصیل در دانشگاه‌های هلند | ورسای',
    description: 'راهنمای تحصیل در هلند شامل شرایط پذیرش، شهریه و ویزای Orientation Year.',
    url: 'https://versai.ir/netherlands',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/netherlands',
  },
}

const NetherlandsPage: React.FC = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'آموزش انگلیسی‌زبان',
      description: 'اکثر رشته‌ها به زبان انگلیسی ارائه می‌شوند و معمولاً با آیلتس ۶ تا ۶.۵ می‌توان پذیرش گرفت.',
    },
    {
      icon: Briefcase,
      title: 'کار پاره‌وقت',
      description: 'دانشجویان اجازه کار پاره‌وقت دارند و پس از فارغ‌التحصیلی می‌توانند از ویزای Orientation Year استفاده کنند.',
    },
    {
      icon: GraduationCap,
      title: 'مهارت‌های عملی',
      description: 'سیستم آموزشی هلند یکی از دقیق‌ترین و ساختارمندترین سیستم‌های اروپا با تمرکز بر ورود مستقیم به بازار کار است.',
    },
    {
      icon: Wallet,
      title: 'هزینه زندگی شفاف',
      description: 'هزینه زندگی در شهرهای دانشجویی هلند به‌طور واقعی بین ۸۰۰ تا ۱۲۰۰ یورو در ماه است.',
    },
  ]

  const tuitionFees = [
    {
      level: 'کارشناسی (رشته‌های عمومی)',
      amount: '۱۳,۵۰۰ تا ۱۴,۰۰۰ یورو در سال',
    },
    {
      level: 'کارشناسی (مهندسی و علوم)',
      amount: 'تا حدود ۱۹,۸۰۰ یورو در سال',
    },
    {
      level: 'کارشناسی (پزشکی)',
      amount: 'تا حدود ۳۲,۰۰۰ یورو در سال',
    },
    {
      level: 'کارشناسی ارشد',
      amount: '۱۶,۰۰۰ تا ۲۱,۰۰۰ یورو در سال',
    },
    {
      level: 'University College Groningen',
      amount: 'حدود ۱۷,۲۰۰ یورو در سال',
    },
  ]

  const groningenFeatures = [
    'بیش از ۴۰۰ سال سابقه علمی و آموزشی',
    'برنامه‌های انگلیسی‌زبان در اقتصاد، هوش مصنوعی، روابط بین‌الملل و مهندسی',
    'ارتباط قوی با صنعت و تحقیقات برای ورود به بازار کار',
    'حضور شرکت‌های بین‌المللی و اقتصاد پویا در اختیار فارغ‌التحصیلان',
    'برآورد شفاف هزینه‌های زندگی دانشجویی (مثلاً حدود ۲۰۰ یورو غذا و هزینه‌های جانبی)',
    'یکی از گزینه‌های دقیق، شفاف و قابل برنامه‌ریزی برای آینده شغلی در اروپا',
  ]

  const faqItems = [
    {
      question: 'برای تحصیل در هلند به چه نمره آیلتسی نیاز است؟',
      answer: 'معمولاً با آیلتس ۶ تا ۶.۵ می‌توان در اکثر رشته‌های انگلیسی‌زبان هلند پذیرش گرفت. شرایط دقیق بسته به دانشگاه و رشته متفاوت است.',
    },
    {
      question: 'هزینه زندگی دانشجویی در هلند چقدر است؟',
      answer: 'هزینه زندگی در شهرهای دانشجویی هلند به‌طور واقعی بین ۸۰۰ تا ۱۲۰۰ یورو در ماه است و شامل مسکن، غذا، بیمه و حمل‌ونقل می‌شود.',
    },
    {
      question: 'ویزای Orientation Year چیست؟',
      answer: 'پس از فارغ‌التحصیلی در هلند، دانشجویان می‌توانند از ویزای Orientation Year (یک‌سال جستجوی کار) استفاده کنند تا فرصت یافتن شغل در بازار کار هلند را داشته باشند.',
    },
    {
      question: 'شهریه University of Groningen برای دانشجویان غیر اتحادیه اروپا چقدر است؟',
      answer: 'در مقطع کارشناسی برای بسیاری از رشته‌ها حدود ۱۳,۵۰۰ تا ۱۴,۰۰۰ یورو در سال است. در مهندسی یا علوم تا ۱۹,۸۰۰ یورو و در پزشکی تا ۳۲,۰۰۰ یورو. در کارشناسی ارشد معمولاً ۱۶,۰۰۰ تا ۲۱,۰۰۰ یورو در سال.',
    },
    {
      question: 'آیا دانشجویان در هلند اجازه کار دارند؟',
      answer: 'بله. دانشجویان بین‌المللی در هلند اجازه کار پاره‌وقت دارند که می‌تواند به تأمین هزینه‌های زندگی و کسب تجربه کاری کمک کند.',
    },
    {
      question: 'آیا ورسای در پذیرش دانشگاه‌های هلند کمک می‌کند؟',
      answer: 'بله. موسسه مهاجرتی ورسای در انتخاب دانشگاه، آماده‌سازی مدارک، اثبات تمکن مالی و پیگیری پرونده ویزای تحصیلی هلند همراه شماست.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#b23124]">فرصت استثنائی</span> تحصیل در هلند
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53]">
                هلند یکی از دقیق‌ترین و ساختارمندترین سیستم‌های آموزشی اروپا را دارد و تمرکز آن روی مهارت‌های عملی و ورود مستقیم به بازار کار است. اکثر رشته‌ها به زبان انگلیسی ارائه می‌شوند و معمولاً با آیلتس ۶ تا ۶.۵ می‌توان پذیرش گرفت. دانشجویان اجازه کار پاره‌وقت دارند و پس از فارغ‌التحصیلی می‌توانند از ویزای Orientation Year (یک‌سال جستجوی کار) استفاده کنند. هزینه زندگی در شهرهای دانشجویی هلند به‌طور واقعی بین ۸۰۰ تا ۱۲۰۰ یورو در ماه است و شامل مسکن، غذا، بیمه و حمل‌ونقل می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-10 md:gap-12">
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[140px] max-w-[200px] text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#316086]/10">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#b23124]" />
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-semibold text-[#316086]">{item.title}</div>
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#6d6e70] leading-[1.5] text-justify">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* University of Groningen Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="https://placehold.co/446x502/316086/ffffff?text=University+of+Groningen"
                alt="University of Groningen"
                className="w-full h-[300px] sm:h-[400px] md:h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  University of Groningen
                </h2>
                <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    در بین دانشگاه‌های هلند، University of Groningen یکی از گزینه‌های بسیار معتبر و دقیق برای دانشجویان بین‌المللی است. طبق اطلاعات رسمی این دانشگاه، شهریه برای دانشجویان خارج از اتحادیه اروپا در مقطع کارشناسی در بسیاری از رشته‌ها حدود ۱۳,۵۰۰ تا ۱۴,۰۰۰ یورو در سال است و در رشته‌های مهندسی یا علوم ممکن است به حدود ۱۹,۸۰۰ یورو برسد. در رشته‌های پزشکی حتی تا حدود ۳۲,۰۰۰ یورو در سال نیز افزایش دارد.
                  </p>
                  <p>
                    در مقطع کارشناسی ارشد نیز شهریه‌ها بسته به رشته معمولاً بین ۱۶,۰۰۰ تا ۲۱,۰۰۰ یورو در سال متغیر است. همچنین حضور شرکت‌های بین‌المللی و اقتصاد پویا، فرصت‌های شغلی متنوعی در اختیار فارغ‌التحصیلان قرار می‌دهد.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  جدول شهریه (دانشجویان غیر اتحادیه اروپا)
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {tuitionFees.map((fee, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-[#316086]/20"
                    >
                      <span className="text-[13px] sm:text-[14px] font-medium text-[#316086]">{fee.level}</span>
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#b23124]">{fee.amount}</span>
                    </div>
                  ))}
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
            src="https://placehold.co/1440x320/1e3950/ffffff?text=Study+in+Netherlands"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-stone-50 leading-[1.41] mb-6 sm:mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            برای مشاوره تخصصی تحصیل در هلند از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
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

      {/* Groningen Features Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6 sm:mb-8">
                چرا University of Groningen؟
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {groningenFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#b23124]" />
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <img
                src="https://placehold.co/627x279/316086/ffffff?text=Groningen"
                alt="Groningen student city"
                className="w-full h-[200px] sm:h-[250px] md:h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61] text-right">
                <p>
                  این دانشگاه با بیش از ۴۰۰ سال سابقه، برنامه‌های انگلیسی‌زبان متنوعی در رشته‌هایی مانند اقتصاد، هوش مصنوعی، روابط بین‌الملل و مهندسی ارائه می‌دهد و به‌دلیل ارتباط قوی با صنعت و تحقیقات، شانس ورود به بازار کار را بالا می‌برد.
                </p>
                <p>
                  همچنین برخی برنامه‌ها مانند University College Groningen شهریه‌ای حدود ۱۷,۲۰۰ یورو در سال دارند و هزینه‌های زندگی دانشجویی در این شهر به‌صورت جزئی (مثلاً حدود ۲۰۰ یورو غذا و هزینه‌های جانبی دیگر) توسط خود دانشگاه برآورد شده است. در مجموع، گرونینگن یکی از گزینه‌های دقیق، شفاف و قابل برنامه‌ریزی برای دانشجویانی است که به دنبال تحصیل هدفمند و آینده شغلی در اروپا هستند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9562.PNG" />
        </div>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection
        articles={DEFAULT_RELATED_ARTICLES}
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

export default NetherlandsPage
