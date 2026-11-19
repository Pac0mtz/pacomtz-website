import { Link } from 'react-router';
import { CONTACT, NAV_LINKS } from '../lib/data';
import { Marquee } from './Marquee';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      {/* CTA ribbon */}
      <Marquee duration={28} ariaLabel="Let's work together">
        {[0, 1, 2].map((i) => (
          <Link
            key={i}
            to="/contact"
            className="group flex items-center gap-6 px-8 py-8 md:py-10"
          >
            <span className="font-display whitespace-nowrap text-3xl text-[hsl(var(--ember))] transition-transform duration-300 group-hover:-skew-x-6 md:text-5xl">
              Let's work together
            </span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[hsl(var(--ember))] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ))}
      </Marquee>

      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-white/10 px-5 py-12 md:grid-cols-3 md:px-10 md:py-16">
        <div>
          <p className="font-display text-2xl">Paco Mtz</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[hsl(var(--muted))]">
            {CONTACT.role} based in {CONTACT.city}. {CONTACT.years}+ years crafting websites, brands and campaigns that grow businesses.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-meta mb-4 text-[hsl(var(--muted))]">Sitemap</p>
          <ul className="grid grid-cols-2 gap-x-6">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline inline-flex min-h-[36px] items-center text-sm text-[hsl(var(--paper))]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-meta mb-4 text-[hsl(var(--muted))]">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="link-underline inline-flex min-h-[36px] items-center text-[hsl(var(--signal))] hover:text-[hsl(var(--paper))]">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="link-underline inline-flex min-h-[36px] items-center text-[hsl(var(--signal))] hover:text-[hsl(var(--paper))]">
                {CONTACT.phone}
              </a>
            </li>
            <li className="text-[hsl(var(--muted))]">{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 font-meta text-[hsl(var(--muted))] md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Paco Martinez · pacomtz.com</span>
          <span>Design beyond imagination</span>
        </div>
      </div>
    </footer>
  );
}
