'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQSectionProps } from '../../types'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqItems, 
  title = 'سوالات متداول',
  className = ''
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[24px] font-extrabold text-[#316086] leading-[1.4] text-center mb-8">
          {title}
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-stone-300 overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-right"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center gap-2">
                <QuestionMarkCircleIcon className="w-6 h-6 text-[#4686bb]" />

                  <span className="text-[18px] font-semibold text-neutral-400">
                    {item.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-500 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-[16px] font-medium text-[#316086] leading-[1.61]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
