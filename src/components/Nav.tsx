import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTACT, NAV_LINKS } from '../lib/data';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-[hsl(var(--ink))]/90 backdrop-blur-md border-b border-white/10' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Paco Mtz — home">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
            <rect width="64" height="64" fill="none" />
            <path d="M8 14 L34 50 L26 50 L8 24 Z" fill="#ff8e4d" />
            <text x="30" y="46" fontFamily="Georgia, serif" fontWeight="900" fontSize="34" fill="#ededed">P</text>
          </svg>
          <span className="font-display text-lg tracking-tight">Paco Mtz</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `link-underline font-meta pb-0.5 transition-colors ${
                    isActive ? 'text-[hsl(var(--ember))]' : 'text-[hsl(var(--paper))] hover:text-[hsl(var(--ember))]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={CONTACT.phoneHref}
              className="font-meta inline-flex min-h-[44px] items-center border border-[hsl(var(--ember))] px-4 text-[hsl(var(--ember))] transition-colors hover:bg-[hsl(var(--ember))] hover:text-[hsl(var(--ink))]"
            >
              {CONTACT.phone}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 block h-0.5 w-6 bg-[hsl(var(--paper))] transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-[hsl(var(--paper))] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-[hsl(var(--paper))] transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-b border-white/10 bg-[hsl(var(--ink))] md:hidden"
          >
            <ul className="flex flex-col px-5 pb-6 pt-2">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `flex min-h-[48px] items-center font-display text-2xl ${
                        isActive ? 'text-[hsl(var(--ember))]' : 'text-[hsl(var(--paper))]'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={CONTACT.phoneHref}
                  className="flex min-h-[48px] items-center justify-center border border-[hsl(var(--ember))] font-meta text-[hsl(var(--ember))]"
                >
                  Call {CONTACT.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
