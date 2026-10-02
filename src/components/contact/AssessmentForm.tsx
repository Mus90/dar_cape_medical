'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRightIcon, DocumentArrowUpIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const AssessmentForm = () => {
  const t = useTranslations('assessment');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [formStartTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Time-based validation - form must be filled for at least 5 seconds
    const timeElapsed = Date.now() - formStartTime;
    if (timeElapsed < 5000) {
      setSubmitError('Please take your time to complete the form accurately');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append('submissionTime', timeElapsed.toString());
    
    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        body: formData, // Send as FormData (not JSON) to support file uploads
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit assessment');
      }

      setReference(result.reference);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Assessment submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit assessment');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-premium p-8 text-center"
      >
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2 font-serif">{t('confirmation.title')}</h3>
        <p className="text-gray-600 mb-4">{t('confirmation.description')}</p>
        {reference && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-amber-900 mb-1">Reference Number</p>
            <p className="text-lg font-bold text-amber-800">{reference}</p>
            <p className="text-xs text-amber-700 mt-2">Please save this reference for your records</p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card-premium p-8"
    >
      <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">{t('title')}</h2>
      <p className="text-gray-600 mb-8">{t('description')}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error Message */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start">
            <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 text-sm">{submitError}</p>
          </div>
        )}

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.fullName.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.fullName.placeholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.email.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.email.placeholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.whatsapp.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.whatsapp.placeholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.nationality.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nationality"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.nationality.placeholder')}
            />
          </div>
        </div>

        {/* Medical Background */}
        <div className="border-t border-gray-200 pt-5">
          <h3 className="text-lg font-semibold text-navy-900 mb-4">{t('form.medicalBackground')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.currentCountry.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="currentCountry"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.currentCountry.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.medicalSchool.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="medicalSchool"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.medicalSchool.placeholder')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.qualificationCountry.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="qualificationCountry"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.qualificationCountry.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.graduationYear.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="graduationYear"
                required
                min="1950"
                max={new Date().getFullYear() + 5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.graduationYear.placeholder')}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.internship.label')} <span className="text-red-500">*</span>
            </label>
            <select
              name="internship"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">{t('form.internship.placeholder')}</option>
              <option value="yes">{t('form.internship.options.yes')}</option>
              <option value="no">{t('form.internship.options.no')}</option>
              <option value="in-progress">{t('form.internship.options.inProgress')}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.currentPosition.label')}
              </label>
              <input
                type="text"
                name="currentPosition"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.currentPosition.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.experience.label')}
              </label>
              <input
                type="number"
                name="experience"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.experience.placeholder')}
              />
            </div>
          </div>
        </div>

        {/* Pathway Goals */}
        <div className="border-t border-gray-200 pt-5">
          <h3 className="text-lg font-semibold text-navy-900 mb-4">{t('form.pathwayGoals')}</h3>
          
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.desiredPathway.label')} <span className="text-red-500">*</span>
            </label>
            <select
              name="desiredPathway"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">{t('form.desiredPathway.placeholder')}</option>
              <option value="registrar">{t('form.desiredPathway.options.registrar')}</option>
              <option value="fellowship">{t('form.desiredPathway.options.fellowship')}</option>
              <option value="hpcsa">{t('form.desiredPathway.options.hpcsa')}</option>
              <option value="unsure">{t('form.desiredPathway.options.unsure')}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.desiredSpecialty.label')} <span className="text-red-500">*</span>
              </label>
              <select
                name="desiredSpecialty"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="">{t('form.desiredSpecialty.placeholder')}</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="orthopaedic-surgery">Orthopaedic Surgery</option>
                <option value="general-surgery">General Surgery</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="paediatrics">Paediatrics</option>
                <option value="obstetrics-gynaecology">Obstetrics & Gynaecology</option>
                <option value="anaesthesiology">Anaesthesiology</option>
                <option value="radiology">Radiology</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="emergency-medicine">Emergency Medicine</option>
                <option value="family-medicine">Family Medicine</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.preferredUniversity.label')}
              </label>
              <input
                type="text"
                name="preferredUniversity"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.preferredUniversity.placeholder')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.targetYear.label')}
              </label>
              <input
                type="number"
                name="targetYear"
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.targetYear.placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                {t('form.selfFunding.label')} <span className="text-red-500">*</span>
              </label>
              <select
                name="selfFunding"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="">{t('form.selfFunding.placeholder')}</option>
                <option value="yes">{t('form.selfFunding.options.yes')}</option>
                <option value="no">{t('form.selfFunding.options.no')}</option>
                <option value="unsure">{t('form.selfFunding.options.unsure')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-t border-gray-200 pt-5">
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.cv.label')} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <DocumentArrowUpIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            <p className="text-xs text-gray-500 mt-1">{t('form.cv.note')}</p>
          </div>
        </div>

        {/* Honeypot field for bot detection - hidden from users */}
        <div style={{ display: 'none' }}>
          <input
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
              {t('form.submitting') || 'Submitting...'}
            </>
          ) : (
            <>
              {t('form.submit')}
              <ArrowRightIcon className="h-5 w-5 ml-2 inline-block" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          {t('form.disclaimer')}
        </p>
      </form>
    </motion.div>
  );
};

export default AssessmentForm;
