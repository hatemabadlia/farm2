import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import dict from './Navbar.dict';
import styles from './Navbar.module.css';
import logo from '../../assets/logo/logo.webp';

// Bloc theme + langue + CTA. Il apparait a deux endroits (barre desktop et
// menu mobile), d'ou l'extraction : un seul endroit a corriger.
function NavActions({ t, lang, setLang, theme, toggleTheme, onNavigate }) {
  return (
    <>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
      </button>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={styles.langSelect}
        aria-label={t.languageLabel}
      >
        {LANGUAGES.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()}
          </option>
        ))}
      </select>

      <Link to="/contact" className={styles.cta} onClick={onNavigate}>
        {t.cta}
      </Link>
    </>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = dict[lang] ?? dict.fr;

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();

  const aboutActive =
    location.pathname.startsWith('/a-propos') ||
    location.pathname.startsWith('/our-vision');

  // classe utilitaire pour les NavLink : ajoute .navLinkActive sur la page courante
  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  const closeMenus = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  // ferme le dropdown "A propos" si on clique en dehors, ou avec Echap
  useEffect(() => {
    function handleClickOutside(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setAboutOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // referme tout a chaque changement de route (bouton retour du navigateur inclus)
  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  // empeche le scroll de la page derriere le menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const actionProps = { t, lang, setLang, theme, toggleTheme, onNavigate: closeMenus };

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.left} onClick={closeMenus} aria-label={t.homeAria}>
        <img src={logo} alt="Farm Control System" className={styles.logo} />
      </Link>

      {/* bouton hamburger, visible seulement en mobile (voir CSS) */}
      <button
        type="button"
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        aria-label={menuOpen ? t.closeMenu : t.openMenu}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
        aria-label={t.navAria}
      >
        {/* `end` empeche "/" de rester actif sur toutes les autres routes */}
        <NavLink to="/" end onClick={closeMenus} className={navLinkClass}>
          {t.home}
        </NavLink>
        <NavLink to="/modules" onClick={closeMenus} className={navLinkClass}>
          {t.modules}
        </NavLink>
        <NavLink to="/demos" onClick={closeMenus} className={navLinkClass}>
          {t.demos}
        </NavLink>
        <NavLink to="/temoignages" onClick={closeMenus} className={navLinkClass}>
          {t.testimonials}
        </NavLink>

        {/* "A propos" : dropdown vers les 2 pages institutionnelles. Le trigger
            reste marque actif tant qu'on est sur l'une d'elles. */}
        <div className={styles.dropdown} ref={aboutRef}>
          <button
            type="button"
            className={`${styles.dropdownTrigger} ${
              aboutActive ? styles.dropdownTriggerActive : ''
            }`}
            aria-haspopup="true"
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen((open) => !open)}
          >
            {t.about}
            <span
              className={`${styles.caret} ${aboutOpen ? styles.caretOpen : ''}`}
              aria-hidden="true"
            />
          </button>

          <div
            className={`${styles.dropdownMenu} ${
              aboutOpen ? styles.dropdownMenuOpen : ''
            }`}
          >
            <NavLink to="/a-propos" onClick={closeMenus} className={navLinkClass}>
              {t.aboutFcs}
            </NavLink>
            <NavLink to="/our-vision" onClick={closeMenus} className={navLinkClass}>
              {t.ourVision}
            </NavLink>
          </div>
        </div>

        <NavLink to="/contact" onClick={closeMenus} className={navLinkClass}>
          {t.contact}
        </NavLink>

        {/* meme bloc d'actions, affiche seulement en mobile (voir CSS) */}
        <div className={styles.mobileActions}>
          <NavActions {...actionProps} />
        </div>
      </nav>

      <div className={styles.right}>
        <NavActions {...actionProps} />
      </div>
    </header>
  );
}
