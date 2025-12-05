import React from 'react'
import Button from '../ui/Button'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-[#1E3950] px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6 lg:py-8 flex flex-col justify-start items-center gap-2">
      <div className="w-full max-w-[1200px] rounded-2xl relative pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-4" style={{ backgroundImage: 'url(/images/home-page/Hero-photo.png)', backgroundSize: '45%', backgroundPosition: 'left 10% top 10%', backgroundRepeat: 'no-repeat' }}>

        <div className="flex items-center justify-center w-full lg:w-2/3">


          <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
              <div className="text-right">
                <span className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['IRANYekanX'] leading-tight sm:leading-normal md:leading-[60px] lg:leading-[78.40px]">با </span>
                <span className="text-[#F2C3BE] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['IRANYekanX'] leading-tight sm:leading-normal md:leading-[60px] lg:leading-[78.40px]">ورسای</span>
                <span className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['IRANYekanX'] leading-tight sm:leading-normal md:leading-[60px] lg:leading-[78.40px]">،<br /> در یک قدمی مهاجرت</span>
              </div>
              <div className="text-right text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl font-medium font-['IRANYekanX'] leading-6 sm:leading-7">
                انتخاب ورسای به‌معنای برخورداری از مشاوره حرفه‌ای، برنامه‌ریزی واقع‌بینانه و پیگیری مستمر تا تحقق هدف مهاجرت شماست.
              </div>
            </div>
            <Button variant="primary" size="md">
              درخواست مشاوره
            </Button>
          </div>


        </div>
       {/* Stats Section */}
       <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="inline-flex justify-start items-center gap-4 sm:gap-8 md:gap-16 lg:gap-40 flex-wrap sm:flex-nowrap">
          <div className="w-auto sm:w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">۱۷۰</span>
              <span className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">+</span>

            </div>
            <div className="self-stretch text-right justify-start text-white text-xs sm:text-sm md:text-base font-medium font-['IRANYekanX'] leading-relaxed">بازخورد مثبت</div>
          </div>
          <div className="w-auto sm:w-28 inline-flex flex-col justify-start items-center">
            <div className="w-auto sm:w-24 justify-start">
            
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">۴۰۰</span>
              <span className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">+</span>

            </div>
            <div className="self-stretch text-center justify-start text-white text-xs sm:text-sm md:text-base font-medium font-['IRANYekanX'] leading-relaxed">مشاوره</div>
          </div>
          <div className="w-auto sm:w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
            <span className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">%</span>
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">۹۶</span>
             
            </div>
            <div className="self-stretch text-right justify-start text-white text-xs sm:text-sm md:text-base font-medium font-['IRANYekanX'] leading-relaxed">پرونده موفق</div>
          </div>
        </div>
      </div>
      </div>

 

    </div>
  )
}

export default HeroSection