import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full px-40 py-8 flex flex-col justify-start items-center gap-2" style={{ backgroundImage: 'url(/images/home-page/bg-lines.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-[1108px] bg-[#f2f9ff] rounded-2xl border border-[#d3e2ef] relative pt-12 pb-4 px-7" style={{ backgroundImage: 'url(/images/home-page/Hero-photo.png)', backgroundSize: '45%', backgroundPosition: 'left 10% top 10%', backgroundRepeat: 'no-repeat' }}>

        <div className="flex items-center justify-center w-2/3">


          <div className="flex flex-col justify-start items-start gap-8 p-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-right">
                <span className="text-[#316086] text-6xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">با </span>
                <span className="text-[#d74a3c] text-6xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">ورسای</span>
                <span className="text-[#316086] text-6xl font-extrabold font-['IRANYekanX'] leading-[78.40px]">،<br /> در یک قدمی مهاجرت</span>
              </div>
              <div className="text-right text-[#4686bb] text-xl font-medium font-['IRANYekanX'] leading-7">
                انتخاب ورسای به‌معنای برخورداری از مشاوره حرفه‌ای، برنامه‌ریزی واقع‌بینانه و پیگیری مستمر تا تحقق هدف مهاجرت شماست.
              </div>
            </div>
            <button className="px-6 py-3 bg-[#d74a3c] rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#e5867d] inline-flex justify-center items-center gap-2">
              <div className="text-white text-lg font-bold font-['IRANYekanX'] leading-tight">درخواست مشاوره</div>
            </button>
          </div>


        </div>
       {/* Stats Section */}
       <div className="flex justify-center items-center mt-8">
        <div className="inline-flex justify-start items-center gap-40">
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
              <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">%</span>
              <span className="text-cyan-800 text-4xl font-extrabold font-['IRANYekanX'] leading-10">۹۶</span>
            </div>
            <div className="self-stretch text-right justify-start text-slate-500 text-base font-medium font-['IRANYekanX'] leading-relaxed">بازخورد مثبت</div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="w-24 justify-start">
              <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">+</span>
              <span className="text-cyan-800 text-4xl font-extrabold font-['IRANYekanX'] leading-10">۴۰۰</span>
            </div>
            <div className="self-stretch text-center justify-start text-slate-500 text-base font-medium font-['IRANYekanX'] leading-relaxed">مشاوره</div>
          </div>
          <div className="w-28 inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start">
              <span className="text-red-500 text-4xl font-extrabold font-['IRANYekanX'] leading-10">+</span>
              <span className="text-cyan-800 text-4xl font-extrabold font-['IRANYekanX'] leading-10">۱۷۰</span>
            </div>
            <div className="self-stretch text-right justify-start text-slate-500 text-base font-medium font-['IRANYekanX'] leading-relaxed">پرونده موفق</div>
          </div>
        </div>
      </div>
      </div>

 

    </div>
  )
}

export default HeroSection