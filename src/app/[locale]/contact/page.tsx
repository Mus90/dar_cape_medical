import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/contact/HeroSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Cape Home Tourism. Contact us for bookings, inquiries, or to plan your perfect Cape Town adventure.',
};

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
