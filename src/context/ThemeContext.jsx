import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'fcs-theme';
const ThemeContext = createContext(null);

function getInitialTheme() {
  // localStorage peut lever (mode prive, cookies bloques) : on ne casse pas
  // le rendu pour autant, on retombe sur la preference systeme.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Suit la preference systeme tant que l'utilisateur n'a pas choisi lui-meme.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        /* ignore */
      }
      setTheme(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
