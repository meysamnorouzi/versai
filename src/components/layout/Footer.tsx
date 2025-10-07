import React from 'react'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

const Footer: React.FC = () => {
  return (
    <div className="w-full relative" dir="rtl">
      {/* Full-width background */}
      <div className="w-full bg-[#1E3950]">

        {/* Container for content */}
        <Container className="h-full relative z-10 pb-8 pt-12">

          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-4 pb-2">
              {/* Quick Access */}
              <div className="w-[522px] text-right justify-start text-red-200 text-lg font-semibold font-['IRANYekanX'] leading-relaxed">دسترسی سریع</div>
              <div className="flex justify-start items-center gap-16">
                <a href="#" className="w-20 justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">دوره زبان</a>
                <a href="#" className="w-48 justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">اکسپرس انتری کانادا</a>
                <a href="#" className="justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">اقامت فرانسه</a>
              </div>
              <div className="flex justify-start items-center border-b border-transparent bg-gradient-to-l from-[#D3E2EF] to-transparent bg-no-repeat bg-bottom pb-6 gap-16" style={{backgroundSize: '100% 1px'}}>
                <a href="#" className="w-20  justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">تماس با ما</a>
                <a href="#" className="w-48 justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">مقالات</a>
                <a href="#" className="justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal hover:text-white transition-colors">ثبت شرکت در فرانسه</a>
              </div>

              {/* Logo */}
              <div className="w-64 flex items-center justify-center mb-6">
                <img
                  className="w-full object-contain"
                  src="/images/logo-white.png"
                  alt="موسسه مهاجرتی ورسای - Versai Immigration Institute"
                />
          </div>
          

              {/* Addresses */}
              <div className="w-[585px] flex flex-col justify-start items-start gap-4">
                 <div className="flex justify-start items-start gap-2">
                   <div className="w-6 h-6 relative">
                     <Icon 
                       section="footer" 
                       name="location" 
                       className="w-6 h-6" 
                       alt="Location"
                     />
                   </div>
                   <div className="w-[553px] text-right justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">دفتر تهران: تهران، ونک پارک، خیابان شیراز جنوبی، پایین تر از بزرگراه همت، پلاک ۲۰، برج سبز، طبقه دهم ، واحد ۲۱ ، موسسه مهاجرتی ورسای</div>

                 </div>
                 <div className="flex justify-start items-start gap-2">
                   <div className="w-6 h-6 relative">
                     <Icon 
                       section="footer" 
                       name="location" 
                       className="w-6 h-6" 
                       alt="Location"
                     />
          </div>
                   <div className="w-96 text-right justify-start text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">دفتر فرانسه:  29A Route de Woippy, Metz 57050, France</div>

                </div>
              </div>
              
              {/* Phone Numbers */}
               <div className="flex flex-col justify-start items-start gap-4 border-t border-transparent bg-gradient-to-l from-[#D3E2EF] to-transparent bg-no-repeat bg-top pb-2 pt-6" style={{backgroundSize: '100% 1px'}}>
                 <div className="flex justify-start items-center gap-2">
                   <div className="w-6 h-6 relative">
                     <Icon 
                       section="footer" 
                       name="phone" 
                       className="w-6 h-6" 
                       alt="Phone"
                     />
                   </div>
                   <div className="text-right justify-start text-white text-lg font-semibold font-['IRANYekanX'] leading-relaxed">۹۸۲۱۲۸۴۲۱۶۹۰+ / ۹۸۹۳۵۴۲۴۲۷۱۵+</div>

                 </div>
                 <div className="flex justify-start items-start gap-2">
                   <div className="w-6 h-6 relative">
                     <Icon 
                       section="footer" 
                       name="phone" 
                       className="w-6 h-6" 
                       alt="Phone"
                     />
                   </div>
                   <div className="text-right justify-start text-white text-lg font-semibold font-['IRANYekanX'] leading-relaxed">33679949935+</div>

                 </div>
               </div>
            </div>

            <div className="flex flex-col justify-start items-end gap-4">

              {/* Google Map */}
              <div className="w-[475px] h-72 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00c8b8b8b8b8%3A0x1234567890abcdef!2sTehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tehran Office Location - موسسه مهاجرتی ورسای"
                  className="rounded-lg"
                />
              </div>

              {/* Useful Links */}
              <div className="flex flex-col justify-start items-end gap-4">
                <div className="self-stretch text-right justify-start text-red-200 text-lg font-semibold font-['IRANYekanX'] leading-relaxed">پیوند های مفید</div>
                <div className="self-stretch flex flex-col justify-start items-end gap-3">
                  <a href="#" className="self-stretch text-right justify-start text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight hover:text-white transition-colors">سایت سفارت فرانسه</a>
                  <a href="#" className="self-stretch text-center justify-start text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight hover:text-white transition-colors">سایت مترجم معتمد سفارت فرانسه</a>
                </div>
              </div>
              



            </div>
          </div>
          

          {/* Social Media and Copyright */}
          <div className=" flex justify-center items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
               <div className="flex justify-center items-center gap-3">
                 <a href="https://wa.me/9378000399" className="w-6 h-6 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                   <Icon 
                     section="footer" 
                     name="whatsapp" 
                     className="w-6 h-6" 
                     alt="WhatsApp"
                   />
                 </a>
                 <a href="https://t.me/immiv" className="w-6 h-6 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                   <Icon 
                     section="footer" 
                     name="telegram" 
                     className="w-6 h-6" 
                     alt="Telegram"
                   />
                 </a>
                 <a href="https://www.instagram.com/versai.immigration/" className="w-6 h-6 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                   <Icon 
                     section="footer" 
                     name="instagram" 
                     className="w-6 h-6" 
                     alt="Instagram"
                   />
                 </a>
                 <a href="mailto:info@versai.fr" className="w-6 h-6 hover:opacity-80 transition-opacity">
                   <Icon 
                     section="footer" 
                     name="email" 
                     className="w-6 h-6" 
                     alt="Email"
                   />
              </a>
            </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-blue-950"></div>
              <div className="text-right justify-start">
                <span className="text-slate-200 text-base font-semibold font-['IRANYekanX'] leading-normal">تمام حقوق این وبسایت متعلق به  موسسه مهاجرتی </span>
                <span className="text-white text-base font-semibold font-['IRANYekanX'] leading-normal">ورسای</span>
                <span className="text-slate-200 text-base font-semibold font-['IRANYekanX'] leading-normal">  است.</span>
              </div>
            </div>
          </div>




        </Container>
      </div>
    </div>
  )
}

export default Footer