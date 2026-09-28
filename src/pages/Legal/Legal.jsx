import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import dict from './Legal.dict';
import styles from './Legal.module.css';
import Seo from '../../components/Seo/Seo';

// Une seule page pour les 2 contenus juridiques (mentions legales et
// confidentialite) : meme mise en page, contenu choisi par la prop `page`.
export default function Legal({ page }) {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const content = t[page];

  return (
    <section className={styles.page}>
      <Seo title={content.title} />
      <div className={styles.container}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.updated}>{content.updated}</p>

        {content.sections.map((section) => (
          <div key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
