import React from 'react'
import { ChevronDown, Phone, MessageCircle, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import FAQSection from '../components/ui/FAQSection'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import useSEO from '../hooks/useSEO'

const TurkeyPage: React.FC = () => {

  useSEO({
    title: 'مهاجرت به ترکیه | موسسه مهاجرتی ورسای',
    description: 'راهنمای کامل مهاجرت به ترکیه، انواع ویزا، شرایط اقامت و مشاوره تخصصی از کارشناسان موسسه مهاجرتی ورسای',
    keywords: 'مهاجرت ترکیه، ویزای ترکیه، اقامت ترکیه، تحصیل ترکیه، کار ترکیه، ورسای'
  })

  const faqItems = [
    {
      question: 'چه روش‌هایی برای مهاجرت به ترکیه وجود دارد؟',
      answer: 'روش‌های مختلف مهاجرت به ترکیه شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج، خرید ملک و ویزای توریستی است. هر روش شرایط و مدارک خاص خود را دارد.'
    },
    {
      question: 'آیا برای کار در ترکیه نیاز به مدرک زبان ترکی دارم؟',
      answer: 'در بسیاری از مشاغل، تسلط به زبان ترکی ضروری است. اما در برخی مشاغل بین‌المللی، زبان انگلیسی نیز کافی است. یادگیری زبان ترکی برای زندگی روزمره مهم است.'
    },
    {
      question: 'شرایط تحصیل در ترکیه چگونه است؟',
      answer: 'ترکیه دارای دانشگاه‌های معتبر و هزینه‌های تحصیلی مقرون به صرفه است. برای تحصیل نیاز به مدرک زبان ترکی یا انگلیسی، مدارک تحصیلی و تمکن مالی دارید.'
    },
    {
      question: 'چقدر زمان می‌برد تا اقامت دائم ترکیه را دریافت کنم؟',
      answer: 'معمولاً پس از 8 سال اقامت قانونی در ترکیه می‌توانید برای اقامت دائم درخواست دهید.'
    },
    {
      question: 'آیا می‌توانم خانواده‌ام را با خود به ترکیه ببرم؟',
      answer: 'بله، در صورت داشتن ویزای کاری یا تحصیلی معتبر، می‌توانید برای خانواده‌تان ویزای همراه دریافت کنید.'
    },
    {
      question: 'هزینه زندگی در ترکیه چقدر است؟',
      answer: 'هزینه زندگی در ترکیه نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است. به طور متوسط ماهانه 400-800 دلار برای یک نفر کافی است.'
    }
  ]

  const blogArticles = [
    {
      title: 'راهنمای کامل ویزای کاری ترکیه',
      image: 'https://placehold.co/350x388',
      link: '/articles/turkey-work-visa-guide'
    },
    {
      title: 'تحصیل در دانشگاه‌های معتبر ترکیه',
      image: 'https://placehold.co/350x388',
      link: '/articles/study-turkey-universities'
    },
    {
      title: 'خرید ملک و اقامت در ترکیه',
      image: 'https://placehold.co/350x388',
      link: '/articles/turkey-property-investment'
    }
  ]

  const recommendations = [
    'ترکیه کشوری زیبا با فرهنگ غنی و موقعیت استراتژیک بین اروپا و آسیا است.',
    'اقتصاد ترکیه در حال رشد است و فرصت‌های شغلی زیادی در زمینه‌های مختلف دارد.',
    'هزینه زندگی در ترکیه نسبت به سایر کشورهای اروپایی مقرون به صرفه‌تر است.',
    'ترکیه در قلب منطقه‌ای قرار دارد که دسترسی آسان به اروپا، آسیا و خاورمیانه دارد.',
    'برای موفقیت در ترکیه، یادگیری زبان ترکی و آشنایی با فرهنگ محلی مهم است.'
  ]

  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-extrabold text-[#316086] leading-[1.41] mb-8">
              مهاجرت به ترکیه
            </h1>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                ترکیه به عنوان پل ارتباطی بین اروپا و آسیا و کشوری با تاریخ غنی و فرهنگ متنوع، فرصت‌های منحصر به فردی برای مهاجران فراهم می‌کند. این کشور با داشتن موقعیت استراتژیک، اقتصاد در حال رشد و هزینه‌های زندگی مقرون به صرفه، یکی از محبوب‌ترین مقاصد مهاجرتی منطقه محسوب می‌شود.
              </p>
              <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] mb-6">
                ترکیه با جمعیتی بیش از 84 میلیون نفر و اقتصاد پویا، در زمینه‌های مختلف از جمله توریسم، تولید، فناوری، کشاورزی و خدمات فرصت‌های شغلی فراوانی ارائه می‌دهد. این کشور همچنین دارای دانشگاه‌های معتبر و سیستم آموزشی با کیفیت است.
              </p>
              <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                سیستم مهاجرتی ترکیه در سال‌های اخیر بهبود یافته و برنامه‌های مختلفی برای جذب نیروی کار متخصص، دانشجویان بین‌المللی و سرمایه‌گذاران دارد. خرید ملک در ترکیه نیز یکی از راه‌های محبوب برای دریافت اقامت است.
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
                alt="Turkish immigration methods"
                className="w-full h-[502px] object-cover rounded-2xl border border-stone-300"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  روش‌های مختلف مهاجرت به ترکیه
                </h2>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <p>
                    ترکیه روش‌های متنوعی برای مهاجرت ارائه می‌دهد که شامل ویزای کاری، تحصیلی، سرمایه‌گذاری، ازدواج، خرید ملک و ویزای توریستی می‌شود. هر روش شرایط و مدارک خاص خود را دارد.
                  </p>
                  <p>
                    ویزای کاری ترکیه برای متخصصان، ویزای تحصیلی برای دانشجویان، ویزای سرمایه‌گذاری برای کارآفرینان و خرید ملک برای دریافت اقامت از جمله گزینه‌های موجود است.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-[#b23124] leading-[1.1] mb-6">
                  مزایای مهاجرت به ترکیه
                </h3>
                <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      موقعیت استراتژیک بین اروپا و آسیا
                    </li>
                    <li>
                      هزینه زندگی مقرون به صرفه نسبت به اروپا
                    </li>
                    <li>
                      اقتصاد در حال رشد و فرصت‌های شغلی متنوع
                    </li>
                    <li>
                      فرهنگ غنی و تاریخ طولانی
                    </li>
                    <li>
                      دسترسی آسان به سایر کشورهای منطقه
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
            برای مشاوره تخصصی مهاجرت به ترکیه از کارشناسان موسسه مهاجرتی ورسای کمک بگیرید.
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
                alt="Study in Turkey"
                className="w-full h-[279px] object-cover rounded-2xl"
              />
              <div className="space-y-4 text-[16px] font-medium text-[#316086] leading-[1.61]">
                <p>
                  <span>شرایط دریافت اقامت در ترکیه چیست؟ </span>
                  <span className="text-[#b23124]">اینجا</span>
                  <span> کلیک کنید و بخوانید.</span>
                </p>
                <p>
                  برای مشاوره تخصصی مهاجرت به ترکیه، با ما در ارتباط باشید.
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

export default TurkeyPage
