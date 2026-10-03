import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleDetail from '@/components/knowledge/ArticleDetail';
import ArticleSchema from '@/components/knowledge/ArticleSchema';
import OfficialSources from '@/components/shared/OfficialSources';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  return {
    title: 'CMSA Fellowship Examination Structure',
    description: 'A comprehensive guide to the Colleges of Medicine of South Africa fellowship examination structure and requirements for specialist qualification.',
  };
}

export default function ArticlePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const isArabic = locale === 'ar';

  const article = {
    title: isArabic 
      ? 'هيكل امتحان زمالة CMSA'
      : 'CMSA Fellowship Examination Structure',
    category: isArabic ? 'التدريب التخصصي' : 'Specialist Training',
    lastReviewed: isArabic ? 'سبتمبر 2024' : 'September 2024',
    readTime: isArabic ? '10 دقيقة قراءة' : '10 min read',
    disclaimer: isArabic
      ? 'تقدم هذه المقالة معلومات عامة بناءً على مصادر رسمية. متطلبات وهياكل الامتحان تخضع للتغيير. هذا المحتوى ليس بديلاً عن توجيه CMSA الرسمي.'
      : 'This article provides general information based on official sources. Examination requirements and structures are subject to change. This content is not a substitute for official CMSA guidance.',
    content: isArabic ? `
      <h2><strong>ما هو CMSA؟</strong></h2>
      <p><strong>كليات الطب في جنوب أفريقيا (CMSA)</strong> هي الهيئة القانونية المسؤولة عن إدارة امتحانات الزمالة للمؤهل التخصصي في جنوب أفريقيا.</p>
      <p>تقدم CMSA زمالات عبر مجموعة واسعة من التخصصات الطبية والجراحية.</p>
      <p>الإكمال الناجح لامتحان الزمالة هو <strong>متطلب رئيسي للتسجيل التخصصي مع HPCSA</strong>.</p>
      
      <h2><strong>الدور في التدريب التخصصي</strong></h2>
      <p>امتحانات زمالة CMSA هي <strong>المسار القياسي للمؤهل التخصصي</strong> في جنوب أفريقيا.</p>
      <p>بينما تقدم الجامعات درجات الماجستير في الطب (MMed)، فإن زمالة CMSA هي المؤهل المهني الذي يظهر الكفاءة التخصصية.</p>
      <p><strong>مهم:</strong> تتطلب معظم برامج التدريب إكمال درجة MMed وزمالة CMSA للحصول على المؤهل التخصصي الكامل!</p>
      
      <h2><strong>نظرة عامة على هيكل الامتحان</strong></h2>
      <p>تتكون امتحانات زمالة CMSA عادة من جزأين رئيسيين:</p>
      <ul>
        <li><strong>امتحان الجزء الأول:</strong> يؤخذ عادة في وقت مبكر من فترة التدريب (غالباً بعد 1-2 سنة من تدريب المقيم). يختبر هذا الامتحان المعرفة الأساسية وفهم التخصص.</li>
        <li><strong>امتحان الجزء الثاني:</strong> يؤخذ نحو نهاية التدريب (عادة بعد 3-4 سنوات). يختبر هذا الامتحان الكفاءة السريرية المتقدمة والحكم والمهارات التخصصية.</li>
      </ul>
      
      <h2><strong>امتحان الجزء الأول</strong></h2>
      <h3>التنسيق</h3>
      <p>يختلف تنسيق امتحان الجزء الأول حسب التخصص ولكنه يشمل عادة:</p>
      <ul>
        <li>أسئلة متعددة الخيارات (MCQ) تغطي العلوم الأساسية والمعرفة السريرية</li>
        <li>أوراق مكتوبة تختبر الفهم النظري</li>
        <li>في بعض التخصصات، مكون عملي أو سريري</li>
      </ul>
      
      <h3>التوقيت</h3>
      <p>يؤخذ الجزء الأول عادة بعد إكمال أول <strong>12-24 شهراً</strong> من تدريب المقيم.</p>
      <p>يجب أن يكون المرشحون مسجلين في HPCSA في فئة تدريب مناسبة وأن يكونوا في منصب تدريب معتمد.</p>
      
      <h3>التحضير</h3>
      <p>يتضمن التحضير للجزء الأول دراسة شاملة للعلوم الأساسية ذات الصلة بالتخصص، ومراجعة المعرفة السريرية الأساسية، والتدريب على أوراق الامتحانات السابقة حيثما يتوفر.</p>
      
      <h2><strong>امتحان الجزء الثاني</strong></h2>
      <h3>التنسيق</h3>
      <p>امتحان الجزء الثاني أكثر شمولاً ويشمل عادة:</p>
      <ul>
        <li>أوراق مكتوبة (أسئلة إجابة قصيرة، دراسات الحالة)</li>
        <li>امتحانات سريرية (OSCE - الامتحان السريري الهيكلي الموضوعي)</li>
        <li>امتحانات شفوية (viva voce)</li>
        <li>في بعض التخصصات، دفاع عن أطروحة أو مشروع بحثي</li>
      </ul>
      
      <h3>التوقيت</h3>
      <p>يؤخذ الجزء الثاني عادة في السنة النهائية لتدريب المقيم، بعد إكمال الدورات السريرية المطلوبة وتلبية متطلبات برنامج التدريب.</p>
      <p><strong>يجب أن يكون المرشحون قد اجتازوا الجزء الأول قبل محاولة الجزء الثاني!</strong></p>
      
      <h3>التحضير</h3>
      <p>يتطلب تحضير الجزء الثاني دمج الخبرة السريرية مع المعرفة النظرية.</p>
      <p>يجب أن يركز المرشحون على الاستدلال السريري وإدارة الحالات واتخاذ القرارات على المستوى التخصصي.</p>
      
      <h2><strong>جدول الامتحان</strong></h2>
      <p>تُجرى امتحانات زمالة CMSA <strong>مرتين سنوياً</strong>، عادة في:</p>
      <ul>
        <li><strong>الجلوس الأول:</strong> مايو/يونيو</li>
        <li><strong>الجلوس الثاني:</strong> أكتوبر/نوفمبر</li>
      </ul>
      <p>تختلف التواريخ الدقيقة حسب التخصص والسنة. يجب على المرشحين التحقق من موقع CMSA للحصول على جداول الامتحانات الحالية ومواعيد التقديم.</p>
      
      <h2><strong>متطلبات التقديم</strong></h2>
      <p>للتقديم لامتحانات زمالة CMSA، يحتاج المرشحون عادة إلى:</p>
      <ul>
        <li>التسجيل في HPCSA في فئة مناسبة</li>
        <li>التعيين الحالي في منصب تدريب معتمد</li>
        <li>إكمال مدة التدريب المطلوبة (تختلف حسب التخصص)</li>
        <li>الموافقة من رئيس القسم أو برنامج التدريب</li>
        <li>دفع رسوم الامتحان</li>
        <li>إكمال نماذج التقديم لـ CMSA</li>
      </ul>
      
      <h2><strong>رسوم الامتحان</strong></h2>
      <p>تختلف رسوم الامتحان حسب التخصص وجزء الامتحان.</p>
      <p>تنشر الرسوم على موقع CMSA ويجب دفعها بحلول موعد التقديم. قد تتحمل الطلبات المتأخرة رسوماً إضافية.</p>
      
      <h2><strong>عدد المحاولات</strong></h2>
      <p>يُسمح للمرشحين عادة بـ <strong>عدد محدود من المحاولات</strong> لكل جزء من الامتحان.</p>
      <p>يختلف العدد المحدد حسب التخصص وموضح في لوائح CMSA. بعد استنفاد المحاولات المسموح بها، قد يحتاج المرشحون إلى إكمال تدريب إضافي أو تلبية متطلبات أخرى قبل إعادة المحاولة.</p>
      
      <h2><strong>النتائج والشهادة</strong></h2>
      <p>تصدر نتائج الامتحان عادة <strong>6-8 أسابيع</strong> بعد الامتحان.</p>
      <p>يتلقى المرشحون الناجحون إشعاراً من CMSA ويُمنحون شهادة الزمالة.</p>
      <p><strong>هذه الشهادة، مع إكمال درجة MMed الجامعية، تتيح التقديم للتسجيل التخصصي مع HPCSA.</strong></p>
      
      <h2><strong>اعتبارات مهمة</strong></h2>
      <ul>
        <li><strong>متطلبات وهياكل الامتحان تختلف حسب التخصص</strong> - تحقق دائماً من المتطلبات الخاصة بالتخصص!</li>
        <li>متطلبات برنامج التدريب ومتطلبات الامتحان مترابطة - تأكد من تلبية كليهما.</li>
        <li>خطط لتوقيت الامتحان بعناية لمواءمته مع معالم برنامج التدريب.</li>
        <li>ابق على اطلاع بأي تغييرات في هيكل الامتحان أو المتطلبات من خلال اتصالات CMSA.</li>
        <li>اطلب التوجيه من المشرفين والزملاء الأقدم عند التحضير للامتحانات.</li>
      </ul>
    ` : `
      <h2><strong>What is CMSA?</strong></h2>
      <p>The <strong>Colleges of Medicine of South Africa (CMSA)</strong> is the statutory body responsible for administering fellowship examinations for specialist qualification in South Africa.</p>
      <p>CMSA offers fellowships across a wide range of medical and surgical specialties.</p>
      <p>Successful completion of the fellowship examination is a <strong>key requirement for specialist registration with HPCSA</strong>.</p>
      
      <h2><strong>Role in Specialist Training</strong></h2>
      <p>CMSA fellowship examinations are the <strong>standard pathway to specialist qualification</strong> in South Africa.</p>
      <p>While universities offer Master of Medicine (MMed) degrees, the CMSA fellowship is the professional qualification that demonstrates specialist competence.</p>
      <p><strong>Important:</strong> Most training programs require completion of both the MMed degree and CMSA fellowship for full specialist qualification!</p>
      
      <h2><strong>Examination Structure Overview</strong></h2>
      <p>CMSA fellowship examinations typically consist of two main parts:</p>
      <ul>
        <li><strong>Part I Examination:</strong> Usually taken early in the training period (often after 1-2 years of registrar training). This examination tests basic knowledge and understanding of the specialty.</li>
        <li><strong>Part II Examination:</strong> Taken towards the end of training (typically after 3-4 years). This examination tests advanced clinical competence, judgment, and specialist skills.</li>
      </ul>
      
      <h2><strong>Part I Examination</strong></h2>
      <h3>Format</h3>
      <p>The Part I examination format varies by specialty but commonly includes:</p>
      <ul>
        <li>Multiple Choice Questions (MCQ) covering basic sciences and clinical knowledge</li>
        <li>Written papers testing theoretical understanding</li>
        <li>In some specialties, a practical or clinical component</li>
      </ul>
      
      <h3>Timing</h3>
      <p>Part I is typically taken after completing the first <strong>12-24 months</strong> of registrar training.</p>
      <p>Candidates must be registered with HPCSA in an appropriate training category and be in an accredited training post.</p>
      
      <h3>Preparation</h3>
      <p>Preparation for Part I involves comprehensive study of basic sciences relevant to the specialty, review of core clinical knowledge, and practice with past examination papers where available.</p>
      
      <h2><strong>Part II Examination</strong></h2>
      <h3>Format</h3>
      <p>The Part II examination is more comprehensive and typically includes:</p>
      <ul>
        <li>Written papers (short answer questions, case studies)</li>
        <li>Clinical examinations (OSCE - Objective Structured Clinical Examination)</li>
        <li>Oral examinations (viva voce)</li>
        <li>In some specialties, a dissertation or research project defense</li>
      </ul>
      
      <h3>Timing</h3>
      <p>Part II is usually taken in the final year of registrar training, after completing the required clinical rotations and meeting training program requirements.</p>
      <p><strong>Candidates must have passed Part I before attempting Part II!</strong></p>
      
      <h3>Preparation</h3>
      <p>Part II preparation requires integration of clinical experience with theoretical knowledge.</p>
      <p>Candidates should focus on clinical reasoning, case management, and specialist-level decision-making.</p>
      
      <h2><strong>Examination Schedule</strong></h2>
      <p>CMSA fellowship examinations are conducted <strong>twice annually</strong>, typically in:</p>
      <ul>
        <li><strong>First sitting:</strong> May/June</li>
        <li><strong>Second sitting:</strong> October/November</li>
      </ul>
      <p>Exact dates vary by specialty and year. Candidates must check the CMSA website for current examination schedules and application deadlines.</p>
      
      <h2><strong>Application Requirements</strong></h2>
      <p>To apply for CMSA fellowship examinations, candidates typically need:</p>
      <ul>
        <li>HPCSA registration in an appropriate category</li>
        <li>Current appointment in an accredited training post</li>
        <li>Completion of required training duration (varies by specialty)</li>
        <li>Approval from the head of department or training program</li>
        <li>Payment of examination fees</li>
        <li>Completion of CMSA application forms</li>
      </ul>
      
      <h2><strong>Examination Fees</strong></h2>
      <p>Examination fees vary by specialty and examination part.</p>
      <p>Fees are published on the CMSA website and must be paid by the application deadline. Late applications may incur additional fees.</p>
      
      <h2><strong>Number of Attempts</strong></h2>
      <p>Candidates are typically allowed a <strong>limited number of attempts</strong> for each examination part.</p>
      <p>The specific number varies by specialty and is outlined in CMSA regulations. After exhausting allowed attempts, candidates may need to complete additional training or meet other requirements before re-attempting.</p>
      
      <h2><strong>Results and Certification</strong></h2>
      <p>Examination results are typically released <strong>6-8 weeks</strong> after the examination.</p>
      <p>Successful candidates receive notification from CMSA and are awarded the fellowship certificate.</p>
      <p><strong>This certificate, along with university MMed degree completion, enables application for specialist registration with HPCSA.</strong></p>
      
      <h2><strong>Important Considerations</strong></h2>
      <ul>
        <li><strong>Examination requirements and structures vary by specialty</strong> - always check specialty-specific requirements!</li>
        <li>Training program requirements and examination requirements are interconnected - ensure both are met.</li>
        <li>Plan examination timing carefully to align with training program milestones.</li>
        <li>Stay informed about any changes to examination structure or requirements through CMSA communications.</li>
        <li>Seek guidance from supervisors and senior colleagues when preparing for examinations.</li>
      </ul>
    `,
    sources: [
      { name: 'CMSA', url: 'https://www.cmsa.co.za/', type: 'official' as const },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/', type: 'official' as const }
    ],
    relatedServices: [
      { title: 'Specialist Training Support', slug: 'specialist-training' },
      { title: 'Fellowship Preparation', slug: 'fellowship' }
    ]
  };

  const officialSourcesData = [
    {
      organization: 'CMSA',
      documentTitle: 'Fellowship Examination Regulations',
      url: 'https://www.cmsa.co.za/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'HPCSA',
      documentTitle: 'Specialist Registration Requirements',
      url: 'https://www.hpcsa.co.za/',
      lastChecked: 'September 2024'
    }
  ];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description="A comprehensive guide to the Colleges of Medicine of South Africa fellowship examination structure and requirements for specialist qualification."
        publishDate="2024-09-01"
        lastReviewed="2024-09-01"
        author="Dar Cape Medica"
        url={`https://darcape.com/${locale}/knowledge-centre/article/cmsa-fellowship-examination-structure`}
      />
      <ArticleDetail locale={locale} article={article} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
    </>
  );
}
