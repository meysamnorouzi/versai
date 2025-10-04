import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { getLogoPath, getLogoAlt } from '../../config/logo'
import { navigationConfig } from '../../config/navigation'
import Container from '../ui/Container'
import Dropdown from '../ui/Dropdown'
import Icon from '../ui/Icon'

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const isActiveLink = (href: string, hasChildren?: boolean) => {
    if (href === '/' && location.pathname === '/') {
      return true
    }
    if (href !== '/' && location.pathname.startsWith(href)) {
      return true
    }
    // Check if any child is active for dropdown items
    if (hasChildren) {
      const item = navigationConfig.find(nav => nav.href === href)
      return item?.children?.some(child => 
        child.href === location.pathname || 
        (child.href !== '/' && location.pathname.startsWith(child.href))
      )
    }
    return false
  }

  const getActiveLinkClass = (href: string, hasChildren?: boolean) => {
    const isActive = isActiveLink(href, hasChildren)
    return isActive 
      ? "text-red-700 font-semibold" 
      : "text-cyan-800 hover:text-red-700 transition-colors"
  }
  
  return (
    <>
      <div className="w-full bg-white rounded-bl-2xl rounded-br-2xl border-b border-zinc-100 sticky top-0 z-50" dir="rtl">
        <Container className="h-24 py-3 flex justify-between items-center gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                className="w-48 h-16" 
                src={getLogoPath('navigation')} 
                alt={getLogoAlt('navigation')}
              />
            </Link>
            </div>

          {/* Navigation Items - Desktop Only */}
          <div className="hidden lg:flex justify-center items-center gap-24">
            <div className="flex justify-center items-center gap-8">
              {navigationConfig.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <Dropdown
                    trigger={
                        <div className="flex justify-start items-center group">
                      
                          <div className={`text-center justify-start text-base font-semibold font-['IRANYekanX'] leading-normal cursor-pointer ${getActiveLinkClass(item.href, true)}`}>
                        {item.label}
                          </div>
                        </div>
                    }
                      align="right"
                      triggerOnHover={true}
                  >
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-200 font-medium font-['IRANYekanX']"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </Dropdown>
                ) : (
                    <Link to={item.href} className="flex justify-start items-center gap-1">
                      <div className={`text-center justify-start text-base font-semibold font-['IRANYekanX'] leading-normal cursor-pointer ${getActiveLinkClass(item.href)}`}>
                    {item.label}
                      </div>
                  </Link>
                )}
              </div>
            ))}
            </div>
          </div>
          
          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-6 h-6 flex items-center justify-center text-cyan-800 hover:text-red-700 transition-colors"
            >
              <Icon 
                section="header" 
                name="search" 
                className="w-5 h-5" 
                alt="Search"
              />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-cyan-800 hover:text-red-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#316086] bg-opacity-20 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 border border-gray-100" dir="rtl">
            <div className="p-5">
              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجو در سایت..."
                    className="w-full p-4 pr-12 bg-gray-50 rounded-lg border border-gray-200 text-right text-base font-medium font-['IRANYekanX'] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#316086] focus:border-[#316086] transition-all"
                    autoFocus
                  />
                  <Icon 
                    section="header" 
                    name="search" 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#316086]" 
                    alt="Search"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#316086] text-white py-3 px-6 rounded-lg font-semibold font-['IRANYekanX'] hover:bg-[#2a4f6f] transition-colors"
                >
                  جستجو
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigationConfig.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <div className={`px-3 py-2 text-base font-semibold ${getActiveLinkClass(item.href, true)}`}>
                  {item.label}
                    </div>
                  <div className="mr-4 space-y-1">
                      {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                          className={`block px-6 py-2 text-sm rounded-lg transition-colors ${
                            isActiveLink(child.href) 
                              ? 'bg-red-50 text-red-700 font-semibold' 
                              : 'text-gray-600 hover:bg-red-50 hover:text-red-700'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-semibold rounded-lg transition-colors ${
                      isActiveLink(item.href) 
                        ? 'bg-red-50 text-red-700' 
                        : 'text-cyan-800 hover:bg-red-50 hover:text-red-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Header