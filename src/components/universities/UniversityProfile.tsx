'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  MapPinIcon,
  AcademicCapIcon,
  ClockIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface UniversityProfileProps {
  locale: string;
  university: {
    name: string;
    faculty: string;
    location: string;
    specialistPrograms: string[];
    internationalPathways: string[];
    trainingStructure: string;
    applicationApproach: string;
    programDuration: string;
    cmsaRelationship: string;
    hpcsaConsiderations: string;
    fundingConsiderations: string;
    admissionRequirements: string[];
    applicationTiming: string;
    departmentContact: string;
    officialSources: Array<{ name: string; url: string }>;
    lastVerified: string;
    verificationStatus: 'officially-verified' | 'confirmation-required' | 'historical-recheck';
  };
}

const UniversityProfile = ({ locale, university }: UniversityProfileProps) => {
  const t = useTranslations('universityProfile');

  const statusConfig = {
    'officially-verified': {
      label: t('status.officiallyVerified'),
      color: 'bg-teal-100 text-teal-800 border-teal-200'
    },
    'confirmation-required': {
      label: t('status.confirmationRequired'),
      color: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    'historical-recheck': {
      label: t('status.historicalRecheck'),
      color: 'bg-gray-100 text-gray-800 border-gray-200'
    }
  };

  const status = statusConfig[university.verificationStatus];

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
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-teal-600 rounded-2xl flex items-center justify-center">
                <BuildingOfficeIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 font-serif">
                  {university.name}
                </h1>
                <p className="text-gray-600">{university.faculty}</p>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${status.color}`}>
              {status.label}
            </span>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
            <MapPinIcon className="h-5 w-5" />
            <span>{university.location}</span>
          </div>
        </motion.div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12"
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-900 font-semibold mb-1">{t('noRelationship.title')}</p>
              <p className="text-amber-800 text-sm">{t('noRelationship.description')}</p>
            </div>
          </div>
        </motion.div>

        {/* Specialist Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.programs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {university.specialistPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700">
                {program}
              </div>
            ))}
          </div>
        </motion.div>

        {/* International Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <BuildingOfficeIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.internationalPathways')}
          </h2>
          <ul className="space-y-2">
            {university.internationalPathways.map((pathway, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{pathway}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Training Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <AcademicCapIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.trainingStructure')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{university.trainingStructure}</p>
        </motion.div>

        {/* Application Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.applicationApproach')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{university.applicationApproach}</p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Program Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <h3 className="text-lg font-bold text-navy-900 mb-3 font-serif flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-teal-600" />
              {t('sections.duration')}
            </h3>
            <p className="text-gray-700">{university.programDuration}</p>
          </motion.div>

          {/* CMSA Relationship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <h3 className="text-lg font-bold text-navy-900 mb-3 font-serif flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2 text-teal-600" />
              {t('sections.cmsa')}
            </h3>
            <p className="text-gray-700">{university.cmsaRelationship}</p>
          </motion.div>

          {/* HPCSA Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <h3 className="text-lg font-bold text-navy-900 mb-3 font-serif flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2 text-teal-600" />
              {t('sections.hpcsa')}
            </h3>
            <p className="text-gray-700">{university.hpcsaConsiderations}</p>
          </motion.div>

          {/* Funding Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <h3 className="text-lg font-bold text-navy-900 mb-3 font-serif flex items-center">
              <CurrencyDollarIcon className="h-5 w-5 mr-2 text-teal-600" />
              {t('sections.funding')}
            </h3>
            <p className="text-gray-700">{university.fundingConsiderations}</p>
          </motion.div>
        </div>

        {/* Admission Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.requirements')}
          </h2>
          <ul className="space-y-2">
            {university.admissionRequirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Application Timing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <CalendarIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.timing')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{university.applicationTiming}</p>
        </motion.div>

        {/* Department Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <EnvelopeIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.contact')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{university.departmentContact}</p>
        </motion.div>

        {/* Official Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-white p-8 rounded-xl border border-gray-200 mb-6"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif flex items-center">
            <ArrowTopRightOnSquareIcon className="h-6 w-6 mr-3 text-teal-600" />
            {t('sections.sources')}
          </h2>
          <div className="space-y-3">
            {university.officialSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                <span>{source.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Last Verified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-12"
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold">{t('lastVerified')}:</span> {university.lastVerified}
          </p>
        </motion.div>

        {/* Bottom Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 leading-relaxed">
              {t('bottomDisclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default UniversityProfile;
