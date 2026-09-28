import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import dict from './OurVision.dict';
import styles from './OurVision.module.css';
import Seo from '../../components/Seo/Seo';
import useReveal from '../../hooks/useReveal';
import CtaBand from '../../components/CtaBand/CtaBand';
import missionImage from '../../assets/vision/vision-mission.webp';
import featuresImage from '../../assets/vision/vision-features.webp';

// Page "Notre vision"
// Contenu repris du document HAMZA2.docx, sections "Notre vision" et
// "De nouvelles fonctionnalites a venir".
export default function OurVision() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  const [ref, revealed] = useReveal();
  const [ref2, revealed2] = useReveal();

  return (
    <div className={styles.vision}>
      <Seo title={t.title} description={t.intro1} />

      {/* ---------- En-tete ---------- */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.lead}>{t.intro1}</p>
      </header>

      {/* ---------- Rangee 1 : texte + image ---------- */}
      <section className={styles.row} ref={ref} data-reveal="left" data-revealed={revealed}>
        <div className={styles.rowText}>
          <h2 className={styles.rowTitle}>{t.valuesTitle}</h2>
          <p className={styles.paragraph}>{t.intro2}</p>
          <ul className={styles.valuesGrid}>
            {t.values.map((value) => (
              <li key={value} className={styles.valueCard}>{value}</li>
            ))}
          </ul>
        </div>
        <div className={styles.rowMedia}>
          <img src={missionImage} alt={t.missionImageAlt} className={styles.image} loading="lazy" />
        </div>
      </section>

      {/* ---------- Rangee 2 : image + texte (inversee) ---------- */}
      <section className={`${styles.row} ${styles.rowReverse}`} ref={ref2} data-reveal="right" data-revealed={revealed2}>
        <div className={styles.rowText}>
          <h2 className={styles.rowTitle}>{t.upcomingTitle}</h2>
          <ul className={styles.upcomingList}>
            {t.upcoming.map((feature) => (
              <li key={feature} className={styles.upcomingItem}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rowMedia}>
          <img src={featuresImage} alt={t.featuresImageAlt} className={styles.image} loading="lazy" />
        </div>
      </section>

      <CtaBand title={t.ctaTitle} text={t.ctaText} label={t.ctaLabel} />
    </div>
  );
}
