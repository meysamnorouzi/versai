import React, { useState } from 'react'

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-[#316086] text-3xl font-extrabold font-['IRANYekanX'] leading-10">ثبت درخواست مشاوره با </span>
            <span className="text-[#d74a3c] text-3xl font-extrabold font-['IRANYekanX'] leading-10">ورسای</span>
          </h2>
          <p className="text-[#316086] text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-8">
            برای ثبت درخواست مشاوره با ورسای، ابتدا اطلاعات زیر را برای ما ارسال کنید. همکاران ما در اولین فرصت برای تنظیم جلسه  با شما تماس خواهند گرفت.
          </p>


        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-500 mb-2">
                    <span className="text-red-500">*</span> نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی خود را وارد کنید."
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-64 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-end items-center gap-2 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-500 mb-2">
                    <span className="text-red-500">*</span> شماره تماس
                  </label>
                  <input
                    type="tel"
                    placeholder="شماره تماس خود را وارد کنید."
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-64 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-end items-center gap-2 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-500 mb-2">
                    <span className="text-red-500">*</span> ایمیل
                  </label>
                  <input
                    type="email"
                    placeholder="آدرس ایمیل خود را وارد کنید."
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-64 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-end items-center gap-2 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-500 mb-2">
                    <span className="text-red-500">*</span> موضوع مشاوره
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-64 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight appearance-none"
                    required
                  >
                    <option value="">موضوع مشاوره را انتخاب کنید.</option>
                    <option value="immigration">مهاجرت</option>
                    <option value="study">تحصیل</option>
                    <option value="work">کار</option>
                    <option value="investment">سرمایه گذاری</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-500 mb-2">
                  متن پیام
                </label>
                <textarea
                  placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-[566px] h-24 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-end items-start gap-2 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#d74a3c] rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#e5867d] inline-flex justify-center items-center gap-2"
              >
                <div className="text-white text-lg font-bold font-['IRANYekanX'] leading-tight">ارسال درخواست</div>
              </button>
            </form>
          </div>
          {/* Image */}
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <img className="w-[474px] max-w-full" src="/images/home-page/consulting-request.png" alt="Consultation" />
              <div className="absolute -top-4 -right-4 transform rotate-[-12.84deg]">
                <img className="w-28 h-60" src="/images/home-page/Hero photo.png" alt="Phone" />
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
              <div className="text-gray-800 text-2xl">🤔</div>
              <div className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">کدوم روش برای من مناسبه؟</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm