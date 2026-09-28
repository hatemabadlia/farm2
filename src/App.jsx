import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />

            {/* Permet aux utilisateurs clavier / lecteur d'ecran de sauter
                la navigation et d'aller droit au contenu. */}
            <a href="#main" className="skip-link">
              Aller au contenu principal
            </a>

            {/* Navbar et Footer sont en dehors de <AppRoutes /> : ils restent
                affiches en permanence, seul le contenu de <main> change. */}
            <Navbar />
            <main id="main">
              <AppRoutes />
            </main>
            <Footer />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
