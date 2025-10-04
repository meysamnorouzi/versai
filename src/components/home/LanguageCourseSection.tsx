import React from 'react'
import Icon from '../ui/Icon'
import Button from '../ui/Button'

const LanguageCourseSection: React.FC = () => {
  const features = [
    {
      title: 'پروسه کوتاه',
      iconName: 'component'
    },
    {
      title: 'امکان رزرو خوابگاه دولتی',
      iconName: 'delivery'
    },
    {
      title: 'شهریه مقرون‌به‌صرفه',
      iconName: 'coins'
    },
 
    {
      title: 'بدون نیاز به مدرک زبان',
      iconName: 'component'
    },

    {
      title: 'امکان کار دانشجویی',
      iconName: 'clock'
    },
    {
      title: 'بیمه پزشکی رایگان',
      iconName: 'medical'
    },

  ]

  return (
    <div className="w-full py-20 bg-[#f2f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#316086] text-3xl font-extrabold font-['IRANYekanX'] leading-10">مهاجرت آسان با </span>
            <span className="text-[#d74a3c] text-3xl font-extrabold font-['IRANYekanX'] leading-10">دوره زبان</span>
          </h2>
          <p className="text-[#316086] text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-8">
            ورسای، تنها نماینده رسمی دانشگاه UCLY شهر لیون فرانسه
          </p>
          <p className="w-[1111px] text-right text-[#4686bb] text-base font-medium font-['IRANYekanX'] leading-relaxed mx-auto">
            موسسه ورسای مفتخر است به عنوان تنها نماینده دانشگاه UCLY لیون فرانسه در ایران ، حرفه ای ترین خدمات جهت تحصیل در دوره های مختلف ازجمله دوره زبان فرانسه را برای شما فراهم آورد. با شرکت در این دوره ها، شما نه تنها به عنوان یک دانشجو در دوره های زبان تحصیل میکنید، بلکه با دارا بودن از موقعیت دانشجویی از مزایای رفاهی گوناگون نیز برخوردار خواهید بود.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* Features grid */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col justify-start items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon 
                    section="easyImmigration" 
                    name={feature.iconName} 
                    className="w-10 h-10" 
                    alt={feature.title}
                  />
                </div>
                <div className="text-center text-[#316086] text-base font-semibold font-['IRANYekanX'] leading-normal">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>

          {/* Video section */}
          <div className="w-[570px] h-80 bg-gradient-to-b from-black/0 to-[#1e3950] rounded-2xl relative mx-auto mb-8 flex items-end justify-start p-6">
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-7 h-7 bg-zinc-300 rounded-full border-4 border-white"></div>
              </div>
              <div className="text-right text-[#d3e2ef] text-2xl font-extrabold font-['IRANYekanX'] leading-loose" style={{ textShadow: '0px 2px 9px rgb(123 169 206 / 0.91)' }}>
                معرفی دوره زبان کشور فرانسه
              </div>
            </div>
          </div>
        </div>




        <div className="text-center">
          <Button variant="primary-outline" size="md">
            اطلاعات بیشتر
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LanguageCourseSection
