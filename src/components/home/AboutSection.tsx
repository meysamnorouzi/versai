'use client'

import React, { useState, useEffect } from 'react'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

const TESTIMONIALS = [
  {
    text: "من به کمک موسسه ورسای تونستم برای کالج زبان دانشگاه UCLY لیون اقدام کنم. کل پروسه برای من حدود شش ماه طول کشید. به طور مرتب با مشاور مجموعه مراحل رو چک میکردم و کل پروسه ثبت نام و تهیه مدارک و مصاحبه کامپوس و رزرو خوابگاه، بدون استرس پیش رفت. واقعا از همراهی موسسه ممنونم.",
    name: "م.رضایی"
  },
  {
    text: "من به دنبال مهاجرت با Express Entry بودم و با چند موسسه مشورت کردم. برخی از آنها تنها به ارائه خدمات پایه بسنده می‌کردند و نتایج مطلوبی نداشتند. وقتی با ورسای کار را آغاز کردم، تیم مهاجرتی‌شان با بررسی دقیق CRS و بررسی استراتژی استانی (PNP) کارمان را به سطح جدیدی برد.",
    name: "ن.کاظمی"
  },
  {
    text: "اقدام برای دوره زبان فرانسه برای من با همکاری ورسای خیلی راحت تر شد. من پرونده کامپوس فرانس رو ایجاد کرده بودم ولی هیچ ایده ای نداشتم که چطور پرونده رو کامل کنم و باید چه نکاتی رو رعایت کنم. کارشناس های باتجربه ورسای پرونده من رو به طور دقیق و در دقیقه نود کامل کردند.",
    name: "ا.مرادی"
  },
  {
    text: "من به کمک موسسه ورسای تونستم برای کالج زبان دانشگاه UCLY لیون اقدام کنم. کل پروسه برای من حدود شش ماه طول کشید. به طور مرتب با مشاور مجموعه مراحل رو چک میکردم و کل پروسه ثبت نام و تهیه مدارک و مصاحبه کامپوس و رزرو خوابگاه، بدون استرس پیش رفت. واقعا از همراهی موسسه ممنونم.",
    name: "ف.محمدی"
  },
  {
    text: "من به دنبال مهاجرت با Express Entry بودم و با چند موسسه مشورت کردم. برخی از آنها تنها به ارائه خدمات پایه بسنده می‌کردند و نتایج مطلوبی نداشتند. وقتی با ورسای کار را آغاز کردم، تیم مهاجرتی‌شان با بررسی دقیق CRS و بررسی استراتژی استانی (PNP) کارمان را به سطح جدیدی برد.",
    name: "س.حیدری"
  },
]

const AboutSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    setCurrentTestimonialIndex((prev) =>
      Math.min(prev, Math.max(0, TESTIMONIALS.length - visibleCount))
    )
  }, [visibleCount])
  
  const features = [
    {
      title: 'انتخاب بهترین مسیر مهاجرتی',
      iconName: 'target'
    },
    {
      title: 'مشاوره دقیق و تخصصی',
      iconName: 'speak'
    },
    {
      title: 'ارزیابی سطح زبان و مدارک',
      iconName: 'checkmark'
    },
    {
      title: 'پشتیبانی کامل تا اقامت',
      iconName: 'testing'
    }
  ]

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - visibleCount : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => 
      prev >= TESTIMONIALS.length - visibleCount ? 0 : prev + 1
    )
  }

  const slideOffset = (currentTestimonialIndex * 100) / TESTIMONIALS.length

  return (
    <div className="w-full bg-[#1e3950]/80 relative pt-10 pb-12" style={{ backgroundImage: 'url(/images/home-page/blue-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        {/* Main content */}
        <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-6 md:pt-8">

          <div className="text-center mb-6 sm:mb-8 flex justify-center items-center flex-wrap gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <Icon
                section="aboutVersai"
                name="union"
                className="w-6 h-6 sm:w-8 sm:h-8"
                alt="Union"
              />
            </div>
            <span className="text-[#f2f9ff] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-7 sm:leading-8 md:leading-10">درباره موسسه </span>
            <span className="text-[#f2c3be] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-7 sm:leading-8 md:leading-10">ورسای</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <Icon
                section="aboutVersai"
                name="union2"
                className="w-6 h-6 sm:w-8 sm:h-8"
                alt="Union2"
              />
            </div>
          </div>

          <div className="w-full max-w-[1110px] min-h-[100px] sm:min-h-[120px] md:h-36 text-right text-[#fdfeff] text-sm sm:text-base md:text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
            موسسه مهاجرتی ورسای، با رویکردی تخصصی و جامع، همواره مسیر موفقیت را برای متقاضیان روشن می‌سازد. هدف‌ها به‌عنوان نقشه راه زندگی شما عمل می‌کنند و ما در کنار شما هستیم تا این مسیر را هموار و دست‌یابی به رویاهایتان را ممکن سازیم. <br />گروه ورسای در زمینه‌های مهاجرت، تحصیل، سرمایه‌گذاری و اقامت در فرانسه و کانادا، فرآیندهای مهاجرتی را از نخستین گام تا رسیدن به مقصد با دقت و تخصص همراه می‌کند و همواره در کنار شما قرار دارد.  همچنین موسسه ورسای طی قرارداد همکاری با دبیرستان بین‌المللی در ایالت کبک، روند ثبت‌نام دانش‌آموزان ایرانی را در کانادا تسهیل بخشیده است. دانشجویان علاقه‌مند به تحصیل در کانادا نیز به کمک گروه  تخصصی ورسای مسیر آسان‌تری را پیش رو خواهند داشت.<br /> <br />
          </div>


          <div className="flex justify-center w-full">
            <div className="w-full max-w-3xl grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="w-full px-4 sm:px-6 py-3 bg-[#1e3950] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#505254] flex justify-start items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                    <Icon
                      section="aboutVersai"
                      name={feature.iconName}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      alt={feature.title}
                    />
                  </div>
                  <div className="text-right text-[#fdfeff] text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed">
                    {feature.title}
                  </div>

                </div>
              ))}
            </div>
          </div>
          {/* Success stories title */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[#f2f9ff] text-lg sm:text-xl md:text-2xl font-extrabold font-['IRANYekanX'] leading-loose">داستان‌های موفقیت </span>
            <span className="text-[#f2c3be] text-lg sm:text-xl md:text-2xl font-extrabold font-['IRANYekanX'] leading-loose">شما</span>
            <span className="text-[#f2f9ff] text-lg sm:text-xl md:text-2xl font-extrabold font-['IRANYekanX'] leading-loose"> با همراهی ورسای</span>
          </div>

          {/* Testimonials carousel */}
          <div className="flex items-center gap-2 sm:gap-4 relative w-full px-2 sm:px-0" dir="ltr">
            <button 
              onClick={handlePrevious}
              aria-label="قبلی"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1e3950] rounded-[32px] border border-[#d3e2ef] flex items-center justify-center hover:bg-[#2a4a60] transition-colors cursor-pointer flex-shrink-0"
            >
              <div className="text-[#f2f9ff] text-lg sm:text-xl">‹</div>
            </button>

            <div className="overflow-hidden flex-1">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${(TESTIMONIALS.length / visibleCount) * 100}%`,
                  transform: `translateX(-${slideOffset}%)`,
                }}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-1.5 sm:px-2"
                    style={{ width: `${100 / TESTIMONIALS.length}%` }}
                    dir="rtl"
                  >
                    <div className="h-full min-h-[200px] sm:min-h-[220px] bg-[#1e3950] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#316086] overflow-hidden flex flex-col items-start justify-start gap-2 py-3 sm:py-4 px-4 sm:px-6">
                      <h3 className="text-right text-[#d3e2ef] text-xs sm:text-sm font-medium font-['IRANYekanX'] leading-5 sm:leading-6 mt-2 sm:mt-4 border-b border-[#d3e2ef42] w-full pb-1">
                        {testimonial.name}
                      </h3>
                      <div className="text-right text-[#d3e2ef] text-xs sm:text-sm font-medium font-['IRANYekanX'] leading-5 sm:leading-6 mt-2 sm:mt-4">
                        {testimonial.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              aria-label="بعدی"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1e3950] rounded-[32px] border border-[#d3e2ef] flex items-center justify-center hover:bg-[#2a4a60] transition-colors cursor-pointer flex-shrink-0"
            >
              <div className="text-[#f2f9ff] text-lg sm:text-xl">›</div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutSection