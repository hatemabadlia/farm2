// Page "Démos" : présente le déroulé d'une démonstration Farm Control System.
// Les textes décrivent le processus commercial — à ajuster par le directeur
// si le déroulé réel diffère (durée, nombre d'étapes, interlocuteurs).
const dict = {
  fr: {
    eyebrow: 'Démonstrations',
    title: 'Découvrez Farm Control System en conditions réelles',
    subtitle:
      "Une démonstration personnalisée d'environ 45 minutes, menée par un de nos agronomes, à partir de vos propres parcelles et de vos cultures.",
    ctaLabel: 'Demander une démonstration',

    steps: [
      {
        title: 'Vous nous décrivez votre exploitation',
        text: "Surface, cultures, mode de conduite, outils déjà utilisés : nous partons de votre contexte réel, pas d'un cas d'école.",
      },
      {
        title: 'Nous préparons une démonstration sur mesure',
        text: 'Nous paramétrons la plateforme avec des parcelles et des itinéraires techniques proches des vôtres pour que chaque écran vous parle.',
      },
      {
        title: 'Nous parcourons la solution ensemble',
        text: "En visioconférence ou sur site, nous parcourons les modules qui répondent à vos besoins prioritaires et répondons à vos questions.",
      },
      {
        title: 'Vous testez à votre rythme',
        text: 'Vous repartez avec un accès d\'essai et un interlocuteur dédié pour approfondir sur vos propres données.',
      },
    ],

    coversTitle: 'Ce que nous abordons pendant la démonstration',
    covers: [
      'La création et le suivi de vos parcelles',
      "L'enregistrement des interventions et des coûts",
      'Le suivi des stocks et des intrants',
      'Les plans de fertilisation et le suivi phytosanitaire',
      "Le pilotage de l'irrigation",
      'Les tableaux de bord technico-économiques',
      "L'utilisation en mobilité et hors connexion",
      "Les modalités de déploiement et d'accompagnement",
    ],

    ctaTitle: 'Prêt à voir la plateforme sur vos propres parcelles ?',
    ctaText: "Laissez-nous vos coordonnées, nous revenons vers vous sous 48 heures ouvrées.",
  },

  en: {
    eyebrow: 'Demos',
    title: 'See Farm Control System in real conditions',
    subtitle:
      'A personalized 45-minute demo, led by one of our agronomists, based on your own fields and crops.',
    ctaLabel: 'Request a demo',

    steps: [
      {
        title: 'You describe your farm',
        text: 'Area, crops, management practices, tools already in use: we start from your real context, not a textbook case.',
      },
      {
        title: 'We prepare a tailored demo',
        text: 'We set up the platform with fields and technical itineraries close to yours so every screen speaks to you.',
      },
      {
        title: 'We walk through the solution together',
        text: 'By video call or on site, we go through the modules that address your priorities and answer your questions.',
      },
      {
        title: 'You test at your own pace',
        text: 'You leave with trial access and a dedicated contact to go further with your own data.',
      },
    ],

    coversTitle: 'What we cover during the demo',
    covers: [
      'Creating and monitoring your fields',
      'Recording interventions and costs',
      'Stock and input tracking',
      'Fertilization plans and crop protection monitoring',
      'Irrigation management',
      'Technical and economic dashboards',
      'Mobile and offline use',
      'Deployment and support arrangements',
    ],

    ctaTitle: 'Ready to see the platform on your own fields?',
    ctaText: 'Leave us your details and we will get back to you within 48 business hours.',
  },

  ar: {
    eyebrow: 'عروض توضيحية',
    title: 'اكتشف Farm Control System في ظروف واقعية',
    subtitle:
      'عرض توضيحي مخصص مدته حوالي 45 دقيقة، يقوده أحد مهندسينا الزراعيين، انطلاقاً من قطعكم ومحاصيلكم الخاصة.',
    ctaLabel: 'اطلب عرضاً توضيحياً',

    steps: [
      {
        title: 'تصفون لنا استغلاليتكم',
        text: 'المساحة، المحاصيل، نمط التسيير، الأدوات المستعملة حالياً: ننطلق من واقعكم الفعلي لا من حالة نظرية.',
      },
      {
        title: 'نحضّر عرضاً توضيحياً على المقاس',
        text: 'نضبط المنصة بقطع ومسارات تقنية قريبة من قطعكم حتى تكون كل شاشة ذات معنى بالنسبة لكم.',
      },
      {
        title: 'نستعرض الحل معاً',
        text: 'عبر الفيديو أو في عين المكان، نستعرض الوحدات التي تلبي أولوياتكم ونجيب عن أسئلتكم.',
      },
      {
        title: 'تجربون على وتيرتكم',
        text: 'تغادرون بحساب تجريبي وبمحاور مخصص لتعميق التجربة على بياناتكم الخاصة.',
      },
    ],

    coversTitle: 'ما نتناوله خلال العرض التوضيحي',
    covers: [
      'إنشاء ومتابعة قطعكم الأرضية',
      'تسجيل التدخلات والتكاليف',
      'متابعة المخزون والمدخلات',
      'خطط التسميد والمتابعة الصحية للنبات',
      'إدارة الري',
      'لوحات المتابعة التقنية والاقتصادية',
      'الاستعمال عبر الهاتف وبدون اتصال',
      'كيفيات النشر والمرافقة',
    ],

    ctaTitle: 'مستعدون لرؤية المنصة على قطعكم الخاصة؟',
    ctaText: 'اتركوا لنا معلوماتكم وسنعود إليكم في غضون 48 ساعة عمل.',
  },
};

export default dict;
