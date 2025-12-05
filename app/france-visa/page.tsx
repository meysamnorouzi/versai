import React from 'react'
import Container from '@/src/components/ui/Container'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import FAQSection from '@/src/components/ui/FAQSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ویزای کوتاه مدت فرانسه (Type C) | موسسه مهاجرتی ورسای',
  description: 'راهنمای کامل ویزای کوتاه مدت فرانسه (Type C)، انواع ویزا، شرایط و مدارک مورد نیاز',
  keywords: 'ویزای فرانسه، ویزای شنگن، ویزای کوتاه مدت فرانسه، Type C، ورسای',
  openGraph: {
    title: 'ویزای کوتاه مدت فرانسه (Type C) | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل ویزای کوتاه مدت فرانسه (Type C)',
    url: 'https://versai.ir/france-visa',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/france-visa',
  },
}

const FranceVisaPage: React.FC = () => {
  const faqData = [
    {
      question: "اولین گام اقدام برای دوره‌های زبان چیست؟",
      answer: "اولین گام برای اقدام به دوره‌های زبان، مشاوره با کارشناسان ما و تعیین سطح زبان شما است."
    },
    {
      question: "مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟",
      answer: "مشاوره‌های ما به صورت حضوری و آنلاین برگزار می‌شود و هزینه آن بسته به نوع مشاوره متفاوت است."
    },
    {
      question: "مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟",
      answer: "معمولاً 2-4 هفته پس از تکمیل مدارک، می‌توانید دوره زبان خود را شروع کنید."
    },
    {
      question: "شرایط لازم برای شرکت در دوره زبان چیست؟",
      answer: "شرایط اصلی شامل داشتن پاسپورت معتبر، مدارک تحصیلی و تعیین سطح زبان است."
    },
    {
      question: "آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟",
      answer: "بله، ما تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را برای شما انجام می‌دهیم."
    },
    {
      question: "چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟",
      answer: "مدارک اصلی شامل پاسپورت، مدارک تحصیلی، مدرک زبان، نامه پذیرش دانشگاه و مدارک مالی است."
    }
  ]

  const relatedArticles = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "/images/blog-page/Rectangle 41.png",
      link: '/articles/1',
      excerpt: "اگر به دنبال تقویت زبان فرانسوی هستید، دوره‌های معتبر در فرانسه انتخابی عالی است."
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/blog-page/Rectangle 41(1).png",
      link: '/articles/2',
      excerpt: "با ویزای دیجیتال نومد اسپانیا می‌توانید از هرجا کار کنید و اقامت بگیرید."
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/blog-page/Rectangle 41(2).png",
      link: '/articles/3',
      excerpt: "دانشگاه UCLY لیون با برنامه‌های زبان و رشته‌های متنوع مقصدی محبوب است."
    }
  ]

  return (
    <div className="min-h-screen bg-[#F2F1F1] relative overflow-hidden" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute -top-[17.39%] -right-[50.1%] w-[171.9%] h-[57.88%] opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-[#316086] to-transparent transform rotate-[21.716deg]"></div>
      </div>
      <div className="absolute top-[18.89%] -right-[50.1%] w-[171.9%] h-[57.88%] opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-[#316086] to-transparent transform.rotate-[21.716deg]"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-12 pb-16">
        <Container>
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-[#316086] leading-tight">
              ویزای کوتاه مدت فرانسه
              <span className="text-[#B23124]"> (Type C)</span>
            </h1>
            
            <div className="text-right">
              <p className="text-lg font-medium text-[#6D6E70] leading-relaxed">
                در راستای برنامه مهاجرت به فرانسه و در سری مقالات انواع ویزای فرانسه به ویزای کوتاه مدت فرانسه رسیدیم. در این مقاله سعی داریم تا به صورت اختصاصی در مورد ویزای کوتاه مدت فرانسه مواردی را با هم بررسی کنیم.
              </p>
              <p className="text-lg font-medium text-[#6D6E70] leading-relaxed mt-4">
                بسیاری از افراد به دلایل کاری، خانوادگی، تحصیلی، توریستی و … برای دریافت ویزای کوتاه مدت فرانسه اقدام می‌کنند. با اخذ ویزای کوتاه مدت فرانسه (type C) شما می‌توانید تا حداکثر ۹۰ روز در فرانسه اقامت داشته باشید. اما نکته‌ای که در مورد ویزای کوتاه مدت فرانسه حائز اهمیت است، تعداد دفعاتی است که فرد مجاز است وارد کشور فرانسه شود. بر این اساس ویزای کوتاه مدت فرانسه به ۳ دسته تقسیم می‌شوند:
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Visa Types Section */}
      <div className="relative z-10 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Single Entry Visa */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <img src="/images/france-visa-page/ticks/Done, Check.svg" alt="Single Entry" className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#B23124]">ویزای ۱ بار ورود (Single)</h3>
              <p className="text-base text-justify font-medium text-[#316086] leading-relaxed">
                با این نوع ویزا شما تنها ۱ بار امکان ورود به فرانسه و به طور کلی کشورهای حوزه شنگن را خواهید داشت. بعد از اینکه وارد فرانسه شدید و در مدت زمان تعیین شده ویزا، اقامت در فرانسه را تجربه کردید، با پایان اعتبار ویزا و خروج از کشور فرانسه ویزای شما باطل می‌شود و برای ورود مجدد به فرانسه باید دوباره درخواست ویزا بدهید.
              </p>
            </div>

            {/* Double Entry Visa */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <img src="/images/france-visa-page/ticks/Read, Circle.svg" alt="Double Entry" className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#B23124]">ویزای ۲ بار ورود (Double)</h3>
              <p className="text-base text-justify font-medium text-[#316086] leading-relaxed">
                با ویزای ۲ بار ورود، شما حداکثر ۲ بار اجازه ورود به کشورهای حوزه شنگن را خواهید داشت. برای مثال شما بعد از دریافت ویزای شنگن کوتاه مدت وارد فرانسه می‌شوید. سپس، فرانسه را به مقصد یک کشور دیگر ترک می‌کنید. شما بعد از این سفر ۱ بار دیگر می‌توانید وارد حوزه شنگن بشوید. با دومین خروج شما از حوزه شنگن، ویزای شما دیگر اعتبار نخواهد داشت.
              </p>
            </div>

            {/* Multiple Entry Visa */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center gap-1">
                  <img src="/images/france-visa-page/ticks/Read, Circle.svg" alt="Multiple Entry" className="w-10 h-10" />
                  <img src="/images/france-visa-page/ticks/Read, Circle.svg" alt="Multiple Entry" className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#B23124]">ویزا ورود متعدد (Multiple)</h3>
              <p className="text-base text-justify font-medium text-[#316086] leading-relaxed">
                شما با این نوع ویزا می‌توانید در طول مدت زمان اعتبار آن بدون محدودیت در رفت و آمد، به کشورهای حوزه شنگن وارد و از آن‌ها خارج شوید. این نوع ویزا هم برای اقامت‌های کوتاه مدت و هم برای اقامت‌های بلند مدت صادر می‌شود.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Reasons Section */}
      <div className="relative z-10 py-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/images/france-visa-page/main-bg.png")'}}>
        <div className="absolute inset-0 bg-[#1E3950] bg-opacity-80"></div>
        <Container className="relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-semibold text-white">دلیل درخواست ویزای کوتاه مدت فرانسه</h2>
            
            <p className="text-base font-medium text-white leading-relaxed max-w-4xl mx-auto">
              "دلیل حضور در فرانسه" یکی از اصلی‌ترین موارد برای تعیین نوع ویزا است. افراد مختلف می‌توانند با توجه تمایلات و دلایل متفاوت برای صدور ویزای کوتاه مدت فرانسه اقدام نمایند که در اینجا به چند مورد اصلی آن اشاره می‌کنیم:
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-12">
              {[
                { iconSrc: "/images/france-visa-page/Football.svg", text: "شرکت در دوره ورزشی/هنری" },
                { iconSrc: "/images/france-visa-page/Book, Open.svg", text: "شرکت در دوره آموزشی" },
                { iconSrc: "/images/france-visa-page/Hearts, Love, Romance.svg", text: "دیدار خانوادگی" },
                { iconSrc: "/images/france-visa-page/suitcase-portfolio-1.svg", text: "سفر تجاری/بازرگانی" },
                { iconSrc: "/images/france-visa-page/Book, Open.svg", text: "تحصیل در فرانسه\nدوره زبان" },
                { iconSrc: "/images/france-visa-page/Suitcase, Financial, Portfolio.svg", text: "سفر کاری" },
                { iconSrc: "/images/france-visa-page/Suitcase, Financial, Portfolio.svg", text: "سفر توریستی" }
              ].map((reason, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-16 h-16  flex items-center justify-center mx-auto">
                    <img src={reason.iconSrc} alt="" className="w-10 h-10" />
                  </div>
                  <p className="text-sm font-medium text-white leading-tight whitespace-pre-line">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Required Documents */}
            <div className="space-y-6 pt-12 ">
              <h3 className="text-xl font-semibold text-[#F2C3BE] text-right">مدارک موردنیاز ویزای کوتاه مدت</h3>
              
              <div className="text-right">
                <p className="text-base font-medium text-white leading-relaxed">
                  متقاضیان دریافت ویزای کوتاه مدت فرانسه باید نسبت به ارائه یک سری مدارک مشخص اقدام نمایند و آن‌ها را برای بررسی درخواست ویزا به{' '}
                  <a href="https://visa.vfsglobal.com/irn/fa/fra" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    سازمان VFS Global
                  </a>
                  {' '}ارائه دهند:
                </p>
                
                <div className="mt-4 space-y-2 text-right">
                  <p className="text-base font-medium text-white">
                    <span className="text-[#F2C3BE]">–</span> فرم ویزا
                  </p>
                  <p className="text-base font-medium text-white">
                    <span className="text-[#F2C3BE]">–</span> پاسپورت
                  </p>
                  <p className="text-base font-medium text-white">
                    <span className="text-[#F2C3BE]">–</span> مدارک مبنی بر دلایل شما برای اقامت در حوزه شنگن
                  </p>
                  <p className="text-base font-medium text-white">
                    <span className="text-[#F2C3BE]">–</span> مدارک مبنی بر اثبات منابع مالی شما برای تامین نیازهای اقتصادی در حین اقامت در حوزه شنگن
                  </p>
                  <p className="text-base font-medium text-white">
                    <span className="text-[#F2C3BE]">–</span> قرارداد بیمه
                  </p>
                </div>

                <p className="text-base font-medium text-white leading-relaxed mt-6">
                  سازمان VFS global پرونده شما را به{' '}
                  <a href="https://ir.ambafrance.org/-%D9%81%D8%A7%D8%B3%DB%8C-" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    سفارت فرانسه در ایران
                  </a>
                  {' '}ارجاع می‌دهد. پرونده درخواست ویزای شما توسط کارشناسان سفارت فرانسه در ایران بررسی می‌شود و در صورت تایید صلاحیت، ویزا شما صادر خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Visa Extension Section */}
      <div className="relative z-10 py-16">
        <Container>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#B23124] text-right">تمدید ویزای کوتاه مدت فرانسه</h2>
            
            <div className="text-right space-y-4">
              <p className="text-lg font-medium text-[#316086] leading-relaxed">
                هنگامی که شما در فرانسه هستید می‌توانید مدت اعتبار ویزای خود را تمدید کنید. اما این تمدید به دو دلیل قابل انجام است:
              </p>
              
              <div className="space-y-2 text-right">
                <p className="text-lg font-medium text-[#316086]">
                  – مسائل خانوادگی (فوت، بیماری، تصادف در خانواده)
                </p>
                <p className="text-lg font-medium text-[#316086]">
                  – مسائل کاری
                </p>
              </div>
              
              <p className="text-lg font.medium text-[#316086] leading-relaxed">
                این شرایط خاص است و مدت تمدید حداکثر ۹۰ روزی خواهد بود و متقاضی (غیر از موارد اضطراری و مسائل مربوط به حقوق بشر) ملزم به پرداخت ۳۰ یورو خواهد بود.
              </p>
              <p className="text-lg font.medium text-[#6D6E70] leading-relaxed">
              در این مقاله با ویزای کوتاه مدت فرانسه (Type C) آشنا شدیم. خواندیم که اعتبار این نوع ویزا حداکثر ۹۰ روز است و زمان صدور، انقضاء ویزا و دفعات ورود و خروج به فرانسه با توجه به دلایل ارائه شده توسط افراد متقاضی می‌تواند متفاوت باشد. ویزای کوتاه مدت فرانسه در بعضی موارد خاص قابل تمدید است.              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Consultation Form Section */}
      <div className="relative z-10 py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9565.PNG" />
          </div>
        </Container>
      </div>

      {/* Related Articles Section */}
      <RelatedArticlesSection 
        articles={relatedArticles}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-16"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqItems={faqData}
        title="سوالات متداول"
        className="py-16"
      />
    </div>
  )
}

export default FranceVisaPage

