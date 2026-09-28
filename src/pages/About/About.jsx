import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import dict from './About.dict';
import styles from './About.module.css';
import Seo from '../../components/Seo/Seo';
import useReveal from '../../hooks/useReveal';
import CtaBand from '../../components/CtaBand/CtaBand';
import missionImage from '../../assets/vision/vision-mission.webp';

// Page "A propos de Farm Control System"
// Contenu repris du document HAMZA2.docx, section "A propos de FCS".
export default function AboutFcs() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  const [ref, revealed] = useReveal();

  return (
    <div className={styles.about}>
      <Seo title={t.title} description={t.intro} />

      {/* ---------- En-tete ---------- */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.intro}>{t.intro}</p>
      </header>

      {/* ---------- Texte + visuel ---------- */}
      <section className={styles.row} ref={ref} data-reveal="up" data-revealed={revealed}>
        <div className={styles.rowText}>
          <h2 className={styles.rowTitle}>{t.pillarsTitle}</h2>
          <ul className={styles.pillars}>
            {t.pillars.map((pillar) => (
              <li key={pillar.title} className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rowMedia}>
          <img src={missionImage} alt={t.imageAlt} className={styles.image} loading="lazy" />
        </div>
      </section>

      <CtaBand title={t.ctaTitle} text={t.ctaText} label={t.ctaLabel} to="/modules" />
    </div>
  );
}
