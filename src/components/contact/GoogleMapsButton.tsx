'use client'

import React from 'react'
import Icon from '@/src/components/ui/Icon'

const GoogleMapsButton: React.FC = () => {
  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=35.75051348964632,51.40074468230069',
      '_blank'
    )
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-[#E74C3C] border border-[#E74C3C] text-[14px] sm:text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3"
    >
      <span className="text-xs sm:text-base">مسیریابی از طریق گوگل مپ</span>
      <Icon
        section="footer"
        name="location"
        className="w-5 h-5 sm:w-6 sm:h-6"
        alt="Location"
      />
    </button>
  )
}

export default GoogleMapsButton
