'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country?: string;
  specialty?: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const t = useTranslations('contact.form');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {t('title')}
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: t('nameRequired') })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={t('namePlaceholder')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: t('emailRequired'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('emailInvalid')
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={t('emailPlaceholder')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            placeholder={t('phonePlaceholder')}
          />
        </div>

        {/* Country and Specialty - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              {t('country')}
            </label>
            <input
              type="text"
              id="country"
              {...register('country')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder={t('countryPlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
              {t('specialty')}
            </label>
            <input
              type="text"
              id="specialty"
              {...register('specialty')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder={t('specialtyPlaceholder')}
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('message')} *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: t('messageRequired') })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={t('messagePlaceholder')}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 rtl:mr-0 rtl:ml-2"></div>
              {t('sending')}
            </>
          ) : (
            <>
              {t('send')}
              <PaperAirplaneIcon className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 rtl:mr-0 rtl:ml-3" />
            <p className="text-green-800">{t('success')}</p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-3 rtl:mr-0 rtl:ml-3" />
            <p className="text-red-800">{t('error')}</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
