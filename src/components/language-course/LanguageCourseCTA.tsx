import React from 'react'

const LanguageCourseCTA: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-60 lg:h-72 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/4a68/4d7f/c8db3ef78f5c2ca28fcf6a386f92c0f9?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VpOgcfWuM~Ymr0QG9Oz4JBCWAZrXVAHMa2AA9uUarI2zAuXZtWhfmITXLlJQN8QPzXZAeX~CnESxmfQG8Hi3Z~KaaYXNbthEf4RLrjcdT3RwoB2QZ56tjAufj1XcKjhmh9vJBGy5dq0J-E0Tk82YgUbc~sjbh2e~aTv7wu-BFH0hQOmXkzN57LjQa-eJMdRafo3shsbOooA5uCsF6TQzRAiVpL3oxYtxkAX60AP1HEpr~KvMniW~367FijfrBLkMif15v-aLL5UJbwBsgm0471he2KIE37N4p8MuHFb6dHg05mG68dSTAllw679-y~Q2GyFSJqR38KirodP-7VYRxA__)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(30,57,80,0.78)]" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-[#fdf7f7] text-xl sm:text-2xl lg:text-3xl font-extrabold font-['IRANYekanX'] leading-10 mb-6 lg:mb-8 [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
          با دوره زبان، بی دردسر برو فرانسه!
        </h2>
        
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#d74a3c] rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#e5867d] inline-flex justify-center items-center gap-2 hover:bg-[#c63d2f] transition-colors duration-200">
          <div className="text-[#fdfeff] text-base sm:text-lg font-bold font-['IRANYekanX'] leading-tight">
            درخواست مشاوره
          </div>
        </button>
      </div>
    </div>
  )
}

export default LanguageCourseCTA
