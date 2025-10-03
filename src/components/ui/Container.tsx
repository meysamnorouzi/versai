import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '2xl' 
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-full'
  }

  return (
    <div className={`w-full ${maxWidthClasses[maxWidth]} mx-auto px-[124px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
