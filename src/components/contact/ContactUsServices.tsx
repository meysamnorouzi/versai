import React from 'react';
import Container from '../ui/Container';

const ContactUsServices: React.FC = () => {
  const services = [
    {
      title: "انتخاب بهترین مسیر مهاجرتی",
      icon: "/icons/contact/Group.svg"
    },
    {
      title: "پشتیبانی کامل تا اقامت",
      icon: "/icons/contact/Group (2).svg"
    },
    {
      title: "ارزیابی سطح زبان و مدارک",
      icon: "/icons/contact/Group (3).svg"
    },
    {
      title: "مشاوره دقیق و تخصصی",
      icon: "/icons/contact/Group (4).svg"
    },
  ];

  return (
    <section className="py-2 bg-[#f2f1f1] relative">
      <Container>
        <div className="flex justify-between items-center">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-[16px]  font-['IRANYekanX'] text-[#316086] text-right leading-[1.61] font-bold">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactUsServices;
