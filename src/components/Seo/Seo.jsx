import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SITE_NAME = 'Farm Control System';

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [key, val] = selector.replace(/[[\]']/g, '').split('=');
    el.setAttribute(key.replace('meta', '').trim(), val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Met a jour <title> et les meta par page. Sans ca, les 7 routes du SPA
// partagent le meme titre : mauvais pour le referencement et pour les onglets.
export default function Seo({ title, description }) {
  const { lang } = useLanguage();

  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("meta[property='og:title']", 'content', fullTitle);
    setMeta("meta[name='twitter:title']", 'content', fullTitle);

    if (description) {
      setMeta("meta[name='description']", 'content', description);
      setMeta("meta[property='og:description']", 'content', description);
      setMeta("meta[name='twitter:description']", 'content', description);
    }

    setMeta("meta[property='og:url']", 'content', window.location.href);

    let canonical = document.head.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    const localeMap = { fr: 'fr_FR', en: 'en_US', ar: 'ar_DZ' };
    setMeta("meta[property='og:locale']", 'content', localeMap[lang] ?? 'fr_FR');
  }, [title, description, lang]);

  return null;
}
