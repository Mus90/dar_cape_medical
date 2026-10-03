'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface HPCSAContentProps {
  locale: string;
}

const HPCSAContent = ({ locale }: HPCSAContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'HPCSA Registration', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/hpcsa-registration` }
  ];

  const coreTopics = locale === 'ar' ? [
    {
      icon: ShieldCheckIcon,
      title: "دور HPCSA",
      description: 'مجلس المهن الصحية في جنوب أفريقيا هو الهيئة القانونية التي تنظم المهن الصحية والتسجيل المهني. التسجيل مع HPCSA هو شرط أساسي للممارسة المهنية.'
    },
    {
      icon: InformationCircleIcon,
      title: 'فئات التسجيل',
      description: 'قد يتقدم الممارسون المؤهلون من الخارج للتسجيل في فئات مثل الممارسة المستقلة (الطبيب العام)، الممارسة المستقلة (التخصصي)، أو التسجيل المشروط للتدريب.'
    },
    {
      icon: DocumentTextIcon,
      title: 'التحقق من المؤهلات EPIC',
      description: 'التحقق من خدمات المؤهلات الدولية ECFMG (EICS) مطلوب لجميع الممارسين الطبيين المؤهلين من الخارج المتقدمين إلى HPCSA. يجب التحقق من المؤهلات قبل تقديم طلب HPCSA.'
    }
  ] : [
    {
      icon: ShieldCheckIcon,
      title: "HPCSA's Role",
      description: 'The Health Professions Council of South Africa is the statutory body regulating healthcare professions and professional registration. Registration with HPCSA is a pre-requisite for professional practice.'
    },
    {
      icon: InformationCircleIcon,
      title: 'Registration Categories',
      description: 'Foreign qualified practitioners may apply for registration in categories such as Independent Practice (General Practitioner), Independent Practice (Specialist), or Conditional Registration for Training.'
    },
    {
      icon: DocumentTextIcon,
      title: 'EPIC Credential Verification',
      description: 'ECFMG International Credentials Services (EICS) verification is required for all foreign qualified medical practitioners applying to HPCSA. Credentials must be verified before submitting the HPCSA application.'
    }
  ];

  const registrationSteps = locale === 'ar' ? [
    'إكمال التحقق من المؤهلات EPIC/MyIntealth',
    'جمع المستندات المطلوبة (شهادات الدرجة، إثبات التدريب، حسن السيرة)',
    'تحديد فئة التسجيل المناسبة',
    'تقديم الطلب إلى HPCSA مع الرسوم المطلوبة',
    'إكمال أي امتحانات أو تقييمات مطلوبة',
    'الحصول على شهادة التسجيل ورقم الممارسة'
  ] : [
    'Complete EPIC/MyIntealth credential verification',
    'Gather required documents (degree certificates, internship proof, good standing)',
    'Determine appropriate registration category',
    'Submit application to HPCSA with required fees',
    'Complete any required examinations or assessments',
    'Obtain registration certificate and practice number'
  ];

  const requirements = locale === 'ar' ? [
    'درجة طبية سارية من مؤسسة معترف بها',
    'إثبات التدريب أو التدريب المكافئ',
    'شهادة حسن السيرة من البلد الأم',
    'تقرير التحقق من المؤهلات EPIC',
    'إثبات الكفاءة اللغوية (إذا تطلب ذلك)',
    'شهادة خلو من السوابق'
  ] : [
    'Valid medical degree from recognized institution',
    'Proof of internship or equivalent training',
    'Certificate of Good Standing from home country',
    'EPIC credential verification report',
    'Proof of language proficiency (if required)',
    'Police clearance certificate'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="HPCSA Registration Advisory"
        description="Advisory support for international medical graduates seeking HPCSA registration in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/hpcsa-registration`}
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
              {locale === 'ar' ? 'تسجيل HPCSA للأطباء المؤهلين من الخارج' : 'HPCSA Registration for Foreign-Qualified Doctors'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه شامل لمسارات تسجيل HPCSA للخريجين الطبيين الدوليين في جنوب أفريقيا.' : 'Comprehensive guidance on HPCSA registration pathways for international medical graduates in South Africa.'}
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
                  {locale === 'ar' ? 'تختلف مسارات التسجيل بشكل كبير بناءً على الظروف الفردية والمؤهلات والفئة التنظيمية. توفر هذه الصفحة معلومات عامة ولكنها لا تحل محل إرشادات HPCSA الرسمية أو التقييم المخصص.' : 'Registration pathways vary significantly based on individual circumstances, qualifications, and regulatory category. This page provides general information but is not a substitute for official HPCSA guidance or personalized assessment.'}
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
                <div className="w-12 h-12 bg-gradient-to-r from-gold-600 to-gold-700 rounded-xl flex items-center justify-center mb-4">
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Registration Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'عملية التسجيل' : 'Registration Process'}</h2>
            <div className="space-y-4">
              {registrationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'المتطلبات الرئيسية' : 'Key Requirements'}</h2>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
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
                {locale === 'ar' ? 'هل تحتاج مساعدة في تسجيل HPCSA؟' : 'Need Help with HPCSA Registration?'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'اطلب تقييم مسار التسجيل لفهم متطلباتك المحددة وتطوير استراتيجية مخصصة.' : 'Request a registration pathway assessment to understand your specific requirements and develop a tailored strategy.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'تحقق من مساري' : 'Check My Pathway'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="hpcsa-registration" />
    </>
  );
};

export default HPCSAContent;
