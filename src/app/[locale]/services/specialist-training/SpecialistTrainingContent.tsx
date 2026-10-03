'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface SpecialistTrainingContentProps {
  locale: string;
}

const SpecialistTrainingContent = ({ locale }: SpecialistTrainingContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'Specialist Training', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/specialist-training` }
  ];

  const coreTopics = locale === 'ar' ? [
    {
      icon: AcademicCapIcon,
      title: 'تدريب المقيم التخصصي',
      description: 'التدريب الطبي بعد التخرج المؤدي إلى المؤهل التخصصي من خلال الممارسة السريرية الخاضعة للإشراف في المستشفيات التعليمية.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'أدوار الجامعة والمستشفى التعليمي',
      description: 'توفر الجامعات الإشراف الأكاديمي بينما تقدم المستشفيات التعليمية التدريب السريري والإشراف.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'امتحانات زمالة CMSA',
      description: 'تدير كليات الطب في جنوب أفريقيا (CMSA) امتحانات الزمالة المطلوبة للتسجيل التخصصي.'
    }
  ] : [
    {
      icon: AcademicCapIcon,
      title: 'Specialist Registrar Training',
      description: 'Postgraduate medical training leading to specialist qualification through supervised clinical practice in teaching hospitals.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'University & Teaching Hospital Roles',
      description: 'Universities provide academic oversight while teaching hospitals deliver clinical training and supervision.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'CMSA Fellowship Examinations',
      description: 'The Colleges of Medicine of South Africa (CMSA) administer fellowship examinations required for specialist registration.'
    }
  ];

  const pathwaySteps = locale === 'ar' ? [
    'إكمال الدرجة الطبية والتدريب',
    'الحصول على تسجيل HPCSA في الفئة المناسبة',
    'الحصول على منصب تدريب مقيم في مستشفى معتمد',
    'إكمال امتحان CMSA الجزء الأول خلال الفترة المحددة',
    'إكمال الأطروحة/المهمة البحثية',
    'إكمال امتحان CMSA الجزء الثاني',
    'الحصول على التسجيل التخصصي مع HPCSA'
  ] : [
    'Complete medical degree and internship',
    'Obtain HPCSA registration in appropriate category',
    'Secure registrar training position at accredited hospital',
    'Complete CMSA Part I examination within specified timeframe',
    'Complete research dissertation/assignment',
    'Complete CMSA Part II examination',
    'Obtain specialist registration with HPCSA'
  ];

  const considerations = locale === 'ar' ? [
    'مناصب التدريب محدودة وتنافسية للغاية',
    'لكل جامعة عمليات تقديم وجداول زمنية مميزة',
    'يؤثر حالة تسجيل HPCSA على الأهلية لمناصب التدريب',
    'تقوي الخبرة السريرية السابقة والبحث الطلبات',
    'قد تكون المناصب الزائدة (الممولة ذاتياً) متاحة في بعض الأقسام'
  ] : [
    'Training positions are limited and highly competitive',
    'Each university has distinct application processes and timelines',
    'HPCSA registration status affects eligibility for training posts',
    'Previous clinical experience and research strengthen applications',
    'Supernumerary (self-funded) positions may be available in some departments'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Specialist Training Advisory"
        description="Advisory support for international medical graduates seeking specialist training in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/specialist-training`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="section-padding pt-40">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-serif">
              {locale === 'ar' ? 'التدريب التخصصي في جنوب أفريقيا' : 'Specialist Training in South Africa'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه شامل لمسارات تدريب المقيم التخصصي للخريجين الطبيين الدوليين في جنوب أفريقيا.' : 'Comprehensive guidance on specialist registrar training pathways for international medical graduates in South Africa.'}
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12"
          >
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">{locale === 'ar' ? 'إشعار مهم' : 'Important Notice'}</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {locale === 'ar' ? 'القبول في برامج التدريب التخصصي والتوضع في مناصب التدريب غير مضمون. يتم اتخاذ قرارات الاختيار من قبل الجامعات والمستشفيات التعليمية بناءً على معاييرها وتوافر المناصب والمتطلبات التنظيمية.' : 'Acceptance into specialist training programs and placement in training posts are not guaranteed. Selection decisions are made by universities and teaching hospitals based on their criteria, availability of positions, and regulatory requirements.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {coreTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-navy-700 rounded-xl flex items-center justify-center mb-4">
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Training Pathway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'مسار التدريب' : 'Training Pathway'}</h2>
            <div className="space-y-4">
              {pathwaySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'اعتبارات رئيسية' : 'Key Considerations'}</h2>
            <ul className="space-y-3">
              {considerations.map((consideration, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                {locale === 'ar' ? 'هل أنت مستعد لاستكشاف مسار التدريب الخاص بك؟' : 'Ready to Explore Your Training Pathway?'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'ابدأ بفحص ملف أولي مجاني لفهم خياراتك وتطوير استراتيجية مخصصة.' : 'Start with a free preliminary profile check to understand your options and develop a personalized strategy.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'ابدأ تقييمك' : 'Start Your Assessment'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="specialist-training" />
    </>
  );
};

export default SpecialistTrainingContent;
