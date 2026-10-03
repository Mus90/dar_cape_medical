import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrainingPathwaySection from '@/components/home/TrainingPathwaySection';
import TrustSourcesSection from '@/components/home/TrustSourcesSection';
import LatestInsightsSection from '@/components/home/LatestInsightsSection';
import CTASection from '@/components/home/CTASection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: 'Dar Cape Medica | Specialist Training & HPCSA Registration for International Doctors',
    description: 'Evidence-based advisory support for international medical graduates pursuing specialist training, medical residency, and HPCSA registration in South Africa. Expert guidance on supernumerary registrar positions, MMed programs, and university pathways.',
    keywords: ['specialist training South Africa', 'medical residency South Africa', 'HPCSA registration foreign doctors', 'supernumerary registrar South Africa', 'MMed South Africa', 'international medical graduates'],
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Dar Cape Medica | Specialist Training & HPCSA Registration for International Doctors',
      description: 'Evidence-based advisory support for international medical graduates pursuing specialist training, medical residency, and HPCSA registration in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Dar Cape Medica - Medical Training Advisory'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dar Cape Medica | Specialist Training & HPCSA Registration for International Doctors',
      description: 'Evidence-based advisory support for international medical graduates pursuing specialist training, medical residency, and HPCSA registration in South Africa.',
      images: [`${baseUrl}/images/og-default.jpg`]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: baseUrl,
        ar: `${baseUrl}/ar`
      }
    }
  };
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      <OrganizationSchema />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <TrainingPathwaySection />
        <TrustSourcesSection />
        <LatestInsightsSection />
        <WhyChooseUsSection />
        <CTASection />
        <FloatingWhatsApp pageContext="general" />
      </div>
    </>
  );
}
