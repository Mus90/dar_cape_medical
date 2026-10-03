'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

const CategoryGrid = () => {
  const t = useTranslations('knowledge.categories');

  const categories = [
    {
      icon: AcademicCapIcon,
      slug: 'specialist-training',
      title: t('specialistTraining'),
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: ShieldCheckIcon,
      slug: 'hpcsa-registration',
      title: t('hpcsaRegistration'),
      color: 'from-navy-600 to-navy-700',
      bgColor: 'bg-navy-50'
    },
    {
      icon: BuildingOfficeIcon,
      slug: 'universities',
      title: t('universities'),
      color: 'from-gold-500 to-gold-600',
      bgColor: 'bg-gold-50'
    },
    {
      icon: DocumentTextIcon,
      slug: 'specialties',
      title: t('specialties'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      slug: 'cmsa-examinations',
      title: t('cmsaExaminations'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: GlobeAltIcon,
      slug: 'epic-verification',
      title: t('epicVerification'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: UserGroupIcon,
      slug: 'supernumerary-training',
      title: t('supernumeraryTraining'),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: PencilIcon,
      slug: 'application-preparation',
      title: t('applicationPreparation'),
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/knowledge-centre/${category.slug}`}
                className="block h-full"
              >
                <div className={`${category.bgColor} p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full`}>
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('browse')}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
