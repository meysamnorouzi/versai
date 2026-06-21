import React from 'react'
import { Building2, Coins, FileText, Home, Briefcase, TrendingUp } from 'lucide-react'
import Container from '@/src/components/ui/Container'
import Button from '@/src/components/ui/Button'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import { DEFAULT_RELATED_ARTICLES } from '@/src/config/relatedArticles'
import Icon from '@/src/components/ui/Icon'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سرمایه‌گذاری در فرانسه - راهنمای کامل اقامت و سرمایه‌گذاری | ورسای',
  description: 'راهنمای سرمایه‌گذاری در فرانسه شامل خرید ملک، راه‌اندازی کسب‌وکار، ویزای Passeport Talent و مسیرهای قانونی اقامت در فرانسه.',
  keywords: 'سرمایه‌گذاری فرانسه, خرید ملک فرانسه, Passeport Talent, اقامت فرانسه, ویزای کارآفرینی فرانسه, مهاجرت فرانسه',
  openGraph: {
    title: 'سرمایه‌گذاری در فرانسه - راهنمای کامل اقامت و سرمایه‌گذاری | ورسای',
    description: 'راهنمای سرمایه‌گذاری در فرانسه شامل خرید ملک، راه‌اندازی کسب‌وکار و ویزای Passeport Talent.',
    url: 'https://versai.ir/france-investment',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/france-investment',
  },
}

