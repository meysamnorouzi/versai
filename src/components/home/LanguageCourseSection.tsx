import React from 'react'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import VideoPlayer from '../ui/VideoPlayer'

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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#316086] text-xl sm:text-2xl lg:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 lg:leading-10">مهاجرت آسان با </span>
            <span className="text-[#d74a3c] text-xl sm:text-2xl lg:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 lg:leading-10">دوره زبان</span>
          </h2>
          <p className="text-[#316086] text-base sm:text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-6 sm:mb-8">
            ورسای، تنها نماینده رسمی دانشگاه UCLY شهر لیون فرانسه
          </p>
          <p className="w-full max-w-[1111px] text-right text-[#4686bb] text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed mx-auto">
            موسسه ورسای مفتخر است به عنوان تنها نماینده دانشگاه UCLY لیون فرانسه در ایران ، حرفه ای ترین خدمات جهت تحصیل در دوره های مختلف ازجمله دوره زبان فرانسه را برای شما فراهم آورد. با شرکت در این دوره ها، شما نه تنها به عنوان یک دانشجو در دوره های زبان تحصیل میکنید، بلکه با دارا بودن از موقعیت دانشجویی از مزایای رفاهی گوناگون نیز برخوردار خواهید بود.
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          {/* Features grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 w-full">
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
          <div className="w-full max-w-[605px] h-64 sm:h-80 lg:h-96 rounded-2xl relative overflow-hidden mx-auto mb-6 sm:mb-8">
            <VideoPlayer
              src="/videos/language-course.mp4"
              className="w-full h-full"
              controls={true}
              autoplay={false}
              loop={false}
              muted={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[20.192%] from-[rgba(0,0,0,0)] to-[#1e3950] to-[82.212%] p-3 sm:p-4 pointer-events-none">
              <h3 className="text-[#d3e2ef] text-lg sm:text-xl lg:text-2xl font-extrabold font-['IRANYekanX'] leading-loose text-center [text-shadow:0px_2px_9px_rgba(123,169,206,0.91)]">
                معرفی دوره زبان کشور فرانسه
              </h3>
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
