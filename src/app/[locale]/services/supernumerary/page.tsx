import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import SupernumeraryContent from './SupernumeraryContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/services/supernumerary` : `${baseUrl}/${locale}/services/supernumerary`;

  return {
    title: 'Supernumerary Registrar Positions | International Medical Graduates South Africa',
    description: 'Guidance on supernumerary registrar positions for international medical graduates in South Africa. Self-funded training opportunities in medical specialties.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Supernumerary Registrar Positions | International Medical Graduates South Africa',
      description: 'Guidance on supernumerary registrar positions for international medical graduates in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Supernumerary Registrar Positions'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/services/supernumerary`,
        ar: `${baseUrl}/ar/services/supernumerary`
      }
    }
  };
}

export default function SupernumeraryPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <SupernumeraryContent locale={locale} />;
}
