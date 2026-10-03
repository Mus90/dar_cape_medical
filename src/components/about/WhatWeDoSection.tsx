'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const WhatWeDoSection = () => {
  const t = useTranslations('about.whatWeDo');

  const doList = [
    t('do.assess'),
    t('do.research'),
    t('do.identify'),
    t('do.prepare'),
    t('do.documents'),
    t('do.applications'),
    t('do.regulatory'),
    t('do.interviews'),
    t('do.track')
  ];

  const dontList = [
    t('dont.admission'),
    t('dont.posts'),
    t('dont.registration'),
    t('dont.impersonate'),
    t('dont.inaccurate'),
    t('dont.partnerships')
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-lg"
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-serif">
              {t('do.title')}
            </h3>
          </div>
          <ul className="space-y-4">
            {doList.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What We Don't Do */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg"
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <XCircleIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-serif">
              {t('dont.title')}
            </h3>
          </div>
          <ul className="space-y-4">
            {dontList.map((item, index) => (
              <li key={index} className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Purpose Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-navy-900 rounded-2xl p-8 text-center"
      >
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
          {t('purpose')}
        </p>
      </motion.div>
    </div>
  );
};

export default WhatWeDoSection;
