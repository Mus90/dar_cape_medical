import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export default function InternationalPatientServicesPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('internationalPatientServices.page');

    return (
        <ArticleLayout title={t('title')} intro={t('intro')}>
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                <Link href={`/${locale}/international-patient-services/why-south-africa`} className="card p-6 hover:shadow-lg">
                    <h3 className="text-lg font-semibold">{t('card1.title')}</h3>
                    <p className="mt-2 text-sm text-gray-700">{t('card1.excerpt')}</p>
                </Link>

                <Link href={`/${locale}/international-patient-services/hospitals`} className="card p-6 hover:shadow-lg">
                    <h3 className="text-lg font-semibold">{t('card2.title')}</h3>
                    <p className="mt-2 text-sm text-gray-700">{t('card2.excerpt')}</p>
                </Link>

                <Link href={`/${locale}/international-patient-services/recovery-and-accommodation`} className="card p-6 hover:shadow-lg">
                    <h3 className="text-lg font-semibold">{t('card3.title')}</h3>
                    <p className="mt-2 text-sm text-gray-700">{t('card3.excerpt')}</p>
                </Link>
            </section>

            <section className="mt-10">
                <div className="card p-6">
                    <h2 className="text-2xl font-semibold">{t('howItWorks.title')}</h2>
                    <p className="mt-3 text-gray-700">{t('howItWorks.excerpt')}</p>
                    <div className="mt-4">
                        <Link href={`/${locale}/contact`} className="btn-primary">{t('contactCTA')}</Link>
                    </div>
                </div>
            </section>
        </ArticleLayout>
    );
}
