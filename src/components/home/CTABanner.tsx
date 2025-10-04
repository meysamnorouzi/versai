import React from 'react'
import Button from '../ui/Button'

const CTABanner: React.FC = () => {
  return (
    <div className="w-full h-96 bg-[#d74a3c]/80 relative flex justify-center items-center" style={{backgroundImage: 'url(/images/home-page/red-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute top-1/4 right-1/4 w-44 h-16 transform rotate-[9.29deg] overflow-hidden opacity-30">
        <div className="w-full h-full bg-slate-200/50 rounded-lg"></div>
      </div>
      
      <div className="w-[686px] flex flex-col justify-start items-center gap-6 relative">

        <div className="flex flex-col justify-start items-center gap-6">
     
          <div className="text-center">
            <span className="text-[#fdfeff] text-4xl font-extrabold font-['IRANYekanX'] leading-10">بدون مدرک زبان، به   </span>
            <span className="text-[#d74a3c] text-4xl font-extrabold font-['IRANYekanX'] leading-10">فرانسه</span>
            <span className="text-[#fdfeff] text-4xl font-extrabold font-['IRANYekanX'] leading-10">   مهاجرت کن!</span>
          </div>
          <div className="text-center text-[#fdfeff] text-2xl font-semibold font-['IRANYekanX'] leading-relaxed">
            دوره زبان، سریعترین و راحت ترین روش مهاجرت به فرانسه
          </div>

          <Button variant="secondary" size="md">
            اطلاعات بیشتر
          </Button>
        </div>
      
      </div>
    </div>
  )
}

export default CTABanner
