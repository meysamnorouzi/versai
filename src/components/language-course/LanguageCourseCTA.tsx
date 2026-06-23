import React from 'react'
import Button from '../ui/Button'

const LanguageCourseCTA: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-60 lg:h-72 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/france-office-page/blue-bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[rgba(30,57,80,0.78)]" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-[#fdf7f7] text-xl sm:text-2xl lg:text-3xl font-extrabold font-['IRANYekanX'] leading-10 mb-6 lg:mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
          با دوره زبان، بی دردسر برو فرانسه!
        </h2>
        
        <Button variant="primary" size="md">
          درخواست مشاوره
        </Button>
      </div>
    </div>
  )
}

export default LanguageCourseCTA
