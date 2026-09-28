import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import modulesDict from '../../pages/Modules/Modules.dict';
import useReveal from '../../hooks/useReveal';
import dict from './IntegrationHub.dict';
import styles from './IntegrationHub.module.css';

// Les 6 modules "amont" gravitent autour du 7e (aide a la decision), qui est
// le noyau. On les positionne sur un cercle : angle regulier, rayon fixe.
const RADIUS = 38;          // en % de la boite, depuis le centre
const CORE_SLUG = 'aide-decision';

function polar(index, total) {
  // -90deg pour demarrer en haut plutot qu'a droite
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
}

export default function IntegrationHub() {
  const { lang } = useLanguage();
  const t = dict[lang] ?? dict.fr;
  const m = modulesDict[lang] ?? modulesDict.fr;
  const items = m.items.length ? m.items : modulesDict.fr.items;

  const [ref, revealed] = useReveal({ threshold: 0.2 });
  const [active, setActive] = useState(null);

  const core = items.find((i) => i.slug === CORE_SLUG);
  const satellites = items.filter((i) => i.slug !== CORE_SLUG);
  const activeItem = satellites.find((i) => i.slug === active);

  return (
    <section
      className={styles.section}
      ref={ref}
      data-reveal="up"
      data-revealed={revealed}
    >
      <div className={styles.head}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.layout}>
        {/* ---------- Schema orbital ---------- */}
        <div
          className={`${styles.orbit} ${revealed ? styles.orbitOn : ''}`}
          onMouseLeave={() => setActive(null)}
        >
          {/* liaisons module -> noyau, tracees en SVG sous les pastilles */}
          <svg className={styles.wires} viewBox="0 0 100 100" aria-hidden="true">
            <circle className={styles.ring} cx="50" cy="50" r={RADIUS} />
            {satellites.map((item, i) => {
              const { x, y } = polar(i, satellites.length);
              const on = active === item.slug;
              return (
                <line
                  key={item.slug}
                  className={`${styles.wire} ${on ? styles.wireOn : ''}`}
                  x1={x}
                  y1={y}
                  x2="50"
                  y2="50"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              );
            })}
          </svg>

          {/* noyau : le systeme d'aide a la decision */}
          <Link
            to={`/modules/${CORE_SLUG}`}
            className={styles.core}
            onMouseEnter={() => setActive(null)}
          >
            <span className={styles.corePulse} aria-hidden="true" />
            <span className={styles.coreNumber} aria-hidden="true">{core.n}</span>
            <span className={styles.coreLabel}>{t.coreLabel}</span>
          </Link>

          {/* les 6 modules amont */}
          {satellites.map((item, i) => {
            const { x, y } = polar(i, satellites.length);
            return (
              <Link
                key={item.slug}
                to={`/modules/${item.slug}`}
                className={`${styles.node} ${active === item.slug ? styles.nodeOn : ''}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transitionDelay: revealed ? `${0.1 + i * 0.07}s` : '0s',
                }}
                onMouseEnter={() => setActive(item.slug)}
                onFocus={() => setActive(item.slug)}
                onBlur={() => setActive(null)}
              >
                <span className={styles.nodeNumber} aria-hidden="true">{item.n}</span>
                <span className={styles.nodeLabel}>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* ---------- Panneau : detail au survol + chaine de valeur ---------- */}
        <div className={styles.panel}>
          <div className={styles.detail} aria-live="polite">
            {activeItem ? (
              <>
                <span className={styles.detailNumber}>{activeItem.n}</span>
                <h3 className={styles.detailTitle}>{activeItem.title}</h3>
                <p className={styles.detailText}>{activeItem.text}</p>
              </>
            ) : (
              <p className={styles.detailHint}>{t.coreHint}</p>
            )}
          </div>

          <div className={styles.flow}>
            <span className={styles.flowLabel}>{t.flowLabel}</span>
            <ol className={styles.steps}>
              {t.steps.map((step, i) => (
                <li key={step.key} className={styles.step}>
                  <span className={styles.stepDot} aria-hidden="true">{i + 1}</span>
                  <span>
                    <strong className={styles.stepLabel}>{step.label}</strong>
                    <span className={styles.stepText}>{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
