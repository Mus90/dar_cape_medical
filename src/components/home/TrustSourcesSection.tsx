'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const TrustSourcesSection = () => {
  const t = useTranslations('trustSources');

  const sources = [
    {
      icon: BuildingOfficeIcon,
      title: t('sources.universities'),
      description: t('sources.universitiesDesc')
    },
    {
      icon: ShieldCheckIcon,
      title: t('sources.hpcsa'),
      description: t('sources.hpcsaDesc')
    },
    {
      icon: AcademicCapIcon,
      title: t('sources.cmsa'),
      description: t('sources.cmsaDesc')
    },
    {
      icon: DocumentTextIcon,
      title: t('sources.department'),
      description: t('sources.departmentDesc')
    },
    {
      icon: CheckBadgeIcon,
      title: t('sources.epic'),
      description: t('sources.epicDesc')
    },
    {
      icon: DocumentTextIcon,
      title: t('sources.handbooks'),
      description: t('sources.handbooksDesc')
    }
  ];

  const standards = [
    {
      icon: CheckBadgeIcon,
      title: t('standards.verified.title'),
      description: t('standards.verified.description'),
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: ExclamationTriangleIcon,
      title: t('standards.confirmation.title'),
      description: t('standards.confirmation.description'),
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: LightBulbIcon,
      title: t('standards.assessment.title'),
      description: t('standards.assessment.description'),
      color: 'from-navy-600 to-navy-700',
      bgColor: 'bg-navy-50'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Official Sources */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-navy-900 mb-8 font-serif text-center"
          >
            {t('sources.title')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sources.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <source.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">{source.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Information Standards */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-navy-900 mb-8 font-serif text-center"
          >
            {t('standards.title')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${standard.bgColor} p-6 rounded-xl border-2 border-transparent`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${standard.color} rounded-xl flex items-center justify-center mb-4`}>
                  <standard.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-navy-900 mb-3 font-serif">{standard.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Authority Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
            <BuildingOfficeIcon className="h-6 w-6 text-teal-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-serif">
            {t('authority.title')}
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('authority.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSourcesSection;
