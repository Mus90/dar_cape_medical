import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/contact/HeroSection';
import ContactInfo from '@/components/contact/ContactInfo';
import AssessmentForm from '@/components/contact/AssessmentForm';
import WhatsAppCTA from '@/components/shared/WhatsAppCTA';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`;

  return {
    title: 'Contact Dar Cape Medica | Profile Assessment for Medical Training in South Africa',
    description: 'Start your profile assessment for specialist training, medical residency, and HPCSA registration in South Africa. Get personalized guidance from Dar Cape Medica.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Contact Dar Cape Medica | Profile Assessment for Medical Training in South Africa',
      description: 'Start your profile assessment for specialist training, medical residency, and HPCSA registration in South Africa. Get personalized guidance from Dar Cape Medica.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Dar Cape Medica - Contact'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/contact`,
        ar: `${baseUrl}/ar/contact`
      }
    }
  };
}

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Contact', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}contact` }
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Profile Assessment Service"
        description="Comprehensive profile assessment for international medical graduates seeking specialist training and HPCSA registration in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}contact`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="min-h-screen">
        <HeroSection />
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <AssessmentForm />
            </div>
            <div className="mt-16 text-center">
              <WhatsAppCTA />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
