import React from 'react'

// Icon configuration for different sections
export const ICONS = {
  // Header icons
  header: {
    phone: '/icons/header/Icons.svg',
    whatsapp: '/icons/header/Component 6 (2).svg',
    telegram: '/icons/header/Component 7 (1).svg',
    instagram: '/icons/header/Component 8 (1).svg',
    location: '/icons/header/Component 9 (1).svg',
    search: '/icons/header/Component 5 (1).svg',
  },
  
  // Footer icons
  footer: {
    phone: '/icons/footer/Component 5.svg',
    whatsapp: '/icons/footer/Component 9.svg',
    telegram: '/icons/footer/Component 8.svg',
    instagram: '/icons/footer/Component 7.svg',
    location: '/icons/footer/Component 6 (1).svg',
    email: '/icons/footer/Component 6.svg',
  },
  
  // Home page about section icons
  aboutVersai: {
    target: '/icons/home/about-versai/Target.svg',
    testing: '/icons/home/about-versai/AB testing.svg',
    leftArrow: '/icons/home/about-versai/Left, Arrow.svg',
    leftArrow2: '/icons/home/about-versai/Left, Arrow(1).svg',
    checkmark: '/icons/home/about-versai/question-checkmark-circle.svg',
    union: '/icons/home/about-versai/Union.svg',
    union2: '/icons/home/about-versai/Union (1).svg',
  },
  
  // Home page easy immigration section icons
  easyImmigration: {
    coins: '/icons/home/easy-immigration/coins-checkmark-circle.svg',
    component: '/icons/home/easy-immigration/Component 5.svg',
    group: '/icons/home/easy-immigration/Group.svg',
    medical: '/icons/home/easy-immigration/medical-card-information-shield.svg',
    clock: '/icons/home/easy-immigration/store-clock-tme.svg',
    delivery: '/icons/home/easy-immigration/warehouse-delivery-checkmark.svg',
  }
}

// Helper function to get icon path
export const getIconPath = (section: keyof typeof ICONS, iconName: string): string => {
  const sectionIcons = ICONS[section] as Record<string, string>
  return sectionIcons[iconName] || ''
}

// Icon component props
interface IconProps {
  section: keyof typeof ICONS
  name: string
  className?: string
  alt?: string
}

// Icon component
const Icon: React.FC<IconProps> = ({ section, name, className = '', alt = '' }) => {
  const iconPath = getIconPath(section, name)
  
  if (!iconPath) {
    console.warn(`Icon not found: ${section}.${name}`)
    return null
  }
  
  return (
    <img 
      src={iconPath} 
      alt={alt || `${name} icon`} 
      className={className}
    />
  )
}

export default Icon
