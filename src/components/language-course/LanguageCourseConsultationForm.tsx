'use client'

import React from 'react'
import ConsultationFormFields from '@/src/components/ui/ConsultationFormFields'

interface LanguageCourseConsultationFormProps {
  backgroundImageSrc?: string
}

const LanguageCourseConsultationForm: React.FC<LanguageCourseConsultationFormProps> = () => {
  return (
    <div className="w-full py-20 bg-[#f2f1f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1107px] mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
              <div>
                <div className="text-center lg:text-right mb-6">
                  <h2 className="text-[#b23124] text-xl sm:text-2xl font-extrabold font-['IRANYekanX'] leading-snug">
                    ثبت درخواست مشاوره با ورسای
                  </h2>
                </div>
                <ConsultationFormFields formSource="language-course" theme="light" />
              </div>
              <div className="flex flex-col items-center lg:items-start justify-center gap-6">
                <span className="text-[#316086] text-xl font-medium font-['IRANYekanX']">
                  ۰۲۱۲۸۴۲۱۶۹۰
                </span>
                <a
                  href="https://wa.me/982128421690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#d74a3c] text-[#d74a3c] px-6 py-3 rounded-[32px] font-bold font-['IRANYekanX'] hover:bg-gray-50"
                >
                  ارتباط در واتساپ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageCourseConsultationForm
