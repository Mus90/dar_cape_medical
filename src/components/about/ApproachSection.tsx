'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ApproachSection = () => {
  const t = useTranslations('about.approach');

  const principles = [
    {
      title: t('evidenceBased.title'),
      description: t('evidenceBased.description')
    },
    {
      title: t('individualized.title'),
      description: t('individualized.description')
    },
    {
      title: t('transparent.title'),
      description: t('transparent.description')
    },
    {
      title: t('structured.title'),
      description: t('structured.description')
    }
  ];

  return (
    <div>
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
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApproachSection;
