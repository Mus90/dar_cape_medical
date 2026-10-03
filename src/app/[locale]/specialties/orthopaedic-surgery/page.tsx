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
  const canonicalUrl = locale === 'en' ? `${baseUrl}/specialties/orthopaedic-surgery` : `${baseUrl}/${locale}/specialties/orthopaedic-surgery`;

  return {
    title: 'Orthopaedic Surgery Training South Africa | International Medical Graduates',
    description: 'Information about orthopaedic surgery specialist training pathways for international medical graduates in South Africa. Includes university programs, CMSA examinations, and supernumerary registrar positions.',
    authors: [{ name: 'Dar Cape Medica' }],
    openGraph: {
      type: 'website',
      locale: locale,
      url: canonicalUrl,
      title: 'Orthopaedic Surgery Training South Africa | International Medical Graduates',
      description: 'Information about orthopaedic surgery specialist training pathways for international medical graduates in South Africa.',
      siteName: 'Dar Cape Medica',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'Orthopaedic Surgery Training in South Africa'
        }
      ]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/specialties/orthopaedic-surgery`,
        ar: `${baseUrl}/ar/specialties/orthopaedic-surgery`
      }
    }
  };
}

export default function OrthopaedicSurgeryPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', item: 'https://darcape.com' },
    { name: 'Specialties', item: 'https://darcape.com/specialties' },
    { name: 'Orthopaedic Surgery', item: `https://darcape.com/${locale === 'en' ? '' : locale + '/'}specialties/orthopaedic-surgery` }
  ];

  const specialtyData = locale === 'ar' ? {
    name: 'جراحة العظام',
    overview: 'جراحة العظام هي تخصص جراحي يتعامل مع الجهاز العضلي الهيكلي بما في ذلك العظام والمفاصل والأربطة والأوتار والعضلات. يجمع التدريب في جنوب أفريقيا بين الممارسة السريرية في أقسام جراحة العظام مع المتطلبات الأكاديمية من خلال برامج MMed الجامعية وامتحانات زمالة CMSA.',
    trainingStructure: 'تختلف مدة تدريب جراحة العظام حسب الجامعة والبرنامج. في جامعة ستيلينبوش، يمتد البرنامج لمدة خمس سنوات. يشمل التدريب التدوير عبر التخصصات الفرعية بما في ذلك الصدمات وإعادة بناء البالغين والعمود الفقري وجراحة العظام للأطفال وجراحة اليد والطب الرياضي. يكتسب المقيمون الخبرة الجراحية تحت إشراف الاستشاريين. تحقق من متطلبات المدة المحددة مع الجامعات الفردية.',
    cmsaPathway: 'تشرف كلية جراحي العظام في جنوب أفريقيا على مسار امتحان الزمالة. امتحان FC Orth(SA) مطلوب للتسجيل التخصصي. تقبل الجامعات امتحانات FC Orth(SA) الجزء الأول والجزء الثاني كمعادل لامتحانات MMed الجامعية. تحدد CMSA متطلبات الامتحان وهيكلته. يجب على المرشحين التحقق من متطلبات الامتحان الحالية مباشرة مع CMSA.',
    universities: [
      'جامعة كيب تاون',
      'جامعة ويتواترسراند',
      'جامعة بريتوريا',
      'جامعة كوازولو-ناتال',
      'جامعة ستيلينبوش',
      'جامعة فري ستيت'
    ],
    internationalConsiderations: 'قد تنظر بعض الأقسام في الخريجين الطبيين الدوليين لمناصب زائدة. هذه مناصب ممولة ذاتياً وتوافرها متروك بالكامل لتقدير الأقسام الفردية ويختلف حسب السنة. قد تقوي خبرة جراحة العظام السابقة ومنشورات البحث الطلبات ولكنها لا تضمن النظر. تحقق مباشرة مع الأقسام بشأن التوافر الحالي.',
    competitivenessFactors: [
      'أداء أكاديمي قوي في كلية الطب',
      'تدورات أو خبرة سابقة في جراحة العظام',
      'منشورات بحثية في جراحة العظام',
      'الأداء في امتحانات المجلس الطبي',
      'خطابات توصية من جراحي العظام',
      'إظهار الاهتمام بالمجال من خلال الاختيارية أو المراقبة'
    ],
    relevantExperience: [
      'تدورات جراحة العظام أثناء التدريب أو الإقامة',
      'بحث في مجالات جراحة العظام',
      'مراقبة في أقسام جراحة العظام',
      'منشورات في مجلات جراحة العظام',
      'المشاركة في مؤتمرات جراحة العظام',
      'الخبرة السريرية في عيادات الصدمات أو جراحة العظام'
    ],
    regulatoryConsiderations: 'تسجيل HPCSA مطلوب للممارسة السريرية. يجب على الخريجين الدوليين إكمال التحقق من المؤهلات من خلال EPIC/MyIntealth وتلبية متطلبات فئة التسجيل. قد تتطلب بعض المناصب فئات تسجيل محددة. تحقق من المتطلبات مع HPCSA.',
    preparatorySteps: [
      'اكتسب خبرة سريرية في جراحة العظام حيثما أمكن',
      'استعد وأكمل التحقق من المؤهلات (EPIC)',
      'ابحث في متطلبات القسم المحددة وجداول زمنية للتقديم',
      'أعد السيرة الذاتية مع إبراز خبرة جراحة العظام ذات الصلة',
      'احصل على مراجع قوية من جراحي العظام',
      'فكر في فرص المراقبة أو البحث في جنوب أفريقيا'
    ],
    officialSources: [
      { name: 'كلية جراحي العظام في جنوب أفريقيا', url: 'https://cmsa.co.za/college-of-orthopaedic-surgeons/' },
      { name: 'امتحان CMSA FC Orth(SA)', url: 'https://cmsa.co.za/fellowship-of-the-college-of-orthopaedic-surgeons-of-south-africa-fc-orthsa/' },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/' }
    ],
    lastVerified: 'سبتمبر 2024'
  } : {
    name: 'Orthopaedic Surgery',
    overview: 'Orthopaedic Surgery is a surgical specialty dealing with the musculoskeletal system including bones, joints, ligaments, tendons, and muscles. Training in South Africa combines clinical practice in orthopaedic departments with academic requirements through university MMed programs and CMSA fellowship examinations.',
    trainingStructure: 'Orthopaedic Surgery training duration varies by university and program. At Stellenbosch, the program extends over five years. Training includes rotations through subspecialties including trauma, adult reconstruction, spine, paediatric orthopaedics, hand surgery, and sports medicine. Registrars gain surgical experience under consultant supervision. Verify specific duration requirements with individual universities.',
    cmsaPathway: 'The College of Orthopaedic Surgeons of South Africa oversees the fellowship examination pathway. The FC Orth(SA) examination is required for specialist registration. Universities accept FC Orth(SA) Part I and Part II examinations as equivalent to university MMed examinations. Examination requirements and structure are determined by CMSA. Candidates should verify current examination requirements directly with CMSA.',
    universities: [
      'University of Cape Town',
      'University of the Witwatersrand',
      'University of Pretoria',
      'University of KwaZulu-Natal',
      'Stellenbosch University',
      'University of the Free State'
    ],
    internationalConsiderations: 'Some departments may consider international medical graduates for supernumerary positions. These are self-funded positions and availability is entirely at the discretion of individual departments and varies by year. Previous orthopaedic experience and research publications may strengthen applications but do not guarantee consideration. Verify directly with departments regarding current availability.',
    competitivenessFactors: [
      'Strong academic performance in medical school',
      'Previous orthopaedic rotations or experience',
      'Research publications in orthopaedics',
      'Performance in medical board examinations',
      'Letters of recommendation from orthopaedic surgeons',
      'Demonstrated interest in the field through electives or observerships'
    ],
    relevantExperience: [
      'Orthopaedic rotations during internship or residency',
      'Research in orthopaedic fields',
      'Observerships in orthopaedic departments',
      'Publications in orthopaedic journals',
      'Participation in orthopaedic conferences',
      'Clinical experience in trauma or orthopaedic clinics'
    ],
    regulatoryConsiderations: 'HPCSA registration is required for clinical practice. International graduates must complete credential verification through EPIC/MyIntealth and meet registration category requirements. Some positions may require specific registration categories. Verify requirements with HPCSA.',
    preparatorySteps: [
      'Gain orthopaedic clinical experience where possible',
      'Prepare for and complete credential verification (EPIC)',
      'Research specific department requirements and application timelines',
      'Prepare CV highlighting relevant orthopaedic experience',
      'Obtain strong references from orthopaedic surgeons',
      'Consider observerships or research opportunities in South Africa'
    ],
    officialSources: [
      { name: 'College of Orthopaedic Surgeons of South Africa', url: 'https://cmsa.co.za/college-of-orthopaedic-surgeons/' },
      { name: 'CMSA FC Orth(SA) Examination', url: 'https://cmsa.co.za/fellowship-of-the-college-of-orthopaedic-surgeons-of-south-africa-fc-orthsa/' },
      { name: 'HPCSA', url: 'https://www.hpcsa.co.za/' }
    ],
    lastVerified: 'September 2024'
  };

  const officialSourcesData = [
    {
      organization: 'College of Orthopaedic Surgeons of South Africa',
      documentTitle: 'FC Orth(SA) Examination Requirements',
      url: 'https://cmsa.co.za/college-of-orthopaedic-surgeons/',
      lastChecked: 'September 2024'
    },
    {
      organization: 'Stellenbosch University',
      documentTitle: 'MMed Orthopaedic Surgery Training',
      url: 'https://www.su.ac.za/en/faculties/medicine/departments/surgical-sciences/orthopaedic-surgery',
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
        name="Orthopaedic Surgery Training Advisory"
        description="Advisory support for international medical graduates pursuing orthopaedic surgery specialist training in South Africa"
        url={`https://darcape.com/${locale === 'en' ? '' : locale + '/'}specialties/orthopaedic-surgery`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpecialtyProfile locale={locale} specialty={{ ...specialtyData, departmentQuestions: getSpecialtyQuestions('orthopaedic-surgery', locale) }} />
      <div className="container-max section-padding">
        <OfficialSources sources={officialSourcesData} />
      </div>
      <FloatingWhatsApp pageContext="orthopaedic-surgery" />
    </>
  );
}
