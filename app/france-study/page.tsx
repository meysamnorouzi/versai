import React from 'react'
import { Star } from 'lucide-react'
import Button from '@/src/components/ui/Button'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تحصیل در فرانسه | موسسه مهاجرتی ورسای',
  description: 'راهنمای کامل تحصیل در فرانسه، شرایط پذیرش، انواع ویزای تحصیلی و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای',
  keywords: 'تحصیل در فرانسه، پذیرش دانشگاه فرانسه، ویزای تحصیلی فرانسه، مشاوره تحصیل فرانسه',
  openGraph: {
    title: 'تحصیل در فرانسه | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل تحصیل در فرانسه، شرایط پذیرش، انواع ویزای تحصیلی',
    url: 'https://versai.ir/france-study',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/france-study',
  },
}

const FranceStudyPage: React.FC = () => {
  const faqItems = [
    {
      question: 'اولین گام اقدام برای دوره‌های زبان چیست؟',
      answer: 'اولین قدم برای شروع دوره‌های زبان در فرانسه، انتخاب دوره مناسب و تهیه مدارک مورد نیاز است. شما باید از دانشگاه‌ها یا موسسات معتبر فرانسه پذیرش بگیرید.'
    },
    {
      question: 'مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟',
      answer: 'مشاوره در موسسه ورسای به صورت حضوری و آنلاین برگزار می‌شود. هزینه مشاوره بسته به نوع خدمات متفاوت است و می‌توانید با تماس با ما از جزئیات بیشتر مطلع شوید.'
    },
    {
      question: 'مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟',
      answer: 'مدت زمان آماده‌سازی برای شروع دوره زبان معمولاً 3 تا 6 ماه است که شامل تهیه مدارک، اخذ پذیرش و ویزا می‌شود.'
    },
    {
      question: 'شرایط لازم برای شرکت در دوره زبان چیست؟',
      answer: 'شرایط اصلی شامل داشتن مدرک تحصیلی معتبر، تسلط نسبی به زبان فرانسه، تمکن مالی کافی و مدارک هویتی معتبر است.'
    },
    {
      question: 'آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟',
      answer: 'بله، موسسه ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری کانادا را به صورت کامل انجام می‌دهد.'
    },
    {
      question: 'چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟',
      answer: 'مدارک مورد نیاز شامل مدرک تحصیلی، ریزنمرات، مدرک زبان، نامه پذیرش دانشگاه، تمکن مالی، بیمه درمانی و مدارک هویتی است.'
    }
  ]

  const blogArticles = [
    {
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/blog-page/Rectangle 41.png',
      link: '/articles/french-language-course-benefits',
      excerpt: 'اگر دنبال تقویت زبان فرانسه هستید، این مقاله راهنمای شماست.'
    },
    {
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/blog-page/Rectangle 41(1).png',
      link: '/articles/spain-digital-nomad-visa',
      excerpt: 'مدارک و شرایط لازم برای دریافت ویزای نومد اسپانیا.'
    },
    {
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/blog-page/Rectangle 41(2).png',
      link: '/articles/ucly-university-lyon',
      excerpt: 'با دانشگاه UCLY و امکانات آموزشی آن آشنا شوید.'
    }
  ]

  const recommendations = [
    'توصیه اکید این است که قبل از آمدن، زبان خودتان رو به حد عالی (نه کافی) برسانید. اگر فکر می کنید بعد از آمدن به اینجا، ۳ یا ۴ ماهه راه می افتید اشتباهی بزرگی مرتکب شدید.',
    'مدرک کلیه دانشگاه های ایران در فرانسه مورد قبول هست از آزاد گرفته تا غیر انتفاعی و پیام نور…',
    'سوال بسیاری از افراد این است که چه دانشگاهی برای رشته های مختلف بهتر است؟ باید توجه کنید که در حال حاضر شما نمی توانید انتخاب زیادی داشته باشید.',
    'برای انجام مراحل پذیرش لازم است شما با زبان فرانسه آشنایی نسبی داشته باشید. در ضمن در قسمت مدارک لازم برای پذیرش مدرک زبان ضروری نیست ولی اگر داشته باشد تا حد بسیار بالایی در گرفتن پذیرش و ویزا تاثیر می گذارد.',
    'هر کسی که از یکی از دانشگاه‌های ایران مدرک کارشناسی ارشد گرفته است می‌تواند تحصیلات خود را در مقطع دکترا در خارج از کشور ادامه بدهد.'
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-8">
              تحصیل در فرانسه
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                برای اینکه بتوانید در فرانسه ادامه تحصیل دهید، اولین قدم این است که از دانشگاه‌ها یا کالج‌های فرانسه پذیرش بگیرید. کشور فرانسه از بهترین مکان ها برای تحصیل می باشد و نظام‌های آموزش عالی جهان را دارد. دانشگاه ها و کالج های معتبری در هر مقطع و رشته ای که قصد ادامه تحصیل داشته باشید، وجود دارد.
              </p>
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                فرانسه رتبه ششم جهان را از نظر تعداد دانشجویان بین‌المللی (بیش از ۳۴۳۰۰۰ دانشجو) دارد که اکثر آنها در مقاطع تحصیلات تکمیلی مشغول به تحصیل هستند. دانشجویانی که در فرانسه تحصیل کرده اند رضایت کامل از دانشگاه های خود داشته و تحصیل در فرانسه را به دوستان خود توصیه می کنند.
              </p>
              <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                سالانه در ماه سپتامبر، دانشگاه های فرانسه دانشجو می پذیرند.برای متقاضی ویزای همراه تعلق می گیرد، همسر و فرزندان شامل همراهان می باشند، پدر یا مادر بعد از سن قانونی شامل ویزای همراه نمی شوند. در حال حاضر در کشور فرانسه دوره های زبانی فرانسه در دانشگاه ها و کالج ها برگزار می شود که از طریق این دوره ها نیز می توانید اقدام نمایید. ویزای همراه به این دوره ها نیز تعلق می گیرد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University Admission Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img 
                src="https://placehold.co/446x502" 
                alt="University admission process"
                className="w-full h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  نحوه پذیرش در دانشگاه های فرانسه
                </h2>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    این نکته را باید ذکر کرد که گرفتن اقامت دائم در کشور فرانسه برای دانشجویان از زمانی شروع می شود که متقاضی پس از اتمام تحصیل ۵ سال به صورت تمام وقت کار نموده و اقامت دائم اخذ کنند.
                  </p>
                  <p>
                    یکی از سختی های تحصیل در فرانسه، یادگیری زبان فرانسه و تحصیل به زبان فرانسه می باشد.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  انواع ویزای تحصیلی فرانسه
                </h3>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      دانشجویانی که از طریق شرکت در کنکور یا امتحان پذیرش می گیرند، برای اقامت های كوتاه مدت-حداكثر ۹۰ روز- صادر می گردد. در صورتی که پذیرش قطعی شود دانشجو بدون اینکه نیاز به برگشتن به کشور مبدا را داشته باشد می تواند ویزای اقامت بلند مدت را دریافت نماید.
                    </li>
                    <li>
                      برای تحصیلاتی كه مدت آنها كمتر از شش ماه می باشد ویزای اقامت كوتاه مدت صادر می گردد که فرد را از درخواست اقامت معاف می كند و خود این نوع روادید به عنوان مجوز اقامت معتبر است.
                    </li>
                    <li>
                      تمام دانشجویان غیر اتحادیه اروپا در صورتی كه اقامت پیش بینی شده آنها بیش از شش ماه باشد باید جهت ادامه تحصیلات خود، ویزای دانشجویی بلند مدت اخذ نمایند.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="py-20 px-4 bg-red-900/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1440x320" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] font-extrabold text-stone-50 leading-[1.41] mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            برای مشاوره تخصصی پذیرش در فرانسه از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-8">
                توصیه های ورسای به شما
              </h2>
              <div className="space-y-6">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <Star className="w-6 h-6 text-[#b23124]" />
                    </div>
                    <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="https://placehold.co/627x279" 
                alt="Study in France"
                className="w-full h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در فرانسه چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>
                  برای مشاوره تخصصی تحصیل در فرانسه، با ما در ارتباط باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9562.PNG" />
        </div>
      </section>

      {/* Related Articles Section */}
      <RelatedArticlesSection 
        articles={blogArticles}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqItems={faqItems}
        title="سوالات متداول"
      />
    </div>
  )
}

export default FranceStudyPage

