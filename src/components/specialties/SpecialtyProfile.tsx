'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface SpecialtyProfileProps {
  locale: string;
  specialty: {
    name: string;
    overview: string;
    trainingStructure: string;
    cmsaPathway: string;
    universities: string[];
    internationalConsiderations: string;
    competitivenessFactors: string[];
    relevantExperience: string[];
    regulatoryConsiderations: string;
    preparatorySteps: string[];
    officialSources: Array<{ name: string; url: string }>;
    lastVerified: string;
  };
}

const SpecialtyProfile = ({ locale, specialty }: SpecialtyProfileProps) => {
  const t = useTranslations('specialtyProfile');

  return (
    <main className="section-padding pt-32">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-teal-600 rounded-2xl flex items-center justify-center">
              <AcademicCapIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 font-serif">
                {specialty.name}
              </h1>
              <p className="text-gray-600">{t('subtitle')}</p>
            </div>
          </div>
        </motion.div>

        {/* Eligibility Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12"
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 leading-relaxed">
              {t('eligibilityWarning')}
            </p>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.overview')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{specialty.overview}</p>
        </motion.div>

        {/* Training Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.trainingStructure')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{specialty.trainingStructure}</p>
        </motion.div>

        {/* CMSA Pathway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <ShieldCheckIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.cmsaPathway')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{specialty.cmsaPathway}</p>
        </motion.div>

        {/* Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <BuildingOfficeIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.universities')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specialty.universities.map((university, index) => (
              <Link
                key={index}
                href={`/${locale}/universities/${university.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-50 px-4 py-3 rounded-lg text-teal-600 hover:text-teal-700 hover:bg-gray-100 transition-colors flex items-center"
              >
                <span>{university}</span>
                <ArrowRightIcon className="h-4 w-4 ml-auto" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* International Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <UserGroupIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.international')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{specialty.internationalConsiderations}</p>
        </motion.div>

        {/* Competitiveness Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.competitiveness')}
          </h2>
          <ul className="space-y-2">
            {specialty.competitivenessFactors.map((factor, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{factor}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Relevant Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.experience')}
          </h2>
          <ul className="space-y-2">
            {specialty.relevantExperience.map((experience, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{experience}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Regulatory Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <ShieldCheckIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.regulatory')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{specialty.regulatoryConsiderations}</p>
        </motion.div>

        {/* Preparatory Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.preparatory')}
          </h2>
          <ul className="space-y-2">
            {specialty.preparatorySteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Official Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <ArrowRightIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.sources')}
          </h2>
          <div className="space-y-3">
            {specialty.officialSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
              >
                <ArrowRightIcon className="h-4 w-4 mr-2" />
                <span>{source.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Last Verified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-12"
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold">{t('lastVerified')}:</span> {specialty.lastVerified}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              {t('cta.title', { specialty: specialty.name })}
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
            >
              {t('cta.button', { specialty: specialty.name })}
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SpecialtyProfile;
