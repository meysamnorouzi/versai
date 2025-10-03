import React from 'react'
import { ChevronDown, Phone, MessageCircle, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import FAQSection from '../components/ui/FAQSection'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import useSEO from '../hooks/useSEO'

const GermanyPage: React.FC = () => {

  useSEO({
    title: 'مهاجرت به آلمان | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل مهاجرت به آلمان، انواع ویزا، شرایط اقامت و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای',
    keywords: 'مهاجرت آلمان، ویزای آلمان، اقامت آلمان، تحصیل آلمان، کار آلمان، ورسای'
  })

  const faqItems = [
    {
      question: 'چه روش‌هایی برای مهاجرت به آلمان وجود دارد؟',
      answer: 'روش‌های مختلف مهاجرت به آلمان شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و پناهندگی است. هر روش شرایط و مدارک خاص خود را دارد.'
    },
    {
      question: 'آیا برای کار در آلمان نیاز به مدرک زبان آلمانی دارم؟',
      answer: 'بله، برای اکثر مشاغل در آلمان تسلط به زبان آلمانی ضروری است. سطح مورد نیاز بسته به نوع شغل متفاوت است.'
    },
    {
      question: 'شرایط تحصیل در آلمان چگونه است؟',
      answer: 'آلمان دارای دانشگاه‌های معتبر و رایگان است. برای تحصیل نیاز به مدرک زبان آلمانی یا انگلیسی، مدارک تحصیلی و تمکن مالی دارید.'
    },
    {
      question: 'چقدر زمان می‌برد تا اقامت دائم آلمان را دریافت کنم؟',
      answer: 'معمولاً پس از 5 سال اقامت قانونی در آلمان می‌توانید برای اقامت دائم درخواست دهید.'
    },
    {
      question: 'آیا می‌توانم خانواده‌ام را با خود به آلمان ببرم؟',
      answer: 'بله، در صورت داشتن ویزای کاری یا تحصیلی معتبر، می‌توانید برای خانواده‌تان ویزای همراه دریافت کنید.'
    },
    {
      question: 'هزینه زندگی در آلمان چقدر است؟',
      answer: 'هزینه زندگی در آلمان بسته به شهر متفاوت است. به طور متوسط ماهانه 800-1200 یورو برای یک نفر کافی است.'
    }
  ]

  const blogArticles = [
    {
      title: 'راهنمای کامل ویزای کاری آلمان',
      image: 'https://placehold.co/350x388',
      link: '/articles/germany-work-visa-guide'
    },
    {
      title: 'تحصیل رایگان در دانشگاه‌های آلمان',
      image: 'https://placehold.co/350x388',
      link: '/articles/free-education-germany'
    },
    {
      title: 'نحوه دریافت اقامت دائم آلمان',
      image: 'https://placehold.co/350x388',
      link: '/articles/germany-permanent-residency'
    }
  ]

  const recommendations = [
    'آلمان یکی از قوی‌ترین اقتصادهای جهان را دارد و فرصت‌های شغلی زیادی برای متخصصان فراهم می‌کند.',
    'سیستم آموزشی آلمان بسیار پیشرفته است و بسیاری از دانشگاه‌ها رایگان هستند.',
    'آلمان کشوری امن با کیفیت بالای زندگی و خدمات اجتماعی عالی است.',
    'برای موفقیت در آلمان، یادگیری زبان آلمانی بسیار مهم است.',
    'آلمان در قلب اروپا قرار دارد و دسترسی آسان به سایر کشورهای اروپایی دارد.'
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-8">
              مهاجرت به آلمان
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                آلمان به عنوان بزرگترین اقتصاد اروپا و چهارمین اقتصاد جهان، فرصت‌های بی‌نظیری برای مهاجران فراهم می‌کند. این کشور با داشتن سیستم آموزشی پیشرفته، بازار کار پویا و کیفیت بالای زندگی، یکی از محبوب‌ترین مقاصد مهاجرتی جهان محسوب می‌شود.
              </p>
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                آلمان با جمعیتی بیش از 83 میلیون نفر و نرخ بیکاری پایین، نیاز مبرمی به نیروی کار متخصص دارد. این کشور در زمینه‌های مختلف از جمله مهندسی، پزشکی، IT، و علوم پایه فرصت‌های شغلی فراوانی ارائه می‌دهد.
              </p>
              <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                سیستم مهاجرتی آلمان بسیار منظم و قانونمند است. دولت آلمان برنامه‌های مختلفی برای جذب نیروی کار متخصص، دانشجویان بین‌المللی و سرمایه‌گذاران دارد که هر کدام شرایط و مزایای خاص خود را دارند.
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
                alt="German immigration methods"
                className="w-full h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  روش‌های مختلف مهاجرت به آلمان
                </h2>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    آلمان روش‌های متنوعی برای مهاجرت ارائه می‌دهد که شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج و پناهندگی می‌شود. هر روش شرایط و مدارک خاص خود را دارد.
                  </p>
                  <p>
                    ویزای کاری آلمان برای متخصصان، ویزای تحصیلی برای دانشجویان، ویزای سرمایه‌گذاری برای کارآفرینان و ویزای ازدواج برای اعضای خانواده از جمله گزینه‌های موجود است.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  مزایای مهاجرت به آلمان
                </h3>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      اقتصاد قوی و بازار کار پویا با نرخ بیکاری پایین
                    </li>
                    <li>
                      سیستم آموزشی پیشرفته و دانشگاه‌های معتبر جهانی
                    </li>
                    <li>
                      کیفیت بالای زندگی و خدمات اجتماعی عالی
                    </li>
                    <li>
                      امنیت اجتماعی و ثبات سیاسی
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
            برای مشاوره تخصصی مهاجرت به آلمان از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
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
                alt="Study in Germany"
                className="w-full h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در آلمان چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>
                  برای مشاوره تخصصی مهاجرت به آلمان، با ما در ارتباط باشید.
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

export default GermanyPage
