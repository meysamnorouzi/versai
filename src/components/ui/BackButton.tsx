'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

interface BackButtonProps {
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline' | 'ghost' | 'ghost-red' | 'success' | 'error' | 'disabled'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

const BackButton: React.FC<BackButtonProps> = ({
  variant = 'primary-outline',
  size = 'md',
  className = '',
  children
}) => {
  const router = useRouter()

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      className={className}
    >
      <ArrowRight className="w-5 h-5 ml-2" />
      {children}
    </Button>
  )
}

export default BackButton

