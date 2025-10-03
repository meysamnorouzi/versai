import React from 'react'

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

          <button className="px-6 py-3 bg-white rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#d74a3c] inline-flex justify-center items-center gap-2">
          <div className="text-[#d74a3c] text-lg font-bold font-['IRANYekanX'] leading-tight">اطلاعات بیشتر</div>
        </button>
        </div>
      
      </div>
    </div>
  )
}

export default CTABanner
