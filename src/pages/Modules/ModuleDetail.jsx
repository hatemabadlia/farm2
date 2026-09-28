import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Modules.dict';
import styles from './ModuleDetail.module.css';
import Seo from '../../components/Seo/Seo';
import CtaBand from '../../components/CtaBand/CtaBand';

export default function ModuleDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const items = t.items.length ? t.items : dict.fr.items;

  const index = items.findIndex((item) => item.slug === slug);

  // slug inconnu -> on renvoie vers la liste plutot que d'afficher une page vide
  if (index === -1) return <Navigate to="/modules" replace />;

  const module = items[index];
  const previous = index > 0 ? items[index - 1] : null;
  const next = index < items.length - 1 ? items[index + 1] : null;

  return (
    <article className={styles.page}>
      <Seo title={module.title} description={module.text} />
      <div className={styles.container}>
        <Link to="/modules" className={styles.back}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <path
              d="m15 6-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t.backToModules}
        </Link>

        <header className={styles.header}>
          <span className={styles.number} aria-hidden="true">{module.n}</span>
          <h1 className={styles.title}>{module.title}</h1>
          <p className={styles.text}>{module.intro}</p>
        </header>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>{t.featuresTitle}</h2>
          <ul className={styles.featureList}>
            {module.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>{t.benefitsTitle}</h2>
          <ul className={styles.benefitList}>
            {module.benefits.map((benefit) => (
              <li key={benefit} className={styles.benefitItem}>{benefit}</li>
            ))}
          </ul>
        </section>

        <CtaBand title={t.ctaTitle} text={t.ctaText} label={t.ctaLabel} />

        <nav className={styles.pager} aria-label={t.backToModules}>
          {previous ? (
            <Link to={`/modules/${previous.slug}`} className={styles.pagerLink}>
              <span className={styles.pagerLabel}>{t.previous}</span>
              <span className={styles.pagerTitle}>{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/modules/${next.slug}`}
              className={`${styles.pagerLink} ${styles.pagerNext}`}
            >
              <span className={styles.pagerLabel}>{t.next}</span>
              <span className={styles.pagerTitle}>{next.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
