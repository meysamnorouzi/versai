import React from 'react'
import Container from '@/src/components/ui/Container'
import Button from '@/src/components/ui/Button'
import FAQSection from '@/src/components/ui/FAQSection'
import RelatedArticlesSection from '@/src/components/ui/RelatedArticlesSection'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مهاجرت به کانادا - راهنمای کامل روش‌های مهاجرت | ورسای',
  description: 'راهنمای کامل روش‌های مختلف مهاجرت به کانادا شامل ویزای توریستی، سرمایه‌گذاری، کاری، تحصیلی و حمایتی با مشاوره تخصصی ورسای',
  keywords: 'مهاجرت کانادا، ویزای کانادا، اقامت کانادا، سرمایه گذاری کانادا، ویزای کاری کانادا، ورسای',
  openGraph: {
    title: 'مهاجرت به کانادا - راهنمای کامل روش‌های مهاجرت | ورسای',
    description: 'راهنمای کامل روش‌های مختلف مهاجرت به کانادا شامل ویزای توریستی، سرمایه‌گذاری، کاری، تحصیلی و حمایتی با مشاوره تخصصی ورسای',
    url: 'https://versai.ir/canada-immigration',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/canada-immigration',
  },
}

const CanadaImmigrationPage: React.FC = () => {
  const faqItems = [
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
      answer: "مدارک تحصیلی، پاسپورت، عکس، گواهی زبان و مدارک مالی از جمله مدارک مورد نیاز است."
    }
  ]

  const relatedArticles = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "/images/blog-page/Rectangle 41.png",
      link: "/articles/french-language-course-benefits",
      excerpt: "راهنمای انتخاب دوره زبان و مزایای تحصیل در فرانسه."
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/blog-page/Rectangle 41(1).png",
      link: "/articles/spain-digital-nomad-visa",
      excerpt: "شرایط، مدارک و نکات مهم برای دریافت ویزای نومد اسپانیا."
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/blog-page/Rectangle 41(2).png",
      link: "/articles/ucly-university-lyon",
      excerpt: "با دانشگاه UCLY و فرصت‌های تحصیلی آن در لیون آشنا شوید."
    }
  ]

  const immigrationMethods = [
    {
      title: "ویزای توریستی کانادا",
      description: "ویزای توریستی به صورت سینگل ویزا یا مولتیپل ویزا صادر می گردد. در واقه ویزای یک بار ورود یا چند بار ورود محسوب می شود. مثلا اگر فردی جهت شرکت در همایش یا کنفرانس یا هر مورد دیگری بخواهد تنها یک بار وارد کانادا شود، در زمان خاصی و به مدت محدودی می تواند در این کشور حضور داشته باشد. اما ویزای چند بار ورود فرد می تواند تا زمان اعتبار پاسورت خود به مدت 6 ما در خاک کانادا حضور داشه باشد."
    },
    {
      title: "ویزای سرمایه گذاری کانادا",
      description: "این روش موجب تقویت اقتصاد و بازار کار کانادا می شود و افرادی همچون سرمایه‌گذارها، کارآفرینان و افراد خوداشتغال را شامل می شود. این افراد بسته به قانون هر سال، می بایست مبلغ مشخصی در حساب خود داشته باشند. افراد سرمایه گذار در صورت تایید پذیرش می توانند به همراه خانواده خود به این کشور مهاجرت نمایند."
    },
    {
      title: "ویزای خوداشتغالی کانادا",
      description: "نکاتی که در ویزای خود اشتغالی به کانادا وجود دارد، داشتن تجربه خود اشتغالی در حوزهٔ فرهنگ یا ورزش و داشتن معیارهای لازم برای این مورد می باشد. از مهمترین آنها معیارهایی مثل تحصیلات، سن، مهارت زبان می باشد."
    },
    {
      title: "ویزای ازدواج و نامزدی کانادا",
      description: "در یافت ویزا از طریق ازدواج دارای فاکتورهایی هست که به صورت خلاصه توضیح می دهیم. ازدواج باید به صورت رسمی و شناخته شده برای دولت کانادا باشد، در صورتی که دولت تشخیص دهد ازدواج به صورت صوری بوده است، فرد را دیپورت می کند. فرد اسپانسر باید 3 سال حامی مالی فرد متقاضی شود، اسپانسر باید دارای سن قانونی بود."
    },
    {
      title: "ویزای کاری کانادا",
      description: "افرادی که دارای تخصص و مهارت فنی خاصی هستند، می توانند از طریق ویزای کاری اقدام کرده و در صورت پذیرش به همراه خانواده خود به کانادا مهاجرت نمایند. نیروی کار متخصص به تقویت بازار کار و رشد اقتصادی کانادا کمک می‌کند. با توجه به مکان و نقطه ای که برای زندگی و کار کردن در کانادا انتخاب می کنید، شرایط و انتخاب های مختلفی پیش روی شما قرار خواهد گرفت. میزان تحصیلات، مهارت زبان، داشتن مدرک معتبر، سن، نوع شغل و موارد دیگر در افزایش امتیاز شما مؤثر هستند. ارائه صورتحساب بانکی جهت اثبات تمکن مالی، برای افرادی که امکان کار قانونی در کانادا را دارند ضروری نیست."
    },
    {
      title: "ویزای تحصیلی کانادا",
      description: "در صورت تایید شرایط عنوان شده از جانب فرد متقاضی، مجوز ورود به کشور کانادا صادر می گردد. فرد درخواست خود را برای تحصیل در موسسات و دانشگاه های معتبر کانادا ثبت می کند و پس از دریافت پذیرش می تواند با اجرای مراحل قانونی به کشور کانادا مهاجرت نمایند. مدرک زبان، نامه پذیرش از جمله مهمترین موارد دریافت ویزای تحصیلی کانادا می باشد."
    },
    {
      title: "ویزای حمایتی",
      description: "کسی که در کانادا زندگی می کند و اقامت دائم دارد می تواند اسپانسر بستگان خود شود تا برای کار یا تحصیل به کانادا بیایند. فرد حمایت کننده می بایست بتواند از پس هزینه های مالی و تامین نیازهای اولیه همچون اقامت و خوراک و لباس بر بیاید. در صورتی که فردی بخواهد برای همسر یا شریک قانونی خود اقامت دائم دریافت کند، مسئولیت مالی او را تا 3 سال اول بر عهده خواهد داشت و همسری که از این طریق اقامت دائم دریافت کرده است تا ۵ سال اجازهٔ اسپانسر شدن برای همسر دیگری را نخواهد داشت. افرادی که اقامت دائم دارند می توانند با سوپر ویزای کانادا، امکان اقامت فرزندان، نوه ها و والدین خود یا پدر بزرگ و مادربزرگ خود را فراهم کنند."
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-100 relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-12 md:pt-16">
        <Container>
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-7 sm:leading-8 md:leading-10 mb-3 sm:mb-4 text-cyan-800 px-4 sm:px-0">
              مهاجرت به کانادا
            </h1>
          </div>
        </Container>
      </section>

      {/* Immigration Methods Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-red-700 text-lg sm:text-xl md:text-2xl font-semibold font-['IRANYekanX'] leading-snug text-right mb-6 sm:mb-8 px-4 sm:px-0">
              از چه راه هایی می توان برای مهاجرت به کانادا اقدام کرد؟
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {immigrationMethods.map((method, index) => (
                <div key={index} className="text-right px-4 sm:px-0">
                  <p className="text-sm sm:text-base md:text-lg font-medium font-['IRANYekanX'] leading-relaxed">
                    <span className="text-red-700 font-semibold">{method.title}</span>
                    <br />
                    <span className="text-cyan-800">{method.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Banner Section */}
      <section className="relative py-12 sm:py-16 md:py-20 mb-8 sm:mb-12 md:mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/canada-immigration-page/Rectangle 66.png"
            alt="Canada Immigration"
            className="w-full h-full object-cover"
          />
        </div>
        <Container>
          <div className="relative text-center text-white px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-7 sm:leading-8 md:leading-10 mb-3 sm:mb-4" style={{ textShadow: '0px 0px 6px rgba(255,255,255,0.71)' }}>
              برای رویای کانادا، یک قدم بردار.
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-extrabold font-['IRANYekanX'] leading-relaxed mb-6 sm:mb-8" style={{ textShadow: '0px 0px 6px rgba(255,255,255,0.71)' }}>
              ارزیابی امتیاز شما با ورسای
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[32px] text-base sm:text-lg font-bold font-['IRANYekanX']">
              درخواست مشاوره
            </Button>
          </div>
        </Container>
      </section>

      <div className="mt-6 sm:mt-8">
        <Container>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-medium font-['IRANYekanX'] leading-relaxed text-right px-4 sm:px-0">
            با توجه به شرایطی که دارید برای مثال با در نظر گرفتن وضعیت تاهل، میزان بودجه و سرمایه، تخصص و مهارت هایی که دارید و … می توانید یکی از روش های مهاجرت به کانادا را انتخاب و اقدامات لازم را انجام دهید، نقطه بسیار مهم این است که اقدامات و دریافت ویزا برای مهاجرت کار آسانی نیست، اما تمام کسانی که د راه درست تلاش کرده و اقدامات لازم را انجام داده اند موفق به دریافت ویزای مهاجرت به کانادا شده اند.
          </p>
        </Container>
      </div>

      {/* Consultation Form Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9563.PNG" />
        </Container>
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

export default CanadaImmigrationPage

