import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HPCSARegistrationPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('insightPages.hpcsa');
    const tCommon = useTranslations('common');

    const sections: { key: keyof typeof contentKeys; }[] = [
        { key: 'keyPoints' },
        { key: 'epic' },
        { key: 'pathways' },
        { key: 'documents' },
        { key: 'exams' },
        { key: 'pitfalls' }
    ];

    return (
        <main className="section-padding">
            <div className="container-max prose max-w-none">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h1>
                <p className="text-gray-700 text-lg mb-8">{t('intro')}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {sections.map((s) => (
                            <details key={s.key} className="card p-5">
                                <summary className="cursor-pointer text-xl font-semibold text-gray-900">
                                    {t(`${s.key}.title`)}
                                </summary>
                                <div className="mt-3 text-gray-700 space-y-3">
                                    {t.rich(`${s.key}.content`, {
                                        ul: (chunks) => <ul className="list-disc pl-6">{chunks}</ul>,
                                        li: (chunks) => <li>{chunks}</li>,
                                        strong: (chunks) => <strong>{chunks}</strong>,
                                        br: () => <br />,
                                    })}
                                </div>
                            </details>
                        ))}

                        <div className="card p-6">
                            <h2 className="text-2xl font-bold mb-2">{t('cta.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('cta.subtitle')}</p>
                            <div className="flex gap-3">
                                <Link href={`/${locale}/contact`} className="btn-primary">{t('cta.primary')}</Link>
                                <Link href={`/${locale}/contact`} className="btn-secondary">{t('cta.secondary')}</Link>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-4">
                        <div className="card p-5">
                            <h3 className="text-lg font-semibold mb-2">{t('sidebar.resources.title')}</h3>
                            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                                <li><a className="text-primary-600 hover:underline" href="https://www.hpcsa.co.za/board/medical-dental/foreign-graduates" target="_blank">HPCSA – Foreign Graduates</a></li>
                                <li><a className="text-primary-600 hover:underline" href="https://www.ecfmgepic.org/" target="_blank">ECFMG EPIC</a></li>
                                <li><a className="text-primary-600 hover:underline" href="https://cmsa.co.za/" target="_blank">CMSA</a></li>
                            </ul>
                        </div>
                        <div className="card p-5">
                            <h3 className="text-lg font-semibold mb-2">{t('sidebar.help.title')}</h3>
                            <p className="text-sm text-gray-700 mb-3">{t('sidebar.help.desc')}</p>
                            <Link href={`/${locale}/contact`} className="btn-primary btn-sm">{tCommon('learnMore')}</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

// This constant is only for TS typing above; translation keys drive content.
const contentKeys = {
    keyPoints: true,
    epic: true,
    pathways: true,
    documents: true,
    exams: true,
    pitfalls: true,
};
