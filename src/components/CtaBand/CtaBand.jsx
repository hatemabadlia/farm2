import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import styles from './CtaBand.module.css';

// Bandeau d'appel a l'action reutilise en bas des pages (accueil, module,
// demos, temoignages). Avant, chaque page redefinissait le meme bloc dans
// son propre CSS : un seul composant = un seul style a maintenir.
export default function CtaBand({ title, text, label, to = '/contact', variant = 'solid' }) {
  const [ref, revealed] = useReveal({ threshold: 0.25 });

  return (
    <section
      className={`${styles.band} ${styles[variant]}`}
      ref={ref}
      data-reveal="scale"
      data-revealed={revealed}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        {text && <p className={styles.text}>{text}</p>}
        <Link to={to} className={styles.button}>
          {label}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
