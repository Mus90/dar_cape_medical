import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import FellowshipContent from './FellowshipContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/services/fellowship` : `${baseUrl}/${locale}/services/fellowship`;

  return {
    title: 'CMSA Fellowship Examination Preparation | International Medical Graduates South Africa',
    description: 'Guidance on CMSA fellowship examinations for specialist registration in South Africa. Preparation support for FC examinations across medical specialties.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'CMSA Fellowship Examination Preparation | International Medical Graduates South Africa',
      description: 'Guidance on CMSA fellowship examinations for specialist registration in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'CMSA Fellowship Examination Preparation'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/services/fellowship`,
        ar: `${baseUrl}/ar/services/fellowship`
      }
    }
  };
}

export default function FellowshipPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <FellowshipContent locale={locale} />;
}
