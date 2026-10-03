import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: t('specialtiesPage.title'),
    description: t('specialtiesPage.description'),
  };
}

export default function SpecialtiesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations('specialtiesPage');

  const specialties = [
    { id: 'ophthalmology', name: t('ophthalmology'), icon: '👁️' },
    { id: 'orthopaedic-surgery', name: t('orthopaedicSurgery'), icon: '🦴' },
  ];

  return (
    <main className="section-padding">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-serif">{t('title')}</h1>
          <p className="text-gray-600 текст-lg mb-6 max-w-3xl mx-auto">{t('subtitle')}</p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specialties.map((specialty) => (
            <Link
              key={specialty.id}
              href={`/${locale}/specialties/${specialty.id}`}
              className="card-premium p-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="text-4xl">{specialty.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif group-hover:text-teal-700 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{t('viewDetails')}</p>
                </div>
              </div>
            </Link>
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
