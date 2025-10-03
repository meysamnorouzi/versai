import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from '../../types'

interface ExtendedButtonProps extends ButtonProps {
  as?: 'button' | 'link'
  to?: string
}

const Button: React.FC<ExtendedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  as = 'button',
  to = '',
}) => {
  const baseClasses = 'inline-flex justify-center items-center gap-2 font-bold font-[\'IRANYekanX\'] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-versai-red-500 text-white hover:bg-versai-red-600',
    secondary: 'bg-white text-versai-red-500 border border-versai-red-500 hover:bg-versai-red-50',
    outline: 'bg-transparent text-versai-red-500 border border-versai-red-500 hover:bg-versai-red-500 hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-[24px]',
    md: 'px-6 py-3 text-lg rounded-[32px]',
    lg: 'px-8 py-4 text-xl rounded-[40px]'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (as === 'link' && to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
