import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/contact/HeroSection';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Dar Cape Tourism. Contact us for bookings, inquiries, or to plan your perfect Cape Town adventure.',
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
          <div className="flex justify-center">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
