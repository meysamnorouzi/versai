import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  variant?: 'default' | 'header'
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '2xl',
  variant = 'default',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-full'
  }

  const paddingClasses = {
    default: 'px-4 sm:px-6 md:px-10 lg:px-[124px]',
    header: 'px-4 sm:px-6 md:px-10 lg:px-6 min-[1220px]:px-[124px]',
  }

  return (
    <div className={`w-full ${maxWidthClasses[maxWidth]} mx-auto ${paddingClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

export default Container
