import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Demos.dict';
import styles from './Demos.module.css';
import Seo from '../../components/Seo/Seo';
import useReveal from '../../hooks/useReveal';
import CtaBand from '../../components/CtaBand/CtaBand';

export default function Demos() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  const [ref, revealed] = useReveal();

  return (
    <section className={styles.page} ref={ref}>
      <Seo title={t.title} description={t.subtitle} />
      <header className={styles.intro}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
        <Link to="/contact" className={styles.heroCta}>{t.ctaLabel}</Link>
      </header>

      <div className={styles.grid} data-stagger data-revealed={revealed}>
        {t.steps.map((step, i) => (
          <article key={step.title} className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepText}>{step.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.details} data-reveal="up" data-revealed={revealed}>
        <h2 className={styles.detailsTitle}>{t.coversTitle}</h2>
        <ul className={styles.coversList}>
          {t.covers.map((item) => (
            <li key={item} className={styles.coversItem}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="m5 13 4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <CtaBand title={t.ctaTitle} text={t.ctaText} label={t.ctaLabel} />
    </section>
  );
}
