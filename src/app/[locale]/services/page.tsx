import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/services/HeroSection';
import ServicesGrid from '@/components/services/ServicesGrid';
import PackagesSection from '@/components/services/PackagesSection';
import BookingCTA from '@/components/services/BookingCTA';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of tourism services including safari tours, Strawberrytours, cultural experiences, and adventure packages in Cape Town.',
};

type Props = {
  params: { locale: string };
};

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <PackagesSection />
      <BookingCTA />
    </div>
  );
}
