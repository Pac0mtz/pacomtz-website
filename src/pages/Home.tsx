import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import { CONTACT, PROJECTS, SERVICES } from '../lib/data';
import { PROJECTS_ES, SERVICES_ES } from '../lib/data-es';
import { useLang } from '../lib/i18n';
import { Marquee } from '../components/Marquee';
import { KineticLine, Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { BrandGlyph, STACK } from '../components/BrandIcon';

const HeroScene = lazy(() => import('../components/HeroScene').then((m) => ({ default: m.HeroScene })));

export default function Home() {
  const { lang, t } = useLang();
  const services = lang === 'es' ? SERVICES_ES : SERVICES;
  const projects = lang === 'es' ? PROJECTS_ES : PROJECTS;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const TICKER_WORDS = lang === 'es'
    ? ['Desarrollo Web', 'React', 'WordPress', 'Diseño UI/UX', 'SEO', 'E-Commerce', 'Rendimiento', 'Accesibilidad']
    : ['Web Development', 'React', 'WordPress', 'UI/UX Design', 'SEO', 'E-Commerce', 'Performance', 'Accessibility'];

  return (
    <>
      {/* ——— HERO ——— */}
      <section className="grid-texture relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-0 pt-24 md:px-10 md:pt-28">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        {/* diagonal slash signature */}
        <div className="pointer-events-none absolute -right-16 top-0 h-[46vh] w-16 rotate-[28deg] bg-[hsl(var(--ember))] md:w-24" aria-hidden="true" />

        <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[1440px]">
          <p className="font-meta mb-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[hsl(var(--ember))]">
            <span>{CONTACT.role}</span>
            <span className="text-[hsl(var(--paper))]/40" aria-hidden="true">·</span>
            <span>{CONTACT.city}</span>
          </p>
          <h1 className="font-display text-[clamp(3.2rem,12vw,11rem)]">
            <KineticLine>Paco</KineticLine>
            <KineticLine delay={0.12} className="text-[hsl(var(--ember))]">Mtz</KineticLine>
          </h1>
          <div className="mt-7 flex flex-col gap-6 pb-9 md:mt-8 md:flex-row md:items-end md:justify-between md:pb-10">
            <Reveal delay={0.25}>
              <p className="max-w-md text-base leading-relaxed text-[hsl(var(--paper))]/90 md:text-lg">
                {t('home.hero.copy')}
              </p>
            </Reveal>
            <Reveal delay={0.35} className="pointer-events-auto flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] items-center bg-[hsl(var(--ember))] px-7 font-meta text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--paper))]"
              >
                {t('home.hero.start')}
              </Link>
              <Link
                to="/work"
                className="inline-flex min-h-[48px] items-center border border-white/25 px-7 font-meta transition-colors hover:border-[hsl(var(--ember))] hover:text-[hsl(var(--ember))]"
              >
                {t('home.hero.work')}
              </Link>
            </Reveal>
          </div>

          {/* tech stack — branded icons */}
          <Reveal delay={0.45}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 pb-8 md:gap-x-7 md:pb-10" aria-label={t('home.hero.stack')}>
              {STACK.slice(0, 10).map((s) => (
                <li key={s.label} className="group flex items-center gap-2 text-[hsl(var(--paper))]/55 transition-colors duration-300 hover:text-[hsl(var(--ember))]" title={s.label}>
                  <BrandGlyph item={s} size={19} />
                  <span className="font-meta hidden sm:inline">{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ticker */}
        <div className="border-t border-white/10">
          <Marquee duration={30} ariaLabel={t('home.ticker')}>
            {TICKER_WORDS.map((w) => (
              <span key={w} className="flex items-center">
                <span className="font-display whitespace-nowrap px-6 py-5 text-2xl text-[hsl(var(--paper))]/85 md:text-3xl">{w}</span>
                <span className="text-[hsl(var(--ember))]" aria-hidden="true">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ——— INTRO SPLIT ——— */}
      <section className="px-5 py-20 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-5 md:gap-16">
          <Reveal className="md:col-span-2">
            <p className="font-meta mb-4 text-[hsl(var(--ember))]">{t('home.why.kicker')}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4.2rem)]">
              {t('home.why.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-3">
            <p className="max-w-[65ch] text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              {t('home.why.p1')}
            </p>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              {t('home.why.p2')}
            </p>
            <Link to="/about" className="link-underline mt-8 inline-flex min-h-[44px] items-center font-meta text-[hsl(var(--signal))]">
              {t('home.why.more')}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ——— WORK MARQUEE GALLERY ——— */}
      <section className="border-y border-white/10 py-20 md:py-28" aria-labelledby="work-heading">
        <div className="mx-auto mb-12 flex max-w-[1440px] items-end justify-between px-5 md:px-10">
          <Reveal>
            <h2 id="work-heading" className="font-display text-[clamp(2.2rem,6vw,5rem)]">{t('home.work.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/work" className="link-underline hidden min-h-[44px] items-center font-meta text-[hsl(var(--signal))] md:inline-flex">
              {t('home.work.all')}
            </Link>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-3 md:px-10">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12} className={i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard p={p} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        {/* infinite scrolling strip of the remaining projects */}
        <div className="mt-16">
          <Marquee duration={46} className="border-y border-white/10 py-8" ariaLabel={t('home.work.more')}>
            {rest.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-4 flex w-[240px] shrink-0 flex-col md:mx-6 md:w-[300px]"
                aria-label={`${p.title} — ${t('home.work.visit')}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden transition-transform duration-500 group-hover:scale-[0.97]" style={{ background: p.palette.bg }}>
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="h-2 w-14" style={{ background: p.palette.accent }} />
                    <span className="font-display text-xl uppercase leading-none md:text-2xl" style={{ color: p.palette.fg }}>{p.title}</span>
                  </div>
                </div>
                <span className="font-meta mt-3 text-[hsl(var(--muted))]">{p.category}</span>
              </a>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ——— ORANGE KINETIC SECTION ——— */}
      <section className="bg-[hsl(var(--ember))] px-5 py-24 text-[hsl(var(--ink))] md:px-10 md:py-36" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-[1440px] text-center">
          <h2 id="cta-heading" className="font-display text-[clamp(2.6rem,10vw,9rem)]">
            <KineticLine>{t('home.cta.title1')}</KineticLine>
            <KineticLine delay={0.12}>{t('home.cta.title2')}</KineticLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-lg font-normal leading-relaxed">
              {t('home.cta.text')}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex min-h-[52px] items-center bg-[hsl(var(--ink))] px-8 font-meta text-[hsl(var(--paper))] transition-transform duration-200 hover:scale-[1.03]"
              >
                {t('sd.call')} {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex min-h-[52px] items-center border-2 border-[hsl(var(--ink))] px-8 font-meta transition-colors duration-200 hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
              >
                {CONTACT.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— SERVICES INDEX ——— */}
      <section className="px-5 py-24 md:px-10 md:py-36" aria-labelledby="services-heading">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-meta mb-4 text-[hsl(var(--ember))]">{t('home.services.kicker')}</p>
            <h2 id="services-heading" className="font-display text-[clamp(2.2rem,6vw,5rem)]">{t('home.services.title')}</h2>
          </Reveal>
          <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <li>
                  <Link
                    to={`/services/${s.id}`}
                    className="group flex min-h-[72px] items-baseline gap-6 py-6 transition-colors md:gap-12 md:py-8"
                    aria-label={`${s.title} — ${t('home.services.see')}`}
                  >
                    <span className="font-meta text-[hsl(var(--muted))]">{s.index}</span>
                    <span className="font-display flex-1 text-2xl normal-case transition-colors group-hover:text-[hsl(var(--ember))] md:text-4xl">
                      {s.title}
                    </span>
                    <span className="hidden max-w-sm text-sm text-[hsl(var(--muted))] md:block">{s.blurb}</span>
                    <span className="font-meta text-[hsl(var(--ember))] transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.15}>
            <Link to="/services" className="link-underline mt-10 inline-flex min-h-[44px] items-center font-meta text-[hsl(var(--signal))]">
              {t('home.services.all').replace('{n}', String(services.length))}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
