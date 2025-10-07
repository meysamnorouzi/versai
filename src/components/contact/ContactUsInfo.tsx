import React from 'react';
import Container from '../ui/Container';

const ContactUsInfo: React.FC = () => {
  return (
    <section className="py-16 relative" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E0E0E0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex justify-between items-start gap-16">
          {/* Contact Information and Address - Right Side */}
          <div className="flex-1 space-y-8">
            {/* Contact Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-[20px] font-semibold font-['IRANYekanX'] text-[#E74C3C] text-right leading-[1.1] mb-2">
                  تماس با ما
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                    <img 
                      src="/icons/contact/contact info/phone.svg" 
                      alt="Phone"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-[18px] font-semibold font-['IRANYekanX'] text-[#33475B] leading-[1.1]">
                   ۹۸۲۱۲۸۴۲۱۶۹۰+ / ۹۸۹۳۵۴۲۴۲۷۱۵+
                  </span>
                
                </div>
                
                <div className="flex items-center justify-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                    <img 
                      src="/icons/contact/contact info/phone.svg" 
                      alt="Phone"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-[18px] font-semibold font-['IRANYekanX'] text-[#33475B] leading-[1.1]">
                    33679949935+
                  </span>
               
                </div>
                
                <div className="flex items-center justify-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                    <img 
                      src="/icons/contact/contact info/email.svg" 
                      alt="Email"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-[18px] font-semibold font-['IRANYekanX'] text-[#33475B] leading-[1.1]">
                    info@versai.fr
                  </span>
                 
                </div>
              </div>
              
              <div className="w-full h-px bg-[#E74C3C] mt-4"></div>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-[20px] font-semibold font-['IRANYekanX'] text-[#E74C3C] text-right leading-[1.1] mb-2">
                  نشانی ما
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img 
                      src="/icons/contact/contact info/location.svg" 
                      alt="Location"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-[16px] font-semibold font-['IRANYekanX'] text-[#33475B] text-right leading-[1.4] max-w-[500px]">
                    دفتر تهران: تهران، ونک پارک، خیابان شیراز جنوبی، پایین تر از بزرگراه همت، پلاک ۲۰، برج سبز، طبقه دهم ، واحد ۲۱ ، موسسه مهاجرتی ورسای
                  </div>
                  
                </div>
                
                <div className="flex items-start justify-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img 
                      src="/icons/contact/contact info/location.svg" 
                      alt="Location"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-[16px] font-semibold font-['IRANYekanX'] text-[#33475B] text-right leading-[1.4] max-w-[500px]">
                    دفتر فرانسه: 29A Route de Woippy, Metz 57050, France
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Buttons - Left Side */}
          <div className="flex flex-col items-end space-y-4 w-[280px]">
            {/* Consultation Request Button */}
            <button className=" px-4 py-2 bg-[#E74C3C] text-white text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#C23325] transition-colors duration-200 text-right">
              درخواست مشاوره
            </button>
            
            {/* WhatsApp Button */}
            <button className=" px-4 py-2 bg-white text-[#E74C3C] border border-[#E74C3C] text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-end gap-3">
              <span>ارتباط در واتساپ</span>
              <img 
                src="/icons/contact/contact buttons/Group.svg" 
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </button>
            
            {/* Telegram Button */}
            <button className=" px-4 py-2 bg-white text-[#E74C3C] border border-[#E74C3C] text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-center gap-3">
              <span>ارتباط در تلگرام</span>
              <img 
                src="/icons/contact/contact buttons/Group (2).svg" 
                alt="Telegram"
                className="w-6 h-6"
              />
            </button>
            
            {/* Instagram Button */}
            <button className=" px-4 py-2 bg-white text-[#E74C3C] border border-[#E74C3C] text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-center gap-3">
              <span>صفحه اینستاگرام ورسای</span>
              <img 
                src="/icons/contact/contact buttons/Group (3).svg" 
                alt="Instagram"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsInfo;
