import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
    params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
    setRequestLocale(locale);
    const t = await getTranslations();
    return {
        title: t('howItWorksPage.hero.title'),
        description: t('howItWorksPage.hero.subtitle'),
    };
}

export default function HowItWorksPage({ params: { locale } }: Props) {
    setRequestLocale(locale);
    const t = useTranslations('howItWorksPage');
    const tCommon = useTranslations();

    const stages = [
        {
            id: 1,
            title: t('stages.stage1.title'),
            purpose: t('stages.stage1.purpose'),
            includes: [
                t('stages.stage1.includes.review'),
                t('stages.stage1.includes.analysis'),
                t('stages.stage1.includes.matching'),
                t('stages.stage1.includes.mapping'),
                t('stages.stage1.includes.advisory')
            ],
            deliverables: [
                t('stages.stage1.deliverables.summary'),
                t('stages.stage1.deliverables.specialization'),
                t('stages.stage1.deliverables.roadmap')
            ],
            price: 159,
            duration: t('stages.stage1.duration'),
            cta: t('stages.stage1.cta'),
        },
        {
            id: 2,
            title: t('stages.stage2.title'),
            purpose: t('stages.stage2.purpose'),
            includes: [
                t('stages.stage2.includes.cv'),
                t('stages.stage2.includes.letters'),
                t('stages.stage2.includes.strategy'),
                t('stages.stage2.includes.mastery')
            ],
            deliverables: [
                t('stages.stage2.deliverables.cv'),
                t('stages.stage2.deliverables.letters'),
                t('stages.stage2.deliverables.templates')
            ],
            price: 369,
            duration: t('stages.stage2.duration'),
            cta: t('stages.stage2.cta')
        },
        {
            id: 3,
            title: t('stages.stage3.title'),
            purpose: t('stages.stage3.purpose'),
            includes: [
                t('stages.stage3.includes.application'),
                t('stages.stage3.includes.liaison'),
                t('stages.stage3.includes.administrative'),
                t('stages.stage3.includes.preArrival')
            ],
            deliverables: [
                t('stages.stage3.deliverables.confirmation'),
                t('stages.stage3.deliverables.support')
            ],
            price: 749,
            duration: t('stages.stage3.duration'),
            cta: t('stages.stage3.cta')
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 pt-36">
                <div className="container-max section-padding text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
                    <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-4xl mx-auto">{t('hero.supporting')}</p>
                    <p className="text-lg max-w-3xl mx-auto">{t('hero.subtitle')}</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 bg-white">
                <div className="container-max section-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('intro.title')}</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t('intro.body')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stages Section */}
            <section className="py-12 bg-gray-50">
                <div className="container-max section-padding">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {stages.map((stage) => (
                            <Card key={stage.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <span className="text-2xl font-bold text-primary-600 mr-3">🔹 {t(`stages.stage${stage.id}.label`)}:</span>
                                                <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-6">{stage.purpose}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-6">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-3">{t('includes')}</h4>
                                                    <ul className="space-y-2">
                                                        {stage.includes.map((item, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                                <span className="text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-3">{t('deliverables')}</h4>
                                                    <ul className="space-y-2">
                                                        {stage.deliverables.map((item, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                                <span className="text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 min-w-[180px] text-center ml-6">
                                            <div className="text-sm font-medium text-gray-500 mb-1">{t('price')}</div>
                                            <div className="text-2xl font-bold text-primary-700 mb-3">USD {stage.price}</div>
                                            <div className="text-sm text-gray-600 mb-4">{stage.duration}</div>
                                            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                                                {stage.cta}
                                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Note section - Commented out until note property is added to stage type */}
                                    {/* {stage.note && (
                                        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                                            <p className="text-sm text-blue-700">
                                                <span className="font-medium">{t('note')}:</span> {stage.note}
                                            </p>
                                        </div>
                                    )} */}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment & Policy Section */}
            <section className="py-16 bg-white">
                <div className="container-max section-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('payment.title')}</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('payment.commitment')}</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700"><strong>{t('payment.points.modular')}:</strong> {t('payment.points.modularDesc')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700"><strong>{t('payment.points.obligation')}:</strong> {t('payment.points.obligationDesc')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700"><strong>{t('payment.points.transparency')}:</strong> {t('payment.points.transparencyDesc')}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('payment.methodsTitle')}</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">{t('payment.methods.transfer')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-gray-600 mb-6">
                                {t('payment.ctaText')}
                            </p>
                            <Link
                                href={`/${locale}/contact`}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8 transition-colors"
                            >
                                {tCommon('navigation.contact')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
