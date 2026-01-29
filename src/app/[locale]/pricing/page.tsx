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
        title: t('pricingPage.hero.title'),
        description: t('pricingPage.hero.subtitle'),
    };
}

export default function PricingPage({ params: { locale } }: Props) {
    setRequestLocale(locale);
    const t = useTranslations('pricingPage');
    const tCommon = useTranslations();

    const pricingPlans = [
        {
            id: 1,
            title: t('stages.stage1.title'),
            price: 159,
            duration: t('stages.stage1.duration'),
            features: [
                t('stages.stage1.features.cv'),
                t('stages.stage1.features.eligibility'),
                t('stages.stage1.features.specialty'),
                t('stages.stage1.features.institution'),
                t('stages.stage1.features.summary'),
                t('stages.stage1.features.recommended')
            ],
            cta: t('stages.stage1.cta')
        },
        {
            id: 2,
            title: t('stages.stage2.title'),
            price: 369,
            duration: t('stages.stage2.duration'),
            features: [
                t('stages.stage2.features.cv'),
                t('stages.stage2.features.letters'),
                t('stages.stage2.features.communication'),
                t('stages.stage2.features.checklists'),
                t('stages.stage2.features.templates'),
                t('stages.stage2.features.timeline')
            ],
            cta: t('stages.stage2.cta')
        },
        {
            id: 3,
            title: t('stages.stage3.title'),
            price: 749,
            duration: t('stages.stage3.duration'),
            features: [
                t('stages.stage3.features.submission'),
                t('stages.stage3.features.liaison'),
                t('stages.stage3.features.handling'),
                t('stages.stage3.features.interview'),
                t('stages.stage3.features.offer'),
                t('stages.stage3.features.preArrival')
            ],
            cta: t('stages.stage3.cta')
        }
    ];

    const faqs = t.raw('faq.items') as Array<{ q: string, a: string }>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
                <div className="container-max section-padding text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
                    <p className="text-xl text-primary-100">{t('hero.subtitle')}</p>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-16">
                <div className="container-max section-padding">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className="relative"
                            >
                                <Card className="h-full flex flex-col overflow-hidden border-2 border-gray-200">
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                                            <span className="text-gray-600"> USD</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-6">{plan.duration}</p>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto p-6 pt-0">
                                        <button
                                            className={`w-full py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50`}
                                        >
                                            {plan.cta}
                                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container-max section-padding">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('faq.title')}</h2>

                        <div className="space-y-6">
                            {faqs.map((faq: { q: string, a: string }, index: number) => (
                                <div key={index} className="border-b border-gray-200 pb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    href={`/${locale}/contact`}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-3 md:text-lg md:px-8 transition-colors"
                                >
                                    {tCommon('navigation.contact')}
                                </Link>
                                <Link
                                    href={`/${locale}/how-it-works`}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-3 md:text-lg md:px-8 transition-colors"
                                >
                                    {tCommon('navigation.howItWorks')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
