import React from 'react';
import styles from './PageLoader.module.css';

// Affiche pendant le chargement d'un chunk de route (React.lazy).
// Volontairement discret : sur une connexion correcte il n'apparait pas.
export default function PageLoader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.srOnly}>Chargement…</span>
    </div>
  );
}
