import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleDetail from '@/components/knowledge/ArticleDetail';
import ArticleSchema from '@/components/knowledge/ArticleSchema';
import OfficialSources from '@/components/shared/OfficialSources';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  return {
    title: 'Understanding HPCSA Registration Categories for International Medical Graduates',
    description: 'A detailed explanation of the different registration categories available to foreign-qualified doctors and the requirements for each.',
  };
}

export default function ArticlePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const isArabic = locale === 'ar';

  const article = {
    title: isArabic 
      ? 'فئات تسجيل HPCSA للخريجين الطبيين الدوليين'
      : 'Understanding HPCSA Registration Categories for International Medical Graduates',
    category: isArabic ? 'تسجيل HPCSA' : 'HPCSA Registration',
    lastReviewed: isArabic ? 'سبتمبر 2024' : 'September 2024',
    readTime: isArabic ? '8 دقيقة قراءة' : '8 min read',
    disclaimer: isArabic
      ? 'تقدم هذه المقالة معلومات عامة بناءً على مصادر رسمية. المتطلبات تتغير والظروف الفردية تختلف. هذا المحتوى ليس بديلاً عن توجيه HPCSA الرسمي أو التقييم المخصص.'
      : 'This article provides general information based on official sources. Requirements change and individual circumstances vary. This content is not a substitute for official HPCSA guidance or personalized assessment.',
    content: isArabic ? `
      <h2><strong>نظرة عامة على فئات التسجيل</strong></h2>
      <p>تقدم HPCSA <strong>عدة فئات تسجيل</strong> للممارسين الطبيين الأجانب.</p>
      <p>تعتمد الفئة المناسبة على المؤهلات، ونطاق الممارسة المقصود، وأهداف التدريب.</p>
      <p>تختلف متطلبات كل فئة ويجب التحقق منها مباشرة مع HPCSA.</p>
      <p>وفقاً لإرشادات HPCSA، يمكن للممارسين الأجانب التقديم للتسجيل في فئات مثل:</p>
      <ul>
        <li><strong>الممارسة المستقلة (طبيب عام)</strong></li>
        <li><strong>الممارسة المستقلة (أخصائي)</strong></li>
        <li><strong>التسجيل المشروط للتدريب</strong></li>
      </ul>
      
      <h2><strong>الممارسة المستقلة (طبيب عام)</strong></h2>
      <p>تسمح هذه الفئة للأطباء الأجانب <strong>بالممارسة بشكل مستقل كأطباء عامين</strong> في جنوب أفريقيا.</p>
      <p>وفقاً لإرشادات HPCSA، يحق للمرشحين الناجحين التسجيل في فئات مثل المقيم أو الممارسة الخاضعة للإشراف في الخدمة العامة بعد اجتياز امتحان المجلس.</p>
      <p><strong>المتطلبات الرئيسية:</strong></p>
      <ul>
        <li>التحقق من المؤهلات عبر EPIC</li>
        <li>اجتياز امتحان مجلس HPCSA</li>
        <li>الحصول على موافقة وزارة الصحة</li>
        <li>تقديم الوثائق المطلوبة</li>
      </ul>
      <p><em>يتكون امتحان المجلس من قسم نظري (أسئلة متعددة الخيارات مع أقسام طبية وأخلاقية) وقسم عملي (OSCE).</em></p>
      
      <h2><strong>الممارسة المستقلة (أخصائي)</strong></h2>
      <p>وفقاً لقانون المهن الصحية، يمكن للممارسين الطبيين الأجانب الراغبين في الحصول على التسجيل كأخصائي التقديم <strong>فقط بعد الامتثال الكامل لجميع متطلبات التسجيل كطبيب عام!</strong></p>
      <p><strong>المتطلبات الإضافية:</strong></p>
      <ul>
        <li>الحصول على مؤهل تخصصي جنوب أفريقي معتمد</li>
        <li>إكمال التعليم والتدريب التخصصي حسبما يحدده المجلس</li>
        <li>تقديم دليل توثيقي على المؤهل التخصصي</li>
        <li>توفير طبيعة ومدة التعليم والتدريب التخصصي</li>
        <li>التسجيل كطبيب طبي خلال المدة الكاملة للتدريب التخصصي</li>
      </ul>
      
      <h2><strong>التسجيل المشروط للتدريب</strong></h2>
      <p>قد تكون هذه الفئة متاحة للخريجين الطبيين الدوليين الداخلين في برامج التدريب التخصصي.</p>
      <p>تشمل المتطلبات:</p>
      <ul>
        <li>القبول في برنامج تدريب جامعي</li>
        <li>التسجيل في HPCSA كطبيب طبي</li>
        <li>التعيين في منصب تدريب معتمد من HPCSA</li>
      </ul>
      <p><strong>مهم:</strong> يتم تخصيص مناصب التدريب من HPCSA للجامعات وهي <strong>محدودة العدد</strong>. تحقق من المتطلبات الحالية مع HPCSA والجامعة ذات الصلة!</p>
      
      <h2><strong>عملية التقديم</strong></h2>
      <p>وفقاً لإرشادات HPCSA، يجب اتباع الإجراء التالي من قبل الممارسين الطبيين الأجانب:</p>
      <ol>
        <li><strong>الخطوة 1:</strong> قدم المؤهلات إلى خدمات الاعتماد الدولية لـ ECFMG (EICS) للتحقق من المصدر الأساسي. يجب الحصول على تقرير التحقق الكامل قبل تقديم طلب HPCSA.</li>
        <li><strong>الخطوة 2:</strong> قدم الطلب إلى قسم تسجيلات HPCSA بما في ذلك النموذج 12، تقرير التحقق، شهادة الدرجة (مع ترجمة قانونية إذا لم تكن باللغة الإنجليزية)، إثبات التدريب، شهادة IELTS (إذا لم تكن المؤهلة باللغة الإنجليزية)، شهادة الحالة الجيدة، نسخة من جواز السفر/الهوية، ورسالة موافقة وزارة الصحة.</li>
        <li><strong>الخطوة 3:</strong> إذا تمت الموافقة على الجلوس لامتحان المجلس، ادفع رسوم الامتحان وأكمل النموذج 79A. يتكون الامتحان من قسم نظري (أسئلة متعددة الخيارات مع أقسام طبية وأخلاقية) وقسم عملي (OSCE).</li>
        <li><strong>الخطوة 4:</strong> انتظر أسبوعين بعد الجلوس للامتحان للحصول على النتائج. يُمنح المرشحون <strong>ثلاث محاولات</strong> للنجاح. يمكن النظر في محاولة رابعة بتقدير المجلس بعد عام واحد من المحاولة الثالثة الفاشلة.</li>
        <li><strong>الخطوة 5:</strong> إذا نجحت، احصل على رسالة موافقة نحو التوظيف والتخصيص من وزارة الصحة الوطنية (Private Bag X828, Pretoria, 0001).</li>
        <li><strong>الخطوة 6:</strong> قدم رسالة الموافقة، رسوم التسجيل والرسوم السنوية التناسبية في قسم تسجيلات HPCSA للتسجيل.</li>
      </ol>
      
      <h2><strong>المتطلبات الرئيسية</strong></h2>
      <p>وفقاً لإرشادات HPCSA، يجب تقديم الوثائق التالية:</p>
      <ul>
        <li>تقرير التحقق الكامل من خدمات الاعتماد الدولية لـ ECFMG (EICS)</li>
        <li>نموذج الطلب 12، مكتمل بشكل صحيح</li>
        <li>نسخة من شهادة الدرجة أو المؤهل الأساسي في الطب/طب الأسنان مع ترجمة قانونية إذا لم تكن باللغة الإنجليزية (معتمدة من كاتب عدل)</li>
        <li>دليل توثيقي على تدريب التدريب أو التدريب/الخبرة المكافئة الصادرة عن المؤسسات ذات الصلة</li>
        <li>شهادة IELTS تظهر درجة إجمالية 7 (إذا لم تكن المؤهلة باللغة الإنجليزية)</li>
        <li>شهادة الحالة الأصلية (شهادة الحالة الجيدة) لا تزيد عن ثلاثة أشهر</li>
        <li>نسخة من جواز السفر أو وثيقة الهوية صالحة معتمدة من كاتب عدل</li>
        <li>رسالة موافقة من وزارة الصحة</li>
        <li>السجل الأكاديمي الأصلي/النسخة تعكس محتوى الدورة لكل سنة دراسية</li>
        <li>المنهج التفصيلي للدراسة يحدد الدورات، المحتوى، المدة، وطريقة الامتحان</li>
        <li>دليل توثيقي على الخبرة بعد التخرج/العمل في الطب أو طب الأسنان</li>
      </ul>
      
      <h2><strong>هيكل امتحان المجلس</strong></h2>
      <p>وفقاً لإرشادات HPCSA، يتكون امتحان المجلس للممارسين الأجانب من:</p>
      <ul>
        <li><strong>القسم النظري (MCQ):</strong> له جزأين - قسم طبي وقسم أخلاقي. معدل النجاح الإجمالي هو <strong>50%</strong> مع حد أدنى فرعي من <strong>45%</strong> لكل من القسم الطبي وقسم الأخلاق.</li>
        <li><strong>القسم العملي (OSCE):</strong> إذا اجتاز المرشح القسم النظري، يحق له القسم العملي. تُقدم فرصتان للقسم العملي. يجب أن تكون الفرصة الثانية في غضون عام واحد بعد الفرصة الأولى.</li>
        <li><strong>عدد المحاولات:</strong> يُمنح المرشحون <strong>ثلاث محاولات</strong> للنجاح. يمكن النظر في محاولة رابعة بتقدير المجلس بعد عام واحد من المحاولة الثالثة الفاشلة.</li>
        <li><strong>جدول الامتحان:</strong> تُجرى امتحانات المجلس مرتين في السنة، مايو/يونيو وأكتوبر/نوفمبر.</li>
      </ul>
      
      <h2><strong>موافقة وزارة الصحة</strong></h2>
      <p>وفقاً لإرشادات HPCSA، رسالة موافقة دعم طلب التسجيل الصادرة عن وزارة الصحة <strong>مطلوبة!</strong></p>
      <p>يجب توجيه الطلبات إلى:</p>
      <p><em>مدير البرنامج<br/>وزارة الصحة<br/>وزارة الصحة الوطنية<br/>Private Bag X828, Pretoria, 0001, RSA</em></p>
      <p><strong>مهم:</strong> لن يكون المرشحون الذين يفشلون في تأمين دعم وزارة الصحة نحو طلب التسجيل أو التوظيف مؤهلين للتسجيل.</p>
      
      <h2><strong>اعتبارات مهمة</strong></h2>
      <p>مسارات التسجيل معقدة وتعتمد على الظروف الفردية بما في ذلك:</p>
      <ul>
        <li>بلد المؤهل الطبي الأساسي</li>
        <li>السنوات ونوع الخبرة بعد التخرج</li>
        <li>حالة التسجيل الحالية في ولايات قضائية أخرى</li>
        <li>نطاق الممارسة المقصود</li>
        <li>فئة التسجيل المحددة التي يتم السعي إليها</li>
      </ul>
      <p>تقدم هذه المقالة معلومات عامة بناءً على مصادر HPCSA الرسمية. للتوجيه المخصص على وضعك المحدد، استشر HPCSA مباشرة أو اطلب الدعم الاستشاري المهني.</p>
    ` : `
      <h2><strong>Registration Categories Overview</strong></h2>
      <p>HPCSA offers <strong>several registration categories</strong> for foreign-qualified medical practitioners.</p>
      <p>The appropriate category depends on qualifications, intended scope of practice, and training objectives.</p>
      <p>Requirements for each category vary and should be verified directly with HPCSA.</p>
      <p>According to HPCSA guidelines, foreign qualified practitioners may apply for registration in categories such as:</p>
      <ul>
        <li><strong>Independent Practice (General Practitioner)</strong></li>
        <li><strong>Independent Practice (Specialist)</strong></li>
        <li><strong>Conditional Registration for Training</strong></li>
      </ul>
      
      <h2><strong>Independent Practice (General Practitioner)</strong></h2>
      <p>This category allows foreign-qualified doctors to <strong>practice independently as general practitioners</strong> in South Africa.</p>
      <p>According to HPCSA guidelines, successful candidates qualify for registration in categories such as Intern or Public Service Supervised Practice after passing the Board examination.</p>
      <p><strong>Key Requirements:</strong></p>
      <ul>
        <li>EPIC credential verification</li>
        <li>Passing the HPCSA Board examination</li>
        <li>Obtaining Department of Health endorsement</li>
        <li>Submitting required documentation</li>
      </ul>
      <p><em>The Board examination consists of a theory section (MCQ with medical and ethics sections) and a practical section (OSCE).</em></p>
      
      <h2><strong>Independent Practice (Specialist)</strong></h2>
      <p>According to the Health Professions Act, foreign qualified medical practitioners who wish to obtain registration as a specialist may apply <strong>only after having fully complied with all requirements for registration as a General Practitioner!</strong></p>
      <p><strong>Additional Requirements:</strong></p>
      <ul>
        <li>Obtaining an accredited South African specialist qualification</li>
        <li>Completing specialist education and training as specified by the Board</li>
        <li>Submitting documentary proof of specialist qualification</li>
        <li>Providing nature and duration of specialist education and training</li>
        <li>Registration as a medical practitioner during the full duration of specialist training</li>
      </ul>
      
      <h2><strong>Conditional Registration for Training</strong></h2>
      <p>This category may be available for international medical graduates entering specialist training programs.</p>
      <p>Requirements include:</p>
      <ul>
        <li>Acceptance into a university training program</li>
        <li>HPCSA registration as a medical practitioner</li>
        <li>Appointment to an HPCSA-approved training post</li>
      </ul>
      <p><strong>Important:</strong> Training posts are allocated by HPCSA to universities and are <strong>limited in number</strong>. Verify current requirements with HPCSA and the relevant university!</p>
      
      <h2><strong>Application Process</strong></h2>
      <p>According to HPCSA guidelines, the following procedure should be followed by foreign qualified medical practitioners:</p>
      <ol>
        <li><strong>Step 1:</strong> Submit credentials to ECFMG International Credentials Services (EICS) for primary-source verification. The complete verification report must be obtained before submitting the HPCSA application.</li>
        <li><strong>Step 2:</strong> Submit application to HPCSA Registrations Department including Form 12, verification report, degree certificate (with sworn translation if not in English), internship proof, IELTS certificate (if qualification not in English), Certificate of Good Standing, passport/ID copy, and Department of Health endorsement letter.</li>
        <li><strong>Step 3:</strong> If approved to sit for the Board examination, pay the examination fee and complete Form 79A. The examination consists of a theory section (MCQ with medical and ethics sections) and a practical section (OSCE).</li>
        <li><strong>Step 4:</strong> Allow two weeks after sitting the examination for results. Candidates are offered <strong>three attempts</strong> to be successful. A fourth attempt may be considered at the Board's discretion one year after the unsuccessful third attempt.</li>
        <li><strong>Step 5:</strong> If successful, obtain a letter of endorsement towards employment and allocation from the National Department of Health (Private Bag X828, Pretoria, 0001).</li>
        <li><strong>Step 6:</strong> Present endorsement letter, registration fee and pro rata annual fee at HPCSA Registrations Department for registration.</li>
      </ol>
      
      <h2><strong>Key Requirements</strong></h2>
      <p>According to HPCSA guidelines, the following documents must be submitted:</p>
      <ul>
        <li>Complete ECFMG International Credentials Services (EICS) verification report</li>
        <li>Application Form 12, duly completed</li>
        <li>Copy of degree certificate or basic qualification in medicine/dentistry with sworn translation if not in English (certified by Notary Public)</li>
        <li>Documentary proof of internship training or equivalent training/experience issued by relevant institution(s)</li>
        <li>IELTS certificate demonstrating overall Band score 7 (if qualification not in English)</li>
        <li>Original Certificate of Status (Certificate of Good Standing) not older than three months</li>
        <li>Copy of valid Passport or Identity Document certified by Notary Public</li>
        <li>Letter of endorsement from Department of Health</li>
        <li>Original academic record/transcript reflecting course content for each year of study</li>
        <li>Detailed curriculum of course of study specifying courses, content, duration, and mode of examination</li>
        <li>Documentary proof of postgraduate/work experience in medicine or dentistry</li>
      </ul>
      
      <h2><strong>Board Examination Structure</strong></h2>
      <p>According to HPCSA guidelines, the Board examination for foreign qualified practitioners consists of:</p>
      <ul>
        <li><strong>Theory Section (MCQ):</strong> Has two parts - a medical section and an ethics section. The overall pass rate is <strong>50%</strong> with a subminimum of <strong>45%</strong> each for medical section and ethics section.</li>
        <li><strong>Practical Section (OSCE):</strong> If the candidate passes the theory section, they qualify for the practical section. Two opportunities are offered for the practical section. The second opportunity should be within one year after the first opportunity.</li>
        <li><strong>Number of Attempts:</strong> Candidates are offered <strong>three attempts</strong> to be successful. A fourth attempt may be considered at the discretion of the Board one year after the unsuccessful third attempt.</li>
        <li><strong>Examination Schedule:</strong> Board examinations are conducted twice a year, May/June and October/November.</li>
      </ul>
      
      <h2><strong>Department of Health Endorsement</strong></h2>
      <p>According to HPCSA guidelines, a letter of endorsement in support of the application for registration issued by the Department of Health is <strong>required!</strong></p>
      <p>Applications should be directed to:</p>
      <p><em>The Program Manager<br/>Department of Health<br/>National Department of Health<br/>Private Bag X828, Pretoria, 0001, RSA</em></p>
      <p><strong>Important:</strong> Applicants who fail to secure the support of the Department of Health towards an application for registration or employment will not be eligible for registration.</p>
      
      <h2><strong>Important Considerations</strong></h2>
      <p>Registration pathways are complex and depend on individual circumstances including:</p>
      <ul>
        <li>Country of primary medical qualification</li>
        <li>Years and type of postgraduate experience</li>
        <li>Current registration status in other jurisdictions</li>
        <li>Intended scope of practice</li>
        <li>Specific registration category being pursued</li>
      </ul>
      <p>This article provides general information based on official HPCSA sources. For personalized guidance on your specific situation, consult with HPCSA directly or seek professional advisory support.</p>
    `,
    sources: [
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/', type: 'official' as const },
      { name: 'South African Government - Health Professions Act 56 of 1974', url: 'https://www.gov.za/documents/health-professions-act', type: 'official' as const },
      { name: 'ECFMG EPIC', url: 'https://www.ecfmg.org/epic/', type: 'official' as const },
      { name: 'SAQA', url: 'https://www.saqa.org.za/', type: 'official' as const }
    ],
    relatedServices: [
      { title: 'HPCSA Registration Support', slug: 'hpcsa-registration' },
      { title: 'Profile Assessment', slug: 'assessment' }
    ]
  };

  const officialSourcesData = [
    {
      organization: 'HPCSA',
      documentTitle: 'Registration Requirements',
      url: 'https://www.hpcsa.co.za/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'South African Government',
      documentTitle: 'Health Professions Act 56 of 1974 - Section 27',
      url: 'https://www.gov.za/documents/health-professions-act',
      lastChecked: 'September 2024'
    },
    {
      organization: 'ECFMG EPIC',
      documentTitle: 'Credential Verification',
      url: 'https://www.ecfmg.org/epic/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'SAQA',
      documentTitle: 'Foreign Qualifications Evaluation',
      url: 'https://www.saqa.org.za/',
      lastChecked: 'September 2024'
    }
  ];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description="A detailed explanation of the different registration categories available to foreign-qualified doctors and the requirements for each."
        publishDate="2024-09-01"
        lastReviewed="2024-09-01"
        author="Dar Cape Medica"
        url={`https://darcape.com/${locale}/knowledge-centre/article/hpcsa-registration-categories-explained`}
      />
      <ArticleDetail locale={locale} article={article} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
    </>
  );
}
