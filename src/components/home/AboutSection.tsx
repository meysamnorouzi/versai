'use client'

import React, { useState } from 'react'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import VideoPlayer from '../ui/VideoPlayer'
import { getVideoUrl, getPosterUrl, getVideoMetadata } from '../../config/videos'

const AboutSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  
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

  const testimonials = [
    {
      text: "من به کمک موسسه ورسای تونستم برای کالج زبان دانشگاه UCLY لیون اقدام کنم. کل پروسه برای من حدود شش ماه طول کشید. به طور مرتب با مشاور مجموعه مراحل رو چک میکردم و کل پروسه ثبت نام و تهیه مدارک و مصاحبه کامپوس و رزرو خوابگاه، بدون استرس پیش رفت. واقعا از همراهی موسسه ممنونم.",
      image: "/images/home-page/success-story1.png",
      name: "ص.زارعی"
    },
    {
      text: "من به دنبال مهاجرت با Express Entry بودم و با چند موسسه مشورت کردم. برخی از آنها تنها به ارائه خدمات پایه بسنده می‌کردند و نتایج مطلوبی نداشتند. وقتی با ورسای کار را آغاز کردم، تیم مهاجرتی‌شان با بررسی دقیق CRS و بررسی استراتژی استانی (PNP) کارمان را به سطح جدیدی برد.",
      image: "/images/home-page/success-story2.png",
      name: "ص.زارعی"
    },
    {
      text: "اقدام برای دوره زبان فرانسه برای من با همکاری ورسای خیلی راحت تر شد. من پرونده کامپوس فرانس رو ایجاد کرده بودم ولی هیچ ایده ای نداشتم که چطور پرونده رو کامل کنم و باید چه نکاتی رو رعایت کنم. کارشناس های باتجربه ورسای پرونده من رو به طور دقیق و در دقیقه نود کامل کردند.",
      image: "/images/home-page/success-story3.png",
      name: "ص.زارعی"
    },
    {
      text: "من به کمک موسسه ورسای تونستم برای کالج زبان دانشگاه UCLY لیون اقدام کنم. کل پروسه برای من حدود شش ماه طول کشید. به طور مرتب با مشاور مجموعه مراحل رو چک میکردم و کل پروسه ثبت نام و تهیه مدارک و مصاحبه کامپوس و رزرو خوابگاه، بدون استرس پیش رفت. واقعا از همراهی موسسه ممنونم.",
      image: "/images/home-page/success-story1.png",
      name: "ص.زارعی"
    },
    {
      text: "من به دنبال مهاجرت با Express Entry بودم و با چند موسسه مشورت کردم. برخی از آنها تنها به ارائه خدمات پایه بسنده می‌کردند و نتایج مطلوبی نداشتند. وقتی با ورسای کار را آغاز کردم، تیم مهاجرتی‌شان با بررسی دقیق CRS و بررسی استراتژی استانی (PNP) کارمان را به سطح جدیدی برد.",
      image: "/images/home-page/success-story2.png",
      name: "ص.زارعی"
    },
  ]

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => 
      prev >= testimonials.length - 3 ? 0 : prev + 1
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentTestimonialIndex, 
    currentTestimonialIndex + 3
  )

  return (
    <div className="w-full h-[1171px] bg-[#1e3950]/80 relative" style={{ backgroundImage: 'url(/images/home-page/blue-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        {/* Main content */}
        <div className=" w-full h-full flex flex-col items-center pt-8">

          <div className="text-center mb-8 flex justify-center items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <Icon
                section="aboutVersai"
                name="union"
                className="w-8 h-8"
                alt="Union"
              />
            </div>
            <span className="text-[#f2f9ff] text-3xl font-extrabold font-['IRANYekanX'] leading-10">درباره موسسه </span>
            <span className="text-[#f2c3be] text-3xl font-extrabold font-['IRANYekanX'] leading-10">ورسای</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <Icon
                section="aboutVersai"
                name="union2"
                className="w-8 h-8"
                alt="Union2"
              />
            </div>
          </div>

          <div className="w-[1110px] h-36 text-right text-[#fdfeff] text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-8">
            موسسه مهاجرتی ورسای، با رویکردی تخصصی و جامع، همواره مسیر موفقیت را برای متقاضیان روشن می‌سازد. هدف‌ها به‌عنوان نقشه راه زندگی شما عمل می‌کنند و ما در کنار شما هستیم تا این مسیر را هموار و دست‌یابی به رویاهایتان را ممکن سازیم. <br />گروه ورسای در زمینه‌های مهاجرت، تحصیل، سرمایه‌گذاری و اقامت در فرانسه و کانادا، فرآیندهای مهاجرتی را از نخستین گام تا رسیدن به مقصد با دقت و تخصص همراه می‌کند و همواره در کنار شما قرار دارد.  همچنین موسسه ورسای طی قرارداد همکاری با دبیرستان بین‌المللی در ایالت کبک، روند ثبت‌نام دانش‌آموزان ایرانی را در کانادا تسهیل بخشیده است. دانشجویان علاقه‌مند به تحصیل در کانادا نیز به کمک گروه  تخصصی ورسای مسیر آسان‌تری را پیش رو خواهند داشت.<br /> <br />
          </div>


          <div className="flex gap-4 justify-between items-center w-full">
            {/* Features */}
            <div className="w-72 flex flex-col justify-start items-start gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="w-full px-6 py-3 bg-[#1e3950] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#505254] flex justify-start items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon
                      section="aboutVersai"
                      name={feature.iconName}
                      className="w-8 h-8"
                      alt={feature.title}
                    />
                  </div>
                  <div className="text-right text-[#fdfeff] text-base font-medium font-['IRANYekanX'] leading-relaxed">
                    {feature.title}
                  </div>

                </div>
              ))}
            </div>

            {/* Video section */}
            <div className="w-[543px] mb-8">
              <div className="text-right mb-4">
                <div className="text-[#d3e2ef] text-2xl font-extrabold font-['IRANYekanX'] leading-loose" style={{ textShadow: '0px 2px 9px rgb(123 169 206 / 0.91)' }}>
                  {getVideoMetadata('servicesIntro').title}
                </div>
                <div className="text-[#d3e2ef]/80 text-sm font-['IRANYekanX']">
                  {getVideoMetadata('servicesIntro').description} • مدت زمان: {getVideoMetadata('servicesIntro').duration}
                </div>
              </div>
              <VideoPlayer
                src={getVideoUrl('servicesIntro')}
                poster={getPosterUrl('servicesIntro')}
                title={getVideoMetadata('servicesIntro').title}
                className="w-full h-64 md:h-80 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                controls={true}
                autoplay={false}
                loop={false}
              />
            </div>

          </div>
          {/* Success stories title */}
          <div className="text-center mb-8">
            <span className="text-[#f2f9ff] text-2xl font-extrabold font-['IRANYekanX'] leading-loose">داستان‌های موفقیت </span>
            <span className="text-[#f2c3be] text-2xl font-extrabold font-['IRANYekanX'] leading-loose">شما</span>
            <span className="text-[#f2f9ff] text-2xl font-extrabold font-['IRANYekanX'] leading-loose"> با همراهی ورسای</span>
          </div>

          {/* Testimonials carousel */}
          <div className="flex items-center gap-4 relative">
            <button 
              onClick={handlePrevious}
              className="w-14 h-14 bg-[#1e3950] rounded-[32px] border border-[#d3e2ef] flex items-center justify-center hover:bg-[#2a4a60] transition-colors cursor-pointer"
            >
              <div className="text-[#f2f9ff] text-xl">‹</div>
            </button>

            <div className="flex gap-4 overflow-hidden">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={currentTestimonialIndex + index} className="w-80 bg-[#1e3950] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#316086] overflow-hidden flex flex-col items-start justify-start gap-2 py-4 px-6 flex-shrink-0">
                  {/* <img className="border border-[#d3e2ef]" src={testimonial.image} alt={`Testimonial ${currentTestimonialIndex + index + 1}`} /> */}
                  <h3 className="text-right text-[#d3e2ef] text-sm font-medium font-['IRANYekanX'] leading-6 mt-4 border-b border-[#d3e2ef42] w-full pb-1">
                    {testimonial.name}
                  </h3>
                  <div className="text-right text-[#d3e2ef] text-sm font-medium font-['IRANYekanX'] leading-6 mt-4">
                    {testimonial.text}
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-14 h-14 bg-[#1e3950] rounded-[32px] border border-[#d3e2ef] flex items-center justify-center hover:bg-[#2a4a60] transition-colors cursor-pointer"
            >
              <div className="text-[#f2f9ff] text-xl">›</div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutSection