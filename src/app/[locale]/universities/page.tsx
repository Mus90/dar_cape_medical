import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: t('universitiesPage.title'),
    description: t('universitiesPage.description'),
  };
}

export default function UniversitiesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations('universitiesPage');

  const universities = [
    { id: 'uct', name: t('uct.name'), shortName: t('uct.shortName'), faculty: t('uct.faculty'), description: t('uct.description'), url: t('uct.url') },
    { id: 'wits', name: t('wits.name'), shortName: t('wits.shortName'), faculty: t('wits.faculty'), description: t('wits.description'), url: t('wits.url') },
    { id: 'stellenbosch', name: t('stellenbosch.name'), shortName: t('stellenbosch.shortName'), faculty: t('stellenbosch.faculty'), description: t('stellenbosch.description'), url: t('stellenbosch.url') },
    { id: 'ukzn', name: t('ukzn.name'), shortName: t('ukzn.shortName'), faculty: t('ukzn.faculty'), description: t('ukzn.description'), url: t('ukzn.url') },
    { id: 'ufs', name: t('ufs.name'), shortName: t('ufs.shortName'), faculty: t('ufs.faculty'), description: t('ufs.description'), url: t('ufs.url') },
  ];

  return (
    <main className="section-padding">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-serif">{t('title')}</h1>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">{t('subtitle')}</p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {universities.map((university) => (
            <a
              key={university.id}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-1 font-serif group-hover:text-teal-700 transition-colors">
                    {university.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{university.shortName}</p>
                  <p className="text-gray-500 text-xs mb-2">{university.faculty}</p>
                  <p className="text-gray-600 text-xs line-clamp-2">{university.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Verification Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-16">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">{t('verification.title')}</h3>
              <p className="text-amber-800 text-sm">{t('verification.description')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">{t('cta.title')}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
          >
            {t('cta.button')}
            <svg className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
