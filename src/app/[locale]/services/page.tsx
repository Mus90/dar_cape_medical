import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { 
  AcademicCapIcon, 
  DocumentTextIcon, 
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  PencilIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: t('servicesPage.title'),
    description: t('servicesPage.description'),
  };
}

export default function ServicesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations('servicesPage');

  const services = [
    {
      icon: AcademicCapIcon,
      title: t('specialistTraining.title'),
      description: t('specialistTraining.description'),
      color: 'from-navy-600 to-navy-700',
      bgColor: 'bg-navy-50',
      slug: 'specialist-training'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: t('hpcsa.title'),
      description: t('hpcsa.description'),
      color: 'from-gold-600 to-gold-700',
      bgColor: 'bg-gold-50',
      slug: 'hpcsa-registration'
    },
    {
      icon: DocumentTextIcon,
      title: t('supernumerary.title'),
      description: t('supernumerary.description'),
      color: 'from-teal-600 to-teal-700',
      bgColor: 'bg-teal-50',
      slug: 'supernumerary'
    },
    {
      icon: BuildingOfficeIcon,
      title: t('strategy.title'),
      description: t('strategy.description'),
      color: 'from-navy-600 to-teal-600',
      bgColor: 'bg-navy-50',
      slug: 'strategy'
    },
    {
      icon: PencilIcon,
      title: t('application.title'),
      description: t('application.description'),
      color: 'from-teal-600 to-navy-600',
      bgColor: 'bg-teal-50',
      slug: 'application'
    },
    {
      icon: SparklesIcon,
      title: t('fellowship.title'),
      description: t('fellowship.description'),
      color: 'from-gold-500 to-gold-600',
      bgColor: 'bg-gold-50',
      slug: 'fellowship'
    }
  ];

  return (
    <main className="section-padding pt-32">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-serif">{t('title')}</h1>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">{t('subtitle')}</p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={service.title} className="card-premium overflow-hidden group">
              <div className={`p-8 ${service.bgColor} bg-opacity-50`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group"
                >
                  {t('learnMore')}
                  <svg className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
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
