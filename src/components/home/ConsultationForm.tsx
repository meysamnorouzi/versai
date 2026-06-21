'use client'

import React from 'react'
import ConsultationFormFields from '@/src/components/ui/ConsultationFormFields'

const ConsultationForm: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-[#316086] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">
              ثبت درخواست مشاوره با{' '}
            </span>
            <span className="text-[#d74a3c] text-xl sm:text-2xl md:text-3xl font-extrabold font-['IRANYekanX'] leading-8 sm:leading-9 md:leading-10">
              ورسای
            </span>
          </h2>
          <p className="text-[#316086] text-base sm:text-lg font-semibold font-['IRANYekanX'] leading-relaxed mb-8 text-center px-2">
            برای ثبت درخواست مشاوره با ورسای، ابتدا اطلاعات زیر را برای ما ارسال کنید.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 pt-0">
            <ConsultationFormFields formSource="home" theme="light" />
          </div>
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <img
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[474px]"
                src="/images/home-page/consulting-request.png"
                alt="Consultation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
