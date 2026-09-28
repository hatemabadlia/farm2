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
  phoneDisplay: '+213 557 79 69 46',
  phoneHref: 'tel:+213557796946',
};

// Reseaux sociaux : laisser '' tant que le compte n'existe pas,
// l'icone correspondante n'est alors pas affichee.
export const SOCIAL_LINKS = {
  facebook: '',
  twitter: '',
  linkedin: '',
  youtube: '',
};

export default CONTACT;
