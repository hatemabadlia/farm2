import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import modulesDict from '../../pages/Modules/Modules.dict';
import useReveal from '../../hooks/useReveal';
import styles from './ModulesPreview.module.css';
import moduleImages from '../../assets/images/modules';

// Apercu des modules sur la page d'accueil. Il lit le MEME dictionnaire que
// la page /modules : un module ajoute la-bas apparait ici automatiquement.
export default function ModulesPreview({ title }) {
  const { lang } = useLanguage();
  const t = modulesDict[lang] ?? modulesDict.fr;
  const items = t.items.length ? t.items : modulesDict.fr.items;
  const [ref, revealed] = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head} data-reveal="up" data-revealed={revealed}>
        <span className={styles.eyebrow}>Modules</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.grid} data-stagger data-revealed={revealed}>
        {items.map((item) => (
          <Link key={item.slug} to={`/modules/${item.slug}`} className={styles.card}>
            <img
              src={moduleImages[item.slug]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={styles.cardImage}
            />
            <span className={styles.cardVeil} aria-hidden="true" />

            <span className={styles.number} aria-hidden="true">{item.n}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </Link>
        ))}

        {/* derniere tuile : acces a la page complete */}
        <Link to="/modules" className={`${styles.card} ${styles.allCard}`}>
          <span className={styles.allLabel}>{t.backToModules}</span>
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
