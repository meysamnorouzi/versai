import React from 'react'
import {
  BookOpen,
  Briefcase,
  Globe,
  GraduationCap,
  Star,
  Wallet,
  Award,
  Languages,
} from 'lucide-react'
import Button from '@/src/components/ui/Button'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مهاجرت و تحصیل در ایتالیا | موسسه مهاجرتی ورسای',
  description: 'راهنمای کامل مهاجرت و تحصیل در ایتالیا شامل انواع ویزا، بورسیه DSU، شرایط اقامت و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای.',
  keywords: 'مهاجرت ایتالیا، تحصیل ایتالیا، ویزای ایتالیا، بورسیه DSU، اقامت ایتالیا، ورسای',
  openGraph: {
    title: 'مهاجرت و تحصیل در ایتالیا | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل مهاجرت و تحصیل در ایتالیا شامل انواع ویزا، بورسیه DSU و شرایط اقامت.',
    url: 'https://versai.ir/italy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/italy',
  },
}

const ItalyPage: React.FC = () => {
  const whyItaly = [
    {
      icon: GraduationCap,
      title: 'کیفیت بالای آموزش',
      description:
        'دانشگاه‌های معتبر ایتالیا مانند دانشگاه بولونیا و دانشگاه میلان، در رتبه‌بندی‌های جهانی جایگاه بالایی دارند و به‌ویژه در رشته‌هایی مانند هنر، معماری، طراحی و مدیریت شناخته‌شده هستند.',
    },
    {
      icon: Wallet,
      title: 'هزینه‌های مقرون‌به‌صرفه',
      description:
        'شهریه دانشگاه‌ها: حدود ۵۰۰ تا ۳۰۰۰ یورو در سال. هزینه زندگی: حدود ۵۰۰ تا ۸۰۰ یورو در ماه. در مقایسه با بسیاری از کشورهای اروپایی، ایتالیا گزینه‌ای اقتصادی‌تر محسوب می‌شود.',
    },
    {
      icon: Languages,
      title: 'امکان تحصیل به زبان انگلیسی',
      description:
        'بسیاری از رشته‌ها در مقاطع مختلف به زبان انگلیسی ارائه می‌شوند و امکان اقدام با مدرک آیلتس ۶ برای تعداد زیادی از دانشگاه‌ها وجود دارد.',
    },
    {
      icon: Award,
      title: 'بورسیه‌های متنوع (DSU)',
      description:
        'امکان دریافت بورسیه‌های استانی شامل کمک‌هزینه نقدی سالانه، خوابگاه یا کمک‌هزینه مسکن، و غذا با تخفیف.',
    },
    {
      icon: Briefcase,
      title: 'اجازه کار دانشجویی',
      description:
        'دانشجویان بین‌المللی می‌توانند تا ۲۰ ساعت در هفته به‌صورت قانونی کار کنند.',
    },
    {
      icon: BookOpen,
      title: 'اقامت پس از تحصیل',
      description:
        'پس از فارغ‌التحصیلی، امکان تبدیل ویزای تحصیلی به ویزای کاری و ادامه اقامت در ایتالیا وجود دارد. این مسیر می‌تواند به اقامت دائم منتهی شود.',
    },
    {
      icon: Globe,
      title: 'محیط بین‌المللی و چندفرهنگی',
      description:
        'تحصیل در کنار دانشجویانی از سراسر جهان، فرصتی عالی برای توسعه فردی و ایجاد شبکه ارتباطی بین‌المللی فراهم می‌کند.',
    },
  ]

  const dsuBenefits = [
    'کمک‌هزینه نقدی سالانه',
    'خوابگاه یا کمک‌هزینه مسکن',
    'غذا با تخفیف',
  ]

  const immigrationFaqItems = [
    {
      question: 'چه روش‌هایی برای مهاجرت به ایتالیا وجود دارد؟',
      answer:
        'روش‌های مختلف مهاجرت به ایتالیا شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و ویزای دیجیتال نومد است. هر روش شرایط و مدارک خاص خود را دارد.',
    },
    {
      question: 'آیا برای کار در ایتالیا نیاز به مدرک زبان ایتالیایی دارم؟',
      answer:
        'بله، برای اکثر مشاغل در ایتالیا تسلط به زبان ایتالیایی ضروری است. البته در برخی مشاغل بین‌المللی، زبان انگلیسی نیز کافی است.',
    },
    {
      question: 'چقدر زمان می‌برد تا اقامت دائم ایتالیا را دریافت کنم؟',
      answer:
        'معمولاً پس از 5 سال اقامت قانونی در ایتالیا می‌توانید برای اقامت دائم درخواست دهید.',
    },
    {
      question: 'آیا می‌توانم خانواده‌ام را با خود به ایتالیا ببرم؟',
      answer:
        'بله، در صورت داشتن ویزای کاری یا تحصیلی معتبر، می‌توانید برای خانواده‌تان ویزای همراه دریافت کنید.',
    },
    {
      question: 'هزینه زندگی در ایتالیا چقدر است؟',
      answer:
        'هزینه زندگی در ایتالیا نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است. به طور متوسط ماهانه 600-1000 یورو برای یک نفر کافی است.',
    },
  ]

  const studyFaqItems = [
    {
      question: 'شرایط تحصیل در ایتالیا چگونه است؟',
      answer:
        'ایتالیا دارای دانشگاه‌های معتبر و هزینه‌های تحصیلی مقرون به صرفه است. برای تحصیل نیاز به مدرک زبان ایتالیایی یا انگلیسی، مدارک تحصیلی و تمکن مالی دارید.',
    },
    {
      question: 'هزینه تحصیل و زندگی در ایتالیا چقدر است؟',
      answer:
        'شهریه دانشگاه‌ها معمولاً بین ۵۰۰ تا ۳۰۰۰ یورو در سال است. هزینه زندگی ماهانه حدود ۵۰۰ تا ۸۰۰ یورو برآورد می‌شود که نسبت به بسیاری از کشورهای اروپایی مقرون‌به‌صرفه‌تر است.',
    },
    {
      question: 'آیا می‌توان در ایتالیا به زبان انگلیسی تحصیل کرد؟',
      answer:
        'بله. بسیاری از رشته‌ها در مقاطع مختلف به زبان انگلیسی ارائه می‌شوند و برای تعداد زیادی از دانشگاه‌ها امکان اقدام با آیلتس ۶ وجود دارد.',
    },
    {
      question: 'بورسیه DSU در ایتالیا چیست؟',
      answer:
        'بورسیه‌های استانی DSU شامل کمک‌هزینه نقدی سالانه، خوابگاه یا کمک‌هزینه مسکن و غذا با تخفیف است که برای دانشجویان واجد شرایط قابل دریافت است.',
    },
    {
      question: 'آیا دانشجویان در ایتالیا اجازه کار دارند؟',
      answer:
        'بله. دانشجویان بین‌المللی می‌توانند تا ۲۰ ساعت در هفته به‌صورت قانونی کار کنند.',
    },
    {
      question: 'پس از فارغ‌التحصیلی در ایتالیا چه امکانی برای اقامت وجود دارد؟',
      answer:
        'پس از فارغ‌التحصیلی امکان تبدیل ویزای تحصیلی به ویزای کاری و ادامه اقامت در ایتالیا وجود دارد که می‌تواند به اقامت دائم منتهی شود.',
    },
  ]

  const recommendations = [
    'ایتالیا کشوری زیبا با فرهنگ غنی و تاریخ طولانی است که فرصت‌های زیادی برای مهاجران فراهم می‌کند.',
    'اقتصاد ایتالیا در زمینه‌های مختلف از جمله مد، طراحی، غذا و توریسم بسیار قوی است.',
    'سیستم آموزشی ایتالیا کیفیت بالایی دارد و هزینه‌های تحصیلی مقرون به صرفه است.',
    'ایتالیا در قلب اروپا قرار دارد و دسترسی آسان به سایر کشورهای اروپایی دارد.',
    'برای موفقیت در ایتالیا، یادگیری زبان ایتالیایی و آشنایی با فرهنگ محلی مهم است.',
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden font-['IRANYekanX']">
      {/* Hero Section - Immigration */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-4 sm:mb-6 md:mb-8">
              مهاجرت به ایتالیا
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-4 sm:mb-6">
                ایتالیا به عنوان یکی از زیباترین کشورهای جهان و مهد هنر و فرهنگ، فرصت‌های منحصر به فردی برای مهاجران فراهم می‌کند. این کشور با داشتن تاریخ غنی، معماری باشکوه و فرهنگ متنوع، یکی از محبوب‌ترین مقاصد توریستی و مهاجرتی جهان محسوب می‌شود.
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-4 sm:mb-6">
                ایتالیا با جمعیتی بیش از 60 میلیون نفر و اقتصاد متنوع، در زمینه‌های مختلف از جمله مد، طراحی، غذا، توریسم، خودروسازی و فناوری فرصت‌های شغلی فراوانی ارائه می‌دهد. این کشور همچنین دارای دانشگاه‌های معتبر و سیستم آموزشی با کیفیت است.
              </p>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                سیستم مهاجرتی ایتالیا در سال‌های اخیر بهبود یافته و برنامه‌های مختلفی برای جذب نیروی کار متخصص، دانشجویان بین‌المللی و سرمایه‌گذاران دارد. ویزای دیجیتال نومد ایتالیا نیز یکی از جدیدترین و جذاب‌ترین گزینه‌ها برای کارآفرینان و فریلنسرها است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Methods Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="/images/shared/photo_2026-06-18_10-13-50.jpg"
                alt="پرچم ایتالیا"
                className="w-full h-[300px] sm:h-[400px] md:h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  روش‌های مختلف مهاجرت به ایتالیا
                </h2>
                <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    ایتالیا روش‌های متنوعی برای مهاجرت ارائه می‌دهد که شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و ویزای دیجیتال نومد می‌شود. هر روش شرایط و مدارک خاص خود را دارد.
                  </p>
                  <p>
                    ویزای کاری ایتالیا برای متخصصان، ویزای تحصیلی برای دانشجویان، ویزای سرمایه‌گذاری برای کارآفرینان و ویزای دیجیتال نومد برای فریلنسرها از جمله گزینه‌های موجود است.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  مزایای مهاجرت به ایتالیا
                </h3>
                <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-2 sm:space-y-3 list-disc list-inside">
                    <li>فرهنگ غنی و تاریخ طولانی با آثار هنری و معماری باشکوه</li>
                    <li>آب و هوای مدیترانه‌ای معتدل و طبیعت زیبا</li>
                    <li>سیستم آموزشی با کیفیت و هزینه‌های مقرون به صرفه</li>
                    <li>اقتصاد متنوع و فرصت‌های شغلی در زمینه‌های مختلف</li>
                    <li>دسترسی آسان به سایر کشورهای اروپایی</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner - Immigration */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-red-900/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shared/photo_2026-06-18_10-13-50.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-stone-50 leading-[1.41] mb-6 sm:mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            برای مشاوره تخصصی مهاجرت به ایتالیا از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
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
                src="/images/shared/photo_2026-06-18_10-13-53.jpg"
                alt="یادبود ویکتور امانوئل دوم در رم"
                className="w-full h-[200px] sm:h-[250px] md:h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در ایتالیا چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>برای مشاوره تخصصی مهاجرت به ایتالیا، با ما در ارتباط باشید.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Section - Continuation */}
      <section className="py-8 sm:py-12 md:py-16 px-4 border-t border-[#316086]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-2 sm:mb-3">
              تحصیل در ایتالیا با مؤسسه مهاجرتی ورسای
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#b23124] mb-4 sm:mb-6">
              تحصیل در قلب اروپا با کمترین هزینه
            </p>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53]">
                ایتالیا، با تاریخ غنی، فرهنگ بی‌نظیر و دانشگاه‌هایی با اعتبار جهانی، یکی از بهترین مقاصد تحصیلی برای دانشجویان بین‌المللی است. با همراهی مؤسسه مهاجرتی ورسای، می‌توانید با اطمینان و برنامه‌ریزی دقیق، مسیر تحصیل و اقامت در این کشور را آغاز کنید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Italy - Study Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#b23124] text-right mb-6 sm:mb-8 md:mb-12">
            چرا ایتالیا؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyItaly.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-[#316086]/20 hover:border-[#b23124]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#316086]/10">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#b23124]" />
                    </div>
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#316086]">{item.title}</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#6d6e70] leading-[1.53] text-right">
                    {item.description}
                  </p>
                  {item.title === 'بورسیه‌های متنوع (DSU)' && (
                    <ul className="mt-3 space-y-1.5 text-right">
                      {dsuBenefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="text-[12px] sm:text-[13px] font-medium text-[#316086] leading-[1.5] flex items-start gap-1.5 justify-end"
                        >
                          <span>{benefit}</span>
                          <span className="text-[#b23124]">•</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#316086] rounded-2xl p-5 sm:p-6 text-center">
              <p className="text-[13px] sm:text-[14px] font-medium text-[#d3e2ef] mb-1">شهریه دانشگاه‌ها</p>
              <p className="text-[20px] sm:text-[24px] font-extrabold text-white">۵۰۰ تا ۳,۰۰۰ یورو / سال</p>
            </div>
            <div className="bg-[#b23124] rounded-2xl p-5 sm:p-6 text-center">
              <p className="text-[13px] sm:text-[14px] font-medium text-red-100 mb-1">هزینه زندگی</p>
              <p className="text-[20px] sm:text-[24px] font-extrabold text-white">۵۰۰ تا ۸۰۰ یورو / ماه</p>
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
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-8 sm:py-12 md:py-16 px-4"
      />

      {/* FAQ Section */}
      <FAQSection
        faqItems={[...immigrationFaqItems, ...studyFaqItems]}
        title="سوالات متداول"
        className="py-8 sm:py-12 md:py-16 px-4 bg-white"
      />
    </div>
  )
}

export default ItalyPage
