'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { ButtonProps } from '../../types'

interface BackButtonProps extends Omit<ButtonProps, 'onClick'> {
  className?: string
}

const BackButton: React.FC<BackButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleBack}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export default BackButton

