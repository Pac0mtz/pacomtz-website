import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const TITLES: Record<string, string> = {
  '/': 'Paco Mtz — Web Developer & Designer in Chicago',
  '/work': 'Web Development Work & Portfolio — Paco Mtz',
  '/services': 'Web Development, WordPress & SEO Services — Paco Mtz',
  '/about': 'About Paco Martinez — Web Developer in Chicago',
  '/contact': 'Contact — Paco Mtz | Chicago Web Developer',
};

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = TITLES[pathname];
    if (title) document.title = title; // service detail pages set their own title
    window.scrollTo(0, 0);
  }, [pathname]);
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

export default function App() {
  const location = useLocation();
  const reduce = useReducedMotion();
  useLenis();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollManager />
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
