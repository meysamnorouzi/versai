import React from 'react'
import { CardProps } from '../../types'

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = 'bg-white rounded-2xl border border-zinc-100'
  
  const variantClasses = {
    default: 'shadow-sm',
    highlighted: 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-versai-red-700 text-white'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
