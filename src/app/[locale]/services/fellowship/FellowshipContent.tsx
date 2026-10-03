'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface FellowshipContentProps {
  locale: string;
}

const FellowshipContent = ({ locale }: FellowshipContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'Fellowship Preparation', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/fellowship` }
  ];

  const examinationInfo = locale === 'ar' ? [
    {
      icon: ShieldCheckIcon,
      title: 'امتحانات FC',
      description: 'تدير كليات الطب في جنوب أفريقيا (CMSA) امتحانات الزمالة المطلوبة للتسجيل التخصصي عبر تخصصات طبية متعددة.'
    },
    {
      icon: AcademicCapIcon,
      title: 'الجزء الأول والجزء الثاني',
      description: 'تتكون معظم امتحانات الزمالة من الجزء الأول (العلوم الأساسية) والجزء الثاني (السريري/الجراحي) التي يجب اجتيازها للمؤهل التخصصي.'
    },
    {
      icon: DocumentTextIcon,
      title: 'التسجيل التخصصي',
      description: 'الإكمال الناجح لامتحانات FC، مجتمعة مع متطلبات التدريب، يؤدي إلى التسجيل التخصصي مع HPCSA.'
    }
  ] : [
    {
      icon: ShieldCheckIcon,
      title: 'FC Examinations',
      description: 'The Colleges of Medicine of South Africa (CMSA) administer fellowship examinations required for specialist registration across multiple medical specialties.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Part I & Part II',
      description: 'Most fellowship examinations consist of Part I (basic sciences) and Part II (clinical/surgical) components that must be passed for specialist qualification.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Specialist Registration',
      description: 'Successful completion of FC examinations, combined with training requirements, leads to specialist registration with HPCSA.'
    }
  ];

  const preparationAreas = locale === 'ar' ? [
    'فهم هيكل الامتحان والمتطلبات',
    'تحديد مواد الدراسة والموارد ذات الصلة',
    'تطوير جداول دراسية وخطط فعالة',
    'التدريب مع أوراق الامتحانات السابقة حيثما تتوفر',
    'التحضير للحالات السريرية لامتحانات الجزء الثاني',
    'استراتيجيات إدارة الوقت ليوم الامتحان',
    'فهم معايير تصحيح الامتحان',
    'التحضير للمكونات الشفهية والعملية'
  ] : [
    'Understanding examination structure and requirements',
    'Identifying relevant study materials and resources',
    'Developing effective study schedules and plans',
    'Practice with past examination papers where available',
    'Clinical case preparation for Part II examinations',
    'Time management strategies for examination day',
    'Understanding examination marking criteria',
    'Preparation for oral and practical components'
  ];

  const eligibilityRequirements = locale === 'ar' ? [
    'إكمال الدرجة الطبية والتدريب',
    'تسجيل HPCSA في الفئة المناسبة',
    'إكمال فترة التدريب المطلوبة (تختلف حسب التخصص)',
    'توصية من مؤسسة التدريب (حيثما ينطبق ذلك)',
    'دفع رسوم الامتحان',
    'تقديم الوثائق المطلوبة'
  ] : [
    'Completed medical degree and internship',
    'HPCSA registration in appropriate category',
    'Completed required training period (varies by specialty)',
    'Recommendation from training institution (where applicable)',
    'Payment of examination fees',
    'Submission of required documentation'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Fellowship Examination Advisory"
        description="CMSA fellowship examination preparation support for international medical graduates seeking specialist registration in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/fellowship`}
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
              {locale === 'ar' ? 'التحضير لامتحان زمالة CMSA' : 'CMSA Fellowship Examination Preparation'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه للتحضير لامتحانات زمالة CMSA المطلوبة للتسجيل التخصصي في جنوب أفريقيا.' : 'Guidance on preparing for CMSA fellowship examinations required for specialist registration in South Africa.'}
            </p>
          </motion.div>

          {/* Examination Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {examinationInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Preparation Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'دعم التحضير' : 'Preparation Support'}</h2>
            <ul className="space-y-3">
              {preparationAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'متطلبات الأهلية' : 'Eligibility Requirements'}</h2>
            <ul className="space-y-3">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12"
          >
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">{locale === 'ar' ? 'إشعار مهم' : 'Important Notice'}</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {locale === 'ar' ? 'تختلف متطلبات الامتحان وهيكلته ومعايير الأهلية حسب التخصص وتحددها CMSA والكليات الفردية. تحقق دائماً من المتطلبات الحالية مباشرة مع CMSA والكلية ذات الصلة. نقدم توجيهاً بناءً على المتطلبات العامة ولكن لا يمكننا ضمان نجاح الامتحان.' : 'Examination requirements, structure, and eligibility criteria vary by specialty and are determined by CMSA and individual colleges. Always verify current requirements directly with CMSA and the relevant college. We provide guidance based on general requirements but cannot guarantee examination success.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                {locale === 'ar' ? 'حضر لامتحان الزمالة الخاص بك' : 'Prepare for Your Fellowship Examination'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'احصل على توجيه للتحضير لامتحانات زمالة CMSA لتخصصك.' : 'Get guidance on preparing for CMSA fellowship examinations for your specialty.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'احصل على دعم الامتحان' : 'Get Examination Support'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="fellowship" />
    </>
  );
};

export default FellowshipContent;
