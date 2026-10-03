import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ApplicationContent from './ApplicationContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/services/application` : `${baseUrl}/${locale}/services/application`;

  return {
    title: 'Application Preparation Support | International Medical Graduates South Africa',
    description: 'Comprehensive application preparation for international medical graduates applying to medical training programs in South Africa. Document review and application guidance.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Application Preparation Support | International Medical Graduates South Africa',
      description: 'Comprehensive application preparation for international medical graduates applying to medical training programs in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Application Preparation Support'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/services/application`,
        ar: `${baseUrl}/ar/services/application`
      }
    }
  };
}

export default function ApplicationPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return <ApplicationContent locale={locale} />;
}
