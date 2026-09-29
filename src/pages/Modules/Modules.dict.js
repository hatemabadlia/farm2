// Contenu de la page Modules et des pages de detail /modules/:slug.
//
// Le `slug` est la cle stable partagee par les 3 langues : il sert d'URL et ne
// doit jamais etre traduit. Chaque module porte :
//   text     -> phrase courte, affichee sur les cartes (accueil + liste)
//   intro    -> paragraphe d'ouverture de la page de detail
//   features -> ce que le module permet de faire concretement
//   benefits -> ce que l'exploitation y gagne
//
// ⚠️ `intro`, `features` et `benefits` ont ete redigees a partir des
// fonctionnalites deja annoncees par FCS (phrases `text` d'origine) et des
// pratiques agronomiques standard. Elles decrivent l'outil tel qu'il est
// positionne : a faire valider par le directeur / l'equipe produit avant mise
// en ligne, pour s'assurer que chaque point correspond bien au perimetre reel.

const dict = {
  fr: {
    title: 'Nos principaux modules',
    subtitle: "Sept modules intégrés pour couvrir l'ensemble de vos besoins.",
    readMore: 'En savoir plus',
    backToModules: 'Tous les modules',
    featuresTitle: 'Ce que permet ce module',
    benefitsTitle: 'Ce que vous y gagnez',
    ctaTitle: 'Envie de voir ce module en action ?',
    ctaText: 'Demandez une démonstration personnalisée avec un de nos experts.',
    ctaLabel: 'Demander une démonstration',
    previous: 'Précédent',
    next: 'Suivant',
    items: [
      {
        slug: 'parcelles',
        n: '01',
        title: 'Gestion des parcelles',
        text: "Base de données parcellaire, géolocalisation, historique des cultures et indicateurs de performance.",
        intro:
          'Une vision numérique et intelligente de votre exploitation. Cartographiez vos parcelles, structurez leurs données et suivez leur évolution à travers un historique complet et des indicateurs de performance adaptés',
        features: [
          'Cartographie et géolocalisation des parcelles',
          'Historique cultural détaillé',
          'Fiche technique par parcelle',
          'Indicateurs techniques et économiques',
          'Export des données et rapports',
        ],
        benefits: [
          "Une vision claire de l'ensemble de votre assolement",
          "Un historique fiable, qui ne dépend plus de la mémoire ou des carnets papier",
          'Des comparaisons possibles entre parcelles pour identifier ce qui fonctionne',
        ],
      },
      {
        slug: 'stocks-intrants',
        n: '02',
        title: 'Gestion des stocks & intrants',
        text: "Suivi des stocks, mouvements d'intrants, alertes de seuil et traçabilité complète.",
        intro:
          'Maîtrisez vos stocks et vos approvisionnements grâce au suivi en temps réel des intrants, de leurs consommations. Utilisez un filtrage multicritère pour trouver rapidement les produits adaptés, anticipez vos besoins et évitez les ruptures tout en contrôlant vos coûts',
        features: [
          'Suivi des stocks en temps réel',
          'Gestion des mouvements et des consommations',
          'Consultation des prix et des caractéristiques des produits',
          'Filtrage multicritère des intrants',
          'Planification des achats et des approvisionnements',
          'Alertes automatiques en cas de stock critique',
        ],
        benefits: [
          'Moins de ruptures en pleine campagne et moins d\'achats dans l\'urgence',
          'Une traçabilité exploitable en cas de contrôle ou de demande client',
          'Une affectation des coûts d\'intrants parcelle par parcelle',
        ],
      },
      {
        slug: 'fertilisation',
        n: '03',
        title: 'Gestion de la fertilisation',
        text: 'Plans de fertilisation, suivi des apports, analyses de sol et recommandations.',
        intro:
          'Identifiez les besoins nutritifs de vos cultures, planifiez vos apports, suivez les applications et ajustez vos programmes de fertilisation grâce à des recommandations adaptées à chaque parcelle.',
        features: [
          'Identification des besoins nutritifs',
          'Planification des apports',
          'Suivi des apports et des interventions',
          'Répartition des unités fertilisantes',
          'Suivi technico-économique',
          'Système de guidage et d’aide à la décision',
        ],
        benefits: [
          "Des apports ajustés aux besoins, sans sur-fertilisation coûteuse",
          "Un écart plan / réalisé visible, pour corriger en cours de campagne",
          'Un historique mobilisable pour justifier vos pratiques',
        ],
      },
      {
        slug: 'phytosanitaire',
        n: '04',
        title: 'Protection & suivi phytosanitaire',
        text: 'Surveillance des ravageurs, gestion des traitements et suivi des interventions.',
        intro:
          'Surveillez l’état sanitaire de vos parcelles, identifiez les risques, planifiez vos traitements et évaluez leur efficacité grâce à un suivi phytosanitaire complet et centralisé.',
        features: [
          'Identification des risques phytosanitaires',
          'Suivi de l’état sanitaire des cultures',
          'Planification des interventions',
          'Cahier phytosanitaire intégré',
          'Évaluation de l’efficacité des traitements',
          'Suivi des coûts et recommandations',
        ],
        benefits: [
          'Des décisions de traitement fondées sur des observations datées',
          'Un registre phytosanitaire tenu au fil de l\'eau, pas reconstitué après coup',
          'Une meilleure maîtrise du nombre et du coût des interventions',
        ],
      },
      {
        slug: 'irrigation',
        n: '05',
        title: "Pilotage de l'irrigation",
        text: "Planification de l'irrigation, suivi des consommations et optimisation des ressources en eau.",
        intro:
          'Optimisez chaque apport d’eau pour répondre aux besoins réels de vos cultures. Planifiez les irrigations, ajustez les apports selon les conditions de la parcelle et suivez les consommations afin d’améliorer l’efficience de l’eau et la performance technico-économique.',
        features: [
          'Planification mensuel optimisée',
          'Ajustement et correction stratégique',
          'Traçabilité des apports hydriques',
          'Analyse des performances et aide à la décision',
          'Bilan technico-Économique',
          'Déclanchement ciblé des interventions',
        ],
        benefits: [
          'Une consommation d\'eau mesurée plutôt qu\'estimée',
          'Des écarts entre parcelles visibles, donc corrigeables',
          "Le coût réel de l'irrigation intégré à vos calculs de marge",
        ],
      },
      {
        slug: 'performance',
        n: '06',
        title: 'Performance technico-économique',
        text: 'Analyse des coûts, marges, rendements et indicateurs de rentabilité par parcelle.',
        intro:
          'Mesurez, analysez et améliorez la performance de votre exploitation en suivant les coûts de production, les rendements, les marges et la rentabilité de chaque parcelle et de chaque culture afin de comparer les résultats, identifier les écarts, anticiper les performances et prendre des décisions fondées sur des indicateurs fiables.',
        features: [
          'Suivi des coûts de production',
          'Analyse des rendements',
          'Calcul des marges et de la rentabilité',
          'Comparaison des performances',
          'Budgets prévisionnels et simulations',
          'Tableaux de bord et indicateurs clés',
        ],
        benefits: [
          'Savoir quelles cultures et quelles parcelles sont réellement rentables',
          'Des arbitrages d\'assolement appuyés sur des chiffres, pas sur une impression',
          'Un suivi économique disponible en cours de campagne, pas seulement au bilan',
        ],
      },
      {
        slug: 'aide-decision',
        n: '07',
        title: "Système d'aide à la décision",
        text: 'Recommandations intelligentes, alertes et tableaux de bord pour des décisions optimales.',
        intro:
          'Un système de guidage intelligent qui transforme les données de votre exploitation en recommandations, alertes et indicateurs pour vous accompagner dans chaque décision agronomique.',
        features: [
          'Collecte et intégration intelligente des données',
          'Analyse avancée et modélisation',
          'Alertes intelligentes et recommandations personnalisées',
          'Système de guidage et correction automatisée',
          'Visualisation graphique et outils d’analyses',
          'Rapports automatisés et exportables',
        ],
        benefits: [
          'Les points d\'attention remontent au lieu d\'être cherchés',
          'Des décisions prises sur des données à jour plutôt qu\'a posteriori',
          'Une lecture d\'ensemble de l\'exploitation, au-delà de la parcelle',
        ],
      },
    ],
  },

  en: {
    title: 'Our key modules',
    subtitle: 'Seven integrated modules covering all your needs.',
    readMore: 'Learn more',
    backToModules: 'All modules',
    featuresTitle: 'What this module lets you do',
    benefitsTitle: 'What you gain',
    ctaTitle: 'Want to see this module in action?',
    ctaText: 'Request a personalized demo with one of our experts.',
    ctaLabel: 'Request a demo',
    previous: 'Previous',
    next: 'Next',
    items: [
      {
        slug: 'parcelles',
        n: '01',
        title: 'Field management',
        text: 'Field database, geolocation, crop history and performance indicators.',
        intro:
          "A digital and intelligent vision of your farm. Map your plots, structure their data, and monitor their development through a complete history and performance indicators tailored to your needs.",
        features: [
          'Create and outline your fields, with their area and geolocation',
          'Attach each field its crop, variety and technical itinerary',
          'Consult the multi-year history of crops and operations',
          'Track rotations and preceding crops',
          'Compare performance indicators across fields and across seasons',
        ],
        benefits: [
          'A clear view of your whole cropping plan',
          'A reliable history that no longer depends on memory or paper notebooks',
          'Field-to-field comparisons that show what actually works',
        ],
      },
      {
        slug: 'stocks-intrants',
        n: '02',
        title: 'Stock & input management',
        text: 'Stock tracking, input movements, threshold alerts and full traceability.',
        intro:
          'Seeds, fertilizers, crop protection products, fuel: inputs account for a major share of a farm’s costs. This module tracks their arrivals, withdrawals and allocations, so you know at any moment what is left in stock and where each quantity went.',
        features: [
          'Record stock arrivals (purchases, deliveries) and withdrawals',
          'Allocate every input withdrawal to a field and an operation',
          'Set threshold alerts to anticipate shortages',
          'Track stock value and how it changes through the season',
          'Trace a batch end to end, from delivery to application',
        ],
        benefits: [
          'Fewer shortages mid-season and fewer emergency purchases',
          'Traceability you can actually produce during an audit or a customer request',
          'Input costs allocated field by field',
        ],
      },
      {
        slug: 'fertilisation',
        n: '03',
        title: 'Fertilization management',
        text: 'Fertilization plans, input tracking, soil analyses and recommendations.',
        intro:
          'Fertilizing accurately means starting from the crop’s real needs and the state of the soil, then checking what was actually applied. This module links those three steps: analyses, forecast plan and actual applications.',
        features: [
          'Record and keep the soil analyses of each field',
          'Build a forecast fertilization plan per field and per crop',
          'Enter actual applications and compare them to the plan',
          'Track fertilizer units applied (N, P, K) across the season',
          'Keep a multi-year history of fertilization practices',
        ],
        benefits: [
          'Applications matched to needs, without costly over-fertilization',
          'A visible plan-versus-actual gap you can correct mid-season',
          'A history you can use to justify your practices',
        ],
      },
      {
        slug: 'phytosanitaire',
        n: '04',
        title: 'Crop protection & monitoring',
        text: 'Pest monitoring, treatment management and intervention tracking.',
        intro:
          'Crop protection rests on observation as much as on treatment. This module lets you log what is seen in the field, plan the operations that follow from it, and keep a precise record of every application.',
        features: [
          'Log field observations: pests, diseases, weeds',
          'Plan crop protection operations field by field',
          'Record each treatment: product, dose, date, field concerned',
          'Track completed operations and those still outstanding',
          'Keep a complete register of applications per season',
        ],
        benefits: [
          'Treatment decisions grounded in dated observations',
          'A crop protection register kept as you go, not reconstructed afterwards',
          'Better control over the number and cost of operations',
        ],
      },
      {
        slug: 'irrigation',
        n: '05',
        title: 'Irrigation management',
        text: 'Irrigation planning, consumption tracking and water resource optimization.',
        intro:
          'Water is a constrained resource and a cost line in its own right. This module lets you plan watering rounds, record the volumes actually applied and track consumption field by field across the whole season.',
        features: [
          'Plan water applications per field and per crop',
          'Record completed irrigations: volume, duration, date',
          'Track cumulative consumption over the season',
          'Compare consumption across fields and across crops',
          'Attach water and energy costs to each field',
        ],
        benefits: [
          'Water consumption measured rather than estimated',
          'Gaps between fields made visible, and therefore correctable',
          'The real cost of irrigation built into your margin calculations',
        ],
      },
      {
        slug: 'performance',
        n: '06',
        title: 'Technical & economic performance',
        text: 'Cost, margin, yield and profitability analysis for each field.',
        intro:
          'All the data entered in the other modules converges here. This module brings costs incurred and output obtained together to calculate, field by field and crop by crop, what each hectare actually cost and returned.',
        features: [
          'Consolidate costs per field: inputs, water, operations, labour',
          'Record yields and harvest output',
          'Calculate gross margin per field and per crop',
          'Compare performance across crops, fields and seasons',
          'View key indicators on summary dashboards',
        ],
        benefits: [
          'Know which crops and which fields are genuinely profitable',
          'Cropping decisions backed by figures rather than by impression',
          'Economic tracking available during the season, not only at year-end',
        ],
      },
      {
        slug: 'aide-decision',
        n: '07',
        title: 'Decision support system',
        text: 'Smart recommendations, alerts and dashboards for optimal decisions.',
        intro:
          'Having data is not enough: it has to surface at the right moment. This module draws on all the farm’s information to flag what deserves attention and inform the decisions ahead.',
        features: [
          'Receive alerts on situations that call for an intervention',
          'Consult summary dashboards at farm level',
          'Identify gaps across fields, crops and seasons',
          'Base decisions on comparable, dated indicators',
          'Follow how key indicators evolve through the season',
        ],
        benefits: [
          'Points of attention come to you instead of having to be hunted down',
          'Decisions made on current data rather than after the fact',
          'A whole-farm view, beyond the individual field',
        ],
      },
    ],
  },

  ar: {
    title: 'وحداتنا الأساسية',
    subtitle: 'سبع وحدات متكاملة تغطي جميع احتياجاتكم.',
    readMore: 'اعرف المزيد',
    backToModules: 'كل الوحدات',
    featuresTitle: 'ما تتيحه هذه الوحدة',
    benefitsTitle: 'ما تكسبونه',
    ctaTitle: 'هل ترغب في رؤية هذه الوحدة قيد التشغيل؟',
    ctaText: 'اطلب عرضاً توضيحياً مخصصاً مع أحد خبرائنا.',
    ctaLabel: 'اطلب عرضاً توضيحياً',
    previous: 'السابق',
    next: 'التالي',
    items: [
      {
        slug: 'parcelles',
        n: '01',
        title: 'إدارة قطع الأرض',
        text: 'قاعدة بيانات القطع، تحديد المواقع، تاريخ المحاصيل ومؤشرات الأداء.',
        intro:
          'القطعة الأرضية هي الوحدة الأساسية لكل قرار زراعي. تشكّل هذه الوحدة مرجعها: تُوصف كل قطعة وتُحدَّد مواقعها وتُتابَع موسماً بعد موسم، بحيث يبقى تاريخ المحاصيل والتدخلات والنتائج متاحاً في مكان واحد.',
        features: [
          'إنشاء قطعكم وتحديد حدودها، بمساحتها وموقعها الجغرافي',
          'ربط كل قطعة بمحصولها وصنفها ومسارها التقني',
          'الاطلاع على التاريخ متعدد السنوات للمحاصيل والتدخلات',
          'متابعة الدورات الزراعية والمحاصيل السابقة',
          'مقارنة مؤشرات الأداء بين القطع وبين المواسم',
        ],
        benefits: [
          'رؤية واضحة لمجمل خطتكم الزراعية',
          'تاريخ موثوق لم يعد يعتمد على الذاكرة أو الدفاتر الورقية',
          'مقارنات ممكنة بين القطع لتحديد ما ينجح فعلاً',
        ],
      },
      {
        slug: 'stocks-intrants',
        n: '02',
        title: 'إدارة المخزون والمدخلات',
        text: 'متابعة المخزون، حركة المدخلات، تنبيهات الحد الأدنى وتتبع كامل.',
        intro:
          'البذور والأسمدة ومنتجات الوقاية والوقود: تمثل المدخلات حصة كبيرة من أعباء المستثمرة. تتابع هذه الوحدة دخولها وخروجها وتخصيصها، لمعرفة ما تبقى في المخزون وأين استُعملت كل كمية في أي لحظة.',
        features: [
          'تسجيل دخول المخزون (المشتريات، التسليمات) والخروج منه',
          'تخصيص كل خروج مدخلات لقطعة ولتدخل محدد',
          'تحديد عتبات تنبيه لتوقّع النفاد',
          'متابعة قيمة المخزون وتطورها خلال الموسم',
          'استرجاع التتبع الكامل لدفعة، من الاستلام إلى الاستعمال',
        ],
        benefits: [
          'نفاد أقل في عز الموسم ومشتريات استعجالية أقل',
          'تتبع قابل للاستعمال عند أي مراقبة أو طلب من الزبون',
          'تخصيص تكاليف المدخلات قطعةً بقطعة',
        ],
      },
      {
        slug: 'fertilisation',
        n: '03',
        title: 'إدارة التسميد',
        text: 'خطط التسميد، متابعة الكميات، تحاليل التربة والتوصيات.',
        intro:
          'التسميد بدقة يفترض الانطلاق من الاحتياجات الفعلية للمحصول ومن حالة التربة، ثم التحقق مما تم تقديمه فعلاً. تربط هذه الوحدة هذه المراحل الثلاث: التحاليل، الخطة التقديرية، والكميات المقدَّمة.',
        features: [
          'تسجيل وحفظ تحاليل التربة لكل قطعة',
          'بناء خطة تسميد تقديرية لكل قطعة ولكل محصول',
          'إدخال الكميات المقدَّمة ومقارنتها بالخطة',
          'متابعة الوحدات السمادية المقدَّمة (N, P, K) خلال الموسم',
          'حفظ تاريخ ممارسات التسميد على عدة سنوات',
        ],
        benefits: [
          'كميات مضبوطة على الاحتياجات، دون تسميد مفرط ومكلف',
          'فارق بين الخطة والمنجز يظهر بوضوح، لتصحيحه أثناء الموسم',
          'تاريخ يمكن الاستناد إليه لتبرير ممارساتكم',
        ],
      },
      {
        slug: 'phytosanitaire',
        n: '04',
        title: 'الوقاية والمتابعة الصحية للنبات',
        text: 'مراقبة الآفات، إدارة المعالجات ومتابعة التدخلات.',
        intro:
          'تقوم وقاية المحاصيل على الملاحظة بقدر ما تقوم على المعالجة. تتيح هذه الوحدة تدوين ما يُلاحَظ في الحقل، وتخطيط التدخلات الناتجة عنه، والاحتفاظ بأثر دقيق لكل تطبيق.',
        features: [
          'تدوين الملاحظات الميدانية: الآفات، الأمراض، الأعشاب الضارة',
          'تخطيط تدخلات الوقاية قطعةً بقطعة',
          'تسجيل كل معالجة: المنتج، الجرعة، التاريخ، القطعة المعنية',
          'متابعة التدخلات المنجزة وتلك التي لا تزال معلقة',
          'حفظ سجل كامل للتطبيقات في كل موسم',
        ],
        benefits: [
          'قرارات معالجة مبنية على ملاحظات مؤرَّخة',
          'سجل وقاية يُمسك أولاً بأول، لا يُعاد تكوينه لاحقاً',
          'تحكم أفضل في عدد التدخلات وتكلفتها',
        ],
      },
      {
        slug: 'irrigation',
        n: '05',
        title: 'إدارة الري',
        text: 'تخطيط الري، متابعة الاستهلاك وتحسين الموارد المائية.',
        intro:
          'الماء مورد محدود وبند تكلفة قائم بذاته. تتيح هذه الوحدة تخطيط دورات السقي، وتسجيل الكميات المقدَّمة فعلاً، ومتابعة الاستهلاك قطعةً بقطعة على امتداد الموسم.',
        features: [
          'تخطيط كميات المياه لكل قطعة ولكل محصول',
          'تسجيل عمليات الري المنجزة: الحجم، المدة، التاريخ',
          'متابعة الاستهلاك التراكمي على مدار الموسم',
          'مقارنة الاستهلاك بين القطع وبين المحاصيل',
          'ربط تكلفة الماء والطاقة بكل قطعة',
        ],
        benefits: [
          'استهلاك مائي مقيس لا مقدَّر بالتخمين',
          'فوارق بين القطع تظهر بوضوح، ومن ثم يمكن تصحيحها',
          'التكلفة الحقيقية للري مدمجة في حساب هوامشكم',
        ],
      },
      {
        slug: 'performance',
        n: '06',
        title: 'الأداء التقني والاقتصادي',
        text: 'تحليل التكاليف والهوامش والمردود ومؤشرات الربحية لكل قطعة.',
        intro:
          'تتقاطع هنا كل المعطيات المُدخَلة في الوحدات الأخرى. تقرّب هذه الوحدة بين الأعباء المصروفة والمنتوج المحصَّل لتحسب، قطعةً بقطعة ومحصولاً بمحصول، ما كلّفه كل هكتار وما أدرّه فعلاً.',
        features: [
          'تجميع الأعباء لكل قطعة: المدخلات، الماء، الأشغال، اليد العاملة',
          'تسجيل المردود ومنتوج الحصاد',
          'حساب الهامش الإجمالي لكل قطعة ولكل محصول',
          'مقارنة الأداء بين المحاصيل والقطع والمواسم',
          'عرض المؤشرات الرئيسية على لوحات متابعة تجميعية',
        ],
        benefits: [
          'معرفة المحاصيل والقطع المربحة فعلاً',
          'قرارات زراعية مستندة إلى أرقام لا إلى انطباع',
          'متابعة اقتصادية متاحة أثناء الموسم، لا عند الحصيلة فقط',
        ],
      },
      {
        slug: 'aide-decision',
        n: '07',
        title: 'نظام دعم القرار',
        text: 'توصيات ذكية وتنبيهات ولوحات متابعة لاتخاذ قرارات مثلى.',
        intro:
          'امتلاك المعطيات لا يكفي: عليها أن تظهر في الوقت المناسب. تستثمر هذه الوحدة مجمل معلومات المستثمرة للإشارة إلى ما يستحق الانتباه وإنارة القرارات المقبلة.',
        features: [
          'تلقي تنبيهات حول الوضعيات التي تستدعي تدخلاً',
          'الاطلاع على لوحات متابعة تجميعية على مستوى المستثمرة',
          'تحديد الفوارق بين القطع والمحاصيل والمواسم',
          'إسناد القرارات إلى مؤشرات قابلة للمقارنة ومؤرَّخة',
          'متابعة تطور المؤشرات الرئيسية على امتداد الموسم',
        ],
        benefits: [
          'نقاط الانتباه تصلكم بدل البحث عنها',
          'قرارات تُتخذ على معطيات محيّنة لا بأثر رجعي',
          'قراءة شاملة للمستثمرة، تتجاوز القطعة الواحدة',
        ],
      },
    ],
  },
};

export default dict;