import { NavigationItem } from '../types'

export const navigationConfig: NavigationItem[] = [
  { 
    label: 'صفحه اصلی', 
    href: '/' 
  },
  { 
    label: 'فرانسه', 
    href: '/france-office',
    hasDropdown: true,
    children: [
      { label: 'ثبت شرکت در فرانسه', href: '/france-office' },
      { label: 'تحصیل در فرانسه', href: '/france-study' },
      { label: 'اقامت فرانسه', href: '/pr-france' },
      { label: 'ویزای شنگن', href: '/france-visa' },
    ]
  },
  { 
    label: 'کانادا', 
    href: '/canada-immigration',
    hasDropdown: true,
    children: [
      { label: 'مهاجرت به کانادا', href: '/canada-immigration' },
      { label: 'اکسپرس انتری کانادا', href: '/canada-express-entry' },
    ]
  },
  { 
    label: 'سایر کشورها', 
    href: '/germany',
    hasDropdown: true,
    children: [
      { label: 'آلمان', href: '/germany' },
      { label: 'ترکیه', href: '/turkey' },
      { label: 'ایتالیا', href: '/italy' },
      { label: 'سوئد', href: '/sweden' },
    ]
  },
  { 
    label: 'مقالات', 
    href: '/articles' 
  },
  { 
    label: 'دوره زبان', 
    href: '/language-course' 
  },
  { 
    label: 'تماس با ما', 
    href: '/contact' 
  },
]
