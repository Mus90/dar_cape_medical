import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import UniversityProfile from '@/components/universities/UniversityProfile';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: 'University of Cape Town - Faculty of Health Sciences',
    description: 'Information about specialist training programs at UCT for international medical graduates.',
  };
}

export default function UCTPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const universityData = {
    name: 'University of Cape Town',
    faculty: 'Faculty of Health Sciences',
    location: 'Cape Town, Western Cape',
    specialistPrograms: [
      'Internal Medicine',
      'Surgery (General, Orthopaedic, Cardiothoracic)',
      'Paediatrics',
      'Obstetrics & Gynaecology',
      'Anaesthesiology',
      'Radiology',
      'Psychiatry',
      'Ophthalmology',
      'Emergency Medicine',
      'Family Medicine',
      'Pathology',
      'Otorhinolaryngology'
    ],
    internationalPathways: [
      'Supernumerary registrar positions available in selected specialties',
      'International medical graduates may apply through formal application processes',
      'Some departments have established pathways for foreign-qualified doctors',
      'Eligibility varies by specialty and departmental policy'
    ],
    trainingStructure: 'Training is conducted at affiliated teaching hospitals including Groote Schuur Hospital, Red Cross War Memorial Children\'s Hospital, and others. Registrar positions combine clinical duties with academic requirements under consultant supervision.',
    applicationApproach: 'Applications are submitted through the university\'s central admissions system and directly to relevant departments. Each department manages its own selection process and may have additional requirements beyond university-wide criteria.',
    programDuration: '4-5 years for most specialist programs, depending on specialty and college requirements.',
    cmsaRelationship: 'MMed degrees offered through UCT. CMSA fellowship examinations are required for specialist qualification in most specialties. Training programs prepare registrars for both university degree and college examinations.',
    hpcsaConsiderations: 'HPCSA registration is required for clinical practice. Registration category depends on qualifications and intended scope of practice. University-linked registration may be required for registrar positions.',
    fundingConsiderations: 'Government-funded positions are limited and highly competitive. Supernumerary positions are self-funded by candidates. Funding availability varies by specialty and year.',
    admissionRequirements: [
      'MBChB or equivalent medical qualification',
      'Completed internship and community service (for South African graduates)',
      'HPCSA registration or eligibility for registration',
      'Medical board examination where applicable',
      'CV and academic transcripts',
      'References and motivation letters',
      'Department-specific requirements may apply'
    ],
    applicationTiming: 'Application cycles vary by department. Most specialties accept applications annually, typically in the first half of the year for positions starting the following year. Candidates should verify specific departmental timelines.',
    departmentContact: 'Direct contact with relevant department heads or program coordinators is recommended. Department websites provide specific contact information and application guidelines.',
    officialSources: [
      { name: 'UCT Faculty of Health Sciences', url: 'https://www.healthsciences.uct.ac.za/' },
      { name: 'Groote Schuur Hospital', url: 'https://www.gsh.co.za/' },
      { name: 'HPCSA Official Website', url: 'https://www.hpcsa.co.za/' }
    ],
    lastVerified: 'September 2024',
    verificationStatus: 'confirmation-required' as const
  };

  return <UniversityProfile locale={locale} university={universityData} />;
}
