import React from 'react'
import { InputProps } from '../../types'

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  required = false,
  error = '',
}) => {
  const baseClasses = 'w-full p-3 bg-sky-50 rounded-2xl border text-right text-sm font-medium font-[\'IRANYekanX\'] leading-tight placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-versai-red-500 focus:border-transparent'
  
  const errorClasses = error ? 'border-red-500' : 'border-stone-300'
  
  const classes = `${baseClasses} ${errorClasses} ${className}`
  
  if (type === 'textarea') {
    return (
      <div className="w-full">
        <textarea
          className={`${classes} min-h-[100px] resize-none`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
        />
        {error && (
          <div className="px-3 py-1 text-red-500 text-xs font-medium font-['IRANYekanX'] leading-3">
            {error}
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div className="w-full">
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
      {error && (
        <div className="px-3 py-1 text-red-500 text-xs font-medium font-['IRANYekanX'] leading-3">
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
