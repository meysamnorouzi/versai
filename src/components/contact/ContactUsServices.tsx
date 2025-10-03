import React from 'react';

const ContactUsServices: React.FC = () => {
  const services = [
    {
      title: "پشتیبانی کامل تا اقامت",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12V20L25 25" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "ارزیابی سطح زبان و مدارک",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12V20L25 25" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "مشاوره دقیق و تخصصی",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12V20L25 25" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "انتخاب بهترین مسیر مهاجرتی",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12V20L25 25" stroke="#D74A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#f2f1f1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                {service.icon}
              </div>
              <span className="text-[16px] font-medium font-['IRANYekanX'] text-[#316086] text-right leading-[1.61]">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsServices;
