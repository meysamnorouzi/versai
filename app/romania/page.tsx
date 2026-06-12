import React from 'react'
import { Building2, Globe, Shield, TrendingUp, Wallet, Briefcase, FileCheck, MapPin } from 'lucide-react'
import Container from '@/src/components/ui/Container'
import Button from '@/src/components/ui/Button'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import { DEFAULT_RELATED_ARTICLES } from '@/src/config/relatedArticles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اقامت کاری در رومانی - ویزای کار و مهاجرت کاری به اروپا | ورسای',
  description: 'راهنمای اقامت کاری در رومانی شامل مزایا، شهرهای پرتقاضا، ویزای مجوز کار و مشاوره تخصصی موسسه مهاجرتی ورسای.',
  keywords: 'اقامت کاری رومانی, ویزای کار رومانی, مهاجرت رومانی, کار در رومانی, بخارست, ورسای',
  openGraph: {
    title: 'اقامت کاری در رومانی - ویزای کار و مهاجرت کاری به اروپا | ورسای',
    description: 'راهنمای اقامت کاری در رومانی شامل مزایا، شهرهای پرتقاضا و ویزای مجوز کار.',
    url: 'https://versai.ir/romania',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/romania',
  },
}

const RomaniaPage: React.FC = () => {
  const benefits = [
    {
      icon: Wallet,
      title: 'هزینه زندگی پایین‌تر',
      description: 'هزینه زندگی پایین‌تر نسبت به بسیاری از کشورهای اروپایی.',
    },
    {
      icon: FileCheck,
      title: 'اقامت قانونی از طریق کار',
      description: 'امکان دریافت اقامت قانونی از طریق کار و مسیر شفاف اداری.',
    },
    {
      icon: Globe,
      title: 'بازار کار اتحادیه اروپا',
      description: 'دسترسی به بازار کار اتحادیه اروپا با عضویت رومانی در EU.',
    },
    {
      icon: Shield,
      title: 'امنیت اجتماعی مناسب',
      description: 'امنیت اجتماعی مناسب و محیط پایدار برای زندگی و کار.',
    },
    {
      icon: TrendingUp,
      title: 'پیشرفت شغلی',
      description: 'امکان پیشرفت شغلی و تبدیل اقامت کاری به اقامت بلندمدت.',
    },
  ]

  const cities = [
    {
      name: 'بخارست',
      description: 'پایتخت رومانی و یکی از مراکز مهم اقتصادی و صنعتی منطقه.',
    },
    {
      name: 'کلوژ',
      description: 'مرکز فناوری و IT با فرصت‌های شغلی متنوع برای متخصصان.',
    },
    {
      name: 'تیمیشوارا',
      description: 'شهر صنعتی با فرصت‌های گسترده در حوزه تولید و خدمات.',
    },
    {
      name: 'یاش',
      description: 'شهر دانشگاهی با بازار کار فعال در صنعت و حمل‌ونقل.',
    },
  ]

  const jobSectors = [
    'ساخت‌وساز',
    'صنعت',
    'خدمات',
    'IT',
    'حمل‌ونقل',
  ]

  const versaiServices = [
    'پیگیری مراحل قانونی دریافت ویزای مجوز کار',
    'اخذ دعوت‌نامه شغلی معتبر',
    'انجام امور اداری و هماهنگی با کارفرما',
    'تسهیل مسیر دریافت ویزای کار در رومانی',
  ]

  const faqItems = [
    {
      question: 'چرا رومانی برای مهاجرت کاری مناسب است؟',
      answer: 'رومانی با عضویت در اتحادیه اروپا، اقتصاد در حال توسعه، هزینه‌های زندگی مناسب‌تر نسبت به بسیاری از کشورهای اروپای غربی و فرصت‌های شغلی متنوع، گزینه‌ای منطقی و مقرون‌به‌صرفه برای شروع یک زندگی جدید محسوب می‌شود.',
    },
    {
      question: 'در کدام شهرهای رومانی فرصت شغلی بیشتری وجود دارد؟',
      answer: 'بخارست به عنوان پایتخت، مرکز اصلی اقتصادی و صنعتی است. شهرهای کلوژ، تیمیشوارا و یاش نیز فرصت‌های شغلی متعددی در حوزه‌های ساخت‌وساز، صنعت، خدمات، IT و حمل‌ونقل ارائه می‌دهند.',
    },
    {
      question: 'آیا ورسای ویزای مجوز کار رومانی ارائه می‌دهد؟',
      answer: 'بله. در حال حاضر ویزای مجوز کار رومانی از سوی موسسه مهاجرتی ورسای ارائه می‌شود. ورسای با پیگیری مراحل قانونی، اخذ دعوت‌نامه شغلی و انجام امور اداری، مسیر دریافت ویزای کار را تسهیل می‌کند.',
    },
    {
      question: 'آیا با اقامت کاری در رومانی می‌توان اقامت بلندمدت گرفت؟',
      answer: 'بله. یکی از مزایای مهاجرت کاری به رومانی امکان پیشرفت شغلی و تبدیل اقامت کاری به اقامت بلندمدت در صورت ادامه فعالیت قانونی و رعایت شرایط اداری است.',
    },
    {
      question: 'هزینه زندگی در رومانی چگونه است؟',
      answer: 'هزینه زندگی در رومانی به‌طور کلی پایین‌تر از بسیاری از کشورهای اروپای غربی است که این کشور را به گزینه‌ای مقرون‌به‌صرفه برای شروع زندگی و کار در اروپا تبدیل می‌کند.',
    },
    {
      question: 'اولین قدم برای دریافت ویزای کار رومانی چیست؟',
      answer: 'اولین قدم مشاوره با کارشناسان ورسای و بررسی شرایط شغلی و مدارک است. پس از تأیید، مراحل قانونی اخذ دعوت‌نامه شغلی و پیگیری پرونده ویزای کار آغاز می‌شود.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] font-['IRANYekanX'] relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#b23124]">اقامت کاری</span> در کشور رومانی
            </h1>
            <div className="max-w-4xl mx-auto text-right space-y-4 sm:space-y-6">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53]">
                رومانی، یکی از کشورهای رو به رشد اروپاست که در سال‌های اخیر به مقصدی جذاب برای مهاجرت کاری تبدیل شده است. رومانی با عضویت در اتحادیه اروپا، اقتصاد در حال توسعه، هزینه‌های زندگی مناسب‌تر نسبت به بسیاری از کشورهای اروپای غربی و فرصت‌های شغلی متنوع، گزینه‌ای منطقی و مقرون‌به‌صرفه برای شروع یک زندگی جدید محسوب می‌شود.
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#316086] leading-[1.61]">
                پایتخت این کشور، بخارست، یکی از مراکز مهم اقتصادی و صنعتی منطقه است و در کنار آن شهرهایی مانند کلوژ، تیمیشوارا و یاش نیز فرصت‌های شغلی متعددی در حوزه‌های ساخت‌وساز، صنعت، خدمات، IT و حمل‌ونقل ارائه می‌دهند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Sectors & Cities Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="https://placehold.co/446x502/1e3950/ffffff?text=Romania+Work+Visa"
                alt="اقامت کاری در رومانی"
                className="w-full h-[300px] sm:h-[400px] md:h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  شهرهای پرتقاضا و حوزه‌های شغلی
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#b23124] flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#316086] leading-[1.61]">
                        <span className="text-[#b23124] font-bold">{city.name}:</span> {city.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#b23124] leading-[1.1] mb-4 sm:mb-6">
                  حوزه‌های شغلی فعال
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {jobSectors.map((sector, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#316086]/10 text-[#316086] text-[13px] sm:text-[14px] font-semibold rounded-full border border-[#316086]/20"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 px-4">
        <Container>
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] text-right mb-6 sm:mb-8 md:mb-12">
            مزایای مهاجرت کاری به رومانی
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-[#316086]/20 hover:border-[#b23124]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#316086]/10">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#b23124]" />
                    </div>
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#316086]">{benefit.title}</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#6d6e70] leading-[1.53] text-right">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Versai Work Visa Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3950] to-[#1e3950] opacity-85"></div>
          <div className="absolute inset-0 bg-[url('/images/france-office-page/blue-bg.png')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Briefcase className="w-7 h-7 sm:w-9 sm:h-9 text-[#f2f9ff]" />
                  <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-extrabold text-[#fdfeff] leading-[1.1]">
                    ویزای مجوز کار رومانی
                  </h2>
                </div>
                <p className="text-[14px] sm:text-[16px] font-medium text-[#d3e2ef] leading-[1.61] text-right mb-6 sm:mb-8">
                  در حال حاضر، ویزای مجوز کار رومانی از سوی موسسه مهاجرتی ورسای ارائه می‌شود. این شرکت با پیگیری مراحل قانونی، اخذ دعوت‌نامه شغلی و انجام امور اداری، مسیر دریافت ویزای کار در این کشور اروپایی را برای متقاضیان تسهیل می‌کند.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {versaiServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Building2 className="w-5 h-5 text-[#d74a3c] flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] sm:text-[15px] font-medium text-[#f2f9ff] leading-[1.61]">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1e3950] border border-[#316086] rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#f2f9ff] leading-[1.5] mb-4 sm:mb-6">
                  اگر به دنبال یک مسیر قانونی، مطمئن و مقرون‌به‌صرفه برای مهاجرت به اروپا هستید، رومانی می‌تواند نقطه شروع مناسبی برای آینده شغلی و زندگی شما باشد.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[#d74a3c] border-[#e5867d] text-[#fdfeff] hover:bg-[#c73e30] rounded-[32px] px-6 sm:px-8"
                >
                  درخواست مشاوره
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 sm:py-12 px-4">
        <Container>
          <div className="bg-[#fdfeff] border border-[#d74a3c] rounded-2xl sm:rounded-[62px] py-4 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-right w-full">
              <p className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#b23124] leading-[1.4]">
                گروه مهاجرتی ورسای با تجربه در ویزای کار رومانی، مسیر قانونی شما را به اروپا هموار می‌کند.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#d74a3c] border-[#e5867d] text-[#fdfeff] hover:bg-[#c73e30] px-6 py-3 rounded-[32px] text-base sm:text-lg lg:text-[18px] font-bold lg:ml-6 w-full lg:w-auto flex-shrink-0"
            >
              درخواست مشاوره
            </Button>
          </div>
        </Container>
      </section>

      {/* Consultation Form Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <Container>
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9563.PNG" />
        </Container>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection
        articles={DEFAULT_RELATED_ARTICLES}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-8 sm:py-12 md:py-16 px-4 bg-[#f2f1f1]"
      />

      {/* FAQ Section */}
      <FAQSection
        faqItems={faqItems}
        title="سوالات متداول"
        className="py-8 sm:py-12 md:py-16 px-4 bg-white"
      />
    </div>
  )
}

export default RomaniaPage
