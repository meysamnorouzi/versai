import React, { useEffect, useState } from 'react'
import { preloadFonts, detectFontSupport, getFontLoadingStatus } from '../../config/fonts'

interface FontLoaderProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const FontLoader: React.FC<FontLoaderProps> = ({ 
  children, 
  fallback = <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-versai-red-500"></div>
  </div>
}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Preload fonts for better performance
        preloadFonts()
        
        // Check if fonts are supported
        detectFontSupport()
        
        // Wait for fonts to load
        await getFontLoadingStatus()
        
        setFontsLoaded(true)
      } catch (error) {
        console.warn('Font loading failed:', error)
        // Continue anyway with fallback fonts
        setFontsLoaded(true)
      }
    }

    loadFonts()
  }, [])

  if (!fontsLoaded) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default FontLoader
