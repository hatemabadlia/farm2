// ---------------------------------------------------------------------------
// Coordonnees FCS — SOURCE UNIQUE
// ---------------------------------------------------------------------------
// Ces valeurs etaient auparavant dupliquees dans Footer.dict.js,
// Contact.dict.js et Legal.dict.js, avec trois numeros differents. Tout passe
// desormais par ce fichier : une seule ligne a corriger.
//
// ⚠️ Email et telephone proviennent de la carte de fin de la video
// institutionnelle FCS (farme.mp4). A CONFIRMER par le directeur avant mise
// en ligne : si l'entreprise dispose d'une adresse professionnelle dediee
// (contact@farmcontrolsystem.com par exemple), la preferer a l'adresse Gmail.
// ---------------------------------------------------------------------------

export const CONTACT = {
  email: 'farmcontrolsystem@gmail.com',
  phoneDisplay: '+213 551 63 46 10',
  phoneHref: 'tel:+213551634610',
};

// Reseaux sociaux : laisser '' tant que le compte n'existe pas,
// l'icone correspondante n'est alors pas affichee.
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/19Hnwm41k2/',
  twitter: 'https://www.instagram.com/farmcontrolsystem?stkn=MWpudWJoMXpkbDhuYQ==',
  linkedin: 'https://www.linkedin.com/company/farm-control-system/',
  youtube: '',
};

export default CONTACT;
