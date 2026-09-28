import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import dict, { SOCIAL_LINKS } from './Footer.dict';
import styles from './Footer.module.css';
import logo from '../../assets/logo/logo.webp';

// petites icones SVG en ligne (pas de dependance externe)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true" className={styles.chevron}>
    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M14 9h2.5V6H14c-1.9 0-3.4 1.5-3.4 3.4V11H9v3h1.6v7h3v-7h2.3l.4-3h-2.7V9.6c0-.4.3-.6.7-.6Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M4 4l7.3 9.6L4.4 20h2l5.9-5.4 4.4 5.4H20l-7.6-9.9L19.6 4h-2l-5.4 4.9L7.9 4H4Zm2.9 1.5h1.8l9.4 13H15.3l-8.4-13Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M6.9 8.6H4.2V19h2.7V8.6ZM5.6 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM19.8 19h-2.7v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19H10.9s.1-9.4 0-10.4h2.7v1.5c.4-.6 1-1.5 2.7-1.5 1.9 0 3.5 1.3 3.5 4.1V19Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M21 8.5s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C14.6 5 12 5 12 5s-2.6 0-5.8.2c-.5.1-1.4.1-2.3 1C3.2 6.9 3 8.5 3 8.5S2.8 10.3 2.8 12v1.6c0 1.7.2 3.5.2 3.5s.2 1.6.9 2.3c.9.9 2 .9 2.5 1C8.2 20.5 12 20.6 12 20.6s2.6 0 5.8-.3c.5 0 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.7.2-3.5V12c0-1.7-.2-3.5-.2-3.5ZM9.9 15.3V9.7l5.4 2.8-5.4 2.8Z" />
  </svg>
);

const SOCIAL_ICONS = [
  { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
  { key: 'twitter', Icon: TwitterIcon, label: 'Twitter / X' },
  { key: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn' },
  { key: 'youtube', Icon: YoutubeIcon, label: 'YouTube' },
];

// on n'affiche que les reseaux dont l'URL est renseignee
const SOCIALS = SOCIAL_ICONS.filter(({ key }) => Boolean(SOCIAL_LINKS[key])).map(
  (social) => ({ ...social, href: SOCIAL_LINKS[social.key] })
);

export default function Footer() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;

  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // revele le footer une seule fois, quand il entre dans le viewport
  useEffect(() => {
    const node = footerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // affiche le bouton "retour en haut" apres un peu de scroll
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${inView ? styles.footerVisible : ''}`}
    >
      {/* arcs decoratifs, purement visuels */}
      <span className={styles.arcLarge} aria-hidden="true" />
      <span className={styles.arcSmall} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ---------- rangee du haut : logo, contact, reseaux ---------- */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <img
              src={logo}
              alt="Farm Control System"
              className={styles.logo}
            />
            <p className={styles.tagline}>{t.tagline}</p>
          </div>

          <div className={styles.contact}>
            <a href={t.phoneHref} className={styles.contactLink}>
              <span className={styles.contactIcon}><PhoneIcon /></span>
              {t.phone}
            </a>
            <a href={t.emailHref} className={styles.contactLink}>
              <span className={styles.contactIcon}><MailIcon /></span>
              {t.email}
            </a>
          </div>

          {SOCIALS.length > 0 && (
          <ul className={styles.socials} aria-label={t.socialsLabel}>
            {SOCIALS.map(({ key, href, Icon, label }) => (
              <li key={key}>
                <a
                  href={href}
                  className={styles.socialLink}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          )}
        </div>

        {/* ---------- rangee du milieu : colonnes de liens ---------- */}
        <div className={styles.columns}>
          <nav className={styles.column} aria-label={t.aboutTitle}>
            <h3 className={styles.columnTitle}>{t.aboutTitle}</h3>
            <ul>
              {t.aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className={styles.footerLink}>
                    <ChevronIcon />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label={t.solutionsTitle}>
            <h3 className={styles.columnTitle}>{t.solutionsTitle}</h3>
            <ul>
              {t.solutionsLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className={styles.footerLink}>
                    <ChevronIcon />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ---------- bas de page : copyright + liens legaux ---------- */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} {t.copyright}
          </p>
          <ul className={styles.legalLinks}>
            {t.legalLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- bouton retour en haut ---------- */}
      <button
        type="button"
        className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ''}`}
        onClick={scrollToTop}
        aria-label={t.backToTop}
      >
        <ArrowUpIcon />
      </button>
    </footer>
  );
}
