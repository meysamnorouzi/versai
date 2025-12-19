import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="w-[657px] h-[382px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.09605172581735!2d51.40051537676046!3d35.750446402446954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06e815f16e91%3A0x358d24d94b370964!2sGreen%20Tower!5e0!3m2!1sen!2sde!4v1765042907782!5m2!1sen!2sde"
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
  );
};

export default ContactMap;
