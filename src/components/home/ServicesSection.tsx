import React from 'react'
import Button from '../ui/Button'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'تحصیل در فرانسه',
      description: 'برای اینکه بتوانید در فرانسه ادامه تحصیل دهید، اولین قدم این است که از دانشگاه‌ها یا کالج‌های فرانسه پذیرش بگیرید. کشور فرانسه...'
    },
    {
      title: ' اقامت فرانسه',
      description: 'در این مقاله سعی داریم به صورت مختصر و مفید اطلاعات مورد نیاز را در اختیار شما قرار دهیم، اما برای مشاوره تخصصی برای مهاجرت...'
    },
    {
      title: 'دوره زبان در فرانسه',
      description: 'با شرکت در این دوره ها شما از مزایای ویزای دانشجویی در کشور فرانسه مانند بیمه پزشکی رایگان، امکان کار دانشجویی برخوردار می شوید.'
    },
    {
      title: 'دریافت ویزای کوتاه مدت',
      description: 'بسیاری از افراد به دلایل کاری، خانوادگی، تحصیلی، توریستی و … برای دریافت ویزای کوتاه مدت فرانسه اقدام می‌کنند. با اخذ ویزای کوتاه...'
    },
    {
      title: 'اکسپرس انتری کانادا',
      description: 'Express Entry یک سیستم مدیریتیِ سه گروه نیروی کار متخصص است که برای انتخاب متقاضیان واجد شرایط برای اقامت دائم کانادا عمل می‌کند. این سیستم...'
    },
    {
      title: 'ثبت شرکت در فرانسه',
      description: 'در این مقاله قصد داریم در مورد ثبت شرکت در فرانسه و ثبت شرکت تجاری در فرانسه  به عنوان یکی از راه های مهاجرت به فرانسه  و مراحل ...'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#316086] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">خدمات موسسه </span>
            <span className="text-[#e65c4f] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">ورسای</span>
          </h2>
        </div>

        
        
        {/* First row */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-7 mb-4 sm:mb-5 md:mb-7">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-auto min-h-[300px] sm:min-h-[320px] md:h-[350px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 relative bg-[#fdfeff] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f2f1f1] flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6 overflow-visible group hover:bg-red-700 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:outline-neutral-400 hover:justify-end hover:items-center hover:gap-4 transition-all duration-500 ease-in-out">
              <div className="text-center text-[#316086] text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug w-full group-hover:text-stone-50 group-hover:hidden transition-all duration-300">
                {service.title}
              </div>
              <div className="text-right text-[#6D6E70] text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed w-full group-hover:hidden transition-all duration-300">
                {service.description}
              </div>
              <img className="w-48 sm:w-56 md:w-64 h-36 sm:h-40 md:h-48 absolute -top-5 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 rounded-2xl outline outline-2 outline-offset-[-1px] outline-stone-50 transition-all duration-500 ease-out" src="/images/home-page/success-story1.png" alt={service.title} />
              <div className="self-stretch text-center justify-start text-stone-50 text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                {service.title}
              </div>
              <Button 
                variant="primary-outline" 
                size="md" 
                className="self-stretch transition-all duration-300 delay-200"
              >
                اطلاعات بیشتر
              </Button>
            </div>
          ))}
        </div>
        
        {/* Second row */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-7">
          {services.slice(3, 6).map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-auto min-h-[300px] sm:min-h-[320px] md:h-[350px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 relative bg-[#fdfeff] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f2f1f1] flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6 overflow-visible group hover:bg-red-700 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:outline-neutral-400 hover:justify-end hover:items-center hover:gap-4 transition-all duration-500 ease-in-out">
              <div className="text-center text-[#1e3950] text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug w-full group-hover:text-stone-50 group-hover:hidden transition-all duration-300">
                {service.title}
              </div>
              <div className="text-right text-[#cbcbcb] text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed w-full group-hover:hidden transition-all duration-300">
                {service.description}
              </div>
              <img className="w-48 sm:w-56 md:w-64 h-36 sm:h-40 md:h-48 absolute -top-5 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 rounded-2xl outline outline-2 outline-offset-[-1px] outline-stone-50 transition-all duration-500 ease-out" src="/images/home-page/success-story1.png" alt={service.title} />
              <div className="self-stretch text-center justify-start text-stone-50 text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                {service.title}
              </div>
              <Button 
                variant="primary-outline" 
                size="md" 
                className="self-stretch opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
              >
                اطلاعات بیشتر
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection