import React from 'react'
import Icon from '../ui/Icon'

const LanguageCourseBenefits: React.FC = () => {
  const benefits = [
    {
      text: "فرآیند مهاجرت با این روش بسیار کوتاه انجام می شود. با موسسه ورسای بدون استرس و عجله در بهترین زمان می توانید این فرایند را طی کنید.",
      highlighted: "ورسای"
    },
    {
      text: "ورسای به عنوان نماینده دانشگاه UCLY می تواند خوابگاه دولتی با هزینه به صرفه برایتان رزرو کند. این مزیت شما را از استرس پیدا شدن یا نشدن خوابگاه نجات میدهد.",
      highlighted: "خوابگاه دولتی"
    },
    {
      text: "شهریه این دوره ها در دانشگاه ها و شهر های مختلف متفاوت است ولی در کل نسبت به روش های دیگر مهاجرت به این کشور، معقول است."
    },
    {
      text: "این روش بدون نیاز به مدرک رسمی زبان است. کلاس ها با دو زبان انگلیسی و فرانسوی پیش می رود ولی نیازی به داشتن مدرک زبان نیست.",
      highlighted: ["انگلیسی", "فرانسوی"]
    },
    {
      text: "شهر لیون، شهری دانشجویی است و دانشجویان می توانند ۲۰ ساعت در هفته در کنار تحصیل، به کار دانشجویی بپردازند و درآمدی کسب کنند.",
      highlighted: "۲۰ ساعت"
    },
    {
      text: "در این روش، شما تمامی مزایای دانشجویی این کشور شامل بیمه پزشکی رایگان، امکان کار و ... را دارید."
    },
    {
      text: "تعداد ورودی های این دوره ها در طی سال باعث می شود به راحتی بتوانید برنامه ریزی کنید و در سریعترین فرصت ممکن به فرانسه بروید."
    }
  ]

  const featureCards = [
    {
      iconName: 'component',
      title: "پروسه کوتاه"
    },
    {
      iconName: 'delivery',
      title: "امکان رزرو خوابگاه دولتی"
    },
    {
      iconName: 'coins',
      title: "شهریه مقرون‌به‌صرفه"
    },
    {
      iconName: 'component',
      title: "بدون نیاز به مدرک زبان"
    },
    {
      iconName: 'clock',
      title: "امکان کار دانشجویی"
    },
    {
      iconName: 'medical',
      title: "بیمه پزشکی رایگان"
    },
   
   
   
  
   
  ]

  const renderTextWithHighlight = (text: string, highlighted?: string | string[]) => {
    if (!highlighted) return text

    if (Array.isArray(highlighted)) {
      let result = text
      highlighted.forEach(highlight => {
        result = result.replace(highlight, `<span class="text-red-700">${highlight}</span>`)
      })
      return <span dangerouslySetInnerHTML={{ __html: result }} />
    }

    const highlightedText = text.replace(highlighted, `<span class="text-red-700">${highlighted}</span>`)
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
  }

  return (
    <div className="w-full py-20 bg-[#f2f1f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-right mb-12">
          <h2 className="text-[#b23124] text-2xl font-semibold font-['IRANYekanX'] leading-relaxed mb-8">
            مزایای دوره زبان
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex justify-end items-start gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex-shrink-0 mt-1">
              <img src="/icons/france office page/Group.svg" alt="" className="w-6 h-6 flex-shrink-0" />

              </div>
              <div className="flex-1 text-right">
                <span className="text-[#316086] text-base sm:text-lg font-medium font-['IRANYekanX'] leading-7">
                  {renderTextWithHighlight(benefit.text, benefit.highlighted)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {featureCards.map((card, index) => (
            <div key={index} className="flex flex-col justify-start items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Icon 
                  section="easyImmigration" 
                  name={card.iconName} 
                  className="w-10 h-10" 
                  alt={card.title}
                />
              </div>
              <div className="text-center text-[#316086] text-base font-semibold font-['IRANYekanX'] leading-normal">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageCourseBenefits
