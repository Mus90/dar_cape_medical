import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleDetail from '@/components/knowledge/ArticleDetail';
import ArticleSchema from '@/components/knowledge/ArticleSchema';
import OfficialSources from '@/components/shared/OfficialSources';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  return {
    title: 'EPIC Credential Verification for HPCSA Registration',
    description: 'A comprehensive guide to the ECFMG International Credentials Services (EICS) verification process required for HPCSA registration.',
  };
}

export default function ArticlePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const isArabic = locale === 'ar';

  const article = {
    title: isArabic 
      ? 'التحقق من مؤهلات EPIC لتسجيل HPCSA'
      : 'EPIC Credential Verification for HPCSA Registration',
    category: isArabic ? 'تسجيل HPCSA' : 'HPCSA Registration',
    lastReviewed: isArabic ? 'سبتمبر 2024' : 'September 2024',
    readTime: isArabic ? '6 دقيقة قراءة' : '6 min read',
    disclaimer: isArabic
      ? 'تقدم هذه المقالة معلومات عامة بناءً على مصادر رسمية. المتطلبات تتغير والظروف الفردية تختلف. هذا المحتوى ليس بديلاً عن توجيه ECFMG الرسمي أو التقييم المخصص.'
      : 'This article provides general information based on official sources. Requirements change and individual circumstances vary. This content is not a substitute for official ECFMG guidance or personalized assessment.',
    content: isArabic ? `
      <h2>ما هو التحقق من EPIC؟</h2>
      <p>التحقق من <strong>EPIC (Electronic Portfolio of International Credentials)</strong> يتم تشغيله بواسطة خدمات الاعتماد الدولية لـ ECFMG (EICS).</p>
      <p>إنه <strong>خدمة التحقق من المصدر الأساسي</strong> إلزامية لجميع الممارسين الطبيين الأجانب المتقدمين للتسجيل مع مجلس المهن الصحية في جنوب أفريقيا (HPCSA).</p>
      <p>يتحقق من المؤهلات الطبية مباشرة مع المؤسسات المصدرة لتأكيد أن المؤهلات أصلية وتفي بالمعايير الدولية.</p>
      
      <h2><strong>لماذا هو مطلوب</strong></h2>
      <p>تتطلب إرشادات HPCSA <strong>من جميع الممارسين الطبيين الأجانب إكمال التحقق من EPIC</strong> قبل تقديم طلب التسجيل الخاص بهم.</p>
      <p>تنطبق هذه المتطلبات بغض النظر عن فئة التسجيل.</p>
      <p>يؤكد التقرير الناتج أصالة:</p>
      <ul>
        <li>الشهادة الطبية الأساسية</li>
        <li>شهادة إكمال التدريب</li>
        <li>المؤهلات بعد التخرج وتاريخ التدريب</li>
      </ul>
      
      <h2><strong>عملية التحقق خطوة بخطوة</strong></h2>
      <ol>
        <li><strong>إنشاء حساب:</strong> قم بإعداد حساب EPIC على موقع ECFGM باستخدام تفاصيلك الشخصية ومعلومات الاتصال والتعليم الطبي.</li>
        <li><strong>تقديم المؤهلات:</strong> قم بتحميل المؤهل الطبي الأساسي (MBBS/MD)، شهادات التدريب، والمؤهلات بعد التخرج ذات الصلة.</li>
        <li><strong>دفع الرسوم المطلوبة:</strong> ادفع رسوم التحقق، والتي تختلف بناءً على المؤسسة وعدد المؤهلات المقدمة.</li>
        <li><strong>التحقق من المصدر الأساسي:</strong> يتصل EPIC بمدرستك الطبية والهيئات المصدرة مباشرة للتحقق من الأصالة.</li>
        <li><strong>استلام التقرير:</strong> ينشئ EPIC تقرير التحقق الرسمي بمجرد تأكيد الاستجابة من مؤسستك.</li>
        <li><strong>التقديم إلى HPCSA:</strong> قم بتضمين تقرير EPIC الخاص بك مع طلب HPCSA الخاص بك (النموذج 12 والوثائق الداعمة).</li>
      </ol>
      
      <h2><strong>الوثائق المطلوبة</strong></h2>
      <ul>
        <li><strong>شهادة الدرجة الطبية:</strong> نسخة معتمدة من مؤهلك الأساسي.</li>
        <li><strong>وثائق التدريب:</strong> شهادة الإكمال أو سجل التدريب العملي المكافئ.</li>
        <li><strong>السجلات الأكاديمية:</strong> سجلات تفصيلية لمحتوى الدورة والمدة.</li>
        <li><strong>التسجيل في البلد الأم:</strong> إثبات التسجيل النشط أو السابق مع مجلسك الطبي في البلد الأم (إذا كان ينطبق ذلك).</li>
        <li><strong>الهوية:</strong> جواز سفر صالح أو هوية صادرة عن الحكومة.</li>
        <li><strong>الدفع:</strong> رسوم المعالجة المطبقة لكل وثيقة.</li>
      </ul>
      
      <h2><strong>الجدول الزمني والاعتبارات المهمة</strong></h2>
      <table>
        <thead>
          <tr>
            <th>الجانب</th>
            <th>التفصيل الرئيسي</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>متوسط وقت المعالجة</strong></td>
            <td>4 إلى 8 أسابيع، اعتماداً على أوقات استجابة المؤسسة.</td>
          </tr>
          <tr>
            <td><strong>وقت البداية الموصى به</strong></td>
            <td>ابدأ قبل 3 إلى 4 أشهر على الأقل من تاريخ تقديم HPCSA المخطط له.</td>
          </tr>
          <tr>
            <td><strong>المتطلبات الإلزامية</strong></td>
            <td>لن تعالج HPCSA الطلبات المقدمة بدون تقرير EPIC كامل.</td>
          </tr>
          <tr>
            <td><strong>الصلاحية والوصول</strong></td>
            <td>احتفظ بحسابك نشطاً؛ يظل تقريرك صالحاً للاستخدام مع HPCSA والهيئات التنظيمية الدولية الأخرى.</td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>نصيحة احترافية:</strong> اتصل بمكتب الإدارة في مدرستك الطبية مسبقاً لإبلاغهم بطلبات التحقق من EPIC القادمة لمنع تأخيرات المعالجة.</p>
    ` : `
      <h2>What is EPIC Verification?</h2>
      <p><strong>EPIC (Electronic Portfolio of International Credentials)</strong> verification is operated by ECFMG International Credentials Services (EICS).</p>
      <p>It is a <strong>primary-source verification service</strong> mandatory for all foreign-qualified medical practitioners applying for registration with the Health Professions Council of South Africa (HPCSA).</p>
      <p>It verifies medical credentials directly with issuing institutions to confirm qualifications are authentic and meet international standards.</p>
      
      <h2><strong>Why It Is Required</strong></h2>
      <p>HPCSA guidelines require <strong>all foreign-qualified medical practitioners to complete EPIC verification</strong> prior to submitting their registration application.</p>
      <p>This requirement applies regardless of the registration category.</p>
      <p>The resulting report confirms the authenticity of your:</p>
      <ul>
        <li>Primary medical degree</li>
        <li>Internship completion certificate</li>
        <li>Postgraduate qualifications and training history</li>
      </ul>
      
      <h2><strong>Step-by-Step Verification Process</strong></h2>
      <ol>
        <li><strong>Create an Account:</strong> Set up an EPIC account on the ECFMG website using your personal, contact, and medical education details.</li>
        <li><strong>Submit Credentials:</strong> Upload your primary medical qualification (MBBS/MD), internship certificates, and relevant postgraduate qualifications.</li>
        <li><strong>Pay Required Fees:</strong> Pay the verification fees, which vary based on the institution and the number of credentials submitted.</li>
        <li><strong>Primary-Source Verification:</strong> EPIC contacts your medical school and issuing bodies directly to verify authenticity.</li>
        <li><strong>Receive Report:</strong> EPIC generates an official verification report once response from your institution is confirmed.</li>
        <li><strong>Submit to HPCSA:</strong> Include your EPIC report alongside your HPCSA application (Form 12 and supporting documents).</li>
      </ol>
      
      <h2><strong>Required Documents</strong></h2>
      <ul>
        <li><strong>Medical Degree Certificate:</strong> Certified copy of your primary qualification.</li>
        <li><strong>Internship Documentation:</strong> Certificate of completion or equivalent practical training record.</li>
        <li><strong>Academic Transcripts:</strong> Detailed course content and duration records.</li>
        <li><strong>Home Country Registration:</strong> Proof of active or previous registration with your home medical council (if applicable).</li>
        <li><strong>Identification:</strong> Valid passport or government-issued ID.</li>
        <li><strong>Payment:</strong> Applicable processing fees per document.</li>
      </ul>
      
      <h2><strong>Timeline & Important Considerations</strong></h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Key Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Average Processing Time</strong></td>
            <td>4 to 8 weeks, depending on institution response times.</td>
          </tr>
          <tr>
            <td><strong>Recommended Lead Time</strong></td>
            <td>Start at least 3 to 4 months before your planned HPCSA submission date.</td>
          </tr>
          <tr>
            <td><strong>Mandatory Requirement</strong></td>
            <td>HPCSA will not process applications submitted without a complete EPIC report.</td>
          </tr>
          <tr>
            <td><strong>Validity & Access</strong></td>
            <td>Keep your account active; your report remains valid for use with HPCSA and other international regulatory bodies.</td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>Pro Tip:</strong> Contact your medical school's administrative office beforehand to notify them of incoming EPIC verification requests to prevent processing delays.</p>
    `,
    sources: [
      { name: 'ECFMG EPIC', url: 'https://www.ecfmg.org/epic/', type: 'official' as const },
      { name: 'HPCSA - Foreign Qualifications', url: 'https://www.hpcsa.co.za/', type: 'official' as const }
    ],
    relatedServices: [
      { title: 'HPCSA Registration Support', slug: 'hpcsa-registration' },
      { title: 'Profile Assessment', slug: 'assessment' }
    ]
  };

  const officialSourcesData = [
    {
      organization: 'ECFMG',
      documentTitle: 'EPIC Verification Services',
      url: 'https://www.ecfmg.org/epic/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'HPCSA',
      documentTitle: 'Registration Requirements for Foreign Practitioners',
      url: 'https://www.hpcsa.co.za/',
      lastChecked: 'September 2024'
    }
  ];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description="A comprehensive guide to the ECFMG International Credentials Services (EICS) verification process required for HPCSA registration."
        publishDate="2024-09-01"
        lastReviewed="2024-09-01"
        author="Dar Cape Medica"
        url={`https://darcape.com/${locale}/knowledge-centre/article/epic-credential-verification-process`}
      />
      <ArticleDetail locale={locale} article={article} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
    </>
  );
}
