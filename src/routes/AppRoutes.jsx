import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from '../components/PageLoader/PageLoader';
import Home from '../pages/Home/Home';

// Home reste charge d'emblee : c'est la page d'atterrissage, la charger en
// differe ajouterait un aller-retour visible. Les autres routes sont
// decoupees en chunks separes et ne sont telechargees qu'a la navigation.
// @emailjs (~40 ko) part ainsi dans le chunk de /contact uniquement.
const Modules = lazy(() => import('../pages/Modules/Modules'));
const ModuleDetail = lazy(() => import('../pages/Modules/ModuleDetail'));
const Demos = lazy(() => import('../pages/Demos/Demos'));
const Testimonials = lazy(() => import('../pages/Testimonials/Testimonials'));
const About = lazy(() => import('../pages/About/About'));
const OurVision = lazy(() => import('../pages/OurVision/OurVision'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Legal = lazy(() => import('../pages/Legal/Legal'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:slug" element={<ModuleDetail />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legal page="legalNotice" />} />
        <Route path="/confidentialite" element={<Legal page="privacy" />} />

        {/* Filet : toute URL inconnue affiche une vraie page 404. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
