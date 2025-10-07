import React from 'react';
import Container from '../ui/Container';

const ContactUsHero: React.FC = () => {
  return (
    <section className="relative py-16">
      <Container>
        <div className="text-center">
          <h1 className="text-[32px] font-extrabold font-['IRANYekanX'] leading-[1.41] text-[#316086] mb-4">
            راه های ارتباطی شما با موسسه مهاجرتی{' '}
            <span className="text-[#b23124]">ورسای</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsHero;
