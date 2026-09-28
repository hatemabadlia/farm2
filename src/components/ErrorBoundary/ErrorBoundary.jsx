import React from 'react';
import styles from './ErrorBoundary.module.css';

// Filet de securite : si un composant plante, on affiche un ecran lisible
// au lieu d'une page blanche (React demonte tout l'arbre sinon).
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // TODO: brancher un service de suivi d'erreurs (Sentry, LogRocket...)
    if (import.meta.env.DEV) {
      console.error('Erreur non interceptee :', error, info);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className={styles.wrap} role="alert">
        <h1 className={styles.title}>Une erreur est survenue</h1>
        <p className={styles.text}>
          Désolé, cette page n'a pas pu s'afficher correctement.
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => window.location.assign('/')}
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }
}
