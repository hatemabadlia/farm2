import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Modules.dict';
import styles from './Modules.module.css';
import useReveal from '../../hooks/useReveal';
import moduleImages from '../../assets/images/modules';
import Seo from '../../components/Seo/Seo';

export default function Modules() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const items = t.items.length ? t.items : dict.fr.items;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <Seo title={t.title} description={t.subtitle} />
      <div className={styles.intro} data-reveal="up" data-revealed={visible}>
        <span className={styles.eyebrow}>Modules</span>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {items.map((item) => (
          <Link key={item.slug} to={`/modules/${item.slug}`} className={styles.card}>
            {/* visuel de fond : decoratif, le titre porte deja l'information */}
            <img
              src={moduleImages[item.slug]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={styles.cardImage}
            />
            <span className={styles.cardVeil} aria-hidden="true" />

            <span className={styles.cardNumber} aria-hidden="true">{item.n}</span>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.text}</p>
            <span className={styles.cardMore}>
              {t.readMore}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <path
                  d="m9 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
