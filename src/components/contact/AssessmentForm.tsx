'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { normalizeAssessmentPhone } from '@/utils/assessmentPhone';
import { ArrowRightIcon, DocumentArrowUpIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const AssessmentForm = () => {
  const t = useTranslations('assessment');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [formStartTime] = useState(Date.now());
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const submittingRef = useRef(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const validateField = (field: HTMLInputElement | HTMLSelectElement) => {
    if (field.name === 'website_url') return '';
    if (field instanceof HTMLInputElement && field.type === 'file') {
      const file = field.files?.[0];
      if (!file || file.size === 0) return t('validation.required');
      if (!/\.(pdf|doc|docx)$/i.test(file.name) || (file.type && ![
        'application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ].includes(file.type))) return t('validation.fileType');
      if (file.size > 5 * 1024 * 1024) return t('validation.fileSize');
      return '';
    }
    const value = field.value.trim();
    if (field.required && !value) return t('validation.required');
    if (!value) return '';
    if (field.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('validation.email');
    if (field.name === 'whatsapp' && !normalizeAssessmentPhone(value)) return t('validation.phone');
    if (field instanceof HTMLInputElement && field.type === 'number') {
      if (!Number.isInteger(Number(value)) || !field.validity.valid) {
        return field.max
          ? t('validation.year', { min: field.min, max: field.max })
          : t('validation.number');
      }
    }
    return '';
  };

  const updateFieldError = (field: HTMLInputElement | HTMLSelectElement) => {
    setFieldErrors(current => ({ ...current, [field.name]: validateField(field) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    const fields = Array.from(e.currentTarget.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select'));
    const errors = Object.fromEntries(fields.map(field => [field.name, validateField(field)]));
    setFieldErrors(errors);
    const firstInvalid = fields.find(field => errors[field.name]);
    if (firstInvalid) {
      setSubmitError(t('validation.correctFields'));
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    // Time-based validation - form must be filled for at least 5 seconds
    const timeElapsed = Date.now() - formStartTime;
    if (timeElapsed < 5000) {
      setSubmitError(t('validation.tooFast'));
      setIsSubmitting(false);
      submittingRef.current = false;
      return;
    }

    const formData = new FormData(e.currentTarget);
    for (const [key, value] of Array.from(formData.entries())) {
      if (typeof value === 'string') formData.set(key, value.trim());
    }
    formData.append('submissionTime', timeElapsed.toString());
    formData.set('whatsapp', normalizeAssessmentPhone(String(formData.get('whatsapp'))) || '');
    let failureMessage = t('validation.submitFailed');
    
    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        body: formData, // Send as FormData (not JSON) to support file uploads
      });

      if (!response.ok) {
        if (response.status === 429) failureMessage = t('validation.rateLimit');
        throw new Error('Assessment submission failed');
      }
      const result = await response.json();

      setReference(result.reference);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Assessment submission error:', error);
      setSubmitError(failureMessage);
      requestAnimationFrame(() => feedbackRef.current?.focus());
    } finally {
      setIsSubmitting(false);
      submittingRef.current = false;
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
      className="card-premium p-5 sm:p-8 hover:scale-100"
    >
      <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">{t('title')}</h2>
      <p className="text-gray-600 mb-8">{t('description')}</p>

      <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="space-y-5"
        onBlur={event => {
          if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) updateFieldError(event.target);
        }}
        onChange={event => {
          const field = event.target;
          if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
            if (fieldErrors[field.name] || field.type === 'file') updateFieldError(field);
            setSubmitError(null);
          }
        }}>
        {/* Error Message */}
        {submitError && (
          <div ref={feedbackRef} tabIndex={-1} role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start">
            <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 text-sm">{submitError}</p>
          </div>
        )}

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="assessment-fullName" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.fullName.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
                autoComplete="name"
                id="assessment-fullName"
                aria-invalid={Boolean(fieldErrors.fullName)}
                aria-describedby={fieldErrors.fullName ? 'assessment-fullName-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.fullName.placeholder')}
            />
              {fieldErrors.fullName && <p id="assessment-fullName-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="assessment-email" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.email.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
                dir="ltr"
                autoComplete="email"
                id="assessment-email"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'assessment-email-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.email.placeholder')}
            />
              {fieldErrors.email && <p id="assessment-email-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="assessment-whatsapp" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.whatsapp.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
                dir="ltr"
                autoComplete="tel"
                id="assessment-whatsapp"
                aria-invalid={Boolean(fieldErrors.whatsapp)}
                aria-describedby={fieldErrors.whatsapp ? 'assessment-whatsapp-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.whatsapp.placeholder')}
            />
              {fieldErrors.whatsapp && <p id="assessment-whatsapp-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.whatsapp}</p>}
          </div>
          <div>
            <label htmlFor="assessment-nationality" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.nationality.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nationality"
                id="assessment-nationality"
                aria-invalid={Boolean(fieldErrors.nationality)}
                aria-describedby={fieldErrors.nationality ? 'assessment-nationality-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              placeholder={t('form.nationality.placeholder')}
            />
              {fieldErrors.nationality && <p id="assessment-nationality-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.nationality}</p>}
          </div>
        </div>

        {/* Medical Background */}
        <div className="border-t border-gray-200 pt-5">
          <h3 className="text-lg font-semibold text-navy-900 mb-4">{t('form.medicalBackground')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="assessment-currentCountry" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.currentCountry.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="currentCountry"
                id="assessment-currentCountry"
                aria-invalid={Boolean(fieldErrors.currentCountry)}
                aria-describedby={fieldErrors.currentCountry ? 'assessment-currentCountry-error' : undefined}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.currentCountry.placeholder')}
              />
              {fieldErrors.currentCountry && <p id="assessment-currentCountry-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.currentCountry}</p>}
            </div>
            <div>
              <label htmlFor="assessment-medicalSchool" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.medicalSchool.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="medicalSchool"
                id="assessment-medicalSchool"
                aria-invalid={Boolean(fieldErrors.medicalSchool)}
                aria-describedby={fieldErrors.medicalSchool ? 'assessment-medicalSchool-error' : undefined}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.medicalSchool.placeholder')}
              />
              {fieldErrors.medicalSchool && <p id="assessment-medicalSchool-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.medicalSchool}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="assessment-qualificationCountry" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.qualificationCountry.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="qualificationCountry"
                id="assessment-qualificationCountry"
                aria-invalid={Boolean(fieldErrors.qualificationCountry)}
                aria-describedby={fieldErrors.qualificationCountry ? 'assessment-qualificationCountry-error' : undefined}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.qualificationCountry.placeholder')}
              />
              {fieldErrors.qualificationCountry && <p id="assessment-qualificationCountry-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.qualificationCountry}</p>}
            </div>
            <div>
              <label htmlFor="assessment-graduationYear" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.graduationYear.label')} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="graduationYear"
                id="assessment-graduationYear"
                aria-invalid={Boolean(fieldErrors.graduationYear)}
                aria-describedby={fieldErrors.graduationYear ? 'assessment-graduationYear-error' : undefined}
                required
                min="1950"
                max={new Date().getFullYear() + 5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.graduationYear.placeholder')}
              />
              {fieldErrors.graduationYear && <p id="assessment-graduationYear-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.graduationYear}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="assessment-internship" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.internship.label')} <span className="text-red-500">*</span>
            </label>
            <select
              name="internship"
                id="assessment-internship"
                aria-invalid={Boolean(fieldErrors.internship)}
                aria-describedby={fieldErrors.internship ? 'assessment-internship-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">{t('form.internship.placeholder')}</option>
              <option value="yes">{t('form.internship.options.yes')}</option>
              <option value="no">{t('form.internship.options.no')}</option>
              <option value="in-progress">{t('form.internship.options.inProgress')}</option>
            </select>
              {fieldErrors.internship && <p id="assessment-internship-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.internship}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="assessment-currentPosition" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.currentPosition.label')}
              </label>
              <input
                type="text"
                name="currentPosition"
                id="assessment-currentPosition"
                aria-invalid={Boolean(fieldErrors.currentPosition)}
                aria-describedby={fieldErrors.currentPosition ? 'assessment-currentPosition-error' : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.currentPosition.placeholder')}
              />
              {fieldErrors.currentPosition && <p id="assessment-currentPosition-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.currentPosition}</p>}
            </div>
            <div>
              <label htmlFor="assessment-experience" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.experience.label')}
              </label>
              <input
                type="number"
                name="experience"
                id="assessment-experience"
                aria-invalid={Boolean(fieldErrors.experience)}
                aria-describedby={fieldErrors.experience ? 'assessment-experience-error' : undefined}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.experience.placeholder')}
              />
              {fieldErrors.experience && <p id="assessment-experience-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.experience}</p>}
            </div>
          </div>
        </div>

        {/* Pathway Goals */}
        <div className="border-t border-gray-200 pt-5">
          <h3 className="text-lg font-semibold text-navy-900 mb-4">{t('form.pathwayGoals')}</h3>
          
          <div>
            <label htmlFor="assessment-desiredPathway" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.desiredPathway.label')} <span className="text-red-500">*</span>
            </label>
            <select
              name="desiredPathway"
                id="assessment-desiredPathway"
                aria-invalid={Boolean(fieldErrors.desiredPathway)}
                aria-describedby={fieldErrors.desiredPathway ? 'assessment-desiredPathway-error' : undefined}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            >
              <option value="">{t('form.desiredPathway.placeholder')}</option>
              <option value="registrar">{t('form.desiredPathway.options.registrar')}</option>
              <option value="fellowship">{t('form.desiredPathway.options.fellowship')}</option>
              <option value="hpcsa">{t('form.desiredPathway.options.hpcsa')}</option>
              <option value="unsure">{t('form.desiredPathway.options.unsure')}</option>
            </select>
              {fieldErrors.desiredPathway && <p id="assessment-desiredPathway-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.desiredPathway}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="assessment-desiredSpecialty" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.desiredSpecialty.label')} <span className="text-red-500">*</span>
              </label>
              <select
                name="desiredSpecialty"
                id="assessment-desiredSpecialty"
                aria-invalid={Boolean(fieldErrors.desiredSpecialty)}
                aria-describedby={fieldErrors.desiredSpecialty ? 'assessment-desiredSpecialty-error' : undefined}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
              {fieldErrors.desiredSpecialty && <p id="assessment-desiredSpecialty-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.desiredSpecialty}</p>}
            </div>
            <div>
              <label htmlFor="assessment-preferredUniversity" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.preferredUniversity.label')}
              </label>
              <input
                type="text"
                name="preferredUniversity"
                id="assessment-preferredUniversity"
                aria-invalid={Boolean(fieldErrors.preferredUniversity)}
                aria-describedby={fieldErrors.preferredUniversity ? 'assessment-preferredUniversity-error' : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.preferredUniversity.placeholder')}
              />
              {fieldErrors.preferredUniversity && <p id="assessment-preferredUniversity-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.preferredUniversity}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="assessment-targetYear" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.targetYear.label')}
              </label>
              <input
                type="number"
                name="targetYear"
                id="assessment-targetYear"
                aria-invalid={Boolean(fieldErrors.targetYear)}
                aria-describedby={fieldErrors.targetYear ? 'assessment-targetYear-error' : undefined}
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder={t('form.targetYear.placeholder')}
              />
              {fieldErrors.targetYear && <p id="assessment-targetYear-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.targetYear}</p>}
            </div>
            <div>
              <label htmlFor="assessment-selfFunding" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.selfFunding.label')} <span className="text-red-500">*</span>
              </label>
              <select
                name="selfFunding"
                id="assessment-selfFunding"
                aria-invalid={Boolean(fieldErrors.selfFunding)}
                aria-describedby={fieldErrors.selfFunding ? 'assessment-selfFunding-error' : undefined}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="">{t('form.selfFunding.placeholder')}</option>
                <option value="yes">{t('form.selfFunding.options.yes')}</option>
                <option value="no">{t('form.selfFunding.options.no')}</option>
                <option value="unsure">{t('form.selfFunding.options.unsure')}</option>
              </select>
              {fieldErrors.selfFunding && <p id="assessment-selfFunding-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.selfFunding}</p>}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-t border-gray-200 pt-5">
          <div>
            <label htmlFor="assessment-cv" className="block text-sm font-semibold text-navy-900 mb-2">
              {t('form.cv.label')} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                name="cv"
                id="assessment-cv"
                aria-invalid={Boolean(fieldErrors.cv)}
                aria-describedby={fieldErrors.cv ? 'assessment-cv-error' : undefined}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl aria-[invalid=true]:border-red-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              {fieldErrors.cv && <p id="assessment-cv-error" className="mt-2 text-sm text-red-700" aria-live="polite">{fieldErrors.cv}</p>}
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
          className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
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
