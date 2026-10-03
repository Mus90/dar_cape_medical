'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface StrategyContentProps {
  locale: string;
}

const StrategyContent = ({ locale }: StrategyContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'Training Strategy', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/strategy` }
  ];

  const strategyComponents = locale === 'ar' ? [
    {
      icon: ChartBarIcon,
      title: 'تقييم الملف',
      description: 'تقييم شامل لخلفيتك الطبية ومؤهلاتك وخبرتك وأهدافك المهنية لتحديد مسارات التدريب المثلى.'
    },
    {
      icon: AcademicCapIcon,
      title: 'تخطيط المسار',
      description: 'تطوير خريطة طريق مخصصة تحدد الخطوات والجداول الزمنية والمتطلبات لتدريب التخصص المختار.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'اختيار الجامعة',
      description: 'توجيه لاختيار الجامعات والأقسام التي تتوافق مع ملفك واهتمامات التخصص وأهدافك المهنية.'
    }
  ] : [
    {
      icon: ChartBarIcon,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of your medical background, qualifications, experience, and career goals to identify optimal training pathways.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Pathway Planning',
      description: 'Development of a personalized roadmap outlining the steps, timelines, and requirements for your chosen specialty training.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'University Selection',
      description: 'Guidance on selecting universities and departments that align with your profile, specialty interests, and career objectives.'
    }
  ];

  const strategyBenefits = locale === 'ar' ? [
    'فهم واضح لمسارات التدريب المتاحة',
    'تخطيط واقعي للجدول الزمني والمعالم',
    'تحديد الفجوات واحتياجات التحضير',
    'اختيار مستهدف للجامعة والقسم',
    'تحسين تنافسية الطلب',
    'تقليل عدم اليقين واتخاذ قرارات أفضل'
  ] : [
    'Clear understanding of available training pathways',
    'Realistic timeline and milestone planning',
    'Identification of gaps and preparation needs',
    'Targeted university and department selection',
    'Improved application competitiveness',
    'Reduced uncertainty and better decision-making'
  ];

  const processSteps = locale === 'ar' ? [
    'استشارة أولية لفهم خلفيتك وأهدافك',
    'تقييم شامل للملف ومراجعة المستندات',
    'تحليل مسارات التدريب وخيارات التخصص',
    'تطوير وثيقة استراتيجية مخصصة',
    'جلسة مراجعة لمناقشة التوصيات',
    'دعم مستمر وتحسين الاستراتيجية'
  ] : [
    'Initial consultation to understand your background and goals',
    'Comprehensive profile assessment and document review',
    'Analysis of training pathways and specialty options',
    'Development of personalized strategy document',
    'Review session to discuss recommendations',
    'Ongoing support and strategy refinement'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Training Strategy Advisory"
        description="Personalized training pathway strategy development for international medical graduates seeking specialist training in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/strategy`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="section-padding">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-serif">
              {locale === 'ar' ? 'تطوير استراتيجية التدريب' : 'Training Strategy Development'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه مخصص لمساعدتك على التنقل في المشهد المعقد لمسارات التدريب الطبي في جنوب أفريقيا.' : 'Personalized guidance to help you navigate the complex landscape of medical training pathways in South Africa.'}
            </p>
          </motion.div>

          {/* Strategy Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {strategyComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-navy-700 rounded-xl flex items-center justify-center mb-4">
                  <component.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'فوائد الاستراتيجية' : 'Strategy Benefits'}</h2>
            <ul className="space-y-3">
              {strategyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'عمليتنا' : 'Our Process'}</h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{step}</span>
                </div>
              ))}
            </div>
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
                {locale === 'ar' ? 'طور استراتيجية التدريب الخاصة بك' : 'Develop Your Training Strategy'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'احصل على خريطة طريق مخصصة لرحلتك الطبية في جنوب أفريقيا.' : 'Get a personalized roadmap for your medical training journey in South Africa.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'ابدأ جلسة الاستراتيجية' : 'Start Strategy Session'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="strategy" />
    </>
  );
};

export default StrategyContent;
