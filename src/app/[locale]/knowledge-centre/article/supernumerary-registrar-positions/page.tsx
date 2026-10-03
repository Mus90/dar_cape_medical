import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleDetail from '@/components/knowledge/ArticleDetail';
import ArticleSchema from '@/components/knowledge/ArticleSchema';
import OfficialSources from '@/components/shared/OfficialSources';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  setRequestLocale(locale);
  return {
    title: 'Supernumerary Registrar Positions in South Africa',
    description: 'Understanding self-funded supernumerary registrar positions for international medical graduates seeking specialist training in South Africa.',
  };
}

export default function ArticlePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const isArabic = locale === 'ar';

  const article = {
    title: isArabic 
      ? 'مناصب المقيم الزائد في جنوب أفريقيا'
      : 'Supernumerary Registrar Positions in South Africa',
    category: isArabic ? 'التدريب التخصصي' : 'Specialist Training',
    lastReviewed: isArabic ? 'سبتمبر 2024' : 'September 2024',
    readTime: isArabic ? '7 دقيقة قراءة' : '7 min read',
    disclaimer: isArabic
      ? 'تقدم هذه المقالة معلومات عامة بناءً على مصادر رسمية. توافر المناصب الزائدة يختلف حسب القسم والمؤسسة. هذا المحتوى ليس بديلاً عن الاستشارة المباشرة مع الجامعات.'
      : 'This article provides general information based on official sources. Availability of supernumerary positions varies by department and institution. This content is not a substitute for direct consultation with universities.',
    content: isArabic ? `
      <h2>ما هي المناصب الزائدة؟</h2>
      <p><strong>مناصب المقيم الزائد</strong> هي <strong>مناصب تدريب ممولة ذاتياً</strong> في المستشفيات والمؤسسات التعليمية في جنوب أفريقيا.</p>
      <p>على عكس مناصب المقيم القياسية التي تمولها وزارة الصحة، يتم تمويل المناصب الزائدة من قبل المتدرب نفسه أو من خلال رعاية خارجية.</p>
      <p>توفر هذه المناصب فرصة للخريجين الطبيين الدوليين للحصول على خبرة تدريب تخصصي في جنوب أفريقيا.</p>
      
      <h2>الخصائص الرئيسية</h2>
      <p>تشارك المناصب الزائدة العديد من أوجه التشابه مع مناصب المقيم القياسية ولكنها تميزات مهمة:</p>
      <ul>
        <li><strong>ممولة ذاتياً:</strong> يغطي المتدرب جميع التكاليف بما في ذلك الراتب ورسوم المستشفى وتكاليف التدريب.</li>
        <li><strong>التدريب المكافئ:</strong> التدريب السريري والإشراف عادة ما يكون مكافئاً لمناصب المقيم القياسية.</li>
        <li><strong>التوافر المحدود:</strong> ليست جميع الأقسام تقدم مناصب زائدة، ويتوافر حسب السنة.</li>
        <li><strong>متطلبات التسجيل:</strong> لا يزال التسجيل في HPCSA في فئة مناسبة مطلوباً.</li>
      </ul>
      
      <h2>متطلبات الأهلية</h2>
      <p>للنظر في منصب مقيم زائد، يحتاج المرشحون عادةً إلى تلبية المتطلبات التالية:</p>
      <ul>
        <li>شهادة طبية صالحة من مؤسسة معترف بها</li>
        <li>إكمال التدريب أو التدريب المكافئ</li>
        <li>التسجيل في HPCSA (أو الأهلية للتسجيل)</li>
        <li>الخبرة بعد التخرج ذات الصلة في التخصص المطلوب</li>
        <li>إثبات التمويل لمدة التدريب</li>
        <li>القبول من قبل القسم الجامعي ذي الصلة</li>
      </ul>
      
      <h2>عملية التقديم</h2>
      <p>تختلف عملية التقديم للمناصب الزائدة حسب المؤسسة ولكنها تتضمن بشكل عام:</p>
      <ol>
        <li><strong>البحث:</strong> حدد الأقسام التي تقدم مناصب زائدة في تخصصك.</li>
        <li><strong>الاتصال:</strong> تواصل مع رئيس القسم أو منسق التدريب للتعبير عن الاهتمام.</li>
        <li><strong>تقديم الطلب:</strong> قدم السيرة الذاتية والمؤهلات ورسالة التحفيز وإثبات التمويل.</li>
        <li><strong>المقابلة:</strong> حضور مقابلة مع لجنة اختيار القسم.</li>
        <li><strong>القبول:</strong> إذا تم قبولك، أكمل تسجيل المستشفى والمتطلبات الإدارية.</li>
      </ol>
      
      <h2><strong>التكاليف والتمويل</strong></h2>
      <p>تختلف تكاليف المناصب الزائدة بشكل كبير حسب المؤسسة والتخصص والمدة.</p>
      <p>التكاليف النموذجية قد تشمل:</p>
      <ul>
        <li>الراتب الشهري المكافئ لمنصب المقيم</li>
        <li>رسوم المستشفى الإدارية وتأمين سوء الممارسة</li>
        <li>رسوم التسجيل والامتحانات الجامعية</li>
        <li>رسوم امتحانات زمالة CMSA</li>
        <li>مصاريف المعيشة والإقامة</li>
      </ul>
      <p><strong>مهم:</strong> يجب على المرشحين وضع الميزانية بعناية وتأكيد جميع التكاليف مع المؤسسة قبل الالتزام بمنصب زائد!</p>
      
      <h2><strong>المزايا والاعتبارات</strong></h2>
      <h3>المزايا:</h3>
      <ul>
        <li>الوصول إلى التدريب التخصصي في جنوب أفريقيا</li>
        <li>الخبرة السريرية العملية في برنامج تدريب معترف به</li>
        <li>فرصة لبناء شبكات مهنية</li>
        <li>المسار إلى امتحانات زمالة CMSA</li>
        <li>المرونة في التوقيت واختيار التخصص</li>
      </ul>
      
      <h3>الاعتبارات:</h3>
      <ul>
        <li><strong>مطلوب التزام مالي كبير</strong></li>
        <li>المناصب محودة وتنافسية</li>
        <li>لا تضمن مناصب المقيم الممولة مستقبلاً</li>
        <li>يجب تلبية متطلبات التأشيرة والهجرة</li>
        <li>قد تختلف مدة التدريب عن البرامج القياسية</li>
      </ul>
      
      <h2><strong>ملاحظات مهمة</strong></h2>
      <ul>
        <li><strong>تحقق دائماً من التوافر الحالي والمتطلبات مباشرة مع القسم الجامعي ذي الصلة!</strong></li>
        <li>تأكد من أن حالة التسجيل في HPCSA مناسبة للتدريب المقصود.</li>
        <li>ضع في الاعتبار التأثيرات المهنية طويلة المدى للتدريب الزائد.</li>
        <li>اطلب المشورة المهنية إذا كنت غير متأكد من ملاءمة هذا المسار.</li>
      </ul>
    ` : `
      <h2>What are Supernumerary Positions?</h2>
      <p><strong>Supernumerary registrar positions</strong> are <strong>self-funded training posts</strong> in South African hospitals and teaching institutions.</p>
      <p>Unlike standard registrar positions which are funded by the Department of Health, supernumerary positions are funded by the trainee themselves or through external sponsorship.</p>
      <p>These positions provide an opportunity for international medical graduates to gain specialist training experience in South Africa.</p>
      
      <h2>Key Characteristics</h2>
      <p>Supernumerary positions share many similarities with standard registrar posts but have important distinctions:</p>
      <ul>
        <li><strong>Self-Funded:</strong> The trainee covers all costs including salary, hospital fees, and training costs.</li>
        <li><strong>Training Equivalent:</strong> Clinical training and supervision are typically equivalent to standard registrar positions.</li>
        <li><strong>Limited Availability:</strong> Not all departments offer supernumerary positions, and availability varies by year.</li>
        <li><strong>Registration Requirement:</strong> HPCSA registration in an appropriate category is still required.</li>
      </ul>
      
      <h2>Eligibility Requirements</h2>
      <p>To be considered for a supernumerary registrar position, candidates typically need to meet the following requirements:</p>
      <ul>
        <li>Valid medical degree from a recognized institution</li>
        <li>Completed internship or equivalent training</li>
        <li>HPCSA registration (or eligibility for registration)</li>
        <li>Relevant postgraduate experience in the specialty of interest</li>
        <li>Proof of funding for the duration of training</li>
        <li>Acceptance by the relevant university department</li>
      </ul>
      
      <h2>Application Process</h2>
      <p>The application process for supernumerary positions varies by institution but generally involves:</p>
      <ol>
        <li><strong>Research:</strong> Identify departments that offer supernumerary positions in your specialty.</li>
        <li><strong>Contact:</strong> Reach out to the department head or training coordinator to express interest.</li>
        <li><strong>Submit Application:</strong> Provide CV, qualifications, motivation letter, and proof of funding.</li>
        <li><strong>Interview:</strong> Attend an interview with the department selection committee.</li>
        <li><strong>Acceptance:</strong> If accepted, complete hospital registration and administrative requirements.</li>
      </ol>
      
      <h2><strong>Costs and Funding</strong></h2>
      <p>Costs for supernumerary positions vary significantly by institution, specialty, and duration.</p>
      <p>Typical costs may include:</p>
      <ul>
        <li>Monthly salary equivalent for the registrar position</li>
        <li>Hospital administrative fees and malpractice insurance</li>
        <li>University registration and examination fees</li>
        <li>CMSA fellowship examination fees</li>
        <li>Living expenses and accommodation</li>
      </ul>
      <p><strong>Important:</strong> Candidates should budget carefully and confirm all costs with the institution before committing to a supernumerary position!</p>
      
      <h2><strong>Advantages and Considerations</strong></h2>
      <h3>Advantages:</h3>
      <ul>
        <li>Access to specialist training in South Africa</li>
        <li>Hands-on clinical experience in a recognized training program</li>
        <li>Opportunity to build professional networks</li>
        <li>Pathway to CMSA fellowship examinations</li>
        <li>Flexibility in timing and specialty choice</li>
      </ul>
      
      <h3>Considerations:</h3>
      <ul>
        <li><strong>Significant financial commitment required</strong></li>
        <li>Positions are limited and competitive</li>
        <li>Does not guarantee future funded registrar posts</li>
        <li>Visa and immigration requirements must be met</li>
        <li>Training duration may differ from standard programs</li>
      </ul>
      
      <h2><strong>Important Notes</strong></h2>
      <ul>
        <li><strong>Always verify current availability and requirements directly with the relevant university department!</strong></li>
        <li>Ensure HPCSA registration status is appropriate for the intended training.</li>
        <li>Consider the long-term career implications of supernumerary training.</li>
        <li>Seek professional advice if uncertain about the suitability of this pathway.</li>
      </ul>
    `,
    sources: [
      { name: 'CMSA', url: 'https://www.cmsa.co.za/', type: 'official' as const },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/', type: 'official' as const }
    ],
    relatedServices: [
      { title: 'Specialist Training Support', slug: 'specialist-training' },
      { title: 'Profile Assessment', slug: 'assessment' }
    ]
  };

  const officialSourcesData = [
    {
      organization: 'CMSA',
      documentTitle: 'Fellowship Examination Information',
      url: 'https://www.cmsa.co.za/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'HPCSA',
      documentTitle: 'Registration Categories',
      url: 'https://www.hpcsa.co.za/',
      lastChecked: 'September 2024'
    }
  ];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description="Understanding self-funded supernumerary registrar positions for international medical graduates seeking specialist training in South Africa."
        publishDate="2024-09-01"
        lastReviewed="2024-09-01"
        author="Dar Cape Medica"
        url={`https://darcape.com/${locale}/knowledge-centre/article/supernumerary-registrar-positions`}
      />
      <ArticleDetail locale={locale} article={article} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
    </>
  );
}
