// Page "Témoignages".
//
// ⚠️ `items` est volontairement VIDE : un témoignage client ne s'invente pas.
// Dès que FCS aura recueilli des retours réels (et l'accord écrit des clients
// pour les publier), il suffit d'ajouter les objets ici, dans les 3 langues :
//
//   { quote: '…', name: 'Prénom Nom', role: 'Fonction', company: 'Exploitation' }
//
// Tant que le tableau est vide, la page affiche un état d'attente honnête
// au lieu de faux avis — la mise en page est déjà prête.

const dict = {
  fr: {
    eyebrow: 'Témoignages',
    title: 'Ils pilotent leur exploitation avec Farm Control System',
    subtitle:
      "Les retours de terrain de nos utilisateurs : agriculteurs, coopératives et entreprises de travaux agricoles.",
    emptyText:
      "Nos premiers retours clients sont en cours de recueil et seront publiés ici prochainement.",
    ctaTitle: 'Vous utilisez Farm Control System ?',
    ctaText: 'Partagez votre expérience : votre retour aide les autres exploitations à se décider.',
    ctaLabel: 'Partager mon témoignage',
    items: [],
  },

  en: {
    eyebrow: 'Testimonials',
    title: 'They run their farm with Farm Control System',
    subtitle:
      'Field feedback from our users: farmers, cooperatives and agricultural contractors.',
    emptyText:
      'Our first customer stories are being collected and will be published here soon.',
    ctaTitle: 'Are you using Farm Control System?',
    ctaText: 'Share your experience — your feedback helps other farms make up their mind.',
    ctaLabel: 'Share my story',
    items: [],
  },

  ar: {
    eyebrow: 'آراء العملاء',
    title: 'يديرون استغلالياتهم مع Farm Control System',
    subtitle:
      'آراء ميدانية من مستعملينا: فلاحون، تعاونيات ومؤسسات الأشغال الفلاحية.',
    emptyText: 'يجري حالياً جمع أولى شهادات عملائنا وستُنشر هنا قريباً.',
    ctaTitle: 'هل تستعملون Farm Control System؟',
    ctaText: 'شاركونا تجربتكم — رأيكم يساعد استغلاليات أخرى على اتخاذ قرارها.',
    ctaLabel: 'شارك شهادتي',
    items: [],
  },
};

export default dict;
