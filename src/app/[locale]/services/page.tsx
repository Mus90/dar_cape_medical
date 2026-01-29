import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { DocumentTextIcon, AcademicCapIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: t('services.title'),
    description: t('services.subtitle'),
  };
}

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations('servicesSimple');
  const tCommon = useTranslations();

  return (
    <main className="section-padding pt-36">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-gray-600 text-lg mb-6">{t('subtitle')}</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {tCommon('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          }].map((svc, index) => (
            <div key={svc.title} className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <svc.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{svc.title}</h2>
              <p className="text-gray-600 mb-4">{svc.description}</p>
              <Link
                href={
                  index === 0
                    ? `/${locale}/how-it-works`
                    : index === 1
                      ? `/${locale}/pricing`
                      : `/${locale}/contact`
                }
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                {index === 0 && tCommon('services.howItWorks')}
                {index === 1 && tCommon('services.pricing')}
                {index === 2 && tCommon('services.contact')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
