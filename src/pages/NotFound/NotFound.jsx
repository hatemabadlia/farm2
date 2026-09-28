import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict from './NotFound.dict';
import styles from './NotFound.module.css';
import Seo from '../../components/Seo/Seo';

export default function NotFound() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  return (
    <section className={styles.page}>
      <Seo title={t.title} description={t.text} />
      <span className={styles.code} aria-hidden="true">404</span>
      <h1 className={styles.title}>{t.title}</h1>
      <p className={styles.text}>{t.text}</p>
      <div className={styles.actions}>
        <Link to="/" className={styles.primary}>{t.home}</Link>
        <Link to="/contact" className={styles.secondary}>{t.contact}</Link>
      </div>
    </section>
  );
}
