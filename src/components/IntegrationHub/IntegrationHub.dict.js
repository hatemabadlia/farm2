// Section "schema d'integration" : les 7 modules alimentent le systeme d'aide
// a la decision. C'est la promesse centrale de FCS ("solution integree",
// "transformer l'information en decisions") — jusqu'ici ecrite mais jamais
// montree. Le schema la rend lisible d'un coup d'oeil.
const dict = {
  fr: {
    eyebrow: 'Une plateforme intégrée',
    title: 'Vos données circulent, vos décisions suivent',
    subtitle:
      "Chaque module alimente le même socle de données. Le système d'aide à la décision les croise pour faire remonter ce qui compte, au moment où cela compte.",
    coreLabel: "Aide à la décision",
    coreHint: 'Survolez un module',
    flowLabel: 'De la donnée à la décision',
    steps: [
      { key: 'collect', label: 'Collecte', text: 'Chaque module enregistre les opérations au fil du terrain.' },
      { key: 'consolidate', label: 'Consolidation', text: 'Les données rejoignent un socle unique, rattaché à la parcelle.' },
      { key: 'analyse', label: 'Analyse', text: 'Les indicateurs sont calculés et comparés entre parcelles et campagnes.' },
      { key: 'decide', label: 'Décision', text: 'Les écarts et les alertes remontent pour orienter vos arbitrages.' },
    ],
  },
  en: {
    eyebrow: 'One integrated platform',
    title: 'Your data flows, your decisions follow',
    subtitle:
      'Every module feeds the same data core. The decision support system cross-references it to surface what matters, when it matters.',
    coreLabel: 'Decision support',
    coreHint: 'Hover a module',
    flowLabel: 'From data to decision',
    steps: [
      { key: 'collect', label: 'Capture', text: 'Each module records operations as they happen in the field.' },
      { key: 'consolidate', label: 'Consolidation', text: 'Data joins a single core, attached to the field it came from.' },
      { key: 'analyse', label: 'Analysis', text: 'Indicators are computed and compared across fields and seasons.' },
      { key: 'decide', label: 'Decision', text: 'Gaps and alerts surface to guide your trade-offs.' },
    ],
  },
  ar: {
    eyebrow: 'منصة متكاملة',
    title: 'معطياتكم تتدفق، وقراراتكم تتبع',
    subtitle:
      'كل وحدة تغذّي القاعدة نفسها من المعطيات. ويقوم نظام دعم القرار بتقاطعها لإبراز ما يهم، في الوقت الذي يهم فيه.',
    coreLabel: 'دعم القرار',
    coreHint: 'مرّر فوق وحدة',
    flowLabel: 'من المعطيات إلى القرار',
    steps: [
      { key: 'collect', label: 'الجمع', text: 'كل وحدة تسجّل العمليات أولاً بأول في الميدان.' },
      { key: 'consolidate', label: 'التوحيد', text: 'تلتحق المعطيات بقاعدة واحدة، مرتبطة بالقطعة التي جاءت منها.' },
      { key: 'analyse', label: 'التحليل', text: 'تُحسب المؤشرات وتُقارن بين القطع وبين المواسم.' },
      { key: 'decide', label: 'القرار', text: 'تظهر الفوارق والتنبيهات لتوجيه خياراتكم.' },
    ],
  },
};

export default dict;
