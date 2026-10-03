import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function IMGPathwayPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('insightPages.imgPathway');

    const phase1Steps = [
        t.rich('phase1.step1', { strong: (chunks) => <strong>{chunks}</strong> }),
        t.rich('phase1.step2', { strong: (chunks) => <strong>{chunks}</strong> }),
        <div key="step3" className="space-y-3">
            <div className="text-gray-700">
                {t.rich('phase1.step3Intro', { strong: (chunks) => <strong>{chunks}</strong> })}
            </div>
            <div className="mt-3 space-y-2 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
                <div>
                    <p className="font-semibold">{t('phase1.generalPractitionersTitle')}</p>
                    <p>{t('phase1.generalPractitionersContent')}</p>
                </div>
                <div>
                    <p className="font-semibold">{t('phase1.specialistsTitle')}</p>
                    <p>{t('phase1.specialistsContent')}</p>
                </div>
            </div>
        </div>,
        t.rich('phase1.step4', { strong: (chunks) => <strong>{chunks}</strong> })
    ];

    const examRules = [
        t('phase3.rule1'),
        t('phase3.rule2'),
        t('phase3.rule3')
    ];

    const exemptionItems = [
        t('phase3.exemption1'),
        t('phase3.exemption2'),
        t('phase3.exemption3')
    ];

    return (
        <main className="section-padding bg-white">
            <div className="container-max prose max-w-none">
                <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
                    <section className="space-y-8">
                        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
                            <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200">
                                {t('reviewBy')}
                            </span>
                            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                                {t('title')}
                            </h1>
                            <p className="mt-4 text-slate-300 text-lg leading-8">{t('intro')}</p>
                        </div>

                        <section className="space-y-6">
                            <div className="card border border-slate-200 p-6">
                                <h2 className="text-2xl font-semibold">{t('phase1.title')}</h2>
                                <p className="mt-4 text-gray-700">{t('phase1.intro')}</p>
                                <div className="grid gap-4 py-6">
                                    <div className="space-y-2 rounded-2xl bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('phase1.resourcesTitle')}</h3>
                                        <ul className="list-disc pl-5 text-sm text-slate-700">
                                            <li>
                                                <a className="text-primary-600 hover:underline" href="https://www.ecfmg.org/psv/instructions-south-africa.html" target="_blank" rel="noopener noreferrer">
                                                    {t('phase1.resourceEcfmg')}
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-primary-600 hover:underline" href="https://www.wdoms.org" target="_blank" rel="noopener noreferrer">
                                                    {t('phase1.resourceWdoms')}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <ol className="list-decimal space-y-4 pl-5 text-gray-700">
                                        {phase1Steps.map((step, index) => (
                                            <li key={index} className="space-y-3">
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            <div className="card border border-slate-200 p-6">
                                <h2 className="text-2xl font-semibold">{t('phase2.title')}</h2>
                                <p className="mt-4 text-gray-700">{t('phase2.intro')}</p>
                                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                                    <table className="w-full border-collapse text-left text-sm">
                                        <thead className="bg-slate-100 text-slate-900">
                                            <tr>
                                                <th className="border-b border-slate-200 px-4 py-3 font-semibold">{t('phase2.documentTableHeaderDocumentType')}</th>
                                                <th className="border-b border-slate-200 px-4 py-3 font-semibold">{t('phase2.documentTableHeaderRule')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white even:bg-slate-50">
                                                <td className="border-t border-slate-200 px-4 py-4 font-semibold">{t('phase2.applicationFormTitle')}</td>
                                                <td className="border-t border-slate-200 px-4 py-4">{t('phase2.applicationForm')}</td>
                                            </tr>
                                            <tr className="bg-white even:bg-slate-50">
                                                <td className="border-t border-slate-200 px-4 py-4 font-semibold">{t('phase2.qualificationsTitle')}</td>
                                                <td className="border-t border-slate-200 px-4 py-4">{t('phase2.qualifications')}</td>
                                            </tr>
                                            <tr className="bg-white even:bg-slate-50">
                                                <td className="border-t border-slate-200 px-4 py-4 font-semibold">{t('phase2.curriculumTitle')}</td>
                                                <td className="border-t border-slate-200 px-4 py-4">{t('phase2.curriculum')}</td>
                                            </tr>
                                            <tr className="bg-white even:bg-slate-50">
                                                <td className="border-t border-slate-200 px-4 py-4 font-semibold">{t('phase2.goodStandingTitle')}</td>
                                                <td className="border-t border-slate-200 px-4 py-4">{t('phase2.goodStanding')}</td>
                                            </tr>
                                            <tr className="bg-white even:bg-slate-50">
                                                <td className="border-t border-slate-200 px-4 py-4 font-semibold">{t('phase2.ndohTitle')}</td>
                                                <td className="border-t border-slate-200 px-4 py-4">{t('phase2.ndoh')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
                                    <p className="font-semibold">{t('phase2.referencesTitle')}</p>
                                    <ul className="mt-3 list-disc pl-5 space-y-2">
                                        <li>
                                            <a className="text-primary-600 hover:underline" href="https://www.hpcsa.co.za/board/medical-dental/foreign-graduates" target="_blank" rel="noopener noreferrer">
                                                {t('phase2.reference1')}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-primary-600 hover:underline" href="https://www.hpcsa.co.za/page/registration-requirements" target="_blank" rel="noopener noreferrer">
                                                {t('phase2.reference2')}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card border border-slate-200 p-6">
                                <h2 className="text-2xl font-semibold">{t('phase3.title')}</h2>
                                <div className="mt-4 rounded-3xl border border-rose-200 bg-rose-50 p-5 text-rose-900">
                                    <p className="font-semibold">{t('phase3.alertTitle')}</p>
                                    <p className="mt-2">{t('phase3.alertText')}</p>
                                </div>
                                <div className="mt-6 space-y-4 text-gray-700">
                                    <p>{t('phase3.intro')}</p>
                                    <div className="rounded-2xl bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('phase3.rulesTitle')}</h3>
                                        <ul className="mt-3 list-disc pl-5 space-y-2">
                                            {examRules.map((rule, index) => (
                                                <li key={index}>{rule}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('phase3.assessmentTitle')}</h3>
                                        <p>{t('phase3.assessmentText')}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('phase3.exemptionTitle')}</h3>
                                        <p>{t('phase3.exemptionIntro')}</p>
                                        <ul className="mt-3 list-disc pl-5 space-y-2">
                                            {exemptionItems.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card border border-slate-200 p-6">
                                <h2 className="text-2xl font-semibold">{t('final.title')}</h2>
                                <div className="grid gap-4 pt-4 sm:grid-cols-1 lg:grid-cols-3">
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('final.internTitle')}</h3>
                                        <p className="mt-2 text-sm text-slate-700">{t('final.internText')}</p>
                                    </div>
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('final.communityTitle')}</h3>
                                        <p className="mt-2 text-sm text-slate-700">{t('final.communityText')}</p>
                                    </div>
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <h3 className="font-semibold">{t('final.independentTitle')}</h3>
                                        <p className="mt-2 text-sm text-slate-700">{t('final.independentText')}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>

                    <aside className="space-y-6">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{t('sidebar.expertTag')}</p>
                            <h2 className="mt-4 text-xl font-semibold">{t('sidebar.expertHeading')}</h2>
                            <p className="mt-3 text-gray-700">{t('sidebar.expertText')}</p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="font-semibold">{t('sidebar.whyTitle')}</h3>
                            <p className="mt-3 text-gray-700">{t('sidebar.whyText')}</p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <h3 className="font-semibold">{t('sidebar.needTitle')}</h3>
                            <p className="mt-3 text-gray-700">{t('sidebar.needText')}</p>
                            <Link href={`/${locale}/contact`} className="mt-5 inline-flex w-full justify-center rounded-full bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
                                {t('sidebar.contactButton')}
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