const FranceInvestmentPage: React.FC = () => {
  const investmentPaths = [
    {
      icon: Home,
      title: 'خرید ملک',
      description: 'Paris، Lyon و Nice از شهرهای امن برای حفظ ارزش دارایی؛ اتباع خارجی بدون محدودیت خاص امکان خرید دارند.',
    },
    {
      icon: Briefcase,
      title: 'راه‌اندازی کسب‌وکار',
      description: 'تاسیس شرکت یا خرید بیزنس فعال از طریق ویزاهای کارآفرینی و تجاری تعریف‌شده.',
    },
    {
      icon: TrendingUp,
      title: 'Passeport Talent',
      description: 'برنامه ویژه کارآفرینان، سرمایه‌گذاران و مدیران کسب‌وکار با اقامت چندساله.',
    },
    {
      icon: Building2,
      title: 'اقامت بلندمدت',
      description: 'ویزای تایپ D فرانسه با امکان تمدید و همراهی خانواده در صورت تأیید پرونده.',
    },
  ]

  const businessRequirements = [
    {
      icon: FileText,
      title: 'بیزنس‌پلن قابل دفاع',
      description: 'متقاضی باید طرح کسب‌وکار خود را با جزئیات کافی و منطق اقتصادی ارائه دهد.',
    },
    {
      icon: Coins,
      title: 'توانایی مالی',
      description: 'اثبات سرمایه و منابع مالی کافی برای اجرای پروژه و تأمین هزینه‌های زندگی.',
    },
    {
      icon: TrendingUp,
      title: 'ارزش‌افزوده برای اقتصاد',
      description: 'فعالیت اقتصادی باید برای اقتصاد فرانسه ارزش‌افزوده ایجاد کند.',
    },
    {
      icon: Briefcase,
      title: 'مدیریت فعال',
      description: 'نقش فعال متقاضی در مدیریت و توسعه پروژه یا کسب‌وکار باید مشخص باشد.',
    },
  ]

  const passeportTalentTiers = [
    {
      title: 'کارآفرینی',
      amount: 'از حدود ۳۰,۰۰۰ یورو',
      description: 'مناسب برای راه‌اندازی استارتاپ یا کسب‌وکار نوآورانه با پتانسیل رشد.',
    },
    {
      title: 'سرمایه‌گذاری مستقیم',
      amount: 'تا ۳۰۰,۰۰۰ یورو',
      description: 'برای سرمایه‌گذاران و مدیران کسب‌وکار با سرمایه‌گذاری قابل‌توجه در پروژه‌های بزرگ.',
    },
  ]

  const faqData = [
    {
      question: 'آیا خرید ملک در فرانسه به‌تنهایی منجر به اقامت می‌شود؟',
      answer: 'خیر. برخلاف تصور رایج، خرید ملک به‌تنهایی اقامت نمی‌دهد. برای دریافت اقامت باید فعالیت اقتصادی واقعی یا منبع درآمد مشخص نیز ارائه شود.',
    },
    {
      question: 'حداقل سرمایه برای ویزای Passeport Talent چقدر است؟',
      answer: 'طبق اطلاعات رسمی Service-Public.fr، برای مسیر کارآفرینی معمولاً از حدود ۳۰,۰۰۰ یورو و برای سرمایه‌گذاری مستقیم تا ۳۰۰,۰۰۰ یورو سرمایه‌گذاری مورد نیاز است.',
    },
    {
      question: 'کدام شهرهای فرانسه برای سرمایه‌گذاری در املاک مناسب‌ترند؟',
      answer: 'Paris، Lyon و Nice از شهرهای محبوب برای سرمایه‌گذاری امن و حفظ ارزش دارایی هستند. انتخاب شهر بستگی به بودجه و اهداف سرمایه‌گذاری شما دارد.',
    },
    {
      question: 'آیا با سرمایه‌گذاری در فرانسه می‌توان خانواده را همراه برد؟',
      answer: 'بله. در مسیرهای تأییدشده مانند Passeport Talent و ویزاهای کارآفرینی، معمولاً امکان همراهی همسر و فرزندان وجود دارد.',
    },
    {
      question: 'مدت زمان اقامت اولیه از طریق سرمایه‌گذاری چقدر است؟',
      answer: 'پس از تأیید پرونده، ابتدا اقامت موقت اعطا می‌شود که قابل تمدید است. با برنامه‌ریزی درست می‌توان در بازه چندساله به اقامت پایدار و حتی تابعیت دست یافت.',
    },
    {
      question: 'آیا ورسای در تهیه بیزنس‌پلن و پرونده سرمایه‌گذاری کمک می‌کند؟',
      answer: 'بله. موسسه مهاجرتی ورسای در تمام مراحل از مشاوره اولیه، تهیه بیزنس‌پلن، اثبات توانایی مالی تا پیگیری پرونده در French Ministry of the Interior همراه شماست.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] font-['IRANYekanX'] relative">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#316086] mb-4 sm:mb-6 md:mb-8 leading-[1.41] max-w-3xl mx-auto px-4 sm:px-0">
              <span className="text-[#b23124]">سرمایه‌گذاری</span> در فرانسه
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] text-right max-w-4xl mx-auto px-4 sm:px-0">
              فرانسه همواره یکی از محبوب‌ترین مقصدها برای مهاجرت ایرانیان بوده است و ویزاهای بلندمدت یا تایپ D آن بسیار ارزنده می‌باشد. البته باید در نظر داشت که برخلاف تصور رایج، خرید ملک به‌تنهایی منجر به اقامت نمی‌شود. بازار املاک در شهرهایی مانند Paris، Lyon و Nice برای سرمایه‌گذاری امن و حفظ ارزش دارایی بسیار مناسب است و اتباع خارجی بدون محدودیت خاصی امکان خرید دارند، اما برای دریافت اقامت باید فعالیت اقتصادی واقعی یا منبع درآمد مشخص نیز ارائه شود. این نکته مطابق چارچوب‌های رسمی دولت فرانسه در حوزه اقامت و سرمایه‌گذاری است.
            </p>
          </div>
        </Container>
      </section>

      {/* Investment Paths Icons */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-10 md:gap-12">
            {investmentPaths.map((path, index) => {
              const IconComponent = path.icon
              return (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[120px] max-w-[180px] text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#316086]/10">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#b23124]" />
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-semibold text-[#316086]">{path.title}</div>
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#6d6e70] leading-[1.5] text-justify">
                    {path.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-12">
            <div className="flex-1 text-right">
              <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] mb-4 sm:mb-6">
                سرمایه‌گذاری در املاک فرانسه
              </h2>
              <div className="text-[14px] sm:text-[16px] font-medium text-[#6d6e70] leading-[1.61] space-y-3 sm:space-y-4">
                <p>
                  بازار املاک در Paris، Lyon و Nice یکی از پایدارترین بازارهای اروپا برای حفظ ارزش دارایی است. اتباع خارجی بدون محدودیت خاصی امکان خرید ملک دارند.
                </p>
                <p className="text-[#316086]">
                  <span className="text-[#b23124] font-bold">نکته مهم:</span> خرید ملک به‌تنهایی مسیر اقامت نیست؛ برای دریافت اقامت باید فعالیت اقتصادی واقعی یا منبع درآمد مشخص ارائه دهید.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 md:w-[calc(100%+5rem)] md:-mx-10 lg:mx-0 lg:w-auto flex justify-center lg:justify-start">
              <img
                src="/images/france-office-page/Rectangle 67.png"
                alt="سرمایه‌گذاری در املاک فرانسه"
                className="object-cover w-full rounded-none lg:rounded-lg lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Business & Entrepreneurship Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50">
        <Container>
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] text-right px-4 sm:px-0">
              راه‌اندازی کسب‌وکار و خرید بیزنس فعال
            </h2>
            <p className="text-[14px] sm:text-[16px] font-medium text-[#6d6e70] leading-[1.61] text-right mt-4 max-w-4xl mx-auto px-4 sm:px-0">
              برای افرادی که قصد دریافت اقامت دارند، یکی از مسیرهای اصلی، راه‌اندازی کسب‌وکار یا خرید یک بیزنس فعال در فرانسه است که از طریق ویزاهای کارآفرینی و تجاری تعریف شده است. در این مسیر، متقاضی باید یک بیزنس‌پلن قابل دفاع ارائه دهد، توانایی مالی خود را اثبات کند و نشان دهد که فعالیت اقتصادی او برای اقتصاد فرانسه ارزش‌افزوده ایجاد می‌کند. این نوع اقامت تحت چارچوب‌های اعلام‌شده توسط French Ministry of the Interior بررسی می‌شود و در صورت تأیید، ابتدا اقامت موقت و سپس قابل تمدید اعطا خواهد شد.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-[#b23124]/20 sm:border-0">
            {businessRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div
                  key={index}
                  className={`py-4 sm:py-6 px-4 sm:px-6 relative border-b border-[#b23124]/20 sm:border-b-0 ${index % 2 === 0 ? 'sm:border-r' : ''} border-[#b23124]/20`}
                >
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#b23124]" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-[12px] sm:text-[14px] font-medium text-[#316086] leading-[1.48] text-justify">
                        <span className="text-[#b23124] font-bold">{req.title}:</span> {req.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Banner Section */}
      <section className="relative min-h-[250px] sm:min-h-[300px] md:h-[399px] text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/france-pr-page/blue-img.png" alt="" />
          <div className="absolute top-0 left-0 sm:left-[146px] w-full sm:w-[490px] h-full hidden md:block">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/france-pr-page/france-map.svg" alt="" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-0 md:h-full md:justify-start md:pt-14 px-4 md:px-0">
          <div className="leading-[1.41] font-extrabold w-full max-w-[500px] [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            <p className="m-0">سرمایه‌گذاری هوشمند در فرانسه،</p>
            <p className="m-0">مسیر امن به سوی اقامت پایدار.</p>
          </div>
          <div className="mt-6 sm:mt-8 rounded-[32px] bg-[#d74a3c] border border-[#e5867d] flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 text-left text-sm sm:text-base md:text-lg text-[#fdfeff]">
            <b className="leading-[1.1]">درخواست مشاوره</b>
          </div>
        </div>
      </section>

      {/* Passeport Talent Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3950] to-[#1e3950] opacity-85"></div>
          <div className="absolute inset-0 bg-[url('/images/france-office-page/blue-bg.png')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10">
          <Container>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#fdfeff] text-right mb-4 sm:mb-6 px-4 sm:px-0">
              ویزای Passeport Talent
            </h2>
            <p className="text-[14px] sm:text-[16px] font-medium text-[#d3e2ef] leading-[1.61] text-right mb-6 sm:mb-8 md:mb-12 max-w-4xl px-4 sm:px-0">
              گزینه حرفه‌ای‌تر، استفاده از برنامه‌های سرمایه‌گذاری مانند ویزای Passeport Talent است که برای کارآفرینان، سرمایه‌گذاران و مدیران کسب‌وکار طراحی شده است. طبق اطلاعات رسمی Service-Public.fr، در این مسیر معمولاً نیاز به سرمایه‌گذاری قابل‌توجه و اثبات نقش فعال در مدیریت پروژه وجود دارد. این نوع اقامت معمولاً به‌صورت چندساله صادر می‌شود و امکان همراهی خانواده، کار و توسعه کسب‌وکار را فراهم می‌کند.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {passeportTalentTiers.map((tier, index) => (
                <div key={index} className="bg-[#1e3950] border border-[#316086] rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Icon section="easyImmigration" name="coins" className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" />
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#f2f9ff] leading-[1.4]">
                      {tier.title}
                    </h3>
                  </div>
                  <p className="text-[18px] sm:text-[22px] font-bold text-[#d74a3c] mb-2 sm:mb-3">
                    {tier.amount}
                  </p>
                  <p className="text-[14px] sm:text-[16px] font-medium text-[#d3e2ef] leading-[1.61] text-right">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <div className="flex items-start justify-start gap-2 mb-4 sm:mb-6">
                <QuestionMarkCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-[#b23124]" />
                <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] leading-[1.1]">
                  استراتژی هوشمند: ملک + کسب‌وکار
                </h2>
              </div>
              <div className="text-[14px] sm:text-[16px] font-medium text-[#6d6e70] leading-[1.61] text-right space-y-3 sm:space-y-4">
                <p>
                  در مجموع، ترکیب خرید ملک + راه‌اندازی کسب‌وکار یا سرمایه‌گذاری فعال یکی از هوشمندانه‌ترین استراتژی‌ها برای ورود به فرانسه است؛ زیرا هم امنیت مالی ایجاد می‌کند و هم مسیر قانونی اقامت را هموار می‌سازد.
                </p>
                <p>
                  با برنامه‌ریزی دقیق و استفاده از مسیرهای رسمی تعریف‌شده توسط دولت فرانسه، می‌توان در یک بازه چندساله به اقامت پایدار و حتی تابعیت دست یافت و همزمان با آن هم فعالیت اقتصادی داشت و هم فرزندان از امکان تحصیل برخوردار هستند.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 md:w-[calc(100%+5rem)] md:-mx-10 lg:mx-0 lg:w-auto flex justify-center lg:justify-start">
              <img
                src="/images/france-office-page/Rectangle 68.png"
                alt="استراتژی سرمایه‌گذاری در فرانسه"
                className="object-cover w-full rounded-none lg:rounded-lg lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-8">
        <Container>
          <div className="bg-[#fdfeff] border border-[#d74a3c] rounded-2xl sm:rounded-[62px] py-4 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4">
            <div className="flex-1 text-right w-full">
              <p className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#b23124] leading-[1.4]">
                گروه مهاجرتی ورسای با تجربه خود در سرمایه‌گذاری و اقامت فرانسه، مسیر قانونی شما را هموار می‌کند.
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
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9561.PNG" />
        </Container>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection
        articles={DEFAULT_RELATED_ARTICLES}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-8 sm:py-12 md:py-16 bg-[#f2f1f1]"
      />

      {/* FAQ Section */}
      <FAQSection
        faqItems={faqData}
        title="سوالات متداول"
        className="py-8 sm:py-12 md:py-16 bg-white"
      />
    </div>
  )
}

export default FranceInvestmentPage
