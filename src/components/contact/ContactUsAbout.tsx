import React from 'react';
import Container from '../ui/Container';

const ContactUsAbout: React.FC = () => {
  return (
    <section className="py-12 bg-[#f2f1f1] relative">
      <Container>
        {/* About Title */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-extrabold font-['IRANYekanX'] text-[#316086] leading-[1.41]">
            درباره ورسای
          </h2>
        </div>

        {/* About Text Sections */}
        <div className="space-y-16">
          {/* Establishment */}
          <div className="text-right">
            <h3 className="text-[24px] font-semibold font-['IRANYekanX'] text-[#b23124] mb-4 leading-[1.1]">
              تاسیس ورسای
            </h3>
            <div className="text-[18px] font-medium font-['IRANYekanX'] text-[#316086] leading-[1.53]">
              <p className="mb-4">
                شرکت بین المللی فرانسیاد در سال 2013 در فرانسه ثبت و پس از اخذ مجوز از اتاق بازرگانی کشور فرانسه به شماره 79789544800018 ، فعالیت خود را با تمرکز در زمینه ارائه خدمات اداري و مهاجرتی در ایران و فرانسه آغاز کرده است.
              </p>
              <p>
                شعبه ایران فرانسیاد، تحت عنوان شرکت "پژواك سپهر آپادانا" به شماره ثبت 48768 و با نام تجاري ورساي که در سال 1398 تأسیس شده است، شرکتی است فرانسوي-ایرانی که با بهرهگیري از دانش تخصصی بنیان گذاران خود و سالها تجربه اخذ اقامت دانشجویی و تمکن مالی از کشور فرانسه، در تهران فعالیت می نماید.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-right">
            <h3 className="text-[24px] font-semibold font-['IRANYekanX'] text-[#b23124] mb-4 leading-[1.1]">
              خدمات ورسای
            </h3>
            <div className="flex justify-between items-center gap-4">
            <div className="text-[18px] font-medium font-['IRANYekanX'] text-[#316086] leading-[1.53]">
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>بررسی موقعیت‌ها جهت تحصیل در فرانسه</li>
                <li>برگزاری دوره‌های بلند مدت و کوتاه‌‌مدت در فرانسه</li>
                <li>مشاوره در امور مهاجرت و اقامت تمکن مالی</li>
                <li>ثبت شرکت در فرانسه</li>
                <li>مشاوره در امور ویزا</li>
              </ul>
             
            </div>
            <div className="flex-shrink-0">
              <img src="/images/contact-page/30-1 1.png" alt="Services" className="w-[475px] object-cover rounded-lg" />
            </div>
            </div>
            <p className="text-[18px] font-medium font-['IRANYekanX'] text-[#316086] leading-[1.53] mt-6">
                علاوه بر انجام امور مهاجرتی در فرانسه، گروه ورسای دانش‌آموزان و دانشجویانی که خود را برای تحصیل در کانادا آماده می‌کنند، همراهی خواهد کرد. موسسه ورسای طی قرارداد همکاری با دبیرستان بین‌المللی در ایالت کبک، روند ثبت‌نام دانش‌آموزان ایرانی را در کانادا تسهیل بخشیده است. دانشجویان علاقه‌مند به تحصیل در کانادا نیز به کمک گروه مشاورین تخصصی ورسای مسیر آسان‌تری را پیش رو خواهند داشت.
              </p>
          </div>

          {/* Why Choose Us */}
          <div className="text-right">
            <h3 className="text-[24px] font-semibold font-['IRANYekanX'] text-[#b23124] mb-4 leading-[1.1]">
              چرا از ورسای مشاوره می گیریم؟
            </h3>
            <div className="text-[18px] font-medium font-['IRANYekanX'] text-[#316086] leading-[1.53] text-right">
              <p>
                موسسه مهاجرتی ورسای، با رویکردی تخصصی و جامع، همواره مسیر موفقیت را برای متقاضیان روشن می‌سازد. هدف‌ها به‌عنوان نقشه راه زندگی شما عمل می‌کنند و ما در کنار شما هستیم تا این مسیر را هموار و دست‌یابی به رویاهایتان را ممکن سازیم.
              </p>
              <p>
                گروه ورسای در زمینه‌های مهاجرت، تحصیل، سرمایه‌گذاری و اقامت در فرانسه و کانادا، فرآیندهای مهاجرتی را از نخستین گام تا رسیدن به مقصد با دقت و تخصص همراه می‌کند و همواره در کنار شما قرار دارد. همچنین موسسه ورسای طی قرارداد همکاری با دبیرستان بین‌المللی در ایالت کبک، روند ثبت‌نام دانش‌آموزان ایرانی را در کانادا تسهیل بخشیده است. دانشجویان علاقه‌مند به تحصیل در کانادا نیز به کمک گروه تخصصی ورسای مسیر آسان‌تری را پیش رو خواهند داشت.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsAbout;
