import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import ArticleLayout from '@/components/ArticleLayout';

export default function HospitalsPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('internationalPatientServices.hospitals');

    const reviewer = {
        name: 'Dr. Tarig Zobair',
        jobTitle: 'Pulmonologist',
        alumniOf: { '@type': 'MedicalOrganization', name: 'Groote Schuur Hospital', sameAs: 'https://en.wikipedia.org/wiki/Groote_Schuur_Hospital' },
        sameAs: 'https://www.linkedin.com/in/tarig-zobair-536a18285/'
    };

    const breadcrumb = [
        { name: t('title'), url: `https://darcape.com/${locale}/international-patient-services/hospitals` },
    ];

    const faq = [
        { question: t('faq.q1.q'), answer: t('faq.q1.a') },
    ];

    return (
        <ArticleLayout title={t('title')} intro={t('intro')} reviewer={reviewer} url={`https://darcape.com/${locale}/international-patient-services/hospitals`} breadcrumb={breadcrumb} faq={faq}>
            <section className="space-y-6">
                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('selection.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('selection.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('accreditation.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('accreditation.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('internationalUnits.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('internationalUnits.content')}</p>
                </div>
            </section>
        </ArticleLayout>
    );
}
