import { getSpecialtyQuestions } from './specialtyGuidance';

// Specialty availability: UCT's official MMed directory, checked 3 October 2026.
// Scope descriptions are plain-language introductions, not curriculum specifications.
export const specialtySource = 'https://health.uct.ac.za/home/postgraduate-specialist-and-sub-specialist-training';
export const specialtyCheckedDate = '2026-10-03';

const entries = [
  ['ophthalmology', '👁️', 'Ophthalmology', 'طب العيون', 'Medical and surgical care of the eyes and vision.', 'الرعاية الطبية والجراحية للعين والإبصار.'],
  ['orthopaedic-surgery', '🦴', 'Orthopaedic Surgery', 'جراحة العظام', 'Injuries and conditions affecting bones, joints and the musculoskeletal system.', 'إصابات وأمراض العظام والمفاصل والجهاز العضلي الهيكلي.'],
  ['anaesthesiology', '💉', 'Anaesthesiology', 'التخدير', 'Anaesthesia, perioperative care and pain management around surgical procedures.', 'التخدير والرعاية المحيطة بالعمليات وتدبير الألم المرتبط بالإجراءات الجراحية.'],
  ['cardiothoracic-surgery', '🫀', 'Cardiothoracic Surgery', 'جراحة القلب والصدر', 'Surgical treatment of conditions affecting the heart, lungs and chest.', 'العلاج الجراحي لأمراض القلب والرئتين والصدر.'],
  ['clinical-pharmacology', '💊', 'Clinical Pharmacology', 'علم الأدوية السريري', 'How medicines work, their safety and their effective use in patient care.', 'تأثير الأدوية وسلامتها واستخدامها الفعال في رعاية المرضى.'],
  ['dermatology', '🩺', 'Dermatology', 'الأمراض الجلدية', 'Diagnosis and treatment of conditions affecting the skin, hair and nails.', 'تشخيص وعلاج أمراض الجلد والشعر والأظافر.'],
  ['radiology', '🩻', 'Diagnostic Radiology', 'الأشعة التشخيصية', 'Medical imaging to diagnose disease and guide patient management.', 'التصوير الطبي لتشخيص الأمراض وتوجيه رعاية المرضى.'],
  ['emergency-medicine', '🚑', 'Emergency Medicine', 'طب الطوارئ', 'Assessment and initial treatment of acute illness, injury and medical emergencies.', 'تقييم وعلاج الحالات الحادة والإصابات والطوارئ الطبية في مراحلها الأولى.'],
  ['family-medicine', '🏥', 'Family Medicine', 'طب الأسرة', 'Comprehensive, continuing care across ages in primary and district healthcare.', 'رعاية شاملة ومستمرة لمختلف الأعمار في الرعاية الأولية والمستشفيات المحلية.'],
  ['medical-genetics', '🧬', 'Medical Genetics', 'الوراثة الطبية', 'Genetic conditions, diagnostic assessment and counselling for patients and families.', 'الأمراض الوراثية وتقييمها التشخيصي وتقديم المشورة للمرضى وأسرهم.'],
  ['internal-medicine', '🩺', 'Internal Medicine', 'الطب الباطني', 'Adult medical conditions, including complex illness affecting multiple organ systems.', 'الأمراض الطبية لدى البالغين، بما فيها الحالات المعقدة التي تصيب أجهزة متعددة.'],
  ['neurology', '🧠', 'Neurology', 'طب الأعصاب', 'Medical care of disorders affecting the brain, spinal cord, nerves and muscles.', 'الرعاية الطبية لاضطرابات الدماغ والحبل الشوكي والأعصاب والعضلات.'],
  ['neurosurgery', '🧠', 'Neurosurgery', 'جراحة الأعصاب', 'Surgical treatment of conditions affecting the brain, spine and nervous system.', 'العلاج الجراحي لأمراض الدماغ والعمود الفقري والجهاز العصبي.'],
  ['nuclear-medicine', '⚛️', 'Nuclear Medicine', 'الطب النووي', 'Diagnostic imaging and selected treatments using radiopharmaceuticals.', 'التصوير التشخيصي وبعض العلاجات باستخدام المستحضرات الصيدلانية المشعة.'],
  ['obstetrics-gynaecology', '🤰', 'Obstetrics & Gynaecology', 'أمراض النساء والتوليد', 'Pregnancy, childbirth and medical and surgical care of reproductive health.', 'الحمل والولادة والرعاية الطبية والجراحية للصحة الإنجابية.'],
  ['occupational-medicine', '🦺', 'Occupational Medicine', 'الطب المهني', 'Work-related illness, occupational exposures and the relationship between work and health.', 'الأمراض والتعرضات المهنية والعلاقة بين العمل والصحة.'],
  ['otorhinolaryngology', '👂', 'Otorhinolaryngology (ENT)', 'الأنف والأذن والحنجرة', 'Medical and surgical care of ear, nose, throat and related head and neck conditions.', 'الرعاية الطبية والجراحية لأمراض الأذن والأنف والحنجرة وما يرتبط بها في الرأس والعنق.'],
  ['paediatric-surgery', '🧸', 'Paediatric Surgery', 'جراحة الأطفال', 'Surgical care of infants and children, including congenital and acquired conditions.', 'الرعاية الجراحية للرضع والأطفال، بما فيها الحالات الخلقية والمكتسبة.'],
  ['paediatrics', '👶', 'Paediatrics', 'طب الأطفال', 'Medical care of infants, children and adolescents, including growth and development.', 'الرعاية الطبية للرضع والأطفال والمراهقين، بما فيها النمو والتطور.'],
  ['anatomical-pathology', '🔬', 'Anatomical Pathology', 'علم الأمراض التشريحي', 'Diagnosis of disease by examining tissues and cells.', 'تشخيص الأمراض من خلال فحص الأنسجة والخلايا.'],
  ['chemical-pathology', '🧪', 'Chemical Pathology', 'علم الأمراض الكيميائي', 'Laboratory investigation of biochemical changes in health and disease.', 'الفحوص المخبرية للتغيرات الكيميائية الحيوية في الصحة والمرض.'],
  ['clinical-pathology', '🔬', 'Clinical Pathology', 'علم الأمراض السريري', 'Laboratory medicine integrating diagnostic tests with clinical assessment.', 'الطب المخبري الذي يربط الاختبارات التشخيصية بالتقييم السريري.'],
  ['forensic-pathology', '🔎', 'Forensic Pathology', 'علم الأمراض الشرعي', 'Medical investigation of deaths for legal purposes, including post-mortem examination.', 'التحقيق الطبي في الوفيات لأغراض قانونية، بما فيه فحص ما بعد الوفاة.'],
  ['haematological-pathology', '🩸', 'Haematological Pathology', 'علم أمراض الدم', 'Laboratory diagnosis and assessment of disorders of blood and blood-forming tissues.', 'التشخيص والتقييم المخبري لاضطرابات الدم والأنسجة المكونة له.'],
  ['microbiological-pathology', '🦠', 'Microbiological Pathology', 'علم الأمراض الميكروبيولوجي', 'Laboratory diagnosis of infectious disease and interpretation of microbiology results.', 'التشخيص المخبري للأمراض المعدية وتفسير نتائج فحوص الأحياء الدقيقة.'],
  ['virological-pathology', '🦠', 'Virological Pathology', 'علم الأمراض الفيروسي', 'Laboratory investigation of viral infections and interpretation of virology tests.', 'الفحوص المخبرية للعدوى الفيروسية وتفسير نتائج اختبارات الفيروسات.'],
  ['plastic-reconstructive-surgery', '🩹', 'Plastic & Reconstructive Surgery', 'جراحة التجميل والترميم', 'Reconstruction and repair of tissues affected by injury, disease or congenital conditions.', 'ترميم وإصلاح الأنسجة المتأثرة بالإصابات أو الأمراض أو الحالات الخلقية.'],
  ['psychiatry', '🧠', 'Psychiatry', 'الطب النفسي', 'Assessment and treatment of mental health conditions across clinical settings.', 'تقييم وعلاج اضطرابات الصحة النفسية في مختلف بيئات الرعاية.'],
  ['public-health-medicine', '🌍', 'Public Health Medicine', 'طب الصحة العامة', 'Population health, prevention, epidemiology and healthcare service planning.', 'صحة السكان والوقاية وعلم الوبائيات والتخطيط للخدمات الصحية.'],
  ['radiation-oncology', '🎗️', 'Radiation Oncology', 'علاج الأورام بالإشعاع', 'Cancer care with a focus on radiotherapy and multidisciplinary treatment planning.', 'رعاية مرضى السرطان مع التركيز على العلاج الإشعاعي والتخطيط متعدد التخصصات.'],
  ['general-surgery', '🏥', 'General Surgery', 'الجراحة العامة', 'Assessment and surgical management of a broad range of conditions, including abdominal disease.', 'التقييم والعلاج الجراحي لطيف واسع من الحالات، بما فيها أمراض البطن.'],
  ['urology', '🩺', 'Urology', 'جراحة المسالك البولية', 'Medical and surgical care of the urinary tract and male reproductive system.', 'الرعاية الطبية والجراحية للمسالك البولية والجهاز التناسلي الذكري.'],
] as const;

