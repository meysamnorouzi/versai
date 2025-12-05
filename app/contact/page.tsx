import React from 'react'
import ContactUsHero from '@/src/components/contact/ContactUsHero'
import ContactUsInfo from '@/src/components/contact/ContactUsInfo'
import ContactUsAbout from '@/src/components/contact/ContactUsAbout'
import ContactUsServices from '@/src/components/contact/ContactUsServices'
import ContactMap from '@/src/components/contact/ContactMap'
import ConsultationForm from '@/src/components/ui/ConsultationForm'
import Icon from '@/src/components/ui/Icon'
import Container from '@/src/components/ui/Container'
import { PAGE_SEO } from '@/src/config/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: 'https://versai.ir/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://versai.ir/contact',
  },
}

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2f1f1] relative overflow-hidden">
      {/* Hero Section */}
      <ContactUsHero />

      {/* Contact Information Section */}
      <ContactUsInfo />

      {/* Map Section */}
      <div className="relative bg-[#1e3950] py-8 sm:py-10 md:py-12 overflow-hidden">
        <Container className="h-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 sm:gap-8">
          <div className="flex flex-col items-center justify-between gap-4">
            <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-[#E74C3C] border border-[#E74C3C] text-[14px] sm:text-[16px] font-semibold font-['IRANYekanX'] rounded-[32px] hover:bg-[#E74C3C] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-base">مسیریابی از طریق گوگل مپ</span>
              <Icon
                section="footer"
                name="location"
                className="w-5 h-5 sm:w-6 sm:h-6"
                alt="Location"
              />
            </button>
            <img
              src="/images/shared/logo-white.png"
              alt="Versai Logo"
              className="w-[250px] sm:w-[300px] md:w-[374px] h-auto object-cover"
            />
          </div>
          <div className="w-full lg:flex-1">
            <ContactMap />
          </div>
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
  )
}

export default ContactUsPage

