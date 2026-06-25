// Detailed, original landing-page content for Arkan's operating sectors.
// Bilingual (en/ar). Grounded in the company's market-entry / local-operating-partner positioning.

export interface SectorItem { title: string; desc: string }
export interface SectorStat { value: string; label: string }

export interface SectorPageContent {
  badge: string;
  hero: { title: string; subtitle: string; image: string; capabilities: string[] };
  positioning: { overline: string; headline: string; body: string[] };
  services: { overline: string; headline: string; intro: string; items: SectorItem[] };
  videoBand: { overline: string; headline: string; body: string; poster: string; watch: string };
  process: { overline: string; headline: string; steps: SectorItem[] };
  why: { overline: string; headline: string; points: SectorItem[] };
  stats: SectorStat[];
  cta: { overline: string; headline: string; body: string; button: string; points: string[] };
}

export type SectorSlug = 'oil-gas' | 'construction' | 'manpower' | 'trading' | 'education' | 'media';

type Bi = { en: SectorPageContent; ar: SectorPageContent };

export const SECTOR_PAGES: Record<SectorSlug, Bi> = {
  'oil-gas': {
    en: {
      badge: 'OIL & GAS SERVICES',
      hero: {
        title: 'Onshore and offshore oil & gas support, run by people who never left Libya.',
        subtitle: 'When international operators need field support, manpower, maintenance, and equipment moved and managed inside Libya, they need a partner already on the ground. Arkan has supported energy operations here for three decades.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1900&q=80',
        capabilities: ['Onshore & offshore field support', 'Rig mobilization & equipment supply', 'Industrial maintenance & coatings', 'HSE systems & safety compliance', 'In-country procurement & logistics'],
      },
      positioning: {
        overline: 'THE CHALLENGE',
        headline: 'The reserves are world-class. The execution risk is local.',
        body: [
          'Libya holds the largest proven oil reserves in Africa, but operating here is an exercise in logistics, relationships, and reliability under pressure. Equipment has to clear customs and reach remote fields. Crews have to be sourced, vetted, and kept safe. Maintenance cannot wait for a part stuck at a port.',
          'Arkan exists to absorb that risk for you. We are the local operating layer between an international energy company and the realities of the Libyan field — so your engineering and commercial teams can focus on the reservoir, not the roadblocks.',
        ],
      },
      services: {
        overline: 'WHAT WE HANDLE',
        headline: 'A complete onshore and offshore support layer.',
        intro: 'Not a directory of services — an operating capability you can put behind a live project.',
        items: [
          { title: 'Field operations support', desc: 'Day-to-day onshore and offshore operational support that keeps projects moving — coordination, site readiness, and on-the-ground problem solving.' },
          { title: 'Rig mobilization & equipment', desc: 'Mobilizing rigs and sourcing, importing, and moving the equipment and spares your operation depends on, including remote-field logistics.' },
          { title: 'Maintenance & industrial coatings', desc: 'Preventive and corrective maintenance, industrial coatings, and asset-integrity work that protect equipment in a harsh environment.' },
          { title: 'HSE & safety systems', desc: 'Safety systems, HSE compliance, and a culture of working to international standards in a local operating context.' },
          { title: 'Manpower & specialist crews', desc: 'Skilled local crews and specialist technical teams — recruited, vetted, and deployed to site with full coordination.' },
          { title: 'Procurement & in-country logistics', desc: 'Local procurement, customs navigation, warehousing, and last-mile transport into the field.' },
        ],
      },
      videoBand: {
        overline: 'OPERATING IN LIBYA',
        headline: 'Thirty years of field memory you cannot buy off the shelf.',
        body: 'Working relationships with national operators, knowledge of every port and route, and crews who have done the work before — the institutional memory that turns a Libyan oilfield from a risk into a managed operation.',
        poster: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From first call to field-ready.',
        steps: [
          { title: 'Assess', desc: 'We map your scope, timeline, and the specific field, logistics, and compliance requirements.' },
          { title: 'Scope & mobilize', desc: 'We define the support package, source crews and equipment, and prepare the ground.' },
          { title: 'Execute on site', desc: 'We coordinate day-to-day delivery with HSE discipline and a single accountable point of contact.' },
          { title: 'Sustain', desc: 'We maintain, resupply, and adapt as the operation evolves.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'Built for operators who cannot afford surprises.',
        points: [
          { title: 'Established energy relationships', desc: 'Long-standing working relationships with national and regional energy authorities.' },
          { title: 'Benghazi-based infrastructure', desc: 'Local logistics, warehousing, and a procurement network ready to deploy.' },
          { title: 'Fully licensed operator', desc: 'Licensed and registered, meeting local requirements and diligence standards.' },
          { title: 'Safety without compromise', desc: 'HSE standards applied consistently — reputation in this sector is built on safety.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years in Libyan field support' },
        { value: 'On & Offshore', label: 'Operational coverage' },
        { value: 'Benghazi', label: 'Logistics & procurement base' },
      ],
      cta: {
        overline: 'OIL & GAS SUPPORT',
        headline: 'Discuss your Libya field operations.',
        body: 'Book a confidential Market Entry Call to scope the support your project needs — manpower, equipment, maintenance, or full operational coordination.',
        button: 'Discuss Oil & Gas Support',
        points: ['Field & operational support', 'Equipment & logistics', 'Manpower & HSE', 'Procurement & customs'],
      },
    },
    ar: {
      badge: 'خدمات النفط والغاز',
      hero: {
        title: 'دعم نفط وغاز برّي وبحري، يديره من لم يغادروا ليبيا يومًا.',
        subtitle: 'حين تحتاج الشركات العالمية إلى دعم ميداني وقوى عاملة وصيانة ونقل وإدارة للمعدات داخل ليبيا، فإنها تحتاج إلى شريك موجود على الأرض بالفعل. دعمت أركان عمليات الطاقة هنا منذ ثلاثة عقود.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1900&q=80',
        capabilities: ['دعم ميداني برّي وبحري', 'تعبئة الحفّارات وتوريد المعدات', 'صيانة صناعية وطلاءات', 'أنظمة السلامة والامتثال (HSE)', 'مشتريات ولوجستيات داخل البلاد'],
      },
      positioning: {
        overline: 'التحدّي',
        headline: 'الاحتياطيات من الطراز العالمي. أما مخاطر التنفيذ فمحلية.',
        body: [
          'تمتلك ليبيا أكبر احتياطيات نفط مؤكدة في إفريقيا، لكن العمل هنا تمرين في اللوجستيات والعلاقات والموثوقية تحت الضغط. على المعدات أن تجتاز الجمارك وتصل إلى حقول نائية، وعلى الطواقم أن تُجلب وتُدقّق وتبقى آمنة، ولا يمكن للصيانة أن تنتظر قطعة عالقة في الميناء.',
          'وُجدت أركان لتمتصّ هذه المخاطر عنك. نحن الطبقة التشغيلية المحلية بين الشركة العالمية للطاقة وواقع العمل في الحقل الليبي — لتتفرّغ فرقك الهندسية والتجارية للمكمن، لا للعقبات.',
        ],
      },
      services: {
        overline: 'ما نتولّاه',
        headline: 'طبقة دعم متكاملة برّيًا وبحريًا.',
        intro: 'ليست قائمة خدمات، بل قدرة تشغيلية يمكنك وضعها خلف مشروع قائم.',
        items: [
          { title: 'الدعم التشغيلي الميداني', desc: 'دعم تشغيلي يومي برّي وبحري يبقي المشاريع متحركة — تنسيق وجاهزية موقع وحلّ للمشكلات على الأرض.' },
          { title: 'تعبئة الحفّارات والمعدات', desc: 'تعبئة الحفّارات وتوريد واستيراد ونقل المعدات وقطع الغيار التي تعتمد عليها عملياتك، بما في ذلك لوجستيات الحقول النائية.' },
          { title: 'الصيانة والطلاءات الصناعية', desc: 'صيانة وقائية وتصحيحية وطلاءات صناعية وأعمال سلامة الأصول التي تحمي المعدات في بيئة قاسية.' },
          { title: 'أنظمة السلامة (HSE)', desc: 'أنظمة سلامة وامتثال HSE وثقافة عمل بالمعايير الدولية ضمن سياق محلي.' },
          { title: 'قوى عاملة وطواقم متخصصة', desc: 'طواقم محلية ماهرة وفِرق فنية متخصصة — تُجلب وتُدقّق وتُنشر في الموقع بتنسيق كامل.' },
          { title: 'المشتريات واللوجستيات المحلية', desc: 'مشتريات محلية وتخليص جمركي وتخزين ونقل الميل الأخير إلى الحقل.' },
        ],
      },
      videoBand: {
        overline: 'العمل في ليبيا',
        headline: 'ثلاثون عامًا من الذاكرة الميدانية لا تُشترى جاهزة.',
        body: 'علاقات عمل مع المشغّلين الوطنيين، ومعرفة بكل ميناء وطريق، وطواقم أنجزت العمل من قبل — ذاكرة مؤسسية تحوّل الحقل الليبي من مخاطرة إلى عملية مُدارة.',
        poster: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من أول مكالمة إلى الجاهزية الميدانية.',
        steps: [
          { title: 'التقييم', desc: 'نرسم نطاقك وجدولك الزمني ومتطلبات الحقل واللوجستيات والامتثال المحددة.' },
          { title: 'التحديد والتعبئة', desc: 'نحدّد حزمة الدعم ونجلب الطواقم والمعدات ونجهّز الأرض.' },
          { title: 'التنفيذ في الموقع', desc: 'ننسّق التنفيذ اليومي بانضباط HSE ونقطة تواصل واحدة مسؤولة.' },
          { title: 'الاستدامة', desc: 'نصون ونعيد التزويد ونتكيّف مع تطوّر العملية.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'مبنيون لمشغّلين لا يحتملون المفاجآت.',
        points: [
          { title: 'علاقات طاقة راسخة', desc: 'علاقات عمل طويلة الأمد مع هيئات الطاقة الوطنية والإقليمية.' },
          { title: 'بنية تحتية في بنغازي', desc: 'شبكة لوجستيات وتخزين ومشتريات محلية جاهزة للانتشار.' },
          { title: 'مشغّل مرخّص بالكامل', desc: 'مرخّص ومسجّل ويلبّي المتطلبات المحلية ومعايير التدقيق.' },
          { title: 'سلامة بلا تنازل', desc: 'تطبيق معايير HSE باستمرار — فالسمعة في هذا القطاع تُبنى على السلامة.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا في الدعم الميداني الليبي' },
        { value: 'برّي وبحري', label: 'تغطية تشغيلية' },
        { value: 'بنغازي', label: 'قاعدة لوجستيات ومشتريات' },
      ],
      cta: {
        overline: 'دعم النفط والغاز',
        headline: 'لنناقش عملياتك الميدانية في ليبيا.',
        body: 'احجز مكالمة سرية لدخول السوق لتحديد الدعم الذي يحتاجه مشروعك — قوى عاملة، معدات، صيانة، أو تنسيق تشغيلي كامل.',
        button: 'ناقش دعم النفط والغاز',
        points: ['دعم ميداني وتشغيلي', 'معدات ولوجستيات', 'قوى عاملة وHSE', 'مشتريات وجمارك'],
      },
    },
  },

  construction: {
    en: {
      badge: 'CONSTRUCTION & REAL ESTATE',
      hero: {
        title: 'Build in Libya with a partner accountable from groundbreaking to handover.',
        subtitle: 'Reconstruction is one of Libya’s defining opportunities. Capturing it takes local project capability, manpower, procurement, and a partner who delivers — not just a name on a contract.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1900&q=80',
        capabilities: ['Real estate development & investment', 'Construction project management', 'Design & engineering support', 'Site readiness & manpower', 'Procurement & regulatory compliance'],
      },
      positioning: {
        overline: 'THE OPPORTUNITY',
        headline: 'A country rebuilding — and a shortage of partners who can deliver.',
        body: [
          'Libya needs housing, infrastructure, industrial facilities, and civic space at scale. The demand is real and durable. What is scarce is local execution capacity that international developers and contractors can actually rely on.',
          'Arkan provides the end-to-end construction layer — development coordination, project management, design support, manpower, and procurement — so foreign partners can commit capital and expertise without inheriting the on-the-ground risk alone.',
        ],
      },
      services: {
        overline: 'WHAT WE HANDLE',
        headline: 'End-to-end construction and development capability.',
        intro: 'From the investment decision to the keys — one accountable operating group.',
        items: [
          { title: 'Development & investment', desc: 'Partnership and coordination on commercial and residential real-estate development across key Libyan cities.' },
          { title: 'Project management', desc: 'End-to-end construction project management: planning, scheduling, supervision, and delivery against scope.' },
          { title: 'Design & engineering support', desc: 'Architectural design and engineering coordination aligned to local conditions and requirements.' },
          { title: 'Construction manpower', desc: 'Skilled trades and site crews mobilized, supervised, and managed for the life of the project.' },
          { title: 'Procurement & materials', desc: 'Sourcing, importing, and supplying construction materials and equipment with customs navigation.' },
          { title: 'Compliance & site readiness', desc: 'Permitting support, regulatory navigation, and getting sites genuinely ready to build.' },
        ],
      },
      videoBand: {
        overline: 'ON THE GROUND',
        headline: 'We don’t coordinate from a distance. We build where we live.',
        body: 'Local crews, local suppliers, and real knowledge of how projects get permitted, supplied, and finished in Libya — managed under one accountable operating group.',
        poster: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From site to handover.',
        steps: [
          { title: 'Assess', desc: 'We review the project, site, and the development or contracting outcome you need.' },
          { title: 'Plan & resource', desc: 'We assemble the team, suppliers, and materials and set a realistic delivery plan.' },
          { title: 'Build & supervise', desc: 'We manage execution on site with quality control and progress accountability.' },
          { title: 'Hand over', desc: 'We deliver to scope and support what comes after completion.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'One group responsible for delivery.',
        points: [
          { title: 'Multi-city development reach', desc: 'Development and construction coordination across key Libyan cities.' },
          { title: 'Manpower under one roof', desc: 'Direct access to construction crews and trades through our manpower division.' },
          { title: 'Procurement network', desc: 'Established sourcing and import channels for materials and equipment.' },
          { title: 'Single accountable partner', desc: 'One group responsible for delivery — not a fragmented chain of subcontractors.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years building in Libya' },
        { value: '6', label: 'Sectors under one group' },
        { value: 'Benghazi', label: 'Development & operations base' },
      ],
      cta: {
        overline: 'CONSTRUCTION PARTNERSHIP',
        headline: 'Discuss your Libya project.',
        body: 'Book a Market Entry Call to scope development, project management, manpower, or procurement support for your build.',
        button: 'Discuss Construction Partnership',
        points: ['Development & investment', 'Project management', 'Construction manpower', 'Materials & procurement'],
      },
    },
    ar: {
      badge: 'الإنشاءات والعقارات',
      hero: {
        title: 'ابنِ في ليبيا مع شريك مسؤول من حجر الأساس إلى التسليم.',
        subtitle: 'إعادة الإعمار من أبرز فرص ليبيا، واغتنامها يتطلب قدرة مشاريع محلية وقوى عاملة ومشتريات وشريكًا ينفّذ — لا مجرد اسم على عقد.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1900&q=80',
        capabilities: ['تطوير واستثمار عقاري', 'إدارة مشاريع الإنشاء', 'دعم التصميم والهندسة', 'جاهزية الموقع والقوى العاملة', 'المشتريات والامتثال التنظيمي'],
      },
      positioning: {
        overline: 'الفرصة',
        headline: 'بلد يعيد البناء — ونُدرة في الشركاء القادرين على التنفيذ.',
        body: [
          'تحتاج ليبيا إلى مساكن وبنية تحتية ومنشآت صناعية ومساحات مدنية على نطاق واسع. الطلب حقيقي ودائم، والنادر هو قدرة تنفيذ محلية يستطيع المطوّرون والمقاولون الدوليون الاعتماد عليها فعلًا.',
          'توفّر أركان طبقة الإنشاء المتكاملة — تنسيق التطوير وإدارة المشاريع ودعم التصميم والقوى العاملة والمشتريات — ليتمكّن الشركاء الأجانب من ضخّ رأس المال والخبرة دون تحمّل مخاطر الأرض وحدهم.',
        ],
      },
      services: {
        overline: 'ما نتولّاه',
        headline: 'قدرة إنشاء وتطوير متكاملة من البداية للنهاية.',
        intro: 'من قرار الاستثمار إلى تسليم المفاتيح — مجموعة تشغيلية واحدة مسؤولة.',
        items: [
          { title: 'التطوير والاستثمار', desc: 'شراكة وتنسيق في التطوير العقاري التجاري والسكني عبر المدن الليبية الرئيسية.' },
          { title: 'إدارة المشاريع', desc: 'إدارة مشاريع إنشاء متكاملة: تخطيط وجدولة وإشراف وتسليم وفق النطاق.' },
          { title: 'دعم التصميم والهندسة', desc: 'تنسيق التصميم المعماري والهندسة بما يتوافق مع الظروف والمتطلبات المحلية.' },
          { title: 'القوى العاملة للإنشاء', desc: 'حرفيون مَهَرة وطواقم موقع تُجلب وتُشرف وتُدار طوال عمر المشروع.' },
          { title: 'المشتريات والمواد', desc: 'توريد واستيراد وتزويد مواد ومعدات الإنشاء مع تخليص جمركي.' },
          { title: 'الامتثال وجاهزية الموقع', desc: 'دعم التصاريح والامتثال التنظيمي وتهيئة المواقع فعليًا للبناء.' },
        ],
      },
      videoBand: {
        overline: 'على الأرض',
        headline: 'لا ننسّق من بعيد. نبني حيث نعيش.',
        body: 'طواقم محلية وموردون محليون ومعرفة حقيقية بكيفية ترخيص المشاريع وتوريدها وإنجازها في ليبيا — تُدار ضمن مجموعة تشغيلية واحدة مسؤولة.',
        poster: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من الموقع إلى التسليم.',
        steps: [
          { title: 'التقييم', desc: 'نراجع المشروع والموقع ونتيجة التطوير أو المقاولة التي تحتاجها.' },
          { title: 'التخطيط والتجهيز', desc: 'نجمع الفريق والموردين والمواد ونضع خطة تسليم واقعية.' },
          { title: 'البناء والإشراف', desc: 'ندير التنفيذ في الموقع بمراقبة جودة ومساءلة عن التقدّم.' },
          { title: 'التسليم', desc: 'نسلّم وفق النطاق وندعم ما بعد الإنجاز.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'مجموعة واحدة مسؤولة عن التسليم.',
        points: [
          { title: 'انتشار تطويري متعدد المدن', desc: 'تنسيق تطوير وإنشاء عبر المدن الليبية الرئيسية.' },
          { title: 'قوى عاملة تحت سقف واحد', desc: 'وصول مباشر إلى طواقم وحِرف الإنشاء عبر قسم القوى العاملة لدينا.' },
          { title: 'شبكة مشتريات', desc: 'قنوات توريد واستيراد راسخة للمواد والمعدات.' },
          { title: 'شريك واحد مسؤول', desc: 'مجموعة واحدة مسؤولة عن التسليم — لا سلسلة متفرقة من المقاولين.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا من البناء في ليبيا' },
        { value: '6', label: 'قطاعات ضمن مجموعة واحدة' },
        { value: 'بنغازي', label: 'قاعدة التطوير والعمليات' },
      ],
      cta: {
        overline: 'شراكة الإنشاءات',
        headline: 'لنناقش مشروعك في ليبيا.',
        body: 'احجز مكالمة دخول السوق لتحديد دعم التطوير أو إدارة المشاريع أو القوى العاملة أو المشتريات لبنائك.',
        button: 'ناقش شراكة الإنشاءات',
        points: ['التطوير والاستثمار', 'إدارة المشاريع', 'القوى العاملة للإنشاء', 'المواد والمشتريات'],
      },
    },
  },

  manpower: {
    en: {
      badge: 'MANPOWER & STAFFING',
      hero: {
        title: 'The right people, on site, ready to work — across Libya.',
        subtitle: 'Projects live or die on their crews. Arkan recruits, vets, mobilizes, and manages skilled and unskilled workforce for operations across Libya — local talent and specialist expatriate teams.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1900&q=80',
        capabilities: ['Skilled & unskilled recruitment', 'Project & site mobilization', 'Specialist technical teams', 'Local & expatriate coordination', 'HR compliance & registration'],
      },
      positioning: {
        overline: 'THE BOTTLENECK',
        headline: 'A capable workforce exists. Reaching and managing it is the hard part.',
        body: [
          'International operators in Libya rarely fail for lack of available labor. They struggle to source the right people quickly, vet them properly, handle compliance, and keep crews productive and safe on remote sites.',
          'Arkan turns that bottleneck into a managed service. We carry recruitment, vetting, mobilization, and day-to-day workforce coordination so your project is staffed by people who are ready — and accountable.',
        ],
      },
      services: {
        overline: 'WHAT WE HANDLE',
        headline: 'Workforce, from sourcing to site supervision.',
        intro: 'A managed workforce layer, not a CV pipeline you have to manage yourself.',
        items: [
          { title: 'Recruitment & vetting', desc: 'Sourcing and vetting local Libyan talent and specialized expatriate professionals against your requirements.' },
          { title: 'Project & site mobilization', desc: 'Mobilizing crews to site — including remote and field locations — with logistics handled.' },
          { title: 'Specialist technical teams', desc: 'Deploying specialized technical and supervisory teams for demanding scopes.' },
          { title: 'Workforce management', desc: 'Day-to-day supervision, scheduling, and performance coordination on the ground.' },
          { title: 'HR compliance & registration', desc: 'Contracts, registration, and HR compliance handled to local requirements.' },
          { title: 'Scalable crews', desc: 'Scaling headcount up or down as project phases demand, without losing continuity.' },
        ],
      },
      videoBand: {
        overline: 'PEOPLE FIRST',
        headline: 'A workforce is only as good as the people who stand behind it.',
        body: 'Vetting, safety, fair treatment, and reliable coordination — the difference between a crew that shows up and a crew that delivers.',
        poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From role definition to a managed crew.',
        steps: [
          { title: 'Define roles', desc: 'We translate your scope into the exact roles, skills, and headcount required.' },
          { title: 'Source & vet', desc: 'We recruit and vet local and expatriate candidates against your standards.' },
          { title: 'Mobilize', desc: 'We deploy crews to site with compliance and logistics handled.' },
          { title: 'Manage & scale', desc: 'We supervise on the ground and flex headcount as the project moves.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'Crews that are ready, and accountable.',
        points: [
          { title: 'Local recruitment depth', desc: 'Direct reach into Libyan talent pools across trades and disciplines.' },
          { title: 'Vetting discipline', desc: 'Candidates screened for skill, reliability, and site readiness.' },
          { title: 'Compliance handled', desc: 'Registration and HR compliance managed so you do not carry the exposure.' },
          { title: 'Field-tested coordination', desc: 'Experience keeping crews productive on real Libyan project sites.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years deploying crews' },
        { value: 'Local + Expat', label: 'Workforce coordination' },
        { value: 'Nationwide', label: 'Deployment reach' },
      ],
      cta: {
        overline: 'WORKFORCE SUPPORT',
        headline: 'Discuss your workforce needs.',
        body: 'Book a Market Entry Call to scope recruitment, mobilization, and managed workforce support for your Libya operation.',
        button: 'Discuss Workforce Support',
        points: ['Recruitment & vetting', 'Site mobilization', 'Specialist teams', 'HR & compliance'],
      },
    },
    ar: {
      badge: 'القوى العاملة والتوظيف',
      hero: {
        title: 'الأشخاص المناسبون، في الموقع، جاهزون للعمل — عبر ليبيا.',
        subtitle: 'تنجح المشاريع أو تفشل بطواقمها. تجلب أركان وتدقّق وتعبّئ وتدير قوى عاملة ماهرة وغير ماهرة لعمليات عبر ليبيا — مواهب محلية وفِرق أجنبية متخصصة.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1900&q=80',
        capabilities: ['توظيف ماهر وغير ماهر', 'تعبئة المشاريع والمواقع', 'فِرق فنية متخصصة', 'تنسيق محلي وأجنبي', 'الامتثال والتسجيل للموارد البشرية'],
      },
      positioning: {
        overline: 'عنق الزجاجة',
        headline: 'القوى العاملة القادرة موجودة. الوصول إليها وإدارتها هو الأصعب.',
        body: [
          'نادرًا ما يفشل المشغّلون الدوليون في ليبيا لنقص العمالة المتاحة، بل يكافحون لإيجاد الأشخاص المناسبين بسرعة وتدقيقهم بشكل سليم والتعامل مع الامتثال والحفاظ على إنتاجية الطواقم وسلامتها في مواقع نائية.',
          'تحوّل أركان عنق الزجاجة هذا إلى خدمة مُدارة. نحمل عنك التوظيف والتدقيق والتعبئة والتنسيق اليومي للقوى العاملة، ليكون مشروعك مزوّدًا بأشخاص جاهزين — ومسؤولين.',
        ],
      },
      services: {
        overline: 'ما نتولّاه',
        headline: 'قوى عاملة، من التوريد إلى الإشراف في الموقع.',
        intro: 'طبقة قوى عاملة مُدارة، لا قائمة سير ذاتية تديرها بنفسك.',
        items: [
          { title: 'التوظيف والتدقيق', desc: 'جلب وتدقيق المواهب الليبية المحلية والمهنيين الأجانب المتخصصين وفق متطلباتك.' },
          { title: 'تعبئة المشاريع والمواقع', desc: 'تعبئة الطواقم إلى الموقع — بما في ذلك المواقع النائية والميدانية — مع تولّي اللوجستيات.' },
          { title: 'فِرق فنية متخصصة', desc: 'نشر فِرق فنية وإشرافية متخصصة للنطاقات الصعبة.' },
          { title: 'إدارة القوى العاملة', desc: 'إشراف يومي وجدولة وتنسيق أداء على الأرض.' },
          { title: 'الامتثال والتسجيل', desc: 'عقود وتسجيل وامتثال للموارد البشرية وفق المتطلبات المحلية.' },
          { title: 'طواقم قابلة للتوسّع', desc: 'زيادة أو خفض العدد حسب مراحل المشروع دون فقدان الاستمرارية.' },
        ],
      },
      videoBand: {
        overline: 'الإنسان أولًا',
        headline: 'القوى العاملة بقدر من يقف خلفها.',
        body: 'التدقيق والسلامة والمعاملة العادلة والتنسيق الموثوق — الفارق بين طاقم يحضر وطاقم ينجز.',
        poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من تحديد الأدوار إلى طاقم مُدار.',
        steps: [
          { title: 'تحديد الأدوار', desc: 'نترجم نطاقك إلى الأدوار والمهارات والأعداد المطلوبة بدقة.' },
          { title: 'التوريد والتدقيق', desc: 'نجلب وندقّق مرشّحين محليين وأجانب وفق معاييرك.' },
          { title: 'التعبئة', desc: 'ننشر الطواقم في الموقع مع تولّي الامتثال واللوجستيات.' },
          { title: 'الإدارة والتوسّع', desc: 'نشرف على الأرض ونعدّل العدد مع تقدّم المشروع.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'طواقم جاهزة، ومسؤولة.',
        points: [
          { title: 'عمق التوظيف المحلي', desc: 'وصول مباشر إلى مجمّعات المواهب الليبية عبر الحِرف والتخصصات.' },
          { title: 'انضباط التدقيق', desc: 'فحص المرشّحين للمهارة والموثوقية والجاهزية للموقع.' },
          { title: 'الامتثال متولّى', desc: 'إدارة التسجيل والامتثال للموارد البشرية كي لا تتحمّل المخاطر.' },
          { title: 'تنسيق مُختبَر ميدانيًا', desc: 'خبرة في إبقاء الطواقم منتجة في مواقع مشاريع ليبية حقيقية.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا في نشر الطواقم' },
        { value: 'محلي + أجنبي', label: 'تنسيق القوى العاملة' },
        { value: 'وطنيًا', label: 'نطاق النشر' },
      ],
      cta: {
        overline: 'دعم القوى العاملة',
        headline: 'لنناقش احتياجاتك من القوى العاملة.',
        body: 'احجز مكالمة دخول السوق لتحديد التوظيف والتعبئة والدعم المُدار للقوى العاملة لعمليتك في ليبيا.',
        button: 'ناقش دعم القوى العاملة',
        points: ['التوظيف والتدقيق', 'تعبئة المواقع', 'فِرق متخصصة', 'الموارد البشرية والامتثال'],
      },
    },
  },

  trading: {
    en: {
      badge: 'TRADING & DISTRIBUTION',
      hero: {
        title: 'Move goods into Libya — and to the buyers who need them.',
        subtitle: 'Import, export, commodities, and distribution handled by a partner who knows the ports, the paperwork, and the local market. Arkan connects international supply to Libyan demand.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1900&q=80',
        capabilities: ['Import & export operations', 'Commodity & minerals trading', 'Goods distribution & supply', 'Customs compliance & documentation', 'Logistics & warehousing'],
      },
      positioning: {
        overline: 'THE FRICTION',
        headline: 'The demand is there. The supply chain is where deals break.',
        body: [
          'Libyan demand for industrial inputs, equipment, and consumer and agricultural goods is significant. The friction sits in the middle: customs, documentation, letters of credit, central-bank rules, logistics, and finding the right local buyers.',
          'Arkan operates that middle layer. We handle the import/export mechanics, compliance, and last-mile distribution so international suppliers can sell into Libya — and local partners can source reliably — without the deal stalling at the border.',
        ],
      },
      services: {
        overline: 'WHAT WE HANDLE',
        headline: 'The full trade cycle, border to buyer.',
        intro: 'One operator across sourcing, compliance, logistics, and local distribution.',
        items: [
          { title: 'Import & export', desc: 'Cross-border trade managed end to end, including letters of credit and central-bank requirements.' },
          { title: 'Commodities & minerals', desc: 'Trading and sourcing of commodities, minerals, and industrial materials.' },
          { title: 'Consumer & agricultural goods', desc: 'Distribution of consumer and agricultural goods into the local market.' },
          { title: 'Customs & documentation', desc: 'Customs clearance, documentation, and compliance navigation.' },
          { title: 'Logistics & warehousing', desc: 'Warehousing, transport, and last-mile distribution across the country.' },
          { title: 'Local buyer access', desc: 'Connecting international supply with vetted Libyan buyers and channels.' },
        ],
      },
      videoBand: {
        overline: 'AT THE BORDER AND BEYOND',
        headline: 'Getting goods in is half the job. Getting them to buyers is the other half.',
        body: 'Ports, customs, warehousing, transport, and the local relationships that turn a shipment into a sale — coordinated by one operator.',
        poster: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From source to sale.',
        steps: [
          { title: 'Source', desc: 'We align supply, terms, and the trade structure with your goods and goals.' },
          { title: 'Clear & comply', desc: 'We manage customs, documentation, and financial compliance.' },
          { title: 'Move', desc: 'We handle logistics, transport, and warehousing into the country.' },
          { title: 'Distribute', desc: 'We deliver to buyers and channels across the local market.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'A trade partner who knows the whole route.',
        points: [
          { title: 'Port & customs knowledge', desc: 'Practical command of Libyan ports, customs, and documentation.' },
          { title: 'Compliance fluency', desc: 'Experience with letters of credit and central-bank regulations.' },
          { title: 'Distribution network', desc: 'Warehousing, transport, and last-mile reach across Libya.' },
          { title: 'Buyer relationships', desc: 'Access to vetted local buyers and demand channels.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years in Libyan trade' },
        { value: 'Import / Export', label: 'Full-cycle handling' },
        { value: 'Nationwide', label: 'Distribution reach' },
      ],
      cta: {
        overline: 'TRADING & DISTRIBUTION',
        headline: 'Discuss trade or distribution.',
        body: 'Book a Market Entry Call to scope import/export, commodities, or distribution support into the Libyan market.',
        button: 'Discuss Trading or Distribution',
        points: ['Import & export', 'Customs & compliance', 'Logistics & warehousing', 'Local distribution'],
      },
    },
    ar: {
      badge: 'التجارة والتوزيع',
      hero: {
        title: 'انقل البضائع إلى ليبيا — وإلى المشترين الذين يحتاجونها.',
        subtitle: 'استيراد وتصدير وسلع وتوزيع يتولّاها شريك يعرف الموانئ والأوراق والسوق المحلي. تربط أركان التوريد العالمي بالطلب الليبي.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1900&q=80',
        capabilities: ['عمليات الاستيراد والتصدير', 'تجارة السلع والمعادن', 'توزيع وتوريد البضائع', 'التخليص الجمركي والوثائق', 'اللوجستيات والتخزين'],
      },
      positioning: {
        overline: 'الاحتكاك',
        headline: 'الطلب موجود. سلسلة التوريد هي حيث تنهار الصفقات.',
        body: [
          'الطلب الليبي على المدخلات الصناعية والمعدات والسلع الاستهلاكية والزراعية كبير. الاحتكاك في المنتصف: الجمارك والوثائق وخطابات الاعتماد وقواعد المصرف المركزي واللوجستيات وإيجاد المشترين المحليين المناسبين.',
          'تُشغّل أركان تلك الطبقة الوسطى. نتولّى آليات الاستيراد والتصدير والامتثال وتوزيع الميل الأخير، ليبيع الموردون الدوليون في ليبيا — ويصدر الشركاء المحليون بموثوقية — دون أن تتعثّر الصفقة عند الحدود.',
        ],
      },
      services: {
        overline: 'ما نتولّاه',
        headline: 'دورة التجارة الكاملة، من الحدود إلى المشتري.',
        intro: 'مُشغّل واحد عبر التوريد والامتثال واللوجستيات والتوزيع المحلي.',
        items: [
          { title: 'الاستيراد والتصدير', desc: 'تجارة عابرة للحدود تُدار من البداية للنهاية، بما في ذلك خطابات الاعتماد ومتطلبات المصرف المركزي.' },
          { title: 'السلع والمعادن', desc: 'تجارة وتوريد السلع والمعادن والمواد الصناعية.' },
          { title: 'السلع الاستهلاكية والزراعية', desc: 'توزيع السلع الاستهلاكية والزراعية في السوق المحلي.' },
          { title: 'الجمارك والوثائق', desc: 'التخليص الجمركي والوثائق وملاحة الامتثال.' },
          { title: 'اللوجستيات والتخزين', desc: 'تخزين ونقل وتوزيع الميل الأخير عبر البلاد.' },
          { title: 'الوصول إلى المشترين', desc: 'ربط التوريد الدولي بمشترين وقنوات محلية مدقّقة.' },
        ],
      },
      videoBand: {
        overline: 'عند الحدود وما بعدها',
        headline: 'إدخال البضائع نصف المهمة. إيصالها إلى المشترين هو النصف الآخر.',
        body: 'الموانئ والجمارك والتخزين والنقل والعلاقات المحلية التي تحوّل الشحنة إلى بيع — بتنسيق مُشغّل واحد.',
        poster: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من المصدر إلى البيع.',
        steps: [
          { title: 'التوريد', desc: 'نوائم العرض والشروط وهيكل التجارة مع بضائعك وأهدافك.' },
          { title: 'التخليص والامتثال', desc: 'ندير الجمارك والوثائق والامتثال المالي.' },
          { title: 'النقل', desc: 'نتولّى اللوجستيات والنقل والتخزين داخل البلاد.' },
          { title: 'التوزيع', desc: 'نسلّم إلى المشترين والقنوات عبر السوق المحلي.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'شريك تجاري يعرف الطريق كاملًا.',
        points: [
          { title: 'معرفة الموانئ والجمارك', desc: 'إلمام عملي بالموانئ والجمارك والوثائق الليبية.' },
          { title: 'طلاقة في الامتثال', desc: 'خبرة بخطابات الاعتماد ولوائح المصرف المركزي.' },
          { title: 'شبكة توزيع', desc: 'تخزين ونقل ووصول ميل أخير عبر ليبيا.' },
          { title: 'علاقات المشترين', desc: 'وصول إلى مشترين محليين وقنوات طلب مدقّقة.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا في التجارة الليبية' },
        { value: 'استيراد/تصدير', label: 'تولٍّ كامل للدورة' },
        { value: 'وطنيًا', label: 'نطاق التوزيع' },
      ],
      cta: {
        overline: 'التجارة والتوزيع',
        headline: 'لنناقش التجارة أو التوزيع.',
        body: 'احجز مكالمة دخول السوق لتحديد دعم الاستيراد/التصدير أو السلع أو التوزيع في السوق الليبي.',
        button: 'ناقش التجارة أو التوزيع',
        points: ['الاستيراد والتصدير', 'الجمارك والامتثال', 'اللوجستيات والتخزين', 'التوزيع المحلي'],
      },
    },
  },

  education: {
    en: {
      badge: 'EDUCATION & TRAINING',
      hero: {
        title: 'Build the workforce Libya’s next chapter depends on.',
        subtitle: 'Operations are only as strong as the people running them. Arkan supports education and vocational training that builds local capability — for institutions, employers, and the communities they serve.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1900&q=80',
        capabilities: ['Vocational & technical training', 'Workforce development programs', 'Institutional partnerships', 'Corporate & on-site training', 'Curriculum & capability building'],
      },
      positioning: {
        overline: 'THE GAP',
        headline: 'Skills, not just jobs, are what Libya is short of.',
        body: [
          'Every sector entering Libya runs into the same constraint: the demand for skilled, work-ready people outpaces the supply. Importing every role is expensive and unsustainable; building local capability is what makes operations durable.',
          'Arkan supports education and training that closes that gap — vocational programs, workforce development, and institutional partnerships that turn local potential into a qualified, deployable workforce.',
        ],
      },
      services: {
        overline: 'WHAT WE SUPPORT',
        headline: 'Training that connects to real work.',
        intro: 'Education with a purpose: a stronger local workforce and more capable institutions.',
        items: [
          { title: 'Vocational & technical training', desc: 'Hands-on programs that build the trade and technical skills employers actually need.' },
          { title: 'Workforce development', desc: 'Programs that prepare local talent for deployment across Arkan’s operating sectors.' },
          { title: 'Institutional partnerships', desc: 'Working with schools, training centers, and institutions to raise capability and standards.' },
          { title: 'Corporate & on-site training', desc: 'Tailored training delivered to teams and project sites, aligned to operating requirements.' },
          { title: 'Curriculum & capability building', desc: 'Support designing curricula and programs that match local market needs.' },
          { title: 'Certification & assessment', desc: 'Structured assessment and certification pathways that make skills verifiable.' },
        ],
      },
      videoBand: {
        overline: 'INVESTING IN PEOPLE',
        headline: 'The most valuable thing we can build in Libya is capability.',
        body: 'Roads and rigs matter. So do the people who run, maintain, and lead them — which is why workforce development sits at the center of how we think about lasting operations.',
        poster: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From need to capability.',
        steps: [
          { title: 'Identify needs', desc: 'We map the skills your operation or institution needs.' },
          { title: 'Design the program', desc: 'We shape training and partnerships around those needs.' },
          { title: 'Deliver & train', desc: 'We run programs locally, on site or through partner institutions.' },
          { title: 'Assess & sustain', desc: 'We certify outcomes and keep building capability over time.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'Education tied to real operating demand.',
        points: [
          { title: 'An employer’s perspective', desc: 'We know what work-ready means because we deploy people across sectors.' },
          { title: 'Local institutional reach', desc: 'Relationships with local education and training partners.' },
          { title: 'Sector-aligned programs', desc: 'Training mapped to oil & gas, construction, trading, and manpower needs.' },
          { title: 'Long-term commitment', desc: 'We invest in capability because it makes everything else we do stronger.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years of local operating insight' },
        { value: '6', label: 'Sectors informing training' },
        { value: 'Benghazi', label: 'Base for local programs' },
      ],
      cta: {
        overline: 'EDUCATION & TRAINING',
        headline: 'Let’s build local capability together.',
        body: 'Book a Market Entry Call to discuss workforce development, vocational training, or institutional partnerships in Libya.',
        button: 'Discuss Education Partnerships',
        points: ['Vocational training', 'Workforce development', 'Institutional partnerships', 'On-site corporate training'],
      },
    },
    ar: {
      badge: 'التعليم والتدريب',
      hero: {
        title: 'ابنِ القوى العاملة التي يعتمد عليها فصل ليبيا القادم.',
        subtitle: 'العمليات بقوة من يديرونها. تدعم أركان التعليم والتدريب المهني الذي يبني القدرة المحلية — للمؤسسات وأصحاب العمل والمجتمعات التي يخدمونها.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1900&q=80',
        capabilities: ['تدريب مهني وفني', 'برامج تطوير القوى العاملة', 'شراكات مؤسسية', 'تدريب مؤسسي وفي الموقع', 'بناء المناهج والقدرات'],
      },
      positioning: {
        overline: 'الفجوة',
        headline: 'ما تفتقر إليه ليبيا مهارات، لا وظائف فقط.',
        body: [
          'كل قطاع يدخل ليبيا يصطدم بالقيد نفسه: الطلب على أشخاص مَهَرة وجاهزين للعمل يفوق العرض. استيراد كل دور مكلف وغير مستدام؛ وبناء القدرة المحلية هو ما يجعل العمليات دائمة.',
          'تدعم أركان التعليم والتدريب الذي يسدّ تلك الفجوة — برامج مهنية وتطوير قوى عاملة وشراكات مؤسسية تحوّل الإمكانات المحلية إلى قوى عاملة مؤهلة وقابلة للنشر.',
        ],
      },
      services: {
        overline: 'ما ندعمه',
        headline: 'تدريب يتصل بالعمل الحقيقي.',
        intro: 'تعليم بهدف: قوى عاملة محلية أقوى ومؤسسات أكثر قدرة.',
        items: [
          { title: 'تدريب مهني وفني', desc: 'برامج عملية تبني المهارات الحرفية والفنية التي يحتاجها أصحاب العمل فعلًا.' },
          { title: 'تطوير القوى العاملة', desc: 'برامج تُعدّ المواهب المحلية للنشر عبر قطاعات أركان التشغيلية.' },
          { title: 'شراكات مؤسسية', desc: 'العمل مع المدارس ومراكز التدريب والمؤسسات لرفع القدرة والمعايير.' },
          { title: 'تدريب مؤسسي وفي الموقع', desc: 'تدريب مُصمّم يُقدَّم للفرق ومواقع المشاريع بما يوائم متطلبات التشغيل.' },
          { title: 'بناء المناهج والقدرات', desc: 'دعم تصميم مناهج وبرامج تطابق احتياجات السوق المحلي.' },
          { title: 'الاعتماد والتقييم', desc: 'مسارات تقييم واعتماد منظمة تجعل المهارات قابلة للتحقق.' },
        ],
      },
      videoBand: {
        overline: 'الاستثمار في الإنسان',
        headline: 'أثمن ما يمكن أن نبنيه في ليبيا هو القدرة.',
        body: 'الطرق والحفّارات مهمة، وكذلك من يديرونها ويصونونها ويقودونها — لذا يقع تطوير القوى العاملة في قلب تفكيرنا في العمليات الدائمة.',
        poster: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من الحاجة إلى القدرة.',
        steps: [
          { title: 'تحديد الاحتياجات', desc: 'نرسم المهارات التي تحتاجها عمليتك أو مؤسستك.' },
          { title: 'تصميم البرنامج', desc: 'نصوغ التدريب والشراكات حول تلك الاحتياجات.' },
          { title: 'التقديم والتدريب', desc: 'نُجري البرامج محليًا، في الموقع أو عبر مؤسسات شريكة.' },
          { title: 'التقييم والاستدامة', desc: 'نعتمد النتائج ونواصل بناء القدرة بمرور الوقت.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'تعليم مرتبط بالطلب التشغيلي الحقيقي.',
        points: [
          { title: 'منظور صاحب العمل', desc: 'نعرف معنى الجاهزية للعمل لأننا ننشر الأشخاص عبر القطاعات.' },
          { title: 'وصول مؤسسي محلي', desc: 'علاقات مع شركاء التعليم والتدريب المحليين.' },
          { title: 'برامج موائمة للقطاعات', desc: 'تدريب مُواءَم لاحتياجات النفط والغاز والإنشاءات والتجارة والقوى العاملة.' },
          { title: 'التزام طويل الأمد', desc: 'نستثمر في القدرة لأنها تقوّي كل ما نقوم به.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا من الرؤية التشغيلية المحلية' },
        { value: '6', label: 'قطاعات تُثري التدريب' },
        { value: 'بنغازي', label: 'قاعدة البرامج المحلية' },
      ],
      cta: {
        overline: 'التعليم والتدريب',
        headline: 'لنبنِ القدرة المحلية معًا.',
        body: 'احجز مكالمة دخول السوق لمناقشة تطوير القوى العاملة أو التدريب المهني أو الشراكات المؤسسية في ليبيا.',
        button: 'ناقش شراكات التعليم',
        points: ['تدريب مهني', 'تطوير القوى العاملة', 'شراكات مؤسسية', 'تدريب مؤسسي في الموقع'],
      },
    },
  },

  media: {
    en: {
      badge: 'MEDIA, PR & MARKET ACTIVATION',
      hero: {
        title: 'Land in Libya with a voice the local market actually hears.',
        subtitle: 'Entering a market is one thing; being understood and trusted in it is another. Arkan helps companies launch, communicate, and build reputation in Libya — from PR and media to digital campaigns and events.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1900&q=80',
        capabilities: ['Public relations & media', 'Brand & launch communications', 'Digital marketing & social', 'Events & activations', 'Website, SEO & paid media'],
      },
      positioning: {
        overline: 'AFTER ENTRY',
        headline: 'Market access gets you in. Market activation makes you matter.',
        body: [
          'Many companies treat communications as an afterthought in Libya — then wonder why a strong offering gets no traction. Local audiences, channels, language, and credibility do not translate automatically from another market.',
          'Arkan’s market-activation layer helps you launch and grow locally: public relations, campaign localization, digital and social, events, and the website and media presence that turn entry into visibility, engagement, and demand.',
        ],
      },
      services: {
        overline: 'WHAT WE HANDLE',
        headline: 'From quiet entry to local presence.',
        intro: 'A market-activation layer for companies that have entered Libya and need to be seen.',
        items: [
          { title: 'Public relations & media', desc: 'Media relations, press, and reputation support that build credibility in the local market.' },
          { title: 'Brand & launch communications', desc: 'Localized launch communications and messaging that land with Libyan audiences.' },
          { title: 'Digital marketing & social', desc: 'Social media, content, SMS/email campaigns, and community engagement.' },
          { title: 'Events & activations', desc: 'Event marketing, sponsorships, and on-the-ground activations.' },
          { title: 'Website & digital build', desc: 'Website development, localization, and a credible digital presence.' },
          { title: 'SEO, Google Ads & media buying', desc: 'Search, paid media, and media planning to reach the right local audience.' },
        ],
      },
      videoBand: {
        overline: 'BEING UNDERSTOOD',
        headline: 'A great offer no one understands locally is a missed opportunity.',
        body: 'Language, culture, channels, and credibility — the difference between a brand that arrives in Libya and a brand that connects.',
        poster: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
        watch: 'Watch the overview',
      },
      process: {
        overline: 'HOW WE WORK',
        headline: 'From message to momentum.',
        steps: [
          { title: 'Understand', desc: 'We learn your offering, audience, and goals for the Libyan market.' },
          { title: 'Localize', desc: 'We adapt message, brand, and channels for local relevance.' },
          { title: 'Activate', desc: 'We run PR, campaigns, events, and digital execution.' },
          { title: 'Measure', desc: 'We track results and refine for engagement and demand.' },
        ],
      },
      why: {
        overline: 'WHY ARKAN',
        headline: 'Communications grounded in local reality.',
        points: [
          { title: 'Local audience knowledge', desc: 'We know the channels, the language, and what earns credibility here.' },
          { title: 'Entry-to-growth continuity', desc: 'The same partner that helps you enter helps you grow.' },
          { title: 'Full-stack capability', desc: 'PR, digital, events, web, and paid media under one roof.' },
          { title: 'Reputation-first', desc: 'We protect and build credibility, not just chase reach.' },
        ],
      },
      stats: [
        { value: '30+', label: 'Years of local market insight' },
        { value: 'Full-stack', label: 'PR, digital, events & web' },
        { value: 'Benghazi', label: 'Local activation base' },
      ],
      cta: {
        overline: 'MEDIA, PR & MARKET ACTIVATION',
        headline: 'Let’s make the market hear you.',
        body: 'Book a Market Entry Call to discuss PR, launch communications, digital campaigns, or events for your Libya presence.',
        button: 'Discuss Media & PR Support',
        points: ['PR & media', 'Digital & social', 'Events & activations', 'Website & paid media'],
      },
    },
    ar: {
      badge: 'الإعلام والعلاقات العامة وتفعيل السوق',
      hero: {
        title: 'احضر في ليبيا بصوت يسمعه السوق المحلي فعلًا.',
        subtitle: 'دخول السوق شيء، وأن تُفهم وتُوثَق فيه شيء آخر. تساعد أركان الشركات على الإطلاق والتواصل وبناء السمعة في ليبيا — من العلاقات العامة والإعلام إلى الحملات الرقمية والفعاليات.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1900&q=80',
        capabilities: ['علاقات عامة وإعلام', 'اتصالات العلامة والإطلاق', 'تسويق رقمي وتواصل اجتماعي', 'فعاليات وتفعيلات', 'موقع وSEO وإعلام مدفوع'],
      },
      positioning: {
        overline: 'بعد الدخول',
        headline: 'الوصول يُدخلك. وتفعيل السوق يجعلك مهمًّا.',
        body: [
          'تعامل كثير من الشركات الاتصالات كأمر ثانوي في ليبيا — ثم تتساءل لماذا لا يلقى عرضها القوي صدى. الجمهور المحلي والقنوات واللغة والمصداقية لا تُترجم تلقائيًا من سوق آخر.',
          'تساعدك طبقة تفعيل السوق لدى أركان على الإطلاق والنمو محليًا: علاقات عامة وتوطين الحملات ورقمي وتواصل اجتماعي وفعاليات وموقع وحضور إعلامي يحوّل الدخول إلى ظهور وتفاعل وطلب.',
        ],
      },
      services: {
        overline: 'ما نتولّاه',
        headline: 'من دخول هادئ إلى حضور محلي.',
        intro: 'طبقة تفعيل سوق للشركات التي دخلت ليبيا وتحتاج أن تُرى.',
        items: [
          { title: 'علاقات عامة وإعلام', desc: 'علاقات إعلامية وصحافة ودعم سمعة تبني المصداقية في السوق المحلي.' },
          { title: 'اتصالات العلامة والإطلاق', desc: 'اتصالات إطلاق ورسائل مُوطّنة تصل إلى الجمهور الليبي.' },
          { title: 'تسويق رقمي وتواصل اجتماعي', desc: 'تواصل اجتماعي ومحتوى وحملات رسائل وبريد وتفاعل مجتمعي.' },
          { title: 'فعاليات وتفعيلات', desc: 'تسويق فعاليات ورعايات وتفعيلات على الأرض.' },
          { title: 'موقع وبناء رقمي', desc: 'تطوير المواقع والتوطين وحضور رقمي موثوق.' },
          { title: 'SEO وإعلانات جوجل وشراء إعلامي', desc: 'بحث وإعلام مدفوع وتخطيط إعلامي للوصول إلى الجمهور المحلي المناسب.' },
        ],
      },
      videoBand: {
        overline: 'أن تُفهم',
        headline: 'عرض رائع لا يفهمه أحد محليًا هو فرصة ضائعة.',
        body: 'اللغة والثقافة والقنوات والمصداقية — الفارق بين علامة تصل إلى ليبيا وعلامة تتواصل.',
        poster: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
        watch: 'شاهد النظرة العامة',
      },
      process: {
        overline: 'كيف نعمل',
        headline: 'من الرسالة إلى الزخم.',
        steps: [
          { title: 'الفهم', desc: 'نتعرّف على عرضك وجمهورك وأهدافك للسوق الليبي.' },
          { title: 'التوطين', desc: 'نكيّف الرسالة والعلامة والقنوات للملاءمة المحلية.' },
          { title: 'التفعيل', desc: 'نُجري العلاقات العامة والحملات والفعاليات والتنفيذ الرقمي.' },
          { title: 'القياس', desc: 'نتتبّع النتائج ونحسّن للتفاعل والطلب.' },
        ],
      },
      why: {
        overline: 'لماذا أركان',
        headline: 'اتصالات راسخة في الواقع المحلي.',
        points: [
          { title: 'معرفة الجمهور المحلي', desc: 'نعرف القنوات واللغة وما يكسب المصداقية هنا.' },
          { title: 'استمرارية من الدخول إلى النمو', desc: 'الشريك نفسه الذي يساعدك على الدخول يساعدك على النمو.' },
          { title: 'قدرة متكاملة', desc: 'علاقات عامة ورقمي وفعاليات وويب وإعلام مدفوع تحت سقف واحد.' },
          { title: 'المصداقية أولًا', desc: 'نحمي ونبني المصداقية، لا مجرد ملاحقة الوصول.' },
        ],
      },
      stats: [
        { value: '+30', label: 'عامًا من رؤية السوق المحلي' },
        { value: 'متكامل', label: 'علاقات عامة ورقمي وفعاليات وويب' },
        { value: 'بنغازي', label: 'قاعدة التفعيل المحلي' },
      ],
      cta: {
        overline: 'الإعلام والعلاقات العامة وتفعيل السوق',
        headline: 'لنجعل السوق يسمعك.',
        body: 'احجز مكالمة دخول السوق لمناقشة العلاقات العامة أو اتصالات الإطلاق أو الحملات الرقمية أو الفعاليات لحضورك في ليبيا.',
        button: 'ناقش دعم الإعلام والعلاقات العامة',
        points: ['علاقات عامة وإعلام', 'رقمي وتواصل اجتماعي', 'فعاليات وتفعيلات', 'موقع وإعلام مدفوع'],
      },
    },
  },
};