export const specialties = entries.map(([slug, icon, enName, arName, enSummary, arSummary]) => ({
  slug, icon,
  en: { name: enName, summary: enSummary },
  ar: { name: arName, summary: arSummary },
}));

export const newSpecialties = specialties.filter(item => !['ophthalmology', 'orthopaedic-surgery'].includes(item.slug));

// Constituent college names verified against the CMSA homepage's college list.
const cmsaColleges: Record<string, [string, string]> = {
  anaesthesiology: ['College of Anaesthetists', 'كلية أطباء التخدير'],
  'cardiothoracic-surgery': ['College of Cardiothoracic Surgeons', 'كلية جراحي القلب والصدر'],
  'clinical-pharmacology': ['College of Clinical Pharmacologists', 'كلية اختصاصيي علم الأدوية السريري'],
  dermatology: ['College of Dermatologists', 'كلية أطباء الأمراض الجلدية'],
  radiology: ['College of Radiologists', 'كلية أطباء الأشعة'],
  'emergency-medicine': ['College of Emergency Medicine', 'كلية طب الطوارئ'],
  'family-medicine': ['College of Family Physicians', 'كلية أطباء الأسرة'],
  'medical-genetics': ['College of Medical Geneticists', 'كلية اختصاصيي الوراثة الطبية'],
  'internal-medicine': ['College of Physicians', 'كلية أطباء الباطنة'],
  neurology: ['College of Neurologists', 'كلية أطباء الأعصاب'],
  neurosurgery: ['College of Neurosurgeons', 'كلية جراحي الأعصاب'],
  'nuclear-medicine': ['College of Nuclear Physicians', 'كلية أطباء الطب النووي'],
  'obstetrics-gynaecology': ['College of Obstetricians and Gynaecologists', 'كلية أطباء النساء والتوليد'],
  ophthalmology: ['College of Ophthalmologists', 'كلية أطباء العيون'],
  'orthopaedic-surgery': ['College of Orthopaedic Surgeons', 'كلية جراحي العظام'],
  otorhinolaryngology: ['College of Otorhinolaryngologists', 'كلية أطباء الأنف والأذن والحنجرة'],
  'paediatric-surgery': ['College of Paediatric Surgeons', 'كلية جراحي الأطفال'],
  paediatrics: ['College of Paediatricians', 'كلية أطباء الأطفال'],
  'forensic-pathology': ['College of Forensic Pathologists', 'كلية اختصاصيي علم الأمراض الشرعي'],
  'plastic-reconstructive-surgery': ['College of Plastic Surgeons', 'كلية جراحي التجميل والترميم'],
  psychiatry: ['College of Psychiatrists', 'كلية الأطباء النفسيين'],
  'public-health-medicine': ['College of Public Health Medicine', 'كلية طب الصحة العامة'],
  'radiation-oncology': ['College of Radiation Oncologists', 'كلية أطباء علاج الأورام بالإشعاع'],
  'general-surgery': ['College of Surgeons', 'كلية الجراحين'],
  urology: ['College of Urologists', 'كلية أطباء المسالك البولية'],
};
for (const discipline of ['anatomical', 'chemical', 'clinical', 'haematological', 'microbiological', 'virological']) {
  cmsaColleges[`${discipline}-pathology`] = ['College of Pathologists', 'كلية اختصاصيي علم الأمراض'];
}

