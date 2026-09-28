import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Testimonials.dict';
import styles from './Testimonials.module.css';
import Seo from '../../components/Seo/Seo';
import CtaBand from '../../components/CtaBand/CtaBand';

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const items = t.items ?? [];

  return (
    <section className={styles.page}>
      <Seo title={t.title} description={t.subtitle} />
      <header className={styles.intro}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </header>

      {items.length > 0 ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <figure key={item.name} className={styles.card}>
              <svg
                className={styles.quoteMark}
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.5 6C6.5 7.6 5 10 5 13v5h6v-6H8.2c0-2 .9-3.4 2.6-4.3L9.5 6Zm9 0C15.5 7.6 14 10 14 13v5h6v-6h-2.8c0-2 .9-3.4 2.6-4.3L18.5 6Z" />
              </svg>

              <blockquote className={styles.quote}>{item.quote}</blockquote>

              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(item.name)}
                </span>
                <span>
                  <span className={styles.authorName}>{item.name}</span>
                  <span className={styles.authorRole}>
                    {item.role}
                    {item.company ? ` · ${item.company}` : ''}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>{t.emptyText}</p>
        </div>
      )}

      <CtaBand title={t.ctaTitle} text={t.ctaText} label={t.ctaLabel} />
    </section>
  );
}
