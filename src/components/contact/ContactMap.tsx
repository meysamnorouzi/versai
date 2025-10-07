import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="w-[657px] h-[382px] rounded-lg overflow-hidden shadow-lg">
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
  );
};

export default ContactMap;
