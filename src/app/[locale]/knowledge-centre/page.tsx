import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import KnowledgeCentreHero from '@/components/knowledge/HeroSection';
import CategoryGrid from '@/components/knowledge/CategoryGrid';
import ArticleGrid from '@/components/knowledge/ArticleGrid';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/knowledge-centre` : `${baseUrl}/${locale}/knowledge-centre`;

  return {
    title: 'Knowledge Centre | Medical Training & HPCSA Registration Guides',
    description: 'Evidence-based articles and guides on specialist training, HPCSA registration, supernumerary positions, and medical pathways for international doctors in South Africa.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Knowledge Centre | Medical Training & HPCSA Registration Guides',
      description: 'Evidence-based articles and guides on specialist training, HPCSA registration, supernumerary positions, and medical pathways for international doctors in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Dar Cape Medica Knowledge Centre'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/knowledge-centre`,
        ar: `${baseUrl}/ar/knowledge-centre`
      }
    }
  };
}

type Props = {
  params: { locale: string };
};

export default function KnowledgeCentrePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Knowledge Centre', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}knowledge-centre` }
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="min-h-screen">
        <KnowledgeCentreHero />
        <CategoryGrid />
        <ArticleGrid />
      </div>
    </>
  );
}
