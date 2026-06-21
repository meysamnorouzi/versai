'use client'

import React, { useState } from 'react'
import Button from './Button'
import { ChevronDown, Phone } from 'lucide-react'

type ConsultationFormProps = {
  backgroundImageSrc: string
  title?: string
  description?: string
  phoneNumber?: string
  whatsappLabel?: string
  whatsappIconSrc?: string
  className?: string
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  backgroundImageSrc,
  title = 'ثبت درخواست مشاوره با ورسای',
  description,
  phoneNumber = '۰۲۱۲۸۴۲۱۶۹۰',
  whatsappLabel = 'ارتباط در واتساپ',
  whatsappIconSrc = '/images/france-visa-page/Group.svg',
  className = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // integrate submission endpoint here
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[#243d53] lg:hidden" aria-hidden="true" />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backgroundImageSrc}")` }}
        aria-hidden="true"
      />
      <div className="relative lg:bg-[#1E3950] lg:bg-opacity-25 p-4 sm:p-6 md:p-8 lg:p-8 min-[1330px]:p-12">
        <div className="grid grid-cols-1 min-[1330px]:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6 w-full">
            <h2 className="text-xl font-semibold text-white text-right">{title}</h2>
            {description && (
              <p className="text-sm text-white/90 text-right">{description}</p>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-right">
                    <span className="text-[#F2C3BE]">*</span> نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="نام و نام خانوادگی خود را وارد کنید."
                    className="w-full p-3 bg-white bg-opacity-90 border border-[#CBCBCB] rounded-2xl text-right text-sm font-medium text-[#9D9E9F] focus:outline-none focus:ring-2 focus:ring-[#316086]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-right">
                    <span className="text-[#F2C3BE]">*</span> شماره تماس
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="شماره تماس خود را وارد کنید."
                    className="w-full p-3 bg-white bg-opacity-90 border border-[#CBCBCB] rounded-2xl text-right text-sm font-medium text-[#9D9E9F] focus:outline-none focus:ring-2 focus:ring-[#316086]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-right">
                    <span className="text-[#F2C3BE]">*</span> موضوع مشاوره
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 bg-white bg-opacity-90 border border-[#CBCBCB] rounded-2xl text-right text-sm font-medium text-[#9D9E9F] focus:outline-none focus:ring-2 focus:ring-[#316086] appearance-none"
                    >
                      <option value="">موضوع مشاوره را انتخاب کنید.</option>
                      <option value="ویزای شنگن">ویزای شنگن</option>
                      <option value="اقامت فرانسه">اقامت فرانسه</option>
                      <option value="تحصیل در فرانسه">تحصیل در فرانسه</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9D9E9F]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-right">
                    <span className="text-[#F2C3BE]">*</span> ایمیل
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="آدرس ایمیل خود را وارد کنید."
                    className="w-full p-3 bg-white bg-opacity-90 border border-[#CBCBCB] rounded-2xl text-right text-sm font-medium text-[#9D9E9F] focus:outline-none focus:ring-2 focus:ring-[#316086]"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
                <div className="space-y-2 w-full lg:w-2/3">
                  <label className="block text-sm font-semibold text-white text-right">متن پیام</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                    rows={4}
                    className="w-full p-3 bg-white bg-opacity-90 border border-[#CBCBCB] rounded-2xl text-right text-sm font-medium text-[#9D9E9F] focus:outline-none focus:ring-2 focus:ring-[#316086] resize-none"
                  />
                </div>
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full lg:w-auto flex-shrink-0"
                >
                  ارسال درخواست
                </Button>
              </div>
            </form>
            {/* Mobile: phone + WhatsApp in a row */}
            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 lg:hidden">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-[#F2C3BE]" />
                <span className="text-xl font-medium text-white">{phoneNumber}</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="w-auto flex-shrink-0 bg-white text-[#D74A3C] border-[#D74A3C] hover:bg-[#D74A3C] hover:text-white"
              >
                {whatsappLabel}
                <img className="w-6 h-6 ml-2" src={whatsappIconSrc} alt="WhatsApp" />
              </Button>
            </div>

            {/* Desktop: original stacked layout */}
            <div className="hidden lg:flex justify-start">
              <div className="text-left space-y-4">
                <div className="flex items-center justify-end gap-2">
                  <Phone className="w-6 h-6 text-[#F2C3BE]" />
                  <span className="text-xl font-medium text-white">{phoneNumber}</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full bg-white text-[#D74A3C] border-[#D74A3C] hover:bg-[#D74A3C] hover:text-white"
                >
                  {whatsappLabel}
                  <img className="w-6 h-6 ml-2" src={whatsappIconSrc} alt="WhatsApp" />
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ConsultationForm


