import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import ArticleLayout from '@/components/ArticleLayout';

export default function RecoveryPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('internationalPatientServices.recovery');

    const reviewer = {
        name: 'Dr. Tarig Zobair',
        jobTitle: 'Pulmonologist',
        alumniOf: { '@type': 'MedicalOrganization', name: 'Groote Schuur Hospital', sameAs: 'https://en.wikipedia.org/wiki/Groote_Schuur_Hospital' },
        sameAs: 'https://www.linkedin.com/in/tarig-zobair-536a18285/'
    };

    const breadcrumb = [
        { name: t('title'), url: `https://darcape.com/${locale}/international-patient-services/recovery-and-accommodation` },
    ];

    const faq = [
        { question: t('faq.q1.q'), answer: t('faq.q1.a') }
    ];

    return (
        <ArticleLayout title={t('title')} intro={t('intro')} reviewer={reviewer} url={`https://darcape.com/${locale}/international-patient-services/recovery-and-accommodation`} breadcrumb={breadcrumb} faq={faq}>
            <section className="space-y-6">
                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('accommodation.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('accommodation.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('recoveryServices.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('recoveryServices.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('logistics.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('logistics.content')}</p>
                </div>
            </section>
        </ArticleLayout>
    );
}
