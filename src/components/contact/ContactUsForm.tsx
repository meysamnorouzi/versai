'use client'

import React, { useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-[#f2f1f1] relative">
      <Container>
        <div className="relative w-full h-[624px] rounded-2xl overflow-hidden border-2 border-[#d3e2ef]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/contact-page/Rectangle 71.png" 
              alt="Form Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
          
          {/* Form Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="w-full px-8">
              <h2 className="text-[20px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-center mb-8 leading-[1.1]">
                ثبت درخواست مشاوره با ورسای
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-right">
                      <span className="text-[#f2c3be]">*</span> نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="نام و نام خانوادگی خود را وارد کنید."
                      className="w-full h-[45px] px-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-['IRANYekanX'] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-right">
                      <span className="text-[#f2c3be]">*</span> شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="شماره تماس خود را وارد کنید."
                      className="w-full h-[45px] px-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-['IRANYekanX'] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086]"
                      required
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-right">
                      <span className="text-[#f2c3be]">*</span> موضوع مشاوره
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full h-[45px] px-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-['IRANYekanX'] text-[#9d9e9f] focus:outline-none focus:border-[#316086] appearance-none pr-10"
                        required
                      >
                        <option value="">موضوع مشاوره را انتخاب کنید.</option>
                        <option value="immigration">مهاجرت</option>
                        <option value="study">تحصیل</option>
                        <option value="investment">سرمایه گذاری</option>
                        <option value="visa">ویزا</option>
                        <option value="other">سایر</option>
                      </select>
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="#9d9e9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[14px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-right">
                      <span className="text-[#f2c3be]">*</span> ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="آدرس ایمیل خود را وارد کنید."
                      className="w-full h-[45px] px-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-['IRANYekanX'] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086]"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold font-['IRANYekanX'] text-[#f2f9ff] text-right">
                    متن پیام
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                    rows={4}
                    className="w-full p-3 bg-[#f2f9ff] border border-[#cbcbcb] rounded-2xl text-right text-[14px] font-medium font-['IRANYekanX'] text-[#9d9e9f] placeholder-[#9d9e9f] focus:outline-none focus:border-[#316086] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                  >
                    ارسال درخواست
                  </Button>
                </div>
              </form>

              {/* WhatsApp Contact */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" stroke="#f2c3be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[20px] font-medium font-['IRANYekanX'] text-[#fdf7f7] leading-[1.39]">۰۲۱۲۸۴۲۱۶۹۰</span>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  leftIcon={
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#d74a3c"/>
                      </svg>
                    </div>
                  }
                >
                  ارتباط در واتساپ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsForm;
