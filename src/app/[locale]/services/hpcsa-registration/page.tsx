import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HPCSAContent from './HPCSAContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/services/hpcsa-registration` : `${baseUrl}/${locale}/services/hpcsa-registration`;

  return {
    title: 'HPCSA Registration Foreign Doctors | International Medical Graduates South Africa',
    description: 'Comprehensive guidance on HPCSA registration pathways for international medical graduates in South Africa. Includes registration categories, credential verification, and Department of Health requirements.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'HPCSA Registration Foreign Doctors | International Medical Graduates South Africa',
      description: 'Comprehensive guidance on HPCSA registration pathways for international medical graduates in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'HPCSA Registration for Foreign Doctors'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/services/hpcsa-registration`,
        ar: `${baseUrl}/ar/services/hpcsa-registration`
      }
    }
  };
}

export default function HPCSARegistrationPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <HPCSAContent locale={locale} />;
}
