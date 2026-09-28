import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import useReveal from '../../hooks/useReveal';
import dict from './Audience.dict';
import styles from './Audience.module.css';

// Icones de ligne dessinees a la main : pas de dependance, et elles suivent
// la couleur du theme via `currentColor`.
const ICONS = {
  agriculteurs: (
    <>
      <path d="M4 20h16" strokeLinecap="round" />
      <path d="M12 20V9" strokeLinecap="round" />
      <path d="M12 12c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6Z" />
      <path d="M12 16c0-2.8-2.2-5-5-5 0 2.8 2.2 5 5 5Z" />
    </>
  ),
  cooperatives: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M3.5 19c0-2.8 2-4.6 4.5-4.6s4.5 1.8 4.5 4.6" strokeLinecap="round" />
      <path d="M13 19c0-2.8 1.6-4.6 3.8-4.6 2.3 0 3.7 1.8 3.7 4.6" strokeLinecap="round" />
    </>
  ),
  eta: (
    <>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M4 17V8h6l2 4h4l1.5 5.5" strokeLinejoin="round" />
      <path d="M10 8V5h4v3" strokeLinejoin="round" />
    </>
  ),
  'agro-industriels': (
    <>
      <path d="M4 20V11l5 3V11l5 3V7l6 3v10H4Z" strokeLinejoin="round" />
      <path d="M8 20v-3.5M13 20v-3.5M17.5 20v-3.5" strokeLinecap="round" />
    </>
  ),
  conseillers: (
    <>
      <path d="M4 5h11a2 2 0 0 1 2 2v9H6a2 2 0 0 0-2 2V5Z" strokeLinejoin="round" />
      <path d="M4 18a2 2 0 0 0 2 2h14v-4" strokeLinejoin="round" />
      <path d="M8 9h6M8 12h4" strokeLinecap="round" />
    </>
  ),
};

export default function Audience() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const [ref, revealed] = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head} data-reveal="up" data-revealed={revealed}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <ul className={styles.grid} data-stagger data-revealed={revealed}>
        {t.items.map((item) => (
          <li key={item.key} className={styles.card}>
            <span className={styles.iconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                   stroke="currentColor" strokeWidth="1.6">
                {ICONS[item.key]}
              </svg>
            </span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
