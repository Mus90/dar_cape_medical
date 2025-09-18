'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const t = useTranslations('servicesSimple');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const services = [
    {
      icon: DocumentTextIcon,
      title: t('items.info.title'),
      description: t('items.info.description'),
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: AcademicCapIcon,
      title: t('items.consultation.title'),
      description: t('items.consultation.description'),
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: t('items.review.title'),
      description: t('items.review.description'),
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group card overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  {t('cta')}
                  <ArrowRightIcon className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/contact`}
            className="btn-primary text-lg px-8 py-4"
          >
            {t('cta')}
            <ArrowRightIcon className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
