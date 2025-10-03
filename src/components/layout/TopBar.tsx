import React from 'react'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-10 bg-sky-50" dir="rtl">
      <Container className="h-full flex justify-between items-center">
        {/* Phone Number - Right Side */}
        <div className="inline-flex justify-start items-center gap-2">
        <div className="w-6 h-6 relative overflow-hidden">
            <Icon 
              section="header" 
              name="phone" 
              className="w-5 h-5" 
              alt="Phone"
            />
          </div>
          <div className="text-center justify-start text-[#4686BB] text-xl font-medium font-['IRANYekanX'] leading-7">۰۲۱۲۸۴۲۱۶۹۰</div>
      
        </div>
        
        {/* Social Media Icons - Left Side */}
        <div className="inline-flex justify-start items-center gap-3">
          <a href="https://wa.me/9378000399" className="w-6 h-6 relative hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
            <Icon 
              section="header" 
              name="whatsapp" 
              className="w-6 h-6" 
              alt="WhatsApp"
            />
          </a>
          <a href="https://t.me/immiv" className="w-6 h-6 relative hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
            <Icon 
              section="header" 
              name="telegram" 
              className="w-6 h-6" 
              alt="Telegram"
            />
          </a>
          <a href="https://www.instagram.com/versai.immigration/" className="w-6 h-6 relative hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
            <Icon 
              section="header" 
              name="instagram" 
              className="w-6 h-6" 
              alt="Instagram"
            />
          </a>
          <a href="mailto:info@versai.fr" className="w-6 h-6 relative hover:opacity-80 transition-opacity">
            <Icon 
              section="header" 
              name="location" 
              className="w-6 h-6" 
              alt="Email"
            />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
