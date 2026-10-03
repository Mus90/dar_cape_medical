import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/about/HeroSection';
import MissionSection from '@/components/about/MissionSection';
import ApproachSection from '@/components/about/ApproachSection';
import EvidenceSection from '@/components/about/EvidenceSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import TeamSection from '@/components/about/TeamSection';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`;

  return {
    title: 'About Dar Cape Medica | Specialist Advisory Practice for International Doctors',
    description: 'Dar Cape Medica is a South Africa-based specialist advisory practice providing evidence-based guidance on medical training, HPCSA registration, and specialist pathways for international medical graduates.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'About Dar Cape Medica | Specialist Advisory Practice for International Doctors',
      description: 'Dar Cape Medica is a South Africa-based specialist advisory practice providing evidence-based guidance on medical training, HPCSA registration, and specialist pathways for international medical graduates.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Dar Cape Medica - About Us'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/about`,
        ar: `${baseUrl}/ar/about`
      }
    }
  };
}

type Props = {
  params: { locale: string };
};

export default function AboutPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'About', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}about` }
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="min-h-screen">
        <HeroSection />
        <section className="section-padding bg-white">
          <div className="container-max">
            <MissionSection />
          </div>
        </section>
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <ApproachSection />
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <WhatWeDoSection />
          </div>
        </section>
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <EvidenceSection />
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-max">
            <TeamSection />
          </div>
        </section>
      </div>
    </>
  );
}
