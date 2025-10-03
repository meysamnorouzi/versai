import React from 'react'
import { Phone, MessageCircle, Star, Baby, Heart, DollarSign, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react'
import Button from '../components/ui/Button'
import FAQSection from '../components/ui/FAQSection'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import useSEO from '../hooks/useSEO'

const PRFrancePage: React.FC = () => {

  // SEO Configuration
  useSEO({
    title: 'اقامت در فرانسه - راهنمای کامل مهاجرت به فرانسه | ورسای',
    description: 'راهنمای کامل اقامت در فرانسه شامل روش‌های مختلف مهاجرت، شرایط اقامت دائم، و مراحل قانونی. مشاوره تخصصی با ورسای.',
    keywords: 'اقامت فرانسه, مهاجرت فرانسه, اقامت دائم فرانسه, ویزای فرانسه, مهاجرت تحصیلی فرانسه',
    url: 'https://versai.ir/pr-france',
    type: 'website'
  })

  const immigrationMethods = [
    { icon: Baby, title: 'تولد' },
    { icon: HeartHandshake, title: 'ازدواج' },
    { icon: Heart, title: 'پناهندگی' },
    { icon: DollarSign, title: 'سرمایه گذاری' },
    { icon: Briefcase, title: 'کاری' },
    { icon: GraduationCap, title: 'تحصیلی' }
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



  return (
    <div className="min-h-screen bg-[#f2f1f1] font-['IRANYekanX'] relative">
      
      {/* Background Vectors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-30 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-br from-versai-blue-200 to-versai-blue-300 rounded-full transform rotate-[21.716deg]"></div>
        </div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 opacity-20 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-br from-versai-blue-200 to-versai-blue-300 rounded-full transform rotate-[21.716deg]"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[32px] font-extrabold text-[#316086] mb-8 leading-[1.41]">
              اقامت در فرانسه
            </h1>
            <p className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] text-right max-w-3xl mx-auto">
              مهاجرت به فرانسه روش های مختلفی دارد و هر فرد با توجه به شرایطی که دارد می تواند بهترین روش مهاجرت را انتخاب و اقدامات لازم را انجام دهد. نگران نباشید ما تمام این روش ها را می دانیم و با دغدغه های شما آشنا هستیم. در این مقاله سعی داریم به صورت مختصر و مفید اطلاعات مورد نیاز را در اختیار شما قرار دهیم،{' '}
              <span className="block mt-2">به طور کلی راه های مهاجرت به فرانسه عبارت اند از:</span>
            </p>
          </div>
        </div>
      </section>

      {/* Immigration Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-16 max-w-4xl mx-auto">
            {immigrationMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-1 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-[#316086]" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#316086] leading-[1.4]">
                    {method.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Permanent Residence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-2 justify-end">
                <h2 className="text-[24px] font-bold text-[#b23124] leading-[1.1] text-right max-w-[746px]">
                  چگونه می توانیم بعد از مهاجرت به فرانسه، اقامت دائم فرانسه را بگیریم؟
                </h2>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#b23124]" />
                </div>
              </div>
              
              <div className="text-[18px] font-medium text-[#6d6e70] leading-[1.53] text-right">
                <p className="mb-4">
                  افراد عادی معمولا اگر بتوانند به مدت 5 سال در فرانسه بمانند (از طریق روش های مهاجرت که اشاره می شود)، در این صورت می توانند تقاضای اقامت دائم نمایند. اما افرادی که از دانشگاه های فرانسه فارغ التحصیل شده اند، دو سال بعد از اتمام درس می توانند درخواست اقامت دائم نمایند. سوالی که در اینجا ممکن است برایتان پیش بیاید این است که بعد از پایان تحصیل فرد باید مجددا راهی برای ماندن در فرانسه پیدا کند، در این شرایط می توانید ویزای کار گرفته یا مجددا ادامه تحصیل دهید. در هر دو حالت فرد می تواند بعد از گذشت دو سال نسبت به دریافت اقامت دائم در فرانسه اقدام نماید.
                </p>
                <p className="mb-6">
                  در موارد زیر چهار روش ذکر شده است که می توان به وسیله آن اقامت کشور فرانسه را دریافت کرد.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-[16px] font-medium text-[#316086] leading-[1.61] text-right max-w-[614px]">
                    تولد در فرانسه: افرادی که در فرانسه متولد می شوند، در ۱۸ سالگی ملیت فرانسوی می گیرند.
                  </p>
                  <Star className="w-6 h-6 text-[#316086] flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-[16px] font-medium text-[#316086] leading-[1.61] text-right max-w-[614px]">
                    داشتن پدر یا مادر فرانسوی: افرادی که والدین آن ها (پدر یا مادر) فرانسوی است.
                  </p>
                  <Star className="w-6 h-6 text-[#316086] flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-[16px] font-medium text-[#316086] leading-[1.61] text-right max-w-[907px]">
                    اقامت در فرانسه بیش از ۵ سال: افرادی که بیشتر از پنج سال در فرانسه اقامت داشته باشند می توانند برای اقامت فرانسه اقدام کنند.
                  </p>
                  <Star className="w-6 h-6 text-[#316086] flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-[16px] font-medium text-[#316086] leading-[1.61] text-right max-w-[735px]">
                    ازدواج با فرد فرانسوی: از طریق ازدواج با یک فرانسوی بعد از ۴ سال می توان تقاضای ملیت فرانسوی کرد.
                  </p>
                  <Star className="w-6 h-6 text-[#316086] flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3950] to-[#1e3950] opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/images/france-pr-page/blue-bg.png')] bg-cover bg-center"></div>
        </div>
        
        {/* Left Side Image */}
        <div className="absolute left-0 top-0 w-[490px] h-full">
          <div className="w-full h-full bg-gradient-to-br from-[#4686bb] to-[#316086] opacity-90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-[32px] font-extrabold text-[#fdf7f7] leading-[1.41] mb-8 max-w-[454px] mx-auto" style={{ textShadow: '0px 0px 6px rgba(255,255,255,0.71)' }}>
              آینده‌تان در فرانسه،<br />
              با یک مسیر ساده آغاز می‌شود.
            </h2>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-[#d74a3c] border-[#e5867d] text-[#fdfeff] hover:bg-[#c73e30] px-6 py-3 rounded-[32px] text-[18px] font-bold"
            >
              درخواست مشاوره
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1e3950] to-[#316086] rounded-2xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-25">
                <div className="absolute inset-0 bg-[url('/images/france-pr-page/bg-lines.png')] bg-cover bg-center"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-[20px] font-bold text-[#f2f9ff] mb-8">ثبت درخواست مشاوره با ورسای</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Form */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right">
                          <span className="text-[#f2c3be]">*</span>نام و نام خانوادگی
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right"
                          placeholder="نام و نام خانوادگی خود را وارد کنید"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right">
                          <span className="text-[#f2c3be]">*</span>شماره تماس
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right"
                          placeholder="شماره تماس خود را وارد کنید"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right">
                          <span className="text-[#f2c3be]">*</span>ایمیل
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right"
                          placeholder="آدرس ایمیل خود را وارد کنید"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right">
                          <span className="text-[#f2c3be]">*</span>موضوع مشاوره
                        </label>
                        <select className="w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right">
                          <option value="">موضوع مشاوره را انتخاب کنید</option>
                          <option value="immigration">مهاجرت</option>
                          <option value="study">تحصیل</option>
                          <option value="work">کار</option>
                          <option value="investment">سرمایه گذاری</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[14px] font-semibold text-[#f2f9ff] mb-2 text-right">متن پیام</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-3 rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:ring-2 focus:ring-[#4686bb] text-right"
                        placeholder="در صورت تمایل، متن پیام خود را بنویسید"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="bg-[#d74a3c] border-[#e5867d] text-[#fdfeff] hover:bg-[#c73e30] px-6 py-3 rounded-[32px] text-[18px] font-bold"
                      >
                        ارسال درخواست
                      </Button>
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <div className="flex items-center gap-2">
                      <Phone className="w-6 h-6 text-[#f2c3be]" />
                      <span className="text-[20px] font-medium text-[#fdf7f7]">۰۲۱۲۸۴۲۱۶۹۰</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="bg-[#f2f9ff] border-[#d74a3c] text-[#d74a3c] hover:bg-[#e8f4fd] px-6 py-3 rounded-[32px] text-[18px] font-bold"
                    >
                      <MessageCircle className="w-6 h-6 ml-2" />
                      ارتباط در واتساپ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqItems={faqData}
        title="سوالات متداول"
        className="py-16 bg-white"
      />

      {/* Related Articles Section */}
      <RelatedArticlesSection 
        articles={[
          {
            title: "مزایای دوره زبان کشور فرانسه",
            image: "/images/france-pr-page/success-story1.png",
            link: "/france-study"
          },
          {
            title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
            image: "/images/france-pr-page/success-story2.png",
            link: "/france-visa"
          },
          {
            title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
            image: "/images/france-pr-page/success-story3.png",
            link: "/france-study"
          }
        ]}
        title="مقالات مرتبط"
        showViewAll={true}
        viewAllLink="/articles"
        className="py-16 bg-[#f2f1f1]"
      />
    </div>
  )
}

export default PRFrancePage
