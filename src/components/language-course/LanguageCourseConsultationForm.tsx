'use client'

import React, { useState } from 'react'

interface LanguageCourseConsultationFormProps {
  backgroundImageSrc?: string
}

const LanguageCourseConsultationForm: React.FC<LanguageCourseConsultationFormProps> = ({ backgroundImageSrc }) => {
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
    <div className="w-full py-20 bg-[#f2f1f1] relative">
      {backgroundImageSrc && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-[1107px] mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Left side - Form */}
              <div className="order-2 lg:order-1">
                <div className="text-center lg:text-right mb-6">
                  <h2 className="text-[#b23124] text-xl sm:text-2xl font-extrabold font-['IRANYekanX'] leading-snug">
                    ثبت درخواست مشاوره با ورسای
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#316086] mb-2 font-['IRANYekanX']">
                        <span className="text-[#d74a3c]">*</span> نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        placeholder="نام و نام خانوادگی خود را وارد کنید."
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#e0e0e0] text-[#316086] text-sm font-medium font-['IRANYekanX'] leading-tight focus:ring-2 focus:ring-[#d74a3c] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#316086] mb-2 font-['IRANYekanX']">
                        <span className="text-[#d74a3c]">*</span> شماره تماس
                      </label>
                      <input
                        type="tel"
                        placeholder="شماره تماس خود را وارد کنید."
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#e0e0e0] text-[#316086] text-sm font-medium font-['IRANYekanX'] leading-tight focus:ring-2 focus:ring-[#d74a3c] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#316086] mb-2 font-['IRANYekanX']">
                        <span className="text-[#d74a3c]">*</span> ایمیل
                      </label>
                      <input
                        type="email"
                        placeholder="آدرس ایمیل خود را وارد کنید."
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#e0e0e0] text-[#316086] text-sm font-medium font-['IRANYekanX'] leading-tight focus:ring-2 focus:ring-[#d74a3c] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#316086] mb-2 font-['IRANYekanX']">
                        <span className="text-[#d74a3c]">*</span> موضوع مشاوره
                      </label>
                      <div className="w-full h-11 px-3 py-2 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#e0e0e0] inline-flex justify-between items-center">
                        <div className="w-6 h-6 relative overflow-hidden">
                          <div className="w-3 h-1.5 left-[6px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-[#316086]" />
                        </div>
                        <div className="text-[#316086] text-sm font-medium font-['IRANYekanX'] leading-tight">موضوع مشاوره را انتخاب کنید.</div>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-semibold text-[#316086] mb-2 font-['IRANYekanX']">
                      متن پیام
                    </label>
                    <textarea
                      placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full h-24 p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#e0e0e0] text-[#316086] text-sm font-medium font-['IRANYekanX'] leading-tight resize-none focus:ring-2 focus:ring-[#d74a3c] focus:outline-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-center lg:justify-start">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#d74a3c] rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#e5867d] inline-flex justify-center items-center gap-2 hover:bg-[#c63d2f] transition-colors duration-200"
                    >
                      <div className="text-white text-lg font-bold font-['IRANYekanX'] leading-tight">ارسال درخواست</div>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side - Contact Info */}
              <div className="order-1 lg:order-2">
                <div className="flex flex-col items-center lg:items-start gap-6">
                  {/* Phone number */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 relative overflow-hidden">
                      <div className="w-5 h-5 left-[2.11px] top-[1px] absolute outline outline-2 outline-offset-[-1px] outline-[#d74a3c]" />
                    </div>
                    <div className="text-[#316086] text-xl font-medium font-['IRANYekanX'] leading-7">۰۲۱۲۸۴۲۱۶۹۰</div>
                  </div>

                  {/* WhatsApp button */}
                  <div className="w-full max-w-[208px] h-11 px-6 py-3 bg-white rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#d74a3c] inline-flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-0 top-0 absolute">
                        <div className="w-6 h-6 left-0 top-0 absolute" />
                        <div className="w-4 h-4 left-[3.24px] top-[3.21px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                        <div className="w-[3.41px] h-[3.01px] left-[13.09px] top-[12.84px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                        <div className="w-[3.01px] h-[3.40px] left-[8.15px] top-[7.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                        <div className="w-1.5 h-[2.39px] left-[9.88px] top-[14.11px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                        <div className="w-[2.39px] h-1.5 left-[7.50px] top-[8.18px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                        <div className="w-[2.65px] h-[2.65px] left-[10.44px] top-[10.91px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#d74a3c]" />
                      </div>
                    </div>
                    <div className="text-[#d74a3c] text-lg font-bold font-['IRANYekanX'] leading-tight">ارتباط در واتساپ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageCourseConsultationForm
