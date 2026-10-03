import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import ArticleLayout from '@/components/ArticleLayout';

export default function WhySouthAfricaPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('internationalPatientServices.why');

    const reviewer = {
        name: 'Dr. Tarig Zobair',
        jobTitle: 'Pulmonologist',
        alumniOf: { '@type': 'MedicalOrganization', name: 'Groote Schuur Hospital', sameAs: 'https://en.wikipedia.org/wiki/Groote_Schuur_Hospital' },
        sameAs: 'https://www.linkedin.com/in/tarig-zobair-536a18285/'
    };

    const breadcrumb = [
        { name: t('title'), url: `https://darcape.com/${locale}/international-patient-services/why-south-africa` },
    ];

    const faq = [
        { question: t('faq.q1.q'), answer: t('faq.q1.a') },
        { question: t('faq.q2.q'), answer: t('faq.q2.a') }
    ];

    return (
        <ArticleLayout title={t('title')} intro={t('intro')} reviewer={reviewer} url={`https://darcape.com/${locale}/international-patient-services/why-south-africa`} breadcrumb={breadcrumb} faq={faq}>
            <section className="space-y-6">
                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('quality.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('quality.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('cost.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('cost.content')}</p>
                </div>

                <div className="card p-6">
                    <h2 className="text-xl font-semibold">{t('access.title')}</h2>
                    <p className="mt-2 text-gray-700">{t('access.content')}</p>
                </div>
            </section>
        </ArticleLayout>
    );
}
