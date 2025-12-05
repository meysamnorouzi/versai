import React from 'react'
import { Users, Building, Coins, FileText, User, FolderOpen, Pen, File } from 'lucide-react'
import Container from '@/src/components/ui/Container'
import Button from '@/src/components/ui/Button'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ثبت شرکت در فرانسه - راه‌اندازی کسب‌وکار در فرانسه بدون دردسر | ورسای',
  description: 'راهنمای کامل ثبت شرکت در فرانسه شامل مراحل، شرایط، مزایا و انواع شرکت‌ها. مشاوره تخصصی با ورسای برای راه‌اندازی کسب‌وکار در فرانسه.',
  keywords: 'ثبت شرکت فرانسه, راه‌اندازی کسب‌وکار فرانسه, شرکت تجاری فرانسه, اقامت فرانسه, مهاجرت فرانسه',
  openGraph: {
    title: 'ثبت شرکت در فرانسه - راه‌اندازی کسب‌وکار در فرانسه بدون دردسر | ورسای',
    description: 'راهنمای کامل ثبت شرکت در فرانسه شامل مراحل، شرایط، مزایا و انواع شرکت‌ها.',
    url: 'https://versai.ir/france-office',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/france-office',
  },
}

const FranceOfficePage: React.FC = () => {
  const companyRequirements = [
    {
      icon: Users,
      title: 'حداقل تعداد اعضا',
      description: 'تعداد حداقل اعضا برای ثبت شرکت در فرانسه بسته به نوع شرکت متفاوت است. برای مثال، برای ثبت SAS نیاز به حداقل یک نفر عضو و برای ثبت SARL حداقل یک عضو تاسیس کننده و یک شریک دیگر مورد نیاز است.'
    },
    {
      icon: Building,
      title: 'انتخاب نوع شرکت',
      description: 'باید نوع شرکت مورد نظر خود را مشخص کنید، این شامل شرکت‌های با مسئولیت محدود (SARL)، شرکت‌های با سرمایه متغیر (SAS) و سایر نوع‌های شرکت‌ها می‌شود.'
    },
    {
      icon: Coins,
      title: 'سرمایه اولیه',
      description: 'برای ثبت شرکت در فرانسه، باید سرمایه اولیه شرکت را تعیین و واریز کنید.'
    },
    {
      icon: FileText,
      title: 'نام شرکت',
      description: 'نام شرکت باید منحصر به فرد و با قوانین ثبت شرکت‌ها در فرانسه سازگار باشد.'
    },
    {
      icon: File,
      title: 'مدارک و اسناد',
      description: 'برای ثبت شرکت نیاز به تهیه مدارک شناسایی اعضا، آدرس مقر شرکت و اسناد مرتبط با ثبت شرکت است.'
    },
    {
      icon: Pen,
      title: 'امضاء قرارداد',
      description: 'باید قرارداد تاسیس شرکت را امضاء کنید.'
    }
  ]

  const benefits = [
    'با ثبت شرکت، شما به عنوان یک شخص حقوقی شناخته می‌شوید و از حمایت حقوقی برخوردار می‌شوید که شامل حمایت قوانین کاری، مالی و مالیاتی است.',
    'شرکت‌های ثبت شده بیشتر اعتماد مشتریان، شریک‌ها و اطرافیان را جلب می‌کنند. ثبت شرکت نشان دهنده پایداری و رسمیت شماست.',
    'شرکت‌های ثبت شده به راحتی می‌توانند در بازارها و اقتصاد فرانسه فعالیت کنند و به برخی منافع مالی و مالیاتی دسترسی داشته باشند.',
    'انتقال مالکیت و تغییرات در اعضا شرکت برای شرکت‌های ثبت شده نسبت به شرکت‌های غیر رسمی و سنتی آسان‌تر است.',
    'با ثبت شرکت، مالکان شرکت به مسئولیت محدود می‌شوند و مسئولیت‌های مالی شرکت به محدوده سرمایه شرکت محدود می‌شود.',
    'شرکت‌های ثبت شده معمولاً جذب سرمایه‌گذاران و اعتبار بانکی را برای توسعه فعالیت‌های خود راحت‌تر دارند.',
    'شرکت‌های ثبت شده می‌توانند از مزایای مالیاتی برخوردار شوند که به طور کلی می‌تواند هزینه‌ها را کاهش دهد.'
  ]

  const registrationSteps = [
    {
      icon: FolderOpen,
      title: 'انتخاب نام شرکت',
      description: 'نام شرکت باید منحصر به فرد باشد و با قوانین ثبت شرکت‌ها در فرانسه سازگاری داشته باشد.',
      position: 'left'
    },
    {
      icon: Building,
      title: 'انتخاب نوع شرکت',
      description: 'ابتدا باید نوع شرکت تجاری را که می‌خواهید تاسیس کنید، انتخاب کنید. شرکت‌های با مسئولیت محدود (SARL) و شرکت‌های با سرمایه متغیر (SAS) از جمله نوع‌های معمول شرکت‌های تجاری در فرانسه هستند.',
      position: 'right'
    },
    {
      icon: File,
      title: 'ثبت شرکت',
      description: 'باید با مراجعه به اداره ثبت تجاری مربوطه در فرانسه، مدارک خود را ارائه دهید و درخواست ثبت شرکت خود را انجام دهید.',
      position: 'left'
    },
    {
      icon: FileText,
      title: 'تهیه اسناد',
      description: 'برای ثبت شرکت، باید اسناد مختلفی را تهیه کنید که شامل اساسنامه، مدارک هویتی اعضا، آدرس مقر شرکت و اطلاعات مرتبط با شرکت است.',
      position: 'right'
    },
    {
      icon: Pen,
      title: 'تنظیم اساسنامه',
      description: 'اساسنامه شرکت حاوی مواردی مانند نام شرکت، آدرس، نوع فعالیت، توزیع سهام، حقوق و مسئولیت اعضا و سایر اطلاعات مهم شرکت است.',
      position: 'left'
    },
    {
      icon: Coins,
      title: 'پرداخت سرمایه اولیه',
      description: 'برای ثبت شرکت، باید سرمایه اولیه شرکت را تعیین و واریز کنید.',
      position: 'right'
    },
    {
      icon: User,
      title: 'انتخاب مدیران',
      description: 'باید مدیران شرکت را انتخاب کنید و آن‌ها را در اسناد مربوطه ثبت کنید.',
      position: 'left'
    }
  ]

  const companyTypes = [
    {
      title: 'با مسئولیت محدود',
      description: 'می تواند بین دو تا پنجاه عضو سهامدار و یک نفر مدیر عامل داشته باشد، هر مقدار سرمایه ای که برای شروع کار انتخاب می کنید باید در تمامی اسناد و مدارک رسمی مانند سربرگ ها، فاکتور و سفارشات لحاظ شود. حتی مدیر عامل می تواند از شرکت حقوق دریافت کند.'
    },
    {
      title: 'تک سهامدار با مسئولیت محدود',
      description: 'فقط توسط یک تاجر انحصاری تشکیل و اداره می‌شود، سهامدار آن تنها یک نفر و یک شرکت فردی به حساب می‌آید.'
    },
    {
      title: 'ناشناس',
      description: 'حداقل باید هفت سهامدار داشته باشد و هیچ حداکثری برای تعداد سهامداران وجود ندارد، توسط یک هیات مدیره تشکیل شده از مدیر عامل و مدیر اجرایی و ناظر می‌باشد. شروع کار باید با سرمایه حداقل ۳۷۰۰۰ یورو باشد و در آن هیات مدیره هر زمان که بخواهد می‌تواند مدیر عامل را اخراج کند.'
    },
    {
      title: 'سهامی ساده',
      description: 'با حداقل دو سهامدار و سرمایه حداقل ۲۳۰۰۰ یورو مجاز به شروع فعالیت می‌باشد، این نوع بسیار انعطاف‌پذیرتر از شرکت با مسئولیت محدود می‌باشد، برای مثال برخورداری از مجمع عمومی عادی برای تصمیم‌گیری در هر وقت که مورد نیاز باشد.'
    },
    {
      title: 'مدنی و مشاغل حرفه‌ای',
      description: 'به برخی از حرفه‌های خاص مانند ارائه خدمات در زمینه پزشکی، پرستاری، فیزیوتراپی و یا مشاوره در خصوص املاک و بطور کلی به حرفه‌های خاص و مختلف می‌پردازد. این روش یک مشارکت عمومی به حساب می‌آید و حداقل به دو شریک نیاز می‌باشد. همه شرکا به یک نسبت در سود و زیان شریک می‌باشند، هر تغیراتی در سهام یک شریک باید به اتفاق آرا تصویب و همه تصمیمات به صورت جمعی اتخاذ شود.'
    }
  ]

  const faqData = [
    {
      question: 'اولین گام اقدام برای دوره‌های زبان چیست؟',
      answer: 'برای شروع دوره زبان در فرانسه، ابتدا باید دانشگاه یا موسسه آموزشی مناسب را انتخاب کنید و مدارک مورد نیاز را آماده کنید.'
    },
    {
      question: 'مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟',
      answer: 'مشاوره در ورسای به صورت حضوری و آنلاین برگزار می‌شود. هزینه مشاوره اولیه رایگان است و برای مشاوره‌های تخصصی هزینه‌های مناسبی در نظر گرفته شده است.'
    },
    {
      question: 'مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟',
      answer: 'مدت زمان آماده‌سازی پرونده و اخذ ویزا معمولاً 3 تا 6 ماه طول می‌کشد که بستگی به کامل بودن مدارک و شرایط سفارت دارد.'
    },
    {
      question: 'شرایط لازم برای شرکت در دوره زبان چیست؟',
      answer: 'شرایط اصلی شامل داشتن مدرک دیپلم، تسلط نسبی به زبان فرانسه، و تمکن مالی کافی برای تامین هزینه‌های زندگی و تحصیل است.'
    },
    {
      question: 'آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟',
      answer: 'بله، ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را به صورت کامل انجام می‌دهد و شما را در تمام مراحل همراهی می‌کند.'
    },
    {
      question: 'چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟',
      answer: 'مدارک اصلی شامل پاسپورت معتبر، مدارک تحصیلی ترجمه شده، گواهی تمکن مالی، بیمه درمانی، و مدارک مربوط به پذیرش دانشگاه است.'
    }
  ]

  const relatedArticles = [
    {
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/france-office-page/success-story1.png',
      link: '/articles/french-language-course-benefits'
    },
    {
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/france-office-page/success-story2.png',
      link: '/articles/spain-digital-nomad-visa'
    },
    {
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/france-office-page/success-story3.png',
      link: '/articles/ucly-university-lyon'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] font-['IRANYekanX'] relative">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#316086] mb-4 sm:mb-6 md:mb-8 leading-[1.41] max-w-2xl mx-auto px-4 sm:px-0">
              <span className="text-[#b23124]">ثبت شرکت</span> در فرانسه، راه‌اندازی{' '}
              <span className="text-[#b23124]">کسب‌وکار</span> در فرانسه بدون دردسر
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#6d6e70] leading-[1.53] text-right px-4 sm:px-0">
              در این مقاله قصد داریم در مورد ثبت شرکت در فرانسه و ثبت شرکت تجاری در فرانسه به عنوان یکی از راه های مهاجرت به فرانسه و مراحل دریافت اقامت برای ثبت شرکت درفرانسه و صفر تا صد قوانین آن صحبت کنیم پس تا انتهای مقاله مارا همراهی کنید.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Requirements Section */}
      <section className="relative">
        <Container>
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] text-right px-4 sm:px-0">
              شرایط عمومی ثبت شرکت در فرانسه
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-12">
            {/* Right side - Requirements grid */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-[#b23124]/20 sm:border-0">
                {/* Grid cells with red borders */}
                {companyRequirements.map((requirement, index) => {
                  const IconComponent = requirement.icon
                  return (
                    <div
                      key={index}
                      className={`py-3 sm:py-2 px-4 sm:px-6 relative border-b border-[#b23124]/20 sm:border-b-0 ${index % 2 === 0 ? 'sm:border-r' : ''} border-[#b23124]/20 ${index >= 4 ? 'sm:border-b-0' : ''}`}
                    >
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex justify-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#b23124]" />
                          </div>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="text-[12px] sm:text-[14px] font-medium text-[#316086] leading-[1.48] text-justify">
                            <span className='text-[#b23124] font-bold'>{requirement.title} :</span> {requirement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Left side - Handshake image */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
              <img
                src="/images/france-office-page/Rectangle 67.png"
                alt="Handshake business meeting"
                className="object-cover rounded-lg w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 ">
        <Container>
          <h2 className="text-[24px] font-bold text-[#b23124] text-right mb-8">
            مزایای ثبت شرکت در کشور فرانسه
          </h2>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 justify-start">
                <img src="/icons/france office page/Group.svg" alt="" className="w-6 h-6 flex-shrink-0" />

                <p className="text-[16px] font-medium text-[#316086] leading-[1.61] text-right max-w-[1069px]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-8 ">
        <Container>
          <div className="bg-[#fdfeff] border border-[#d74a3c] rounded-[62px] py-4 px-12 flex items-center justify-between">
            <div className="flex-1 text-right">
              <p className="text-[18px] font-semibold text-[#b23124] leading-[1.4]">
                گروه مهاجرتی ورسای با تجربه خود در این فرآیند، به شما در ثبت شرکت خود در فرانسه کمک می کند.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#d74a3c] border-[#e5867d] text-[#fdfeff] hover:bg-[#c73e30] px-6 py-3 rounded-[32px] text-[18px] font-bold ml-6"
            >
              درخواست مشاوره
            </Button>
          </div>
        </Container>
      </section>

      {/* Registration Process Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3950] to-[#1e3950] opacity-85"></div>
          <div className="absolute inset-0 bg-[url('/images/france-office-page/blue-bg.png')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10">
          <Container>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#fdfeff] text-right mb-6 sm:mb-8 md:mb-12 px-4 sm:px-0">
              مراحل ثبت شرکت تجاری در فرانسه
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {registrationSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className={`${step.position === 'right' ? 'lg:ml-auto' : ''} max-w-[538px] w-full`}>
                    <div className="bg-[#1e3950] border border-[#316086] rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center">
                          <IconComponent className="w-7 h-7 sm:w-9 sm:h-9 text-[#f2f9ff]" />
                        </div>
                        <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#f2f9ff] leading-[1.4]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[14px] sm:text-[16px] font-medium text-[#d3e2ef] leading-[1.61] text-right">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* Residence and Company Registration Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] text-right mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
            اقامت فرانسه و ثبت شرکت
          </h2>
          <div className="text-[14px] sm:text-[16px] font-medium text-[#6d6e70] leading-[1.61] text-right space-y-3 sm:space-y-4 px-4 sm:px-0">
            <p>
              برای ثبت شرکت در فرانسه به عنوان یک خارجی، شما نیاز به برای{' '}
              <span className="font-medium">اقامت در فرانسه</span>{' '}
              دارید. اقامت می‌تواند شامل اقامت موقت یا اقامت دائم باشد، و به شما اجازه می‌دهد که به عنوان یک مقیم فرانسه فعالیت کسب و کاری داشته باشید و شرکت خود را در این کشور تاسیس و ثبت کنید. مهم است که مدت اقامت و نوع اقامتی که دارید (موقت یا دائم)، میزان مسئولیت‌های مالی و مالیاتی شما را تحت تأثیر قرار دهد. همچنین، بسته به نوع فعالیت شرکتی که می‌خواهید تاسیس کنید، ممکن است برخی از نیازها و مقررات اختصاصی برای شما اعمال شود.
            </p>
            <p>
              قبل از آغاز فرآیند ثبت شرکت، بهتر است با مشاوران حقوقی و مالی متخصص در فرانسه مشورت کنید تا اطلاعات دقیق‌تری در مورد نیازها و مقررات اقامت و ثبت شرکت در فرانسه دریافت کنید. آن‌ها می‌توانند به شما راهنمایی کنند و با شما مراحل لازم برای اقامت و ثبت شرکت را انجام دهند.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Types Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="flex items-center gap-2 justify-start mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <QuestionMarkCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#b23124]" />
            </div>
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-[#b23124] leading-[1.1]">
              چه نوع شرکتی راه اندازی کنیم؟
            </h2>

          </div>

          <div className="text-[14px] sm:text-[16px] font-medium text-[#6d6e70] leading-[1.61] text-right mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
            <p className="mb-3 sm:mb-4">
              یک تصمیم مهم که باید قبل از اقدام به ثبت و شروع معامله بگیرید، این می باشد که ساختار و نوع بیزنس شما چگونه باشد، در این جاست که به کمک یک مشاور حرفه ای که با قوانین و نحوه کسب و کار در این کشور اروپایی آشنا می باشد نیاز دارید.
            </p>
            <p className="font-semibold text-[#316086]">
              حدود ۱۳ نوع شرکت برای کسب و کار در فرانسه وجود دارد که در زیر به برخی از مهمترین آنها می پردازیم:
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 flex-1 lg:pl-0 md:pl-8 pl-0">
              <div className="space-y-4 sm:space-y-6">
                {companyTypes.map((type, index) => (
                  <div key={index} className="text-right">
              
                    <p className="text-[12px] sm:text-[14px] font-medium text-[#316086] leading-[1.48]">
                    <span className="text-[#b23124] font-bold">{type.title}:</span> {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
              <img
                src="/images/france-office-page/Rectangle 68.png"
                alt="Handshake business meeting"
                className="object-cover rounded-lg w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
              />
            </div>
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
        articles={relatedArticles}
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

export default FranceOfficePage

