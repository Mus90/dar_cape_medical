'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const t = useTranslations('servicesStages');
  const locale = useLocale();

  const stages = [
    {
      number: 1,
      icon: DocumentTextIcon,
      title: t('stage1.title'),
      for: t('stage1.for'),
      problem: t('stage1.problem'),
      deliverables: t.raw('stage1.deliverables'),
      next: t('stage1.next'),
      color: 'from-navy-600 to-navy-700'
    },
    {
      number: 2,
      icon: AcademicCapIcon,
      title: t('stage2.title'),
      for: t('stage2.for'),
      problem: t('stage2.problem'),
      deliverables: t.raw('stage2.deliverables'),
      next: t('stage2.next'),
      color: 'from-teal-600 to-teal-700'
    },
    {
      number: 3,
      icon: ClipboardDocumentListIcon,
      title: t('stage3.title'),
      for: t('stage3.for'),
      problem: t('stage3.problem'),
      deliverables: t.raw('stage3.deliverables'),
      next: t('stage3.next'),
      color: 'from-navy-700 to-navy-800'
    },
    {
      number: 4,
      icon: ShieldCheckIcon,
      title: t('stage4.title'),
      for: t('stage4.for'),
      problem: t('stage4.problem'),
      deliverables: t.raw('stage4.deliverables'),
      next: t('stage4.next'),
      color: 'from-teal-700 to-teal-800'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Stage Number and Icon */}
                <div className={`md:w-64 bg-gradient-to-br ${stage.color} p-8 flex flex-col items-center justify-center text-white`}>
                  <div className="text-6xl font-bold opacity-30 mb-4 font-serif">
                    {String(stage.number).padStart(2, '0')}
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <stage.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center font-serif">
                    {stage.title}
                  </h3>
                </div>

                {/* Stage Details */}
                <div className="flex-1 p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          Who This Is For
                        </h4>
                        <p className="text-navy-900 leading-relaxed">
                          {stage.for}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          Problem We Solve
                        </h4>
                        <p className="text-navy-900 leading-relaxed">
                          {stage.problem}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {stage.deliverables.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-navy-900">
                              <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          What Happens Next
                        </h4>
                        <p className="text-navy-900 leading-relaxed">
                          {stage.next}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              {t('ctaTitle')}
            </h3>
            <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
            >
              {t('cta')}
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


