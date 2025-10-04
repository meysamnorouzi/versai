import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from '../../types'
import { Loader2, Check, X } from 'lucide-react'

interface ExtendedButtonProps extends ButtonProps {
  as?: 'button' | 'link'
  to?: string
  loading?: boolean
  success?: boolean
  error?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
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
  loading = false,
  success = false,
  error = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex justify-center items-center gap-2 font-bold font-[\'IRANYekanX\'] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    // Primary variants
    primary: 'bg-[#D74A3C] text-white border border-[#D74A3C] hover:bg-[#B23124] hover:border-[#B23124] focus:ring-[#D74A3C] active:bg-[#7F231A] active:border-[#7F231A]',
    'primary-outline': 'bg-transparent text-[#D74A3C] border border-[#D74A3C] hover:bg-[#D74A3C] hover:text-white focus:ring-[#D74A3C] active:bg-[#B23124] active:border-[#B23124]',
    
    // Secondary variants
    secondary: 'bg-white text-[#316086] border border-[#CBCBCB] hover:bg-[#F2F9FF] hover:border-[#A7C6DF] focus:ring-[#316086] active:bg-[#D3E2EF] active:border-[#4686BB]',
    'secondary-outline': 'bg-transparent text-[#316086] border border-[#316086] hover:bg-[#316086] hover:text-white focus:ring-[#316086] active:bg-[#4686BB] active:border-[#4686BB]',
    
    // Ghost variants
    ghost: 'bg-transparent text-[#316086] border border-transparent hover:bg-[#F2F9FF] hover:border-[#A7C6DF] focus:ring-[#316086] active:bg-[#D3E2EF]',
    'ghost-red': 'bg-transparent text-[#D74A3C] border border-transparent hover:bg-[#FDF7F7] hover:border-[#D74A3C] focus:ring-[#D74A3C] active:bg-[#F2C3BE]',
    
    // Success variant
    success: 'bg-[#4DA653] text-white border border-[#4DA653] hover:bg-[#3D8B42] hover:border-[#3D8B42] focus:ring-[#4DA653] active:bg-[#2E6B33] active:border-[#2E6B33]',
    
    // Error variant
    error: 'bg-[#C23325] text-white border border-[#C23325] hover:bg-[#A02A1F] hover:border-[#A02A1F] focus:ring-[#C23325] active:bg-[#7F231A] active:border-[#7F231A]',
    
    // Disabled variant
    disabled: 'bg-[#CBCBCB] text-[#9D9E9F] border border-[#CBCBCB] cursor-not-allowed'
  }
  
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs rounded-[16px] min-h-[32px]',
    sm: 'px-4 py-2 text-sm rounded-[20px] min-h-[36px]',
    md: 'px-6 py-3 text-base rounded-[24px] min-h-[44px]',
    lg: 'px-8 py-4 text-lg rounded-[32px] min-h-[52px]',
    xl: 'px-10 py-5 text-xl rounded-[40px] min-h-[60px]'
  }
  
  const getVariantClass = () => {
    if (disabled) return variantClasses.disabled
    if (success) return variantClasses.success
    if (error) return variantClasses.error
    return variantClasses[variant] || variantClasses.primary
  }
  
  const getSizeClass = () => {
    return sizeClasses[size] || sizeClasses.md
  }
  
  const getWidthClass = () => {
    return fullWidth ? 'w-full' : ''
  }
  
  const classes = `${baseClasses} ${getVariantClass()} ${getSizeClass()} ${getWidthClass()} ${className}`
  
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {children}
        </>
      )
    }
    
    if (success) {
      return (
        <>
          <Check className="w-4 h-4" />
          {children}
        </>
      )
    }
    
    if (error) {
      return (
        <>
          <X className="w-4 h-4" />
          {children}
        </>
      )
    }
    
    return (
      <>
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </>
    )
  }
  
  if (as === 'link' && to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
      >
        {renderContent()}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </button>
  )
}

export default Button
