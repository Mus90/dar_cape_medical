import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import LatestInsightsSection from '@/components/home/LatestInsightsSection';
import CTASection from '@/components/home/CTASection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <LatestInsightsSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
