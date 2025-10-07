import React from 'react'
import { ChevronDown, Phone, MessageCircle, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import FAQSection from '../components/ui/FAQSection'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import useSEO from '../hooks/useSEO'

const ItalyPage: React.FC = () => {

  useSEO({
    title: 'مهاجرت به ایتالیا | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل مهاجرت به ایتالیا، انواع ویزا، شرایط اقامت و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای',
    keywords: 'مهاجرت ایتالیا، ویزای ایتالیا، اقامت ایتالیا، تحصیل ایتالیا، کار ایتالیا، ورسای'
  })

  const faqItems = [
    {
      question: 'چه روش‌هایی برای مهاجرت به ایتالیا وجود دارد؟',
      answer: 'روش‌های مختلف مهاجرت به ایتالیا شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و ویزای دیجیتال نومد است. هر روش شرایط و مدارک خاص خود را دارد.'
    },
    {
      question: 'آیا برای کار در ایتالیا نیاز به مدرک زبان ایتالیایی دارم؟',
      answer: 'بله، برای اکثر مشاغل در ایتالیا تسلط به زبان ایتالیایی ضروری است. البته در برخی مشاغل بین‌المللی، زبان انگلیسی نیز کافی است.'
    },
    {
      question: 'شرایط تحصیل در ایتالیا چگونه است؟',
      answer: 'ایتالیا دارای دانشگاه‌های معتبر و هزینه‌های تحصیلی مقرون به صرفه است. برای تحصیل نیاز به مدرک زبان ایتالیایی یا انگلیسی، مدارک تحصیلی و تمکن مالی دارید.'
    },
    {
      question: 'چقدر زمان می‌برد تا اقامت دائم ایتالیا را دریافت کنم؟',
      answer: 'معمولاً پس از 5 سال اقامت قانونی در ایتالیا می‌توانید برای اقامت دائم درخواست دهید.'
    },
    {
      question: 'آیا می‌توانم خانواده‌ام را با خود به ایتالیا ببرم؟',
      answer: 'بله، در صورت داشتن ویزای کاری یا تحصیلی معتبر، می‌توانید برای خانواده‌تان ویزای همراه دریافت کنید.'
    },
    {
      question: 'هزینه زندگی در ایتالیا چقدر است؟',
      answer: 'هزینه زندگی در ایتالیا نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است. به طور متوسط ماهانه 600-1000 یورو برای یک نفر کافی است.'
    }
  ]

  const blogArticles = [
    {
      title: 'مزایای دوره زبان کشور فرانسه',
      image: '/images/blog-page/Rectangle 41.png',
      link: '/articles/french-language-course-benefits',
      excerpt: 'چرا دوره‌های زبان فرانسه برای شروع مسیر مهاجرت مفیدند؟'
    },
    {
      title: 'شرایط درخواست ویزای دیجیتال نومد اسپانیا',
      image: '/images/blog-page/Rectangle 41(1).png',
      link: '/articles/spain-digital-nomad-visa',
      excerpt: 'پیش‌نیازها و مراحل دریافت ویزای نومد اسپانیا.'
    },
    {
      title: 'معرفی دانشگاه UCLY شهر لیون فرانسه',
      image: '/images/blog-page/Rectangle 41(2).png',
      link: '/articles/ucly-university-lyon',
      excerpt: 'مروری کوتاه بر دانشگاه UCLY و رشته‌های محبوب.'
    }
  ]

  const recommendations = [
    'ایتالیا کشوری زیبا با فرهنگ غنی و تاریخ طولانی است که فرصت‌های زیادی برای مهاجران فراهم می‌کند.',
    'اقتصاد ایتالیا در زمینه‌های مختلف از جمله مد، طراحی، غذا و توریسم بسیار قوی است.',
    'سیستم آموزشی ایتالیا کیفیت بالایی دارد و هزینه‌های تحصیلی مقرون به صرفه است.',
    'ایتالیا در قلب اروپا قرار دارد و دسترسی آسان به سایر کشورهای اروپایی دارد.',
    'برای موفقیت در ایتالیا، یادگیری زبان ایتالیایی و آشنایی با فرهنگ محلی مهم است.'
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-8">
              مهاجرت به ایتالیا
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                ایتالیا به عنوان یکی از زیباترین کشورهای جهان و مهد هنر و فرهنگ، فرصت‌های منحصر به فردی برای مهاجران فراهم می‌کند. این کشور با داشتن تاریخ غنی، معماری باشکوه و فرهنگ متنوع، یکی از محبوب‌ترین مقاصد توریستی و مهاجرتی جهان محسوب می‌شود.
              </p>
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                ایتالیا با جمعیتی بیش از 60 میلیون نفر و اقتصاد متنوع، در زمینه‌های مختلف از جمله مد، طراحی، غذا، توریسم، خودروسازی و فناوری فرصت‌های شغلی فراوانی ارائه می‌دهد. این کشور همچنین دارای دانشگاه‌های معتبر و سیستم آموزشی با کیفیت است.
              </p>
              <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                سیستم مهاجرتی ایتالیا در سال‌های اخیر بهبود یافته و برنامه‌های مختلفی برای جذب نیروی کار متخصص، دانشجویان بین‌المللی و سرمایه‌گذاران دارد. ویزای دیجیتال نومد ایتالیا نیز یکی از جدیدترین و جذاب‌ترین گزینه‌ها برای کارآفرینان و فریلنسرها است.
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
                alt="Italian immigration methods"
                className="w-full h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  روش‌های مختلف مهاجرت به ایتالیا
                </h2>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    ایتالیا روش‌های متنوعی برای مهاجرت ارائه می‌دهد که شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و ویزای دیجیتال نومد می‌شود. هر روش شرایط و مدارک خاص خود را دارد.
                  </p>
                  <p>
                    ویزای کاری ایتالیا برای متخصصان، ویزای تحصیلی برای دانشجویان، ویزای سرمایه‌گذاری برای کارآفرینان و ویزای دیجیتال نومد برای فریلنسرها از جمله گزینه‌های موجود است.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  مزایای مهاجرت به ایتالیا
                </h3>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      فرهنگ غنی و تاریخ طولانی با آثار هنری و معماری باشکوه
                    </li>
                    <li>
                      آب و هوای مدیترانه‌ای معتدل و طبیعت زیبا
                    </li>
                    <li>
                      سیستم آموزشی با کیفیت و هزینه‌های مقرون به صرفه
                    </li>
                    <li>
                      اقتصاد متنوع و فرصت‌های شغلی در زمینه‌های مختلف
                    </li>
                    <li>
                      دسترسی آسان به سایر کشورهای اروپایی
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-8">
                توصیه‌های ورسای به شما
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
                alt="Study in Italy"
                className="w-full h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در ایتالیا چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>
                  برای مشاوره تخصصی مهاجرت به ایتالیا، با ما در ارتباط باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-300/25 rounded-2xl border-2 border-slate-200 p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://placehold.co/1107x624" 
                alt="Background"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-stone-300/25 rounded-2xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-[20px] font-semibold text-sky-50 mb-8 text-center">
                ثبت درخواست مشاوره با ورسای
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[14px] font-semibold text-sky-50 mb-2">
                        <span className="text-red-200">*</span>نام و نام خانوادگی
                      </label>
                      <input 
                        type="text" 
                        placeholder="نام و نام خانوادگی خود را وارد کنید."
                        className="w-full p-3 bg-sky-50 rounded-2xl border border-stone-300 text-[14px] font-medium text-neutral-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-sky-50 mb-2">
                        <span className="text-red-200">*</span>شماره تماس
                      </label>
                      <input 
                        type="tel" 
                        placeholder="شماره تماس خود را وارد کنید."
                        className="w-full p-3 bg-sky-50 rounded-2xl border border-stone-300 text-[14px] font-medium text-neutral-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[14px] font-semibold text-sky-50 mb-2">
                        <span className="text-red-200">*</span>موضوع مشاوره
                      </label>
                      <div className="relative">
                        <select className="w-full p-3 bg-sky-50 rounded-2xl border border-stone-300 text-[14px] font-medium text-neutral-400 appearance-none">
                          <option>موضوع مشاوره را انتخاب کنید.</option>
                        </select>
                        <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-neutral-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-sky-50 mb-2">
                        <span className="text-red-200">*</span>ایمیل
                      </label>
                      <input 
                        type="email" 
                        placeholder="آدرس ایمیل خود را وارد کنید."
                        className="w-full p-3 bg-sky-50 rounded-2xl border border-stone-300 text-[14px] font-medium text-neutral-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-sky-50 mb-2">
                      متن پیام
                    </label>
                    <textarea 
                      placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                      rows={4}
                      className="w-full p-3 bg-sky-50 rounded-2xl border border-stone-300 text-[14px] font-medium text-neutral-400 resize-none"
                    />
                  </div>
                  <Button 
                    variant="primary" 
                    size="md"
                    className="bg-red-500 hover:bg-red-600 border border-red-400"
                  >
                    ارسال درخواست
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-6 h-6 text-red-200" />
                    <span className="text-[20px] font-medium text-stone-50">۰۲۱۲۸۴۲۱۶۹۰</span>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="md"
                    className="bg-sky-50 text-red-500 border border-red-500 hover:bg-red-50"
                  >
                    <MessageCircle className="w-6 h-6 ml-2" />
                    ارتباط در واتساپ
                  </Button>
                </div>
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
        className="py-16 px-4"
      />

      {/* FAQ Section */}
      <FAQSection 
        faqItems={faqItems}
        title="سوالات متداول"
        className="py-16 px-4"
      />

    </div>
  )
}

export default ItalyPage
