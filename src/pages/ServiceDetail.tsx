import { Link, Navigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { CONTACT, SERVICES } from '../lib/data';
import { KineticLine, Reveal } from '../components/Reveal';
import { Marquee } from '../components/Marquee';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find((s) => s.id === serviceId);

  useEffect(() => {
    if (service) document.title = `${service.title} in Chicago — Paco Mtz`;
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const idx = SERVICES.indexOf(service);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      {/* hero */}
      <section className="grid-texture px-5 pb-14 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/services" className="link-underline font-meta inline-flex min-h-[44px] items-center text-[hsl(var(--signal))]">
            ← All services
          </Link>
          <p className="font-meta mb-6 mt-8 text-[hsl(var(--ember))]">Service {service.index} / {String(SERVICES.length).padStart(2, '0')}</p>
          <h1 className="font-display max-w-5xl text-[clamp(2.4rem,7vw,6rem)] normal-case">
            <KineticLine>{service.title}</KineticLine>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[hsl(var(--paper))]/90 md:text-2xl">
              {service.headline}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex min-h-[48px] items-center bg-[hsl(var(--ember))] px-7 font-meta text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--paper))]">
                Start a project
              </Link>
              <a href={CONTACT.phoneHref} className="inline-flex min-h-[48px] items-center border border-white/25 px-7 font-meta transition-colors hover:border-[hsl(var(--ember))] hover:text-[hsl(var(--ember))]">
                Call {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* body + deliverables */}
      <section className="border-t border-white/10 px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {service.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-6 max-w-[65ch] text-lg leading-[1.75] text-[hsl(var(--paper))]/90">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="md:col-span-5">
            <div className="border border-white/15 p-8">
              <h2 className="font-meta mb-6 text-[hsl(var(--muted))]">What you get</h2>
              <ul className="space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-base">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[hsl(var(--ember))]" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <h2 className="font-meta mb-6 mt-10 text-[hsl(var(--muted))]">Outcomes</h2>
              <ul className="space-y-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-base text-[hsl(var(--ember))]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[hsl(var(--paper))]">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="border-t border-white/10 px-5 py-20 md:px-10" aria-labelledby="process-heading">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 id="process-heading" className="font-display text-[clamp(2rem,5vw,4rem)]">How it works</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="h-full bg-[hsl(var(--ink))] p-7">
                  <p className="font-display text-4xl text-[hsl(var(--ember))]">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-display mt-4 text-xl normal-case">{p.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted))]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* prev/next navigation */}
      <nav aria-label="More services" className="border-t border-white/10">
        <Marquee duration={40} className="border-b border-white/10 py-6" ariaLabel={`More services: ${prev.title}, ${next.title}`}>
          {[prev, next, service].map((s, i) => (
            <Link key={i} to={`/services/${s.id}`} className="group flex items-center gap-5 px-8">
              <span className="font-meta text-[hsl(var(--muted))]">{s.index}</span>
              <span className="font-display whitespace-nowrap text-2xl normal-case text-[hsl(var(--paper))]/85 transition-colors group-hover:text-[hsl(var(--ember))] md:text-3xl">
                {s.title}
              </span>
              <span className="text-[hsl(var(--ember))]" aria-hidden="true">✦</span>
            </Link>
          ))}
        </Marquee>
        <div className="mx-auto flex max-w-[1440px] items-stretch justify-between px-5 md:px-10">
          <Link to={`/services/${prev.id}`} className="group flex min-h-[72px] flex-1 flex-col justify-center border-r border-white/10 pr-4 py-4">
            <span className="font-meta text-[hsl(var(--muted))]">← Previous</span>
            <span className="font-display text-lg normal-case transition-colors group-hover:text-[hsl(var(--ember))] md:text-2xl">{prev.title}</span>
          </Link>
          <Link to={`/services/${next.id}`} className="group flex min-h-[72px] flex-1 flex-col items-end justify-center py-4 pl-4 text-right">
            <span className="font-meta text-[hsl(var(--muted))]">Next →</span>
            <span className="font-display text-lg normal-case transition-colors group-hover:text-[hsl(var(--ember))] md:text-2xl">{next.title}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
