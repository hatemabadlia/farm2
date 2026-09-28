import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sans ca, on garde la position de scroll de la page precedente :
// on arrive au milieu de /contact quand on clique un lien du footer.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
}
