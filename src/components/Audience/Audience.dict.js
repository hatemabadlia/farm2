// Section "À qui s'adresse FCS ?".
// Les 5 segments reprennent les publics déjà listés par FCS (ancienne colonne
// "Nos solutions" du footer). Les descriptions décrivent l'usage de la
// plateforme par chaque profil — à ajuster par le directeur si l'offre diffère.
const dict = {
  fr: {
    eyebrow: 'Pour qui',
    title: "À qui s'adresse Farm Control System ?",
    subtitle:
      "Une même plateforme, déclinée selon la réalité de chaque métier du secteur agricole.",
    items: [
      {
        key: 'agriculteurs',
        title: 'Agriculteurs',
        text: "Pilotez vos parcelles, vos interventions et vos coûts depuis un carnet de terrain unique, accessible même hors connexion.",
      },
      {
        key: 'cooperatives',
        title: 'Coopératives agricoles',
        text: 'Consolidez les données de vos adhérents, harmonisez les itinéraires techniques et suivez les volumes à l\'échelle du groupement.',
      },
      {
        key: 'eta',
        title: 'Entreprises de travaux agricoles',
        text: 'Planifiez vos chantiers, suivez le temps passé et les intrants engagés par client, et facturez sur des données fiables.',
      },
      {
        key: 'agro-industriels',
        title: 'Agro-industriels',
        text: "Sécurisez votre approvisionnement grâce à la traçabilité des parcelles et au suivi des pratiques de vos producteurs partenaires.",
      },
      {
        key: 'conseillers',
        title: 'Conseillers agronomes',
        text: 'Appuyez vos recommandations sur des historiques complets et des indicateurs comparables entre parcelles et campagnes.',
      },
    ],
  },

  en: {
    eyebrow: 'Who it is for',
    title: 'Who is Farm Control System for?',
    subtitle:
      'One platform, adapted to the reality of each profession in the agricultural sector.',
    items: [
      {
        key: 'agriculteurs',
        title: 'Farmers',
        text: 'Manage your fields, operations and costs from a single field notebook, available even offline.',
      },
      {
        key: 'cooperatives',
        title: 'Agricultural cooperatives',
        text: 'Consolidate member data, harmonize technical itineraries and track volumes across the whole group.',
      },
      {
        key: 'eta',
        title: 'Agricultural contractors',
        text: 'Plan your jobs, track time spent and inputs used per client, and invoice from reliable data.',
      },
      {
        key: 'agro-industriels',
        title: 'Agri-food businesses',
        text: 'Secure your supply through field traceability and monitoring of your partner growers\' practices.',
      },
      {
        key: 'conseillers',
        title: 'Agronomic advisors',
        text: 'Back your recommendations with complete histories and indicators comparable across fields and seasons.',
      },
    ],
  },

  ar: {
    eyebrow: 'لمن',
    title: 'لمن يتوجه Farm Control System؟',
    subtitle: 'منصة واحدة، مكيّفة مع واقع كل مهنة في القطاع الفلاحي.',
    items: [
      {
        key: 'agriculteurs',
        title: 'الفلاحون',
        text: 'أديروا قطعكم وتدخلاتكم وتكاليفكم من دفتر ميداني واحد، متاح حتى بدون اتصال بالأنترنت.',
      },
      {
        key: 'cooperatives',
        title: 'التعاونيات الفلاحية',
        text: 'وحّدوا معطيات منخرطيكم، ونسّقوا المسارات التقنية، وتتبعوا الكميات على مستوى المجموعة.',
      },
      {
        key: 'eta',
        title: 'مؤسسات الأشغال الفلاحية',
        text: 'خطّطوا لأوراشكم، وتتبعوا الوقت المستغرق والمدخلات المستعملة لكل زبون، وفوتروا على أساس معطيات موثوقة.',
      },
      {
        key: 'agro-industriels',
        title: 'الصناعات الغذائية',
        text: 'أمّنوا تموينكم بفضل تتبع القطع ومراقبة ممارسات المنتجين الشركاء.',
      },
      {
        key: 'conseillers',
        title: 'المستشارون الزراعيون',
        text: 'ادعموا توصياتكم بسجلات كاملة ومؤشرات قابلة للمقارنة بين القطع والمواسم.',
      },
    ],
  },
};

export default dict;
