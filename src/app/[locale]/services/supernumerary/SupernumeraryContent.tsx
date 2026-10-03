'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';

interface SupernumeraryContentProps {
  locale: string;
}

const SupernumeraryContent = ({ locale }: SupernumeraryContentProps) => {
  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Services', item: 'https://darcape.com/services' },
    { name: 'Supernumerary Positions', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/supernumerary` }
  ];

  const keyPoints = locale === 'ar' ? [
    {
      icon: AcademicCapIcon,
      title: 'التدريب الممول ذاتياً',
      description: 'مناصب المقيم الزائدة هي مناصب تدريب ممولة ذاتياً حيث يغطي المرشح تكاليفه الخاصة بما في ذلك الراتب والمزايا ورسوم التدريب.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'تقدير القسم',
      description: 'التوافر متروك بالكامل لتقدير أقسام المستشفى الفردية ويختلف حسب السنة بناءً على السعة والتمويل.'
    },
    {
      icon: DocumentTextIcon,
      title: 'الخبرة السريرية',
      description: 'توفر خبرة سريرية عملية قيمة والتعرض لنظام الرعاية الصحية في جنوب أفريقيا تحت إشراف الاستشاريين.'
    }
  ] : [
    {
      icon: AcademicCapIcon,
      title: 'Self-Funded Training',
      description: 'Supernumerary positions are self-funded registrar posts where candidates cover their own costs including salary, benefits, and training fees.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Department Discretion',
      description: 'Availability is entirely at the discretion of individual hospital departments and varies by year based on capacity and funding.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Clinical Experience',
      description: 'Provides valuable hands-on clinical experience and exposure to the South African healthcare system under consultant supervision.'
    }
  ];

  const considerations = locale === 'ar' ? [
    'المناصب غير مضمونة وتعتمد على احتياجات القسم',
    'يجب أن يكون لدى المرشحين تسجيل HPCSA ساري أو أهلية',
    'تقوي الخبرة ذات الصلة السابقة الطلبات',
    'الالتزام المالي كبير ويجب تأمينه مسبقاً',
    'تختلف المدة حسب التخصص والقسم',
    'قد لا تؤدي إلى مناصب مقيم دائمة'
  ] : [
    'Positions are not guaranteed and depend on department needs',
    'Candidates must have valid HPCSA registration or eligibility',
    'Previous relevant experience strengthens applications',
    'Financial commitment is significant and must be secured in advance',
    'Duration varies by specialty and department',
    'May not lead to permanent registrar positions'
  ];

  const applicationSteps = locale === 'ar' ? [
    'البحث في الأقسام المستهدفة ومتطلباتها',
    'التحقق من أهلية تسجيل HPCSA وحالة التسجيل',
    'إعداد سيرة ذاتية شاملة مع خبرة ذات صلة',
    'الحصول على مراجع قوية من المشرفين',
    'الاتصال بالأقسام مباشرة للاستفسار عن التوافر',
    'إعداد الوثائق المالية للالتزام بالتمويل الذاتي',
    'تقديم الطلب مع الوثائق المطلوبة'
  ] : [
    'Research target departments and their requirements',
    'Verify HPCSA registration eligibility and status',
    'Prepare comprehensive CV with relevant experience',
    'Obtain strong references from supervisors',
    'Contact departments directly to inquire about availability',
    'Prepare financial documentation for self-funding commitment',
    'Submit application with required documentation'
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Supernumerary Position Advisory"
        description="Advisory support for international medical graduates seeking supernumerary registrar positions in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}services/supernumerary`}
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
              {locale === 'ar' ? 'مناصب المقيم الزائدة' : 'Supernumerary Registrar Positions'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {locale === 'ar' ? 'توجيه لفرص التدريب الممولة ذاتياً للخريجين الطبيين الدوليين في الأقسام الطبية في جنوب أفريقيا.' : 'Guidance on self-funded training opportunities for international medical graduates in South African medical departments.'}
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
                  {locale === 'ar' ? 'المناصب الزائدة غير مضمونة والتوافر يختلف بشكل كبير حسب القسم والتخصص والسنة. هذه المعلومات مقدمة للتوجيه فقط. تحقق دائماً من التوافر والمتطلبات الحالية مباشرة مع أقسام المستشفى.' : 'Supernumerary positions are not guaranteed and availability varies significantly by department, specialty, and year. This information is provided for guidance only. Always verify current availability and requirements directly with hospital departments.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-serif">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What to Consider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200 mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">{locale === 'ar' ? 'عملية التقديم' : 'Application Process'}</h2>
            <div className="space-y-4">
              {applicationSteps.map((step, index) => (
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
                {locale === 'ar' ? 'هل تحتاج توجيهاً حول المناصب الزائدة؟' : 'Need Guidance on Supernumerary Positions?'}
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {locale === 'ar' ? 'يمكننا مساعدتك في فهم المتطلبات وإعداد طلبات قوية لمناصب المقيم الزائدة.' : 'We can help you understand the requirements and prepare strong applications for supernumerary registrar positions.'}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105"
              >
                {locale === 'ar' ? 'احصل على تقييم' : 'Get Assessment'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FloatingWhatsApp pageContext="supernumerary" />
    </>
  );
};

export default SupernumeraryContent;
