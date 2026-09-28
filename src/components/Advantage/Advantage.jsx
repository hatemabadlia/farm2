import React, { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import styles from './Advantage.module.css';

// Icones de ligne, une par avantage (meme ordre que t.advantages).
// Avant, la carte affichait `item.icon` — une cle qui n'a jamais existe dans
// le dictionnaire : le bloc visuel restait donc vide sur les 7 cartes.
const ICONS = [
  // 01 rentabilite
  <>
    <path d="M4 19h16" strokeLinecap="round" />
    <path d="M7 16V9M12 16V5M17 16v-4" strokeLinecap="round" />
  </>,
  // 02 carnet de terrain
  <>
    <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" strokeLinejoin="round" />
    <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
  </>,
  // 03 optimisation des ressources
  <>
    <path d="M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9Z" strokeLinejoin="round" />
    <path d="M12 14.5a2.5 2.5 0 0 1-2.2-1.4" strokeLinecap="round" />
  </>,
  // 04 anticipation des risques
  <>
    <path d="M12 3.5 4.5 7v5.2c0 4.3 3.1 7.4 7.5 8.3 4.4-.9 7.5-4 7.5-8.3V7L12 3.5Z" strokeLinejoin="round" />
    <path d="M12 9v4M12 16h.01" strokeLinecap="round" />
  </>,
  // 05 gain de temps
  <>
    <circle cx="12" cy="13" r="7.5" />
    <path d="M12 9.5V13l2.4 1.6M9.5 3h5" strokeLinecap="round" />
  </>,
  // 06 securite des donnees
  <>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" strokeLinejoin="round" />
  </>,
  // 07 hors connexion
  <>
    <path d="M5 16a4 4 0 0 1 1.2-7.8 5.5 5.5 0 0 1 10.4-1.1A3.9 3.9 0 0 1 19 15" strokeLinejoin="round" />
    <path d="M4 4l16 16" strokeLinecap="round" />
  </>,
];

function AdvantageCard({ item, index, hint }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.isFlipped : ''}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className={styles.cardInner}>
        {/* face avant : icone + titre + indice qu'on peut retourner */}
        <div className={`${styles.face} ${styles.front}`}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                 stroke="currentColor" strokeWidth="1.6">
              {ICONS[index % ICONS.length]}
            </svg>
          </span>
          <h3 className={styles.cardTitle}>{item.title}</h3>

          <span className={styles.flipHint} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 15.5-6.2M21 12a9 9 0 0 1-15.5 6.2" />
              <path d="M18 3v3.5h-3.5M6 21v-3.5h3.5" />
            </svg>
            {hint}
          </span>
        </div>

        {/* face arriere : le detail */}
        <div className={`${styles.face} ${styles.back}`}>
          <p className={styles.cardText}>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function AdvantagesSection({ t }) {
  const [ref, revealed] = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head} data-reveal="up" data-revealed={revealed}>
        <span className={styles.eyebrow}>{t.advantagesEyebrow}</span>
        <h2 className={styles.title}>{t.advantagesTitle}</h2>
        <p className={styles.subtitle}>{t.advantagesSubtitle}</p>
      </div>

      <div className={styles.grid} data-stagger data-revealed={revealed}>
        {t.advantages.map((item, i) => (
          <AdvantageCard key={item.title} item={item} index={i} hint={t.advantagesHint} />
        ))}
      </div>
    </section>
  );
}
