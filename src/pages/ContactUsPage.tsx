import React from 'react';
import ContactUsHero from '../components/contact/ContactUsHero';
import ContactUsInfo from '../components/contact/ContactUsInfo';
import ContactUsAbout from '../components/contact/ContactUsAbout';
import ContactUsServices from '../components/contact/ContactUsServices';
import ContactUsForm from '../components/contact/ContactUsForm';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative vector */}
        <div className="absolute -top-[21.64%] -right-[50.1%] -left-[21.81%] bottom-[49.61%]">
          <div className="w-full h-full transform rotate-[21.716deg]">
            <svg width="100%" height="100%" viewBox="0 0 1888 1949" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1888V1949H0V0Z" fill="url(#gradient1)" opacity="0.1"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#316086"/>
                  <stop offset="100%" stopColor="#b23124"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative vector */}
        <div className="absolute top-[23.51%] -right-[50.1%] -left-[21.81%] bottom-[4.46%]">
          <div className="w-full h-full transform rotate-[21.716deg]">
            <svg width="100%" height="100%" viewBox="0 0 1888 1949" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1888V1949H0V0Z" fill="url(#gradient2)" opacity="0.1"/>
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#316086"/>
                  <stop offset="100%" stopColor="#b23124"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <ContactUsHero />

      {/* Contact Information Section */}
      <ContactUsInfo />

      {/* Image Section */}
      <div className="relative bg-[#1e3950] h-[494px] overflow-hidden">
        <img 
          src="/images/contact-page/Rectangle 71.png" 
          alt="Contact Background" 
          className="absolute top-[56px] left-[165px] w-[657px] h-[382px] object-cover"
        />
        <img 
          src="/images/shared/logo-white.png" 
          alt="Versai Logo" 
          className="absolute top-[180px] left-[907px] w-[374px] h-[134px] object-cover"
        />
      </div>

      {/* About Section */}
      <ContactUsAbout />

      {/* Services Section */}
      <ContactUsServices />

      {/* Consultation Form Section */}
      <ContactUsForm />
    </div>
  );
};

export default ContactUsPage;
