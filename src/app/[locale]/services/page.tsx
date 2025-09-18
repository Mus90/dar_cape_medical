import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { DocumentTextIcon, AcademicCapIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Curated information packages, initial consultation & eligibility assessment, and document review service for medical training in South Africa.',
};

type Props = {
  params: { locale: string };
};

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations('servicesSimple');

  return (
    <main className="section-padding">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-gray-600 text-lg">{t('subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: DocumentTextIcon,
            title: t('items.info.title'),
            description: t('items.info.description')
          }, {
            icon: AcademicCapIcon,
            title: t('items.consultation.title'),
            description: t('items.consultation.description')
          }, {
            icon: ClipboardDocumentListIcon,
            title: t('items.review.title'),
            description: t('items.review.description')
          }].map((svc) => (
            <div key={svc.title} className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <svc.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{svc.title}</h2>
              <p className="text-gray-600 mb-4">{svc.description}</p>
              <Link href={`/${locale}/contact`} className="text-primary-600 font-medium hover:text-primary-700">
                {t('cta')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
