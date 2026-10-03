// Applicant questions, not claims about mandatory rotations or admission criteria.
const questions: Record<string, [string, string]> = {
  ophthalmology: ['Which eye clinics and operating lists will I join, and what surgical logbook is expected?', 'ما عيادات العيون وقوائم العمليات التي سأشارك فيها، وما سجل الخبرة الجراحية المتوقع؟'],
  'orthopaedic-surgery': ['How are trauma and elective surgical rotations organised, and how is operative experience recorded?', 'كيف تنظم دورات الإصابات والجراحة الاختيارية، وكيف توثق الخبرة الجراحية؟'],
  anaesthesiology: ['What supervised theatre, intensive-care and pain-service exposure is offered, and how are practical skills assessed?', 'ما التدريب المتاح تحت الإشراف في العمليات والعناية المركزة وخدمات الألم، وكيف تقيم المهارات العملية؟'],
  'cardiothoracic-surgery': ['How is training divided between cardiac and thoracic surgery, and what operative responsibilities are supervised?', 'كيف يقسم التدريب بين جراحة القلب والصدر، وما المسؤوليات الجراحية تحت الإشراف؟'],
  'clinical-pharmacology': ['How does training combine clinical work, medicine safety, clinical trials and research?', 'كيف يجمع التدريب بين العمل السريري وسلامة الأدوية والتجارب السريرية والبحث؟'],
  dermatology: ['What clinic, procedure and dermatopathology exposure is offered, and how are cases documented?', 'ما التدريب المتاح في العيادات والإجراءات وعلم أمراض الجلد، وكيف توثق الحالات؟'],
  radiology: ['Which imaging modalities and reporting sessions are included, and how is reporting experience assessed?', 'ما وسائل التصوير وجلسات التقارير المشمولة، وكيف تقيم خبرة إعداد التقارير؟'],
  'emergency-medicine': ['Which emergency and acute-care rotations are included, and how are resuscitation skills and on-call duties supervised?', 'ما دورات الطوارئ والرعاية الحادة المشمولة، وكيف يشرف على مهارات الإنعاش ومهام المناوبة؟'],
  'family-medicine': ['How are primary-care, district-hospital and community placements balanced, and what continuity-of-care work is expected?', 'كيف يوازن التدريب بين الرعاية الأولية والمستشفى المحلي والمجتمع، وما العمل المتوقع في استمرارية الرعاية؟'],
  'medical-genetics': ['How are genetics clinics, counselling and laboratory interpretation integrated into training?', 'كيف تدمج عيادات الوراثة والمشورة وتفسير النتائج المخبرية ضمن التدريب؟'],
  'internal-medicine': ['Which inpatient and outpatient rotations are included, and how does primary training differ from later medical subspecialisation?', 'ما دورات الأقسام الداخلية والعيادات المشمولة، وكيف يختلف التدريب الأساسي عن التخصصات الباطنية الدقيقة اللاحقة؟'],
  neurology: ['What inpatient, outpatient and neurodiagnostic exposure is offered, and how is neurological examination assessed?', 'ما التدريب المتاح في الأقسام والعيادات والتشخيص العصبي، وكيف تقيم مهارات الفحص العصبي؟'],
  neurosurgery: ['How are cranial, spinal and emergency surgical cases distributed, and what operative logbook is expected?', 'كيف توزع حالات جراحة الدماغ والعمود الفقري والطوارئ، وما سجل العمليات المتوقع؟'],
  'nuclear-medicine': ['What diagnostic and therapeutic exposure is offered, and how are radiation safety and reporting supervised?', 'ما التدريب التشخيصي والعلاجي المتاح، وكيف يشرف على السلامة الإشعاعية والتقارير؟'],
  'obstetrics-gynaecology': ['How are maternity, gynaecology and theatre rotations arranged, and how are deliveries and procedures logged?', 'كيف تنظم دورات الولادة وعيادات النساء والعمليات، وكيف توثق الولادات والإجراءات؟'],
  'occupational-medicine': ['How are workplace assessments, occupational exposures and clinical consultations integrated, and what service placements are available?', 'كيف تدمج تقييمات أماكن العمل والتعرضات المهنية والاستشارات السريرية، وما التدريب المتاح في الخدمات المهنية؟'],
  otorhinolaryngology: ['What ear, nose, throat and head-and-neck clinic and theatre exposure is offered?', 'ما التدريب المتاح في عيادات وعمليات الأذن والأنف والحنجرة والرأس والعنق؟'],
  'paediatric-surgery': ['What neonatal and paediatric surgical experience is available, and how is age-specific perioperative care supervised?', 'ما الخبرة المتاحة في جراحة حديثي الولادة والأطفال، وكيف يشرف على الرعاية المحيطة بالعمليات المناسبة للعمر؟'],
  paediatrics: ['Which neonatal and child-health rotations are included, and how are growth, development and acute-care competencies assessed?', 'ما دورات حديثي الولادة وصحة الطفل المشمولة، وكيف تقيم كفاءات النمو والتطور والرعاية الحادة؟'],
  'anatomical-pathology': ['How are histology, cytology and post-mortem work supervised, and what reporting portfolio is expected?', 'كيف يشرف على فحوص الأنسجة والخلايا وما بعد الوفاة، وما ملف التقارير المتوقع؟'],
  'chemical-pathology': ['How are biochemical interpretation, quality assurance and clinical consultation taught?', 'كيف يدرس تفسير نتائج الكيمياء الحيوية وضمان الجودة والاستشارة السريرية؟'],
  'clinical-pathology': ['Which laboratory disciplines are covered, and how broad is training compared with a single pathology discipline?', 'ما التخصصات المخبرية المشمولة، وما اتساع التدريب مقارنة بفرع واحد من علم الأمراض؟'],
  'forensic-pathology': ['How are post-mortem investigations, legal documentation and evidence presentation covered?', 'كيف يشمل التدريب تحقيقات ما بعد الوفاة والتوثيق القانوني وعرض الأدلة؟'],
  'haematological-pathology': ['How are blood and bone-marrow investigations, laboratory interpretation and clinical collaboration balanced?', 'كيف يوازن التدريب بين فحوص الدم ونخاع العظم وتفسير النتائج والتعاون السريري؟'],
  'microbiological-pathology': ['How are organism identification, antimicrobial susceptibility and infection consultations covered?', 'كيف يشمل التدريب تحديد الكائنات الدقيقة وحساسية مضادات الميكروبات واستشارات العدوى؟'],
  'virological-pathology': ['What molecular and other virology testing, interpretation and infection-control experience is available?', 'ما الخبرة المتاحة في الاختبارات الجزيئية وغيرها من اختبارات الفيروسات وتفسيرها ومكافحة العدوى؟'],
  'plastic-reconstructive-surgery': ['How are reconstructive and trauma cases distributed, and what supervised operative portfolio is expected?', 'كيف توزع حالات الترميم والإصابات، وما ملف الخبرة الجراحية تحت الإشراف المتوقع؟'],
  psychiatry: ['How are inpatient, outpatient and community placements organised, and what clinical and psychological supervision is offered?', 'كيف تنظم دورات الأقسام الداخلية والعيادات والمجتمع، وما الإشراف السريري والنفسي المتاح؟'],
  'public-health-medicine': ['What epidemiology and health-service management work is offered, and how does this specialist MMed differ from an MPH?', 'ما العمل المتاح في الوبائيات وإدارة الخدمات الصحية، وكيف يختلف MMed التخصصي عن ماجستير الصحة العامة MPH؟'],
  'radiation-oncology': ['How are radiotherapy planning, delivery and multidisciplinary cancer care supervised?', 'كيف يشرف على تخطيط العلاج الإشعاعي وتنفيذه ورعاية السرطان متعددة التخصصات؟'],
  'general-surgery': ['Which elective and emergency surgical rotations are included, and how are operative responsibility and case logs structured?', 'ما دورات الجراحة الاختيارية والطوارئ المشمولة، وكيف تنظم المسؤولية الجراحية وسجلات الحالات؟'],
  urology: ['What urinary-tract clinic and operative experience is offered, and how are endoscopic and other procedures supervised?', 'ما الخبرة المتاحة في عيادات وعمليات المسالك البولية، وكيف يشرف على التنظير والإجراءات الأخرى؟'],
};

export function getSpecialtyQuestions(slug: string, locale: string): string[] {
  const question = questions[slug];
  if (!question) return [];
  return [
    locale === 'ar' ? question[1] : question[0],
    locale === 'ar' ? 'ما مسار الامتحان والمنهج الحالي وتوقيته، وما الخبرة السابقة المقبولة؟' : 'Which current examination route, syllabus and timing apply, and which prior experience is accepted?',
    locale === 'ar' ? 'هل يمكن لفئة تسجيلي إكمال جميع المتطلبات، وما المؤهل والاعتراف المتوقعان عند الانتهاء؟' : 'Can my registration category complete every programme requirement, and what qualification and recognition can I obtain?',
  ];
}
