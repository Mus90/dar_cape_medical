import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from '@/components/blog/BlogPost';
import RelatedPosts from '@/components/blog/RelatedPosts';

// This would typically come from a CMS or database
const getBlogPost = async (id: string, locale: string) => {
  const t = await getTranslations({ locale, namespace: 'blog' });

  const postMap: { [key: string]: string } = {
    '1': 'destinations',
    '2': 'photography',
    '3': 'wine',
    '4': 'culture',
    '5': 'adventure',
    '6': 'tips'
  };

  const postKey = postMap[id];
  if (!postKey) return null;

  // Arabic content
  const arabicPosts = [
    {
      id: '1',
      title: 'أفضل 10 وجهات يجب زيارتها في كيب تاون',
      excerpt: 'اكتشف أكثر المواقع إثارة للإعجاب التي يجب أن تكون في برنامج كل مسافر إلى كيب تاون.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🌍</span>مقدمة</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">كيب تاون أرض ذات <strong class="text-primary-600">تنوع مذهل</strong>، تقدم كل شيء من المدن الصاخبة إلى المناطق البرية البكر. سواء كنت تبحث عن المغامرة أو الثقافة أو الاسترخاء، فإن هذا البلد الجميل لديه شيء للجميع.</p><div class="bg-blue-50 border-r-4 border-blue-400 p-4 mb-6"><p class="text-blue-800 italic">"من جبل الطاولة الأيقوني إلى مناطق العنب المشهورة عالمياً، تقدم كيب تاون تجارب ستأخذ أنفاسك."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🏔️</span>1. كيب تاون وجبل الطاولة</h2><p class="mb-4 leading-relaxed">لا تكتمل زيارة كيب تاون دون تجربة <strong>المدينة الأم</strong>. تقدم كيب تاون:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">جمال طبيعي مذهل مع إطلالات بانورامية</li><li class="text-gray-700">تراث تاريخي غني ومواقع ثقافية</li><li class="text-gray-700">مطاعم عالمية المستوى وحياة ليلية نابضة</li><li class="text-gray-700">أنشطة مغامرة مثل المشي والتلفريك</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🦁</span>2. حديقة كروجر الوطنية</h2><p class="mb-4 leading-relaxed">موطن <strong class="text-primary-600">الخمسة الكبار</strong> وعدد لا يحصى من الأنواع الأخرى، كروجر واحدة من وجهات السفاري الرائدة في أفريقيا.</p><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🌊</span>3. طريق الحديقة</h2><p class="mb-6 leading-relaxed">هذا الطريق الساحلي الخلاب يقدم مناظر طبيعية خلابة ومدن ساحرة ومغامرات في الهواء الطلق.</p></div>',
      author: 'مصطفى علي',
      date: '2024-01-15',
      readTime: '8 دقائق قراءة',
      category: 'destinations',
      categoryName: 'الوجهات',
      image: 'https://images.unsplash.com/photo-1575729370600-781d9c08a74e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['كيب تاون', 'كروجر', 'طريق الحديقة', 'نصائح السفر']
    },
    {
      id: '2',
      title: 'تصوير السفاري: التقاط الخمسة الكبار',
      excerpt: 'نصائح وتقنيات احترافية لتصوير أروع الحيوانات البرية في أفريقيا.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">📸</span>البدء في تصوير السفاري</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">تصوير الحياة البرية في أفريقيا <strong class="text-primary-600">تجربة مذهلة</strong> تتطلب الصبر والمهارة والمعدات المناسبة.</p><div class="bg-amber-50 border-r-4 border-amber-400 p-4 mb-6"><p class="text-amber-800 italic">"أفضل صور الحياة البرية تولد من الصبر والإعداد واحترام الطبيعة."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🎯</span>المعدات الأساسية</h2><p class="mb-4 leading-relaxed"><strong class="text-primary-600">عدسة تليفوتوغرافية (300-600 مم)</strong> ضرورية لتصوير الحياة البرية:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">عدسة تليفوتوغرافية للمواضيع البعيدة</li><li class="text-gray-700">حامل ثلاثي قوي للاستقرار</li><li class="text-gray-700">بطاريات إضافية</li><li class="text-gray-700">بطاقات ذاكرة متعددة</li></ul></div>',
      author: 'مصطفى علي',
      date: '2024-01-12',
      readTime: '6 دقائق قراءة',
      category: 'photography',
      categoryName: 'التصوير',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['سفاري', 'تصوير', 'حياة برية', 'الخمسة الكبار']
    },
    {
      id: '3',
      title: 'دليل تذوق العنب: ستيلينبوش مقابل فرانشهوك',
      excerpt: 'قارن بين منطقتين من أفضل مناطق العنب في كيب تاون واكتشف أيهما يناسب ذوقك.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🍷</span>مقدمة عن نبيذ كيب تاون</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">مناطق العنب في كيب تاون تقدم <strong class="text-primary-600">تجارب عالمية المستوى</strong> مع مناظر طبيعية مذهلة ونبيذ استثنائي.</p><div class="bg-purple-50 border-r-4 border-purple-400 p-4 mb-6"><p class="text-purple-800 italic">"كيب تاون تنتج بعضاً من أفضل أنواع العنب في العالم، منافسة الأفضل من فرنسا وإيطاليا."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🏰</span>ستيلينبوش: قلب بلاد العنب</h2><p class="mb-4 leading-relaxed">معروفة بـ <strong class="text-primary-600">عقاراتها التاريخية</strong> العنب الأحمر المتميز، تقدم ستيلينبوش تجربة نبيذ تقليدية:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">عقارات نبيذ تاريخية تعود للقرن السابع عشر</li><li class="text-gray-700">كابيرنيت ساوفيجنون وبينوتاج حائزة على جوائز</li><li class="text-gray-700">جولات في القبو وتذوق العنب</li><li class="text-gray-700">مطاعم راقية مع إقران العنب</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🇫🇷</span>فرانشهوك: الزاوية الفرنسية</h2><p class="mb-4 leading-relaxed">هذا الوادي الساحر يجمع بين <strong class="text-primary-600">التراث الفرنسي</strong> وتربة كيب تاون:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">تاريخ وثقافة الهوجونوت الفرنسيين</li><li class="text-gray-700">مصانع نبيذ بوتيك ومنتجين حرفيين</li><li class="text-gray-700">مهرجانات طعام ونبيذ للذواقة</li><li class="text-gray-700">خلفية جبلية خلابة</li></ul></div>',
      author: 'مصطفى علي',
      date: '2024-01-10',
      readTime: '5 دقائق قراءة',
      category: 'wine',
      categoryName: 'العنب والطعام',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['نبيذ', 'ستيلينبوش', 'فرانشهوك', 'طعام']
    },
    {
      id: '4',
      title: 'الانغماس الثقافي: فهم التراث الجنوب أفريقي',
      excerpt: 'انغمس في النسيج الثقافي الغني الذي يجعل كيب تاون فريدة من نوعها.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2"></span>التسامح الديني</h2><p class="text-lg leading-relaxed mb-6 text-gray-700"><strong class="text-primary-600">التنوع الثقافي</strong> في كيب تاون هو واحد من أعظم كنوزها، مع 11 لغة رسمية وتقاليد لا تحصى تخلق نسيجاً فريداً من التجربة الإنسانية.</p><div class="bg-orange-50 border-r-4 border-orange-400 p-4 mb-6"><p class="text-orange-800 italic">"كيب تاون هي المكان الذي تتقارب فيه الثقافات، لتخلق شيئاً جميلاً وأفريقياً فريداً."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🏛️</span>المواقع التاريخية للزيارة</h2><p class="mb-4 leading-relaxed">من <strong class="text-primary-600">جزيرة روبن</strong> إلى مهد البشرية، تقدم كيب تاون تجارب تاريخية عميقة:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">جزيرة روبن - سجن نيلسون مانديلا</li><li class="text-gray-700">متحف المنطقة السادسة - تاريخ الفصل العنصري</li><li class="text-gray-700">قلعة الرجاء الصالح - التراث الاستعماري</li><li class="text-gray-700">مهد البشرية - أصول الإنسان</li><li class="text-gray-700">بو كاب - ثقافة الكيب الملايو</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🎭</span>الثقافة الحية</h2><p class="mb-4 leading-relaxed">اختبر <strong class="text-primary-600">الموسيقى والرقص والمأكولات التقليدية</strong> التي تحكي قصة هذه الأمة الرائعة:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">الطبول والرقص الأفريقي التقليدي</li><li class="text-gray-700">مأكولات الكيب الملايو ودروس الطبخ</li><li class="text-gray-700">الأسواق المحلية ومراكز الحرف</li><li class="text-gray-700">جولات ثقافية مجتمعية</li></ul></div>',
      author: 'مصطفى علي',
      date: '2024-01-08',
      readTime: '7 دقائق قراءة',
      category: 'culture',
      categoryName: 'الثقافة',
      image: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['ثقافة', 'تراث', 'تاريخ', 'حياة محلية']
    },
    {
      id: '5',
      title: 'أنشطة المغامرة: اندفاع الأدرينالين في كيب تاون',
      excerpt: 'من القفز بالحبل إلى الغوص مع أسماك القرش، اكتشف مغامرات كيب تاون المثيرة.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🏔️</span>كيب تاون: عاصمة المغامرة</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">تقدم كيب تاون <strong class="text-primary-600">أنشطة مغامرة عالمية المستوى</strong> لمحبي الإثارة من جميع المستويات. من التجارب المثيرة للأدرينالين إلى المغامرات الخلابة، هناك شيء لكل مغامر.</p><div class="bg-red-50 border-r-4 border-red-400 p-4 mb-6"><p class="text-red-800 italic">"المغامرة ليست خارج الإنسان؛ إنها بداخله. أعظم المغامرات تحدث عندما تخرج من منطقة راحتك."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🚀</span>أفضل أنشطة المغامرة</h2><p class="mb-4 leading-relaxed">القفز بالحبل، الغوص مع أسماك القرش، الطيران الشراعي، وتسلق الصخور في انتظار الشجعان:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700"><strong>القفز بالحبل</strong> - قفزة 216 متر من جسر بلوكرانس</li><li class="text-gray-700"><strong>الغوص مع أسماك القرش</strong> - واجه القروش البيضاء العظيمة في جانسباي</li><li class="text-gray-700"><strong>الطيران الشراعي</strong> - حلق فوق كيب تاون من تل الإشارة</li><li class="text-gray-700"><strong>تسلق الصخور</strong> - تسلق منحدرات جبل الطاولة</li><li class="text-gray-700"><strong>القفز بالمظلات</strong> - قفزات مزدوجة مع إطلالات على المحيط</li><li class="text-gray-700"><strong>التجديف في المياه البيضاء</strong> - تنقل عبر المنحدرات في الأنهار المحلية</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🛡️</span>الأمان أولاً</h2><p class="mb-6 leading-relaxed">جميع الأنشطة تُجرى بواسطة <strong class="text-primary-600">مشغلين معتمدين</strong> مع سجلات أمان ممتازة ومعايير أمان دولية.</p></div>',
      author: 'مصطفى علي',
      date: '2024-01-05',
      readTime: '6 دقائق قراءة',
      category: 'adventure',
      categoryName: 'المغامرة',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['مغامرة', 'كيب تاون', 'رياضات متطرفة', 'أنشطة']
    },
    {
      id: '6',
      title: 'أفضل وقت لزيارة كيب تاون: دليل الفصول',
      excerpt: 'خطط لرحلتك المثالية مع دليلنا الشامل لفصول كيب تاون.',
      content: '<div class="article-content" dir="rtl"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">🌤️</span>فهم فصول كيب تاون</h2><p class="text-lg leading-relaxed mb-6 text-gray-700"><strong class="text-primary-600">المناخ المتنوع</strong> في كيب تاون يعني أن هناك دائماً وقت مثالي لزيارة مناطق مختلفة. خطط لرحلتك وفقاً لاهتماماتك والأنشطة المفضلة لديك.</p><div class="bg-blue-50 border-r-4 border-blue-400 p-4 mb-6"><p class="text-blue-800 italic">"كيب تاون وجهة على مدار السنة - كل فصل يقدم سحره وتجاربه الفريدة."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">☀️</span>الصيف المعتدل (ديسمبر - فبراير)</h2><p class="mb-4 leading-relaxed">مثالي لـ <strong class="text-primary-600">الأنشطة الساحلية</strong> وموسم حصاد العنب:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">أنشطة الشاطئ والرياضات المائية</li><li class="text-gray-700">مهرجانات حصاد العنب والتذوق</li><li class="text-gray-700">الحفلات الموسيقية والفعاليات الخارجية</li><li class="text-gray-700">المشي وأنشطة الجبال</li><li class="text-gray-700">موسم الذروة السياحية - احجز مبكراً</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="ml-2">❄️</span>الربيع (يوليو - ديسمبر)</h2><p class="mb-4 leading-relaxed">مثالي لـ <strong class="text-primary-600">السفاري</strong> حيث تتجمع الحيوانات حول مصادر المياه:</p><ul class="list-disc pr-6 mb-6 space-y-2"><li class="text-gray-700">أفضل فرص مشاهدة الحياة البرية</li><li class="text-gray-700">يبدأ موسم مشاهدة الحيتان</li><li class="text-gray-700">حشود أقل وأسعار أفضل</li><li class="text-gray-700">تذوق العنب المريح بجانب المدفأة</li><li class="text-gray-700">سماء صافية للتصوير</li></ul></div>',
      author: 'مصطفى علي',
      date: '2024-01-03',
      readTime: '4 دقائق قراءة',
      category: 'tips',
      categoryName: 'نصائح السفر',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['نصائح السفر', 'طقس', 'تخطيط', 'فصول']
    }
  ];

  // English content
  const englishPosts = [
    {
      id: '1',
      title: 'Top 10 Must-Visit Destinations in Cape Town',
      excerpt: 'Discover the most breathtaking locations that should be on every traveler\'s Cape Town itinerary.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🌍</span>Introduction</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Cape Town is a land of <strong class="text-primary-600">incredible diversity</strong>, offering everything from bustling cities to pristine wilderness areas. Whether you\'re seeking adventure, culture, or relaxation, this beautiful country has something for everyone.</p><div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6"><p class="text-blue-800 italic">"From the iconic Table Mountain to world-renowned wine regions, Cape Town offers experiences that will leave you breathless."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🏔️</span>1. Cape Town and Table Mountain</h2><p class="mb-4 leading-relaxed">No visit to Cape Town is complete without experiencing the <strong>mother city</strong>. Cape Town offers:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Stunning natural beauty with panoramic views</li><li class="text-gray-700">Rich historical heritage and cultural sites</li><li class="text-gray-700">World-class dining and vibrant nightlife</li><li class="text-gray-700">Adventure activities like hiking and cable car rides</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🦁</span>2. Kruger National Park</h2><p class="mb-4 leading-relaxed">Home to the <strong class="text-primary-600">Big 5</strong> and countless other species, Kruger is one of Africa\'s premier safari destinations. Experience:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Game drives with expert guides</li><li class="text-gray-700">Luxury safari lodges and camps</li><li class="text-gray-700">Photography opportunities with wildlife</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🌊</span>3. Garden Route</h2><p class="mb-6 leading-relaxed">This scenic coastal drive offers breathtaking landscapes, charming towns, and outdoor adventures. Perfect for road trips and nature lovers.</p><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🍷</span>4. Stellenbosch Wine Region</h2><p class="mb-6 leading-relaxed">Experience <strong class="text-primary-600">world-class wines</strong> in one of the most beautiful wine regions on earth. Enjoy tastings, cellar tours, and gourmet dining.</p><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">⛰️</span>5. Drakensberg Mountains</h2><p class="mb-6 leading-relaxed">A <strong class="text-primary-600">UNESCO World Heritage site</strong> offering hiking trails, ancient rock art, and stunning mountain scenery.</p><div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-green-800 mb-2">💡 Pro Tip</h3><p class="text-green-700">Plan at least 2-3 weeks to fully experience these destinations. Each location deserves dedicated time for proper exploration.</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">✨</span>Conclusion</h2><p class="text-lg leading-relaxed text-gray-700">These destinations represent just a fraction of what Cape Town has to offer. Each location provides <strong class="text-primary-600">unique experiences</strong> that will create lasting memories and inspire future adventures.</p></div>',
      author: 'Mustafa Ali',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'destinations',
      categoryName: 'Destinations',
      image: 'https://images.unsplash.com/photo-1575729370600-781d9c08a74e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Cape Town', 'Kruger', 'Garden Route', 'Travel Tips']
    },
    {
      id: '2',
      title: 'Safari Photography: Capturing the Big 5',
      excerpt: 'Professional tips and techniques for photographing Africa\'s most magnificent wildlife.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">📸</span>Getting Started with Safari Photography</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Wildlife photography in Africa is an <strong class="text-primary-600">incredible experience</strong> that requires patience, skill, and the right equipment. Here\'s your complete guide to capturing stunning images of the Big 5.</p><div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6"><p class="text-amber-800 italic">"The best wildlife photographs are born from patience, preparation, and respect for nature."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🎯</span>Essential Equipment</h2><p class="mb-4 leading-relaxed">A <strong class="text-primary-600">telephoto lens (300-600mm)</strong> is crucial for wildlife photography. Here\'s what you need:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Telephoto lens (300-600mm) for distant subjects</li><li class="text-gray-700">Sturdy tripod for stability</li><li class="text-gray-700">Extra batteries (cold weather drains them fast)</li><li class="text-gray-700">Multiple memory cards (never run out of space)</li><li class="text-gray-700">Lens cleaning kit for dusty conditions</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🌅</span>Best Times for Photography</h2><p class="mb-4 leading-relaxed"><strong class="text-primary-600">Golden hour</strong> provides the best lighting conditions for wildlife photography:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Early morning (6-8 AM): Animals are most active</li><li class="text-gray-700">Late afternoon (4-6 PM): Warm, soft lighting</li><li class="text-gray-700">Avoid harsh midday sun</li></ul><div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-green-800 mb-2">📋 Photography Tips</h3><ul class="text-green-700 space-y-1"><li>• Respect wildlife and maintain safe distances</li><li>• Use continuous autofocus for moving subjects</li><li>• Shoot in burst mode for action shots</li><li>• Be patient - the best shots come to those who wait</li></ul></div></div>',
      author: 'Mustafa Ali',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'photography',
      categoryName: 'Photography',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Safari', 'Photography', 'Wildlife', 'Big 5']
    },
    {
      id: '3',
      title: 'Wine Tasting Guide: Stellenbosch vs Franschhoek',
      excerpt: 'Compare two of Cape Town\'s premier wine regions and discover which suits your taste.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🍷</span>Introduction to Cape Town Wine</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Cape Town\'s wine regions offer <strong class="text-primary-600">world-class experiences</strong> with stunning landscapes and exceptional wines. Discover two of the most prestigious wine valleys in the world.</p><div class="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6"><p class="text-purple-800 italic">"Cape Town produces some of the world\'s finest wines, rivaling the best from France and Italy."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🏰</span>Stellenbosch: The Heart of Wine Country</h2><p class="mb-4 leading-relaxed">Known for its <strong class="text-primary-600">historic estates</strong> and premium red wines, Stellenbosch offers a traditional wine experience:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Historic wine estates dating back to the 1600s</li><li class="text-gray-700">Award-winning Cabernet Sauvignon and Pinotage</li><li class="text-gray-700">Cellar tours and wine tastings</li><li class="text-gray-700">Fine dining restaurants with wine pairings</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🇫🇷</span>Franschhoek: The French Corner</h2><p class="mb-4 leading-relaxed">This charming valley combines <strong class="text-primary-600">French heritage</strong> with Cape Town terroir:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">French Huguenot history and culture</li><li class="text-gray-700">Boutique wineries and artisanal producers</li><li class="text-gray-700">Gourmet food and wine festivals</li><li class="text-gray-700">Scenic mountain backdrop</li></ul><div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-red-800 mb-2">🥂 Wine Tasting Tips</h3><ul class="text-red-700 space-y-1"><li>• Book tastings in advance, especially weekends</li><li>• Designate a driver or use wine tour services</li><li>• Pair tastings with local cheese and charcuterie</li><li>• Visit during harvest season (February-April) for special experiences</li></ul></div></div>',
      author: 'Mustafa Ali',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'wine',
      categoryName: 'Wine & Food',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Wine', 'Stellenbosch', 'Franschhoek', 'Food']
    },
    {
      id: '4',
      title: 'Cultural Immersion: Understanding Cape Town Heritage',
      excerpt: 'Dive deep into the rich cultural tapestry that makes Cape Town unique.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2"></span>The Relegious Tolerance</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Cape Town\'s <strong class="text-primary-600">cultural diversity</strong> is one of its greatest treasures, with 11 official languages and countless traditions that create a unique tapestry of human experience.</p><div class="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6"><p class="text-orange-800 italic">"Cape Town is where cultures converge, creating something beautiful and uniquely African."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🏛️</span>Historical Sites to Visit</h2><p class="mb-4 leading-relaxed">From <strong class="text-primary-600">Robben Island</strong> to the Cradle of Humankind, Cape Town offers profound historical experiences:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Robben Island - Nelson Mandela\'s prison</li><li class="text-gray-700">District Six Museum - apartheid history</li><li class="text-gray-700">Castle of Good Hope - colonial heritage</li><li class="text-gray-700">Cradle of Humankind - human origins</li><li class="text-gray-700">Bo-Kaap - Cape Malay culture</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🎭</span>Living Culture</h2><p class="mb-4 leading-relaxed">Experience <strong class="text-primary-600">traditional music, dance, and cuisine</strong> that tell the story of this remarkable nation:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Traditional African drumming and dancing</li><li class="text-gray-700">Cape Malay cuisine and cooking classes</li><li class="text-gray-700">Local markets and craft centers</li><li class="text-gray-700">Community cultural tours</li></ul><div class="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-teal-800 mb-2">🎨 Cultural Experiences</h3><ul class="text-teal-700 space-y-1"><li>• Join a township tour with local guides</li><li>• Attend a traditional braai (barbecue)</li><li>• Learn basic phrases in local languages</li><li>• Support local artisans and craftspeople</li></ul></div></div>',
      author: 'Mustafa Ali',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'culture',
      categoryName: 'Culture',
      image: 'https://images.unsplash.com/photo-1570527141186-e391a3914c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Culture', 'Heritage', 'History', 'Local Life']
    },
    {
      id: '5',
      title: 'Adventure Activities: Adrenaline Rush in Cape Town',
      excerpt: 'From bungee jumping to shark cage diving, discover Cape Town\'s thrilling adventures.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🏔️</span>Cape Town: Adventure Capital</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Cape Town offers <strong class="text-primary-600">world-class adventure activities</strong> for thrill-seekers of all levels. From adrenaline-pumping experiences to scenic adventures, there\'s something for every adventurer.</p><div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6"><p class="text-red-800 italic">"Adventure is not outside man; it is within. The greatest adventures happen when you step outside your comfort zone."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🚀</span>Top Adventure Activities</h2><p class="mb-4 leading-relaxed">Bungee jumping, shark cage diving, paragliding, and rock climbing await the brave:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700"><strong>Bungee Jumping</strong> - 216m jump from Bloukrans Bridge</li><li class="text-gray-700"><strong>Shark Cage Diving</strong> - Face great whites in Gansbaai</li><li class="text-gray-700"><strong>Paragliding</strong> - Soar over Cape Town from Signal Hill</li><li class="text-gray-700"><strong>Rock Climbing</strong> - Scale Table Mountain\'s cliffs</li><li class="text-gray-700"><strong>Skydiving</strong> - Tandem jumps with ocean views</li><li class="text-gray-700"><strong>White Water Rafting</strong> - Navigate rapids on local rivers</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🛡️</span>Safety First</h2><p class="mb-6 leading-relaxed">All activities are conducted by <strong class="text-primary-600">certified operators</strong> with excellent safety records and international safety standards.</p><div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-yellow-800 mb-2">⚠️ Safety Guidelines</h3><ul class="text-yellow-700 space-y-1"><li>• Always use certified and insured operators</li><li>• Follow all safety instructions carefully</li><li>• Check weather conditions before activities</li><li>• Inform someone of your adventure plans</li><li>• Consider travel insurance for adventure activities</li></ul></div></div>',
      author: 'Mustafa Ali',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'adventure',
      categoryName: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Adventure', 'Cape Town', 'Extreme Sports', 'Activities']
    },
    {
      id: '6',
      title: 'Best Time to Visit Cape Town: Seasonal Guide',
      excerpt: 'Plan your perfect trip with our comprehensive guide to Cape Town\'s seasons.',
      content: '<div class="article-content"><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">🌤️</span>Understanding Cape Town Seasons</h2><p class="text-lg leading-relaxed mb-6 text-gray-700">Cape Town\'s <strong class="text-primary-600">diverse climate</strong> means there\'s always a perfect time to visit different regions. Plan your trip according to your interests and preferred activities.</p><div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6"><p class="text-blue-800 italic">"Cape Town is a year-round destination - each season offers its own unique magic and experiences."</p></div><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">☀️</span>Summer (December - February)</h2><p class="mb-4 leading-relaxed">Perfect for <strong class="text-primary-600">coastal activities</strong> and wine harvest season:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Beach activities and water sports</li><li class="text-gray-700">Wine harvest festivals and tastings</li><li class="text-gray-700">Outdoor concerts and events</li><li class="text-gray-700">Hiking and mountain activities</li><li class="text-gray-700">Peak tourist season - book early</li></ul><h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span class="mr-2">❄️</span>Winter (June - August)</h2><p class="mb-4 leading-relaxed">Ideal for <strong class="text-primary-600">safari</strong> as animals gather around water sources:</p><ul class="list-disc pl-6 mb-6 space-y-2"><li class="text-gray-700">Best wildlife viewing opportunities</li><li class="text-gray-700">Whale watching season begins</li><li class="text-gray-700">Fewer crowds and better prices</li><li class="text-gray-700">Cozy wine tastings by the fireplace</li><li class="text-gray-700">Clear skies for photography</li></ul><div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6"><h3 class="text-lg font-semibold text-green-800 mb-2">📅 Seasonal Planning Tips</h3><ul class="text-green-700 space-y-1"><li>• <strong>Spring (Sep-Nov):</strong> Wildflower blooms and mild weather</li><li>• <strong>Autumn (Mar-May):</strong> Harvest season and comfortable temperatures</li><li>• <strong>Shoulder seasons:</strong> Best value and fewer crowds</li><li>• <strong>Book accommodations early</strong> for peak summer season</li></ul></div></div>',
      author: 'Mustafa Ali',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'tips',
      categoryName: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Travel Tips', 'Weather', 'Planning', 'Seasons']
    }
  ];

  // Select posts based on locale
  const posts = locale === 'ar' ? arabicPosts : englishPosts;
  return posts.find(post => post.id === id);
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export async function generateMetadata({
  params: { id, locale }
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const post = await getBlogPost(id, locale);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params: { id, locale }
}: {
  params: { id: string; locale: string };
}) {
  const post = await getBlogPost(id, locale);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogPost post={post} />
      <RelatedPosts currentPostId={id} category={post.category} />
    </div>
  );
}
