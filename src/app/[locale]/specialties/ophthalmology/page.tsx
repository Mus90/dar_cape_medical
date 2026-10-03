import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import SpecialtyProfile from '@/components/specialties/SpecialtyProfile';
import { getSpecialtyQuestions } from '@/data/specialtyGuidance';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';
import OfficialSources from '@/components/shared/OfficialSources';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  
  const baseUrl = 'https://darcape.com';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/specialties/ophthalmology` : `${baseUrl}/${locale}/specialties/ophthalmology`;

  return {
    title: 'Ophthalmology Training South Africa | International Medical Graduates',
    description: 'Information about ophthalmology specialist training pathways for international medical graduates in South Africa. Includes university programs, CMSA examinations, and supernumerary registrar positions.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Ophthalmology Training South Africa | International Medical Graduates',
      description: 'Information about ophthalmology specialist training pathways for international medical graduates in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Ophthalmology Training in South Africa'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/specialties/ophthalmology`,
        ar: `${baseUrl}/ar/specialties/ophthalmology`
      }
    }
  };
}

export default function OphthalmologyPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Specialties', item: 'https://darcape.com/specialties' },
    { name: 'Ophthalmology', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}specialties/ophthalmology` }
  ];

  const specialtyData = locale === 'ar' ? {
    name: 'طب العيون',
    overview: 'طب العيون هو تخصص جراحي وطبي يتعامل مع تشخيص وعلاج اضطرابات العين. يجمع التدريب في جنوب أفريقيا بين الممارسة السريرية في أقسام العيون مع المتطلبات الأكاديمية من خلال برامج MMed الجامعية وامتحانات زمالة CMSA.',
    trainingStructure: 'تختلف مدة تدريب طب العيون حسب الجامعة والبرنامج. في UCT، يتم التدريب على مدى فترة أدنى من أربع سنوات بدوام كامل. في جامعة ستيلينبوش، يمتد البرنامج لمدة خمس سنوات. يشمل التدريب التدوير عبر التخصصات الفرعية بما في ذلك الجزء الأمامي والشبكية والجلوكوما وطب العيون للأطفال وجراحة تجميل العين. يكتسب المقيمون الخبرة الجراحية تحت إشراف الاستشاريين. تحقق من متطلبات المدة المحددة مع الجامعات الفردية.',
    cmsaPathway: 'تشرف كلية أطباء العيون في جنوب أفريقيا (COSA) على مسار امتحان الزمالة. امتحان FC Ophth(SA) مطلوب للتسجيل التخصصي. تقبل الجامعات امتحانات FC Ophth(SA) الجزء الأول والجزء الثاني كمعادل لامتحانات MMed الجامعية. تحدد CMSA متطلبات الامتحان وهيكلته. يجب على المرشحين التحقق من متطلبات الامتحان الحالية مباشرة مع CMSA.',
    universities: [
      'جامعة كيب تاون',
      'جامعة ويتواترسراند',
      'جامعة بريتوريا',
      'جامعة كوازولو-ناتال',
      'جامعة ستيلينبوش'
    ],
    internationalConsiderations: 'قد تنظر بعض الأقسام في الخريجين الطبيين الدوليين لمناصب زائدة. هذه مناصب ممولة ذاتياً وتوافرها متروك بالكامل لتقدير الأقسام الفردية ويختلف حسب السنة. قد تقوي خبرة طب العيون السابقة ومنشورات البحث الطلبات ولكنها لا تضمن النظر. تحقق مباشرة مع الأقسام بشأن التوافر الحالي.',
    competitivenessFactors: [
      'أداء أكاديمي قوي في كلية الطب',
      'تدورات أو خبرة سابقة في طب العيون',
      'منشورات بحثية في طب العيون',
      'الأداء في امتحانات المجلس الطبي',
      'خطابات توصية من أطباء العيون',
      'إظهار الاهتمام بالمجال من خلال الاختيارية أو المراقبة'
    ],
    relevantExperience: [
      'تدورات طب العيون أثناء التدريب أو الإقامة',
      'بحث في مجالات طب العيون',
      'مراقبة في أقسام العيون',
      'منشورات في مجلات طب العيون',
      'المشاركة في مؤتمرات طب العيون',
      'الخبرة السريرية في عيادات العيون'
    ],
    regulatoryConsiderations: 'تسجيل HPCSA مطلوب للممارسة السريرية. يجب على الخريجين الدوليين إكمال التحقق من المؤهلات من خلال EPIC/MyIntealth وتلبية متطلبات فئة التسجيل. قد تتطلب بعض المناصب فئات تسجيل محددة. تحقق من المتطلبات مع HPCSA.',
    preparatorySteps: [
      'اكتسب خبرة سريرية في طب العيون حيثما أمكن',
      'استعد وأكمل التحقق من المؤهلات (EPIC)',
      'ابحث في متطلبات القسم المحددة وجداول زمنية للتقديم',
      'أعد السيرة الذاتية مع إبراز خبرة طب العيون ذات الصلة',
      'احصل على مراجع قوية من أطباء العيون',
      'فكر في فرص المراقبة أو البحث في جنوب أفريقيا'
    ],
    officialSources: [
      { name: 'كلية أطباء العيون في جنوب أفريقيا', url: 'https://cmsa.co.za/college-of-ophthalmologists/' },
      { name: 'امتحان CMSA FC Ophth(SA)', url: 'https://cmsa.co.za/fellowship-of-the-college-of-ophthalmologists-of-south-africa-fc-ophthsa/' },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/' }
    ],
    lastVerified: 'سبتمبر 2024'
  } : {
    name: 'Ophthalmology',
    overview: 'Ophthalmology is a surgical and medical specialty dealing with the diagnosis and treatment of eye disorders. Training in South Africa combines clinical practice in eye departments with academic requirements through university MMed programs and CMSA fellowship examinations.',
    trainingStructure: 'Ophthalmology training duration varies by university and program. At UCT, training takes place over a minimum period of four years, full-time. At Stellenbosch, the program extends over five years. Training includes rotations through subspecialties including anterior segment, retina, glaucoma, paediatric ophthalmology, and oculoplastics. Registrars gain surgical experience under consultant supervision. Verify specific duration requirements with individual universities.',
    cmsaPathway: 'The College of Ophthalmologists of South Africa (COSA) oversees the fellowship examination pathway. The FC Ophth(SA) examination is required for specialist registration. Universities accept FC Ophth(SA) Part I and Part II examinations as equivalent to university MMed examinations. Examination requirements and structure are determined by CMSA. Candidates should verify current examination requirements directly with CMSA.',
    universities: [
      'University of Cape Town',
      'University of the Witwatersrand',
      'University of Pretoria',
      'University of KwaZulu-Natal',
      'Stellenbosch University'
    ],
    internationalConsiderations: 'Some departments may consider international medical graduates for supernumerary positions. These are self-funded positions and availability is entirely at the discretion of individual departments and varies by year. Previous ophthalmic experience and research publications may strengthen applications but do not guarantee consideration. Verify directly with departments regarding current availability.',
    competitivenessFactors: [
      'Strong academic performance in medical school',
      'Previous ophthalmology rotations or experience',
      'Research publications in ophthalmology',
      'Performance in medical board examinations',
      'Letters of recommendation from ophthalmologists',
      'Demonstrated interest in the field through electives or observerships'
    ],
    relevantExperience: [
      'Ophthalmology rotations during internship or residency',
      'Research in ophthalmic fields',
      'Observerships in eye departments',
      'Publications in ophthalmology journals',
      'Participation in ophthalmology conferences',
      'Clinical experience in eye clinics'
    ],
    regulatoryConsiderations: 'HPCSA registration is required for clinical practice. International graduates must complete credential verification through EPIC/MyIntealth and meet registration category requirements. Some positions may require specific registration categories. Verify requirements with HPCSA.',
    preparatorySteps: [
      'Gain ophthalmology clinical experience where possible',
      'Prepare for and complete credential verification (EPIC)',
      'Research specific department requirements and application timelines',
      'Prepare CV highlighting relevant ophthalmic experience',
      'Obtain strong references from ophthalmologists',
      'Consider observerships or research opportunities in South Africa'
    ],
    officialSources: [
      { name: 'College of Ophthalmologists of South Africa', url: 'https://cmsa.co.za/college-of-ophthalmologists/' },
      { name: 'CMSA FC Ophth(SA) Examination', url: 'https://cmsa.co.za/fellowship-of-the-college-of-ophthalmologists-of-south-africa-fc-ophthsa/' },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/' }
    ],
    lastVerified: 'September 2024'
  };

  const officialSourcesData = [
    {
      organization: 'College of Ophthalmologists of South Africa',
      documentTitle: 'FC Ophth(SA) Examination Requirements',
      url: 'https://cmsa.co.za/college-of-ophthalmologists/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'University of Cape Town',
      documentTitle: 'Ophthalmology Postgraduate Training',
      url: 'https://health.uct.ac.za/ophthalmology/postgraduate',
      lastChecked: 'September 2024'
    },
    {
      organization: 'HPCSA',
      documentTitle: 'Foreign Qualified Medical Practitioners Guidance',
      url: 'https://www.hpcsa.co.za/',
      lastChecked: 'September 2024'
    }
  ];

  return (
    <>
      <ProfessionalServiceSchema
        name="Ophthalmology Training Advisory"
        description="Advisory support for international medical graduates pursuing ophthalmology specialist training in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}specialties/ophthalmology`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpecialtyProfile locale={locale} specialty={{ ...specialtyData, departmentQuestions: getSpecialtyQuestions('ophthalmology', locale) }} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
      <FloatingWhatsApp pageContext="ophthalmology" />
    </>
  );
}
