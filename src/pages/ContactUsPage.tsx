import React from 'react';
import ContactUsHero from '../components/contact/ContactUsHero';
import ContactUsInfo from '../components/contact/ContactUsInfo';
import ContactUsAbout from '../components/contact/ContactUsAbout';
import ContactUsServices from '../components/contact/ContactUsServices';
import ContactMap from '../components/contact/ContactMap';
import ConsultationForm from '../components/ui/ConsultationForm';
import Icon from '../components/ui/Icon';
import Container from '../components/ui/Container';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
   

      {/* Hero Section */}
      <ContactUsHero />

      {/* Contact Information Section */}
      <ContactUsInfo />

      {/* Map Section */}
      <div className="relative bg-[#1e3950] py-12 overflow-hidden">
        <Container className="h-full flex items-start justify-between">
          <div className="flex flex-col items-center justify-between gap-4">
            <button className=" px-6 py-4 bg-white text-[#E74C3C] border border-[#E74C3C] text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-center gap-3">
              <span>مسیریابی از طریق گوگل مپ</span>
              <Icon
                section="footer"
                name="location"
                className="w-6 h-6"
                alt="Location"
              />
            </button>
            <img
              src="/images/shared/logo-white.png"
              alt="Versai Logo"
              className=" w-[374px] h-[134px] object-cover"
            />
          </div>
          <ContactMap />
        </Container>
      </div>

      {/* About Section */}
      <ContactUsAbout />

      {/* Services Section */}
      <ContactUsServices />

      {/* Consultation Form Section */}
      <section className="py-16">
        <Container>
          <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9568.PNG" />
        </Container>
      </section>
    </div>
  );
};

export default ContactUsPage;
