'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from 'lucide-react'

interface DropdownProps {
  children: React.ReactNode
  trigger: React.ReactNode
  className?: string
  align?: 'left' | 'right'
  triggerOnHover?: boolean
  placeholder?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  className = '',
  align = 'right',
  triggerOnHover = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    if (!triggerOnHover) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      if (!triggerOnHover) {
        document.removeEventListener('mousedown', handleClickOutside)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [triggerOnHover])
  
  const handleMouseEnter = () => {
    if (triggerOnHover) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsOpen(true)
    }
  }
  
  const handleMouseLeave = () => {
    if (triggerOnHover) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, 150) // Small delay to prevent flickering
    }
  }
  
  const alignClasses = {
    left: 'left-0',
    right: 'right-0'
  }
  
  return (
    <div 
      className={`relative ${className}`} 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={triggerOnHover ? undefined : () => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        {trigger}
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className={`absolute top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden ${alignClasses[align]}`}>
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
