import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import StrategyContent from './StrategyContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/services/strategy` : `${baseUrl}/${locale}/services/strategy`;

  return {
    title: 'Training Strategy Development | International Medical Graduates South Africa',
    description: 'Personalized training pathway strategy for international medical graduates seeking specialist training in South Africa. Career planning and application preparation.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Training Strategy Development | International Medical Graduates South Africa',
      description: 'Personalized training pathway strategy for international medical graduates seeking specialist training in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Training Strategy Development'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/services/strategy`,
        ar: `${baseUrl}/ar/services/strategy`
      }
    }
  };
}

export default function StrategyPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <StrategyContent locale={locale} />;
}
