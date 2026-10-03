'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const EvidenceSection = () => {
  const t = useTranslations('about.evidence');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-8">
        <div className="flex items-start space-x-4 rtl:space-x-reverse">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              {t('policyTitle')}
            </h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              {t('policyDescription')}
            </p>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t('point1')}</span>
              </li>
              <li className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t('point2')}</span>
              </li>
              <li className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t('point3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
          {t('sourcesTitle')}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('sourcesDescription')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-navy-900 mb-2">{t('regulatorySources')}</h4>
            <ul className="space-y-1">
              <li>• HPCSA official guidelines</li>
              <li>• University program requirements</li>
              <li>• CMSA examination information</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-navy-900 mb-2">{t('institutionalSources')}</h4>
            <ul className="space-y-1">
              <li>• Hospital training program details</li>
              <li>• Faculty of Health Sciences</li>
              <li>• College of Medicine</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EvidenceSection;