export function getSpecialtyProfile(slug: string, locale: string) {
  const entry = specialties.find(item => item.slug === slug);
  if (!entry) return null;
  const arabic = locale === 'ar';
  const text = arabic ? entry.ar : entry.en;
  const local = (en: string, ar: string) => arabic ? ar : en;
  const college = cmsaColleges[slug];
  const collegeName = college ? local(...college) : '';
  return {
    name: text.name,
    overview: text.summary,
    departmentQuestions: getSpecialtyQuestions(slug, locale),
    trainingStructure: local(
      'UCT lists this MMed specialty: supervised registrar training, examinations and a research dissertation, with a minimum four-year programme. Confirm the department’s duration and rotations.',
      'تدرج جامعة كيب تاون هذا التخصص ضمن برامج MMed: تدريب تحت الإشراف وامتحانات ورسالة بحثية، بحد أدنى أربع سنوات. تحقق من مدة البرنامج ودوراته مع القسم.'),
    cmsaPathway: (collegeName ? local(`Relevant CMSA college: ${collegeName}. `, `كلية CMSA المعنية: ${collegeName}. `) : '') + local(
      'Consult the CMSA examination directory for the applicable fellowship, entry requirements, syllabus and assessment stages. Confirm with the department which examinations count towards its MMed. A diploma or subspecialty certificate is a different qualification from primary specialist training.',
      'راجع دليل امتحانات CMSA لمعرفة الزمالة المعنية وشروط الدخول والمنهج ومراحل التقييم. تأكد من القسم من الامتحانات المحتسبة ضمن MMed. الدبلوم وشهادة التخصص الدقيق مؤهلان مختلفان عن التدريب التخصصي الأساسي.'),
    universities: [{ name: local('University of Cape Town — official MMed directory', 'جامعة كيب تاون — دليل MMed الرسمي'), url: specialtySource }],
    internationalConsiderations: local(
      'UCT describes supernumerary training for selected foreign-qualified doctors. Availability and the qualification achievable must be confirmed with the department. Limited registration without an approved training number does not confer South African specialist recognition.',
      'توضح جامعة كيب تاون إمكانية التدريب في مقاعد إضافية لبعض الأطباء المؤهلين خارج البلاد. يجب تأكيد التوافر والمؤهل الممكن الحصول عليه مع القسم. التسجيل المحدود دون رقم تدريب معتمد لا يمنح الاعتراف كتخصص في جنوب أفريقيا.'),
    competitivenessFactors: [local(
      'Ask the department for its published selection criteria and current posts; no acceptance rate or guaranteed placement is implied.',
      'اطلب من القسم معايير الاختيار المنشورة والمقاعد الحالية؛ لا تعني هذه المعلومات معدل قبول محدداً أو ضمان الحصول على مقعد.')],
    relevantExperience: [local(
      `For your application, describe relevant clinical or laboratory experience in ${text.name}, supervised responsibilities, research and learning goals. The department decides which experience is relevant.`,
      `وضح في طلبك الخبرة السريرية أو المخبرية ذات الصلة بمجال ${text.name}، ومسؤولياتك تحت الإشراف والبحث وأهداف التعلم. يحدد القسم مدى ملاءمة الخبرة.`)],
    regulatoryConsiderations: local(
      'Confirm your HPCSA registration category and approved training number before accepting a post. Admission, examination eligibility and specialist recognition are separate decisions.',
      'تأكد من فئة تسجيلك لدى HPCSA ورقم التدريب المعتمد قبل قبول المقعد. القبول وأهلية الامتحان والاعتراف بالتخصص قرارات منفصلة.'),
    preparatorySteps: [
      local('Read the department’s current curriculum and contact it about entry requirements and available posts.', 'اقرأ المنهج الحالي للقسم وتواصل معه بشأن شروط الدخول والمقاعد المتاحة.'),
      local('Prepare your qualifications, internship record, CV and professional registration documents.', 'جهز مؤهلاتك وسجل الامتياز والسيرة الذاتية ووثائق التسجيل المهني.'),
      local('Confirm examination eligibility, funding, permitted clinical duties and the expected qualification in writing.', 'أكد كتابياً أهلية الامتحان والتمويل والمهام السريرية المسموح بها والمؤهل المتوقع.'),
    ],
    officialSources: [
      { name: local('UCT — specialist training and specialty list', 'جامعة كيب تاون — التدريب وقائمة التخصصات'), url: specialtySource },
      { name: local('CMSA — colleges and examination resources', 'CMSA — الكليات ومصادر الامتحانات'), url: 'https://cmsa.co.za/' },
    ],
    lastVerified: local('3 October 2026 — directory and general training framework', '3 أكتوبر 2026 — الدليل والإطار العام للتدريب'),
  };
}
