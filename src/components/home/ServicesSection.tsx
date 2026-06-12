import React from 'react'
import Button from '../ui/Button'

const cardBaseClasses =
  'group relative w-full min-h-[300px] sm:min-h-[320px] h-[300px] sm:h-[320px] md:h-[350px] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#f2f1f1] bg-[#fdfeff] overflow-visible transition-[background-color,box-shadow,outline-color] duration-500 ease-in-out hover:bg-red-700 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:outline-neutral-400'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  titleColor?: string
  descriptionColor?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  titleColor = 'text-[#316086]',
  descriptionColor = 'text-[#6D6E70]',
}) => (
  <div className={cardBaseClasses}>
    <div className="absolute inset-0 flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
      <div
        className={`w-full text-center text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug ${titleColor}`}
      >
        {title}
      </div>
      <div
        className={`w-full text-right text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed ${descriptionColor}`}
      >
        {description}
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10 opacity-0 pointer-events-none transition-opacity duration-300 delay-75 group-hover:opacity-100 group-hover:pointer-events-auto">
      <img
        className="pointer-events-none absolute left-1/2 top-0 h-36 w-48 -translate-x-1/2 translate-y-8 rounded-2xl object-cover opacity-0 outline outline-2 outline-offset-[-1px] outline-stone-50 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:h-40 sm:w-56 md:h-48 md:w-64"
        src={image}
        alt={title}
      />
      <div className="w-full text-center text-base sm:text-lg md:text-xl font-semibold font-['IRANYekanX'] leading-snug text-stone-50">
        {title}
      </div>
      <Button
        variant="primary-outline"
        size="md"
        className="w-full border-stone-50 text-stone-50 hover:bg-stone-50 hover:text-red-700 hover:border-stone-50"
      >
        اطلاعات بیشتر
      </Button>
    </div>
  </div>
)

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'تحصیل در فرانسه',
      description: 'برای اینکه بتوانید در فرانسه ادامه تحصیل دهید، اولین قدم این است که از دانشگاه‌ها یا کالج‌های فرانسه پذیرش بگیرید. کشور فرانسه...',
      image: '/images/france-study-page/STUDY-IN-FRANCE 1.png',
    },
    {
      title: ' اقامت فرانسه',
      description: 'در این مقاله سعی داریم به صورت مختصر و مفید اطلاعات مورد نیاز را در اختیار شما قرار دهیم، اما برای مشاوره تخصصی برای مهاجرت...',
      image: '/images/france-pr-page/blue-img.png',
    },
    {
      title: 'دوره زبان در فرانسه',
      description: 'با شرکت در این دوره ها شما از مزایای ویزای دانشجویی در کشور فرانسه مانند بیمه پزشکی رایگان، امکان کار دانشجویی برخوردار می شوید.',
      image: '/images/language-course-page/pexels-mikhail-nilov-8430274 1.png',
    },
    {
      title: 'دریافت ویزای کوتاه مدت',
      description: 'بسیاری از افراد به دلایل کاری، خانوادگی، تحصیلی، توریستی و … برای دریافت ویزای کوتاه مدت فرانسه اقدام می‌کنند. با اخذ ویزای کوتاه...',
      image: '/images/france-visa-page/main-bg.png',
    },
    {
      title: 'اکسپرس انتری کانادا',
      description: 'Express Entry یک سیستم مدیریتیِ سه گروه نیروی کار متخصص است که برای انتخاب متقاضیان واجد شرایط برای اقامت دائم کانادا عمل می‌کند. این سیستم...',
      image: '/images/canada-express-entry-page/Rectangle 66.png',
    },
    {
      title: 'ثبت شرکت در فرانسه',
      description: 'در این مقاله قصد داریم در مورد ثبت شرکت در فرانسه و ثبت شرکت تجاری در فرانسه  به عنوان یکی از راه های مهاجرت به فرانسه  و مراحل ...',
      image: '/images/france-office-page/Rectangle 67.png',
    },
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
        <div className="mb-4 grid w-full grid-cols-1 gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-5 md:mb-7 md:gap-7 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        {/* Second row */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-7 lg:grid-cols-3">
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              titleColor="text-[#1e3950]"
              descriptionColor="text-[#cbcbcb]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection