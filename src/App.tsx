import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { LanguageGate } from './components/LanguageGate';
import { LanguageProvider, useLang } from './lib/i18n';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const TITLES: Record<string, { en: string; es: string }> = {
  '/': {
    en: 'Paco Mtz — Web Developer & Designer in Cicero, IL & Chicago',
    es: 'Paco Mtz — Desarrollador Web y Diseñador en Cicero, IL y Chicago',
  },
  '/work': {
    en: 'Web Development Work & Portfolio — Cicero & Chicago, IL — Paco Mtz',
    es: 'Portafolio de Desarrollo Web — Cicero y Chicago, IL — Paco Mtz',
  },
  '/services': {
    en: 'Web Development, WordPress & SEO Services in Cicero & Chicago, IL — Paco Mtz',
    es: 'Servicios de Desarrollo Web, WordPress y SEO en Cicero y Chicago, IL — Paco Mtz',
  },
  '/about': {
    en: 'About Paco Martinez — Web Developer in Cicero, Illinois',
    es: 'Sobre Paco Martinez — Desarrollador Web en Cicero, Illinois',
  },
  '/contact': {
    en: 'Contact — Paco Mtz | Web Developer in Cicero & Chicago, IL',
    es: 'Contacto — Paco Mtz | Desarrollador Web en Cicero y Chicago, IL',
  },
};

function ScrollManager() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  useEffect(() => {
    const title = TITLES[pathname];
    if (title) document.title = title[lang]; // service detail pages set their own title
    window.scrollTo(0, 0);
  }, [pathname, lang]);
  return null;
}

function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

function Shell() {
  const location = useLocation();
  const reduce = useReducedMotion();
  useLenis();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollManager />
      <LanguageGate />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  );
}
