import React, { createContext, useContext, useState, useEffect } from 'react';

// Les langues disponibles sur le site.
// "fr" est la langue par defaut (contenu deja valide par le directeur).
export const LANGUAGES = ['fr', 'en', 'ar'];
export const RTL_LANGUAGES = ['ar'];

const STORAGE_KEY = 'fcs-lang';
const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  // Sinon on suit la langue du navigateur si on la gere.
  const browser = navigator.language?.slice(0, 2);
  return LANGUAGES.includes(browser) ? browser : 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Chaque composant appelle ce hook pour savoir quelle langue afficher.
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
