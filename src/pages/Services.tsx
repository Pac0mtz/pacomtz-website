import { useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { SERVICES } from '../lib/data';
import { KineticLine, Reveal } from '../components/Reveal';

export default function Services() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].id);

  return (
    <>
      <section className="grid-texture px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-meta mb-6 text-[hsl(var(--ember))]">What I do</p>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)]">
            <KineticLine>Services</KineticLine>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[hsl(var(--paper))]/90">
              From understanding your requirements, designing a blueprint and delivering the final product — everything that falls in between.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10" aria-label="Service list">
        <div className="mx-auto max-w-[1440px] divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.id;
            return (
              <Reveal key={s.id} delay={i * 0.04}>
                <div>
                  <h2>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${s.id}`}
                      className="group flex min-h-[72px] w-full items-center gap-6 py-6 text-left md:gap-12 md:py-8"
                    >
                      <span className="font-meta text-[hsl(var(--muted))]">{s.index}</span>
                      <span className={`font-display flex-1 text-2xl normal-case transition-colors md:text-4xl ${isOpen ? 'text-[hsl(var(--ember))]' : 'group-hover:text-[hsl(var(--ember))]'}`}>
                        {s.title}
                      </span>
                      {/* plus indicator, 1px lines */}
                      <span className="relative flex h-[44px] w-[44px] items-center justify-center" aria-hidden="true">
                        <span className="absolute h-px w-4 bg-current" />
                        <span className={`absolute h-4 w-px bg-current transition-transform duration-300 ${isOpen ? 'rotate-90 scale-y-0' : ''}`} />
                      </span>
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`service-${s.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-10 md:grid-cols-12 md:pl-[4.5rem]">
                          <p className="max-w-[65ch] text-base leading-[1.7] text-[hsl(var(--paper))]/90 md:col-span-7">
                            {s.detail}
                          </p>
                          <ul className="space-y-2 md:col-span-5" aria-label={`${s.title} deliverables`}>
                            {s.deliverables.map((d) => (
                              <li key={d} className="font-meta flex items-center gap-3 text-[hsl(var(--paper))]/80">
                                <span className="h-1.5 w-1.5 bg-[hsl(var(--ember))]" aria-hidden="true" />
                                {d}
                              </li>
                            ))}
                            <li className="pt-2">
                              <Link
                                to={`/services/${s.id}`}
                                className="link-underline font-meta inline-flex min-h-[44px] items-center text-[hsl(var(--signal))]"
                              >
                                Full service page →
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
