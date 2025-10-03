import React from 'react'
import { getLogoPath, getLogoAlt } from '../../config/logo'

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'navigation'
  context?: 'main' | 'navigation' | 'favicon'
  className?: string
  width?: number
  height?: number
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  context = 'main',
  className = '',
  width,
  height,
  showText = false
}) => {
  const logoPath = getLogoPath(size)
  const altText = getLogoAlt(context)
  
  // Default dimensions based on size
  const defaultDimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 64, height: 64 },
    large: { width: 128, height: 128 },
    navigation: { width: 192, height: 64 }
  }
  
  const dimensions = width && height 
    ? { width, height }
    : defaultDimensions[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoPath}
        alt={altText}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        loading="lazy"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900">
            موسسه مهاجرتی ورسای
          </span>
          <span className="text-sm text-gray-600">
            Versai Immigration Institute
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
