import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Home.dict';
import styles from './Home.module.css';
import Seo from '../../components/Seo/Seo';
import ModulesPreview from '../../components/ModulesPreview/ModulesPreview';
import IntegrationHub from '../../components/IntegrationHub/IntegrationHub';
import Audience from '../../components/Audience/Audience';
import Advantages from '../../components/Advantage/Advantage';
import CtaBand from '../../components/CtaBand/CtaBand';

// Image fixe plutot que video : la video institutionnelle porte du texte
// francais incruste (et un filigrane) dans quasiment chaque image, qui entrait
// en concurrence avec le <h1>. Aucun plan propre ne durait plus de ~2 s, donc
// pas de boucle possible. Une image nette + un leger travelling CSS donne le
// meme effet, et economise 1,8 Mo au chargement.
const HERO_IMAGE = '/images/hero.jpg';

export default function Home() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  // Travelling desactive si l'utilisateur a demande moins d'animations.
  const skipMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} />

      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div
          className={`${styles.heroImage} ${skipMotion ? '' : styles.heroImagePan}`}
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.badge}>{t.badge}</span>
          <h1 className={styles.heroHeading}>{t.heroHeading}</h1>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.primary}>
              {t.ctaPrimary}
            </Link>
            <Link to="/modules" className={styles.secondary}>
              {t.ctaSecondary}
            </Link>
          </div>

          {/* points cles : rassurent avant meme de scroller */}
          <ul className={styles.highlights}>
            {t.highlights.map((item) => (
              <li key={item} className={styles.highlight}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                  <path
                    d="m5 13 4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <span className={styles.scrollHint} aria-hidden="true" />
      </section>

      {/* ---------- Pourquoi FCS ---------- */}
      <section className={styles.whySection}>
        <span className={styles.whyEyebrow}>{t.whyEyebrow}</span>
        <h2 className={styles.whyTitle}>{t.whyTitle}</h2>
        <p className={styles.whyText}>{t.whyParagraph}</p>
      </section>

      {/* ---------- Modules ---------- */}
      <ModulesPreview title={t.modulesTitle} />

      {/* ---------- Schema : les modules alimentent l'aide a la decision ---------- */}
      <IntegrationHub />

      {/* ---------- A qui ca s'adresse ---------- */}
      <Audience />

      {/* ---------- Avantages (cartes retournables) ---------- */}
      <Advantages t={t} />

      {/* ---------- Appel a l'action final ---------- */}
      <CtaBand title={t.finalCtaTitle} text={t.finalCtaText} label={t.ctaPrimary} />
    </>
  );
}
