import React from 'react'
import Button from '../ui/Button'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-[#1E3950] px-40 py-8 flex flex-col justify-start items-center gap-2">
      <div className="w-[1200px]  rounded-2xl  relative pt-12 pb-4 " style={{ backgroundImage: 'url(/images/home-page/Hero-photo.png)', backgroundSize: '45%', backgroundPosition: 'left 10% top 10%', backgroundRepeat: 'no-repeat' }}>

        <div className="flex items-center justify-center w-2/3">


          <div className="flex flex-col justify-start items-start gap-8 p-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-right">
                <span className="text-[#ffffff] text-5xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">با </span>
                <span className="text-[#F2C3BE] text-5xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">ورسای</span>
                <span className="text-[#ffffff] text-5xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">،<br /> در یک قدمی مهاجرت</span>
              </div>
              <div className="text-right text-[#ffffff] text-xl font-medium font-['IRANYekanX'] leading-7">
                انتخاب ورسای به‌معنای برخورداری از مشاوره حرفه‌ای، برنامه‌ریزی واقع‌بینانه و پیگیری مستمر تا تحقق هدف مهاجرت شماست.
              </div>
            </div>
            <Button variant="primary" size="md">
              درخواست مشاوره
            </Button>
          </div>


        </div>
       {/* Stats Section */}
       <div className="flex justify-center items-center mt-20">
        <div className="inline-flex justify-start items-center gap-40">
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
              <span className="text-white text-4xl font-extrabold font-['IRANYekanX'] leading-10">۱۷۰</span>
              <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">+</span>

            </div>
            <div className="self-stretch text-right justify-start text-white text-base font-medium font-['IRANYekanX'] leading-relaxed">بازخورد مثبت</div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="w-24 justify-start">
            
              <span className="text-white text-4xl font-extrabold font-['IRANYekanX'] leading-10">۴۰۰</span>
              <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">+</span>

            </div>
            <div className="self-stretch text-center justify-start text-white text-base font-medium font-['IRANYekanX'] leading-relaxed">مشاوره</div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
            <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">%</span>
              <span className="text-white text-4xl font-extrabold font-['IRANYekanX'] leading-10">۹۶</span>
             
            </div>
            <div className="self-stretch text-right justify-start text-white text-base font-medium font-['IRANYekanX'] leading-relaxed">پرونده موفق</div>
          </div>
        </div>
      </div>
      </div>

 

    </div>
  )
}

export default HeroSection