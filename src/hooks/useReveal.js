import { useEffect, useRef, useState } from 'react';

// Revele un element quand il entre dans le viewport.
//
// Un seul IntersectionObserver par element, deconnecte des qu'il a joue :
// pas d'ecouteur de scroll, donc rien qui tourne en continu pendant la
// navigation. Si l'utilisateur a demande moins d'animations, on considere
// l'element comme revele d'emblee : il n'y a jamais de contenu invisible.
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, revealed];
}
