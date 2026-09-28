// Visuels de fond des cartes modules.
// Images extraites de la video institutionnelle FCS (plans sans texte
// incruste, filigrane recadre) : aucune banque d'images externe, donc
// aucune question de droits, et une coherence visuelle avec le hero.
//
// Pour remplacer un visuel par une vraie photo : deposer le fichier ici
// sous le meme nom que le slug du module, rien d'autre a modifier.
import parcelles from './parcelles.webp';
import stocksIntrants from './stocks-intrants.webp';
import fertilisation from './fertilisation.webp';
import phytosanitaire from './phytosanitaire.webp';
import irrigation from './irrigation.webp';
import performance from './performance.webp';
import aideDecision from './aide-decision.webp';

const moduleImages = {
  'parcelles': parcelles,
  'stocks-intrants': stocksIntrants,
  'fertilisation': fertilisation,
  'phytosanitaire': phytosanitaire,
  'irrigation': irrigation,
  'performance': performance,
  'aide-decision': aideDecision,
};

export default moduleImages;
