'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  UserIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline';

const TrainingPathwaySection = () => {
  const t = useTranslations('trainingPathway');

  const steps = [
    {
      icon: UserIcon,
      title: t('steps.assessment.title'),
      description: t('steps.assessment.description'),
      category: 'candidate'
    },
    {
      icon: BuildingOfficeIcon,
      title: t('steps.matching.title'),
      description: t('steps.matching.description'),
      category: 'candidate'
    },
    {
      icon: DocumentTextIcon,
      title: t('steps.preparation.title'),
      description: t('steps.preparation.description'),
      category: 'candidate'
    },
    {
      icon: AcademicCapIcon,
      title: t('steps.university.title'),
      description: t('steps.university.description'),
      category: 'university'
    },
    {
      icon: CheckBadgeIcon,
      title: t('steps.verification.title'),
      description: t('steps.verification.description'),
      category: 'regulatory'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: t('steps.regulatory.title'),
      description: t('steps.regulatory.description'),
      category: 'regulatory'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('steps.interview.title'),
      description: t('steps.interview.description'),
      category: 'university'
    },
    {
      icon: IdentificationIcon,
      title: t('steps.registration.title'),
      description: t('steps.registration.description'),
      category: 'regulatory'
    }
  ];

  const categories = {
    candidate: {
      label: t('categories.candidate'),
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    university: {
      label: t('categories.university'),
      color: 'from-navy-600 to-navy-700',
      bgColor: 'bg-navy-50'
    },
    regulatory: {
      label: t('categories.regulatory'),
      color: 'from-gold-500 to-gold-600',
      bgColor: 'bg-gold-50'
    }
  };

  const distinctions = [
    {
      title: t('distinctions.university.title'),
      description: t('distinctions.university.description'),
      category: 'university'
    },
    {
      title: t('distinctions.employment.title'),
      description: t('distinctions.employment.description'),
      category: 'university'
    },
    {
      title: t('distinctions.cmsa.title'),
      description: t('distinctions.cmsa.description'),
      category: 'regulatory'
    },
    {
      title: t('distinctions.hpcsa.title'),
      description: t('distinctions.hpcsa.description'),
      category: 'regulatory'
    },
    {
      title: t('distinctions.epic.title'),
      description: t('distinctions.epic.description'),
      category: 'regulatory'
    },
    {
      title: t('distinctions.foreign.title'),
      description: t('distinctions.foreign.description'),
      category: 'regulatory'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            {t('subtitle')}
          </p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
            {t('variationNote')}
          </p>
        </motion.div>

        {/* Pathway Diagram */}
        <div className="mb-16">
          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, cat]) => (
              <div key={key} className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${cat.color}`} />
                <span className="text-sm font-medium text-gray-700">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${categories[step.category as keyof typeof categories].bgColor} bg-opacity-50 rounded-2xl p-6 border-2 border-transparent hover:border-${step.category === 'candidate' ? 'teal' : step.category === 'university' ? 'navy' : 'gold'}-300 transition-all duration-300`}
              >
                {/* Step Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${categories[step.category as keyof typeof categories].color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${categories[step.category as keyof typeof categories].color} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Distinctions */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-navy-900 mb-8 font-serif text-center"
          >
            {t('distinctions.title')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distinctions.map((distinction, index) => (
              <motion.div
                key={distinction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border-2 ${categories[distinction.category as keyof typeof categories].bgColor} bg-opacity-30`}
              >
                <h4 className="font-semibold text-navy-900 mb-2">{distinction.title}</h4>
                <p className="text-sm text-gray-600">{distinction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-4">
            <span className="text-3xl">⚠️</span>
            <h3 className="text-xl font-bold text-amber-900 font-serif">
              {t('notice.title')}
            </h3>
          </div>
          <p className="text-amber-800 max-w-3xl mx-auto">
            {t('notice.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPathwaySection;
