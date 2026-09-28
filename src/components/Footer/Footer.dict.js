// Dictionnaire du Footer.
//
// Coordonnees et reseaux : voir src/config/contact.js (source unique).

import { CONTACT, SOCIAL_LINKS } from '../../config/contact.js';

export { SOCIAL_LINKS };

const dict = {
  fr: {
    tagline: "Le pilotage intelligent de votre exploitation, à portée de main.",
    phone: CONTACT.phoneDisplay,
    phoneHref: CONTACT.phoneHref,
    email: 'Contactez-nous !',
    emailHref: `mailto:${CONTACT.email}`,

    aboutTitle: 'À propos de FCS',
    aboutLinks: [
      { label: 'Modules', href: '/modules' },
      { label: 'Démos', href: '/demos' },
      { label: 'Témoignages', href: '/temoignages' },
      { label: 'À propos de FCS', href: '/a-propos' },
      { label: 'Notre vision', href: '/our-vision' },
      { label: 'Contact', href: '/contact' },
    ],

    solutionsTitle: 'Nos modules',
    solutionsLinks: [
      { label: 'Gestion des parcelles', href: '/modules/parcelles' },
      { label: 'Stocks & intrants', href: '/modules/stocks-intrants' },
      { label: 'Fertilisation', href: '/modules/fertilisation' },
      { label: 'Suivi phytosanitaire', href: '/modules/phytosanitaire' },
      { label: "Pilotage de l'irrigation", href: '/modules/irrigation' },
      { label: "Système d'aide à la décision", href: '/modules/aide-decision' },
    ],

    legalLinks: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
    ],

    copyright: 'Farm Control System. Tous droits réservés.',
    backToTop: 'Retour en haut',
    socialsLabel: 'Réseaux sociaux',
  },

  en: {
    tagline: 'Smart control of your farm, right at your fingertips.',
    phone: CONTACT.phoneDisplay,
    phoneHref: CONTACT.phoneHref,
    email: 'Get in touch!',
    emailHref: `mailto:${CONTACT.email}`,

    aboutTitle: 'About FCS',
    aboutLinks: [
      { label: 'Modules', href: '/modules' },
      { label: 'Demos', href: '/demos' },
      { label: 'Testimonials', href: '/temoignages' },
      { label: 'About FCS', href: '/a-propos' },
      { label: 'Our vision', href: '/our-vision' },
      { label: 'Contact', href: '/contact' },
    ],

    solutionsTitle: 'Our modules',
    solutionsLinks: [
      { label: 'Field management', href: '/modules/parcelles' },
      { label: 'Stock & inputs', href: '/modules/stocks-intrants' },
      { label: 'Fertilization', href: '/modules/fertilisation' },
      { label: 'Crop protection', href: '/modules/phytosanitaire' },
      { label: 'Irrigation management', href: '/modules/irrigation' },
      { label: 'Decision support system', href: '/modules/aide-decision' },
    ],

    legalLinks: [
      { label: 'Legal notice', href: '/mentions-legales' },
      { label: 'Privacy policy', href: '/confidentialite' },
    ],

    copyright: 'Farm Control System. All rights reserved.',
    backToTop: 'Back to top',
    socialsLabel: 'Social networks',
  },

  ar: {
    tagline: 'القيادة الذكية لاستغلاليتكم، في متناول اليد.',
    phone: CONTACT.phoneDisplay,
    phoneHref: CONTACT.phoneHref,
    email: 'اتصلوا بنا!',
    emailHref: `mailto:${CONTACT.email}`,

    aboutTitle: 'عن FCS',
    aboutLinks: [
      { label: 'الوحدات', href: '/modules' },
      { label: 'عروض توضيحية', href: '/demos' },
      { label: 'آراء العملاء', href: '/temoignages' },
      { label: 'عن FCS', href: '/a-propos' },
      { label: 'رؤيتنا', href: '/our-vision' },
      { label: 'اتصل بنا', href: '/contact' },
    ],

    solutionsTitle: 'وحداتنا',
    solutionsLinks: [
      { label: 'إدارة قطع الأرض', href: '/modules/parcelles' },
      { label: 'المخزون والمدخلات', href: '/modules/stocks-intrants' },
      { label: 'التسميد', href: '/modules/fertilisation' },
      { label: 'المتابعة الصحية للنبات', href: '/modules/phytosanitaire' },
      { label: 'إدارة الري', href: '/modules/irrigation' },
      { label: 'نظام دعم القرار', href: '/modules/aide-decision' },
    ],

    legalLinks: [
      { label: 'الإشعارات القانونية', href: '/mentions-legales' },
      { label: 'سياسة الخصوصية', href: '/confidentialite' },
    ],

    copyright: 'Farm Control System. جميع الحقوق محفوظة.',
    backToTop: 'العودة إلى الأعلى',
    socialsLabel: 'شبكات التواصل',
  },
};

export default dict;
