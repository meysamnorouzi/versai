'use client'

import React from 'react'
import Container from '../ui/Container'
import ConsultationFormFields from '../ui/ConsultationFormFields'

const ContactUsForm: React.FC = () => {
  return (
    <section className="py-16 bg-[#f2f1f1] relative">
      <Container>
        <div className="relative w-full min-h-[624px] rounded-2xl overflow-hidden border-2 border-[#d3e2ef]">
          <div className="absolute inset-0">
            <img
              src="/images/contact-page/Rectangle 71.png"
              alt="Form Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="relative z-10 flex items-center justify-center py-12">
            <div className="w-full max-w-4xl px-8">
              <h2 className="text-[20px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-center mb-8 leading-[1.1]">
                ثبت درخواست مشاوره با ورسای
              </h2>

              <ConsultationFormFields formSource="contact" theme="contact" />

              <div className="mt-8 text-center">
                <span className="text-[20px] font-medium font-['IRANYekanX'] text-[#fdf7f7]">
                  ۰۲۱۲۸۴۲۱۶۹۰
                </span>
                <div className="mt-4">
                  <a
                    href="https://wa.me/982128421690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f2f9ff] border border-[#d74a3c] text-[#d74a3c] px-6 py-3 rounded-[32px] text-[18px] font-bold font-['IRANYekanX'] hover:bg-[#e8f4f8] transition-colors inline-flex items-center gap-2"
                  >
                    ارتباط در واتساپ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactUsForm
