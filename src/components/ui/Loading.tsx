import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'در حال بارگذاری...',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-versai-red-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600 font-medium font-['IRANYekanX']">
          {text}
        </p>
      )}
    </div>
  )
}

export default Loading
