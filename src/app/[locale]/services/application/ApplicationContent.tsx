'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  PencilIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface ApplicationContentProps {
  locale: string;
}

const ApplicationContent = ({ locale }: ApplicationContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'Application Preparation', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/application` }
  ];

  const services = locale === 'ar' ? [
    {
      icon: DocumentTextIcon,
      title: 'مراجعة المستندات',
      description: 'مراجعة شاملة لمستندات طلبك بما في ذلك السيرة الذاتية والبيانات الشخصية والمواد الداعمة لضمان أنها تلبي المتطلبات وتقدم مؤهلاتك بشكل فعال.'
    },
    {
      icon: PencilIcon,
      title: 'توجيه البيان الشخصي',
      description: 'المساعدة في صياغة بيانات شخصية مقنونة تبرز دوافعك وخبرتك ذات الصلة وملاءمتك للتخصص والمؤسسة.'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'دعم نموذج الطلب',
      description: 'توجيه لإكمال نماذج الطلب بدقة وشاملة، ضمان تقديم جميع المعلومات المطلوبة بالتنسيق المناسب.'
    }
  ] : [
    {
      icon: DocumentTextIcon,
      title: 'Document Review',
      description: 'Thorough review of your application documents including CV, personal statements, and supporting materials to ensure they meet requirements and effectively present your qualifications.'
    },
    {
      icon: PencilIcon,
      title: 'Personal Statement Guidance',
      description: 'Assistance with crafting compelling personal statements that highlight your motivation, relevant experience, and fit for the specialty and institution.'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Application Form Support',
      description: 'Guidance on completing application forms accurately and comprehensively, ensuring all required information is provided in the appropriate format.'
    }
  ];

  const documentChecklist = locale === 'ar' ? [
    'السيرة الذاتية (CV) مع خبرة طبية مفصلة',
    'البيان الشخصي أو رسالة التحفيز',
    'شهادات الدرجة الطبية والسجلات الأكاديمية',
    'شهادات إكمال التدريب',
    'تسجيل HPCSA أو وثائق الأهلية',
    'تقارير التحقق من المؤهلات EPIC/MyIntealth',
    'خطابات مرجعية من المشرفين',
    'منشورات أو عروض البحث',
    'إثبات الكفاءة اللغوية (إذا تطلب ذلك)',
    'شهادات التسجيل المهني من البلد الأم'
  ] : [
    'Curriculum Vitae (CV) with detailed medical experience',
    'Personal statement or motivation letter',
    'Medical degree certificates and transcripts',
    'Internship completion certificates',
    'HPCSA registration or eligibility documentation',
    'EPIC/MyIntealth credential verification reports',
    'Reference letters from supervisors',
    'Research publications or presentations',
    'Proof of language proficiency (if required)',
    'Professional registration certificates from home country'
  ];

  const preparationTips = locale === 'ar' ? [
    'ابدأ إعداد المستندات قبل المواعيد النهائية بوقت كافٍ',
    'خصص طلبك لكل برنامج محدد',
    'أبرز الخبرة السريرية ذات الصلة والإنجازات',
    'تأكد من توثيق وترجمة جميع المستندات بشكل صحيح',
    'اتبع تعليمات التقديم بدقة',
    'راجع جميع المواد بعناية بحثاً عن الأخطاء',
    'أعد خطابات مرجعية قوية ومحددة',
    'أظهر معرفة البرنامج والمؤسسة'
  ] : [
    'Start document preparation well in advance of deadlines',
    'Tailor your application to each specific program',
    'Highlight relevant clinical experience and achievements',
    'Ensure all documents are properly certified and translated',
    'Follow application instructions precisely',
    'Proofread all materials carefully for errors',
    'Prepare strong, specific reference letters',
    'Demonstrate knowledge of the program and institution'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Application Preparation Advisory"
        description="Application preparation support for international medical graduates applying to medical training programs in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/application`}
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
              {locale === 'ar' ? 'دعم إعداد الطلبات' : 'Application Preparation Support'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه شامل لمساعدتك على إعداد طلبات قوية وتنافسية لبرامج التدريب الطبي في جنوب أفريقيا.' : 'Comprehensive guidance to help you prepare strong, competitive applications for medical training programs in South Africa.'}
            </p>
          </motion.div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-navy-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Document Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'المستندات الأساسية' : 'Essential Documents'}</h2>
            <ul className="space-y-3">
              {documentChecklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Preparation Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'نصائح التحضير' : 'Preparation Tips'}</h2>
            <ul className="space-y-3">
              {preparationTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
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
                <h3 className="font-semibold text-amber-900 mb-2">{locale === 'ar' ? 'ملاحظة مهمة' : 'Important Note'}</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {locale === 'ar' ? 'تختلف عمليات التقديم والمواعيد النهائية حسب الجامعة والقسم. تحقق دائماً من المتطلبات المحددة مباشرة مع المؤسسات التي تتقدم إليها. نقدم توجيهاً بناءً على المتطلبات العامة ولكن لا يمكننا ضمان القبول.' : 'Application requirements and deadlines vary by university and department. Always verify specific requirements directly with the institutions you are applying to. We provide guidance based on general requirements but cannot guarantee acceptance.'}
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
                {locale === 'ar' ? 'أعد طلبك' : 'Prepare Your Application'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'احصل على توجيه خبير لإعداد طلبات تنافسية لبرامج التدريب الطبي.' : 'Get expert guidance on preparing competitive applications for medical training programs.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'احصل على دعم الطلب' : 'Get Application Support'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="application" />
    </>
  );
};

export default ApplicationContent;
