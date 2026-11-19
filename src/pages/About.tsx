import { motion, useReducedMotion } from 'framer-motion';
import { CONTACT, EXPERIENCE, SKILLS } from '../lib/data';
import { KineticLine, Reveal } from '../components/Reveal';
import { BrandGlyph, STACK } from '../components/BrandIcon';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-base">{name}</span>
        <span className="font-meta text-[hsl(var(--ember))]">{level}%</span>
      </div>
      <div className="h-1 w-full bg-white/10" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} skill level`}>
        <motion.div
          className="h-full bg-[hsl(var(--ember))]"
          initial={{ width: reduce ? `${level}%` : 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="grid-texture px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-meta mb-6 text-[hsl(var(--ember))]">About me</p>
          <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)]">
            <KineticLine>Hi, I'm</KineticLine>
            <KineticLine delay={0.12} className="text-[hsl(var(--ember))]">Paco Martinez</KineticLine>
          </h1>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-5 md:gap-16">
          <Reveal className="md:col-span-3">
            <h2 className="font-display text-3xl normal-case md:text-4xl">
              A web developer &amp; designer from Chicago
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              With {CONTACT.years} years of experience, I build websites the way they should be built — by hand, end to end. Front-end and back-end development, WordPress sites for restaurants &amp; online ordering, e-commerce, landing pages and custom web apps, all live and performing.
            </p>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              I've spent most of these years working across different areas of design like front-end &amp; back-end development, building WordPress websites for restaurants &amp; online ordering sites, landing pages and more. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas to proceed with.
            </p>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              With me, you aren't forced to accept anything. I give you a variety of options we can work on together.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <h2 className="font-meta mb-8 text-[hsl(var(--muted))]">Skills</h2>
            <div className="space-y-7">
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* experience */}
      <section className="border-t border-white/10 px-5 py-24 md:px-10" aria-labelledby="exp-heading">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 id="exp-heading" className="font-display text-[clamp(2rem,5vw,4rem)]">Experience</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.12}>
                <article className="h-full bg-[hsl(var(--ink))] p-8 md:p-12">
                  <p className="font-meta text-[hsl(var(--ember))]">{e.period}</p>
                  <h3 className="font-display mt-3 text-2xl normal-case md:text-3xl">{e.role}</h3>
                  <p className="mt-4 max-w-[60ch] text-base leading-[1.7] text-[hsl(var(--muted))]">{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* tools & stack */}
      <section className="border-t border-white/10 px-5 py-24 md:px-10" aria-labelledby="stack-heading">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-meta mb-4 text-[hsl(var(--ember))]">My toolbox</p>
            <h2 id="stack-heading" className="font-display text-[clamp(2rem,5vw,4rem)]">Tools &amp; stack</h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {STACK.map((s, i) => (
              <Reveal key={s.label} delay={(i % 5) * 0.06}>
                <li className="group flex h-full min-h-[110px] flex-col items-center justify-center gap-3 bg-[hsl(var(--ink))] p-6 text-[hsl(var(--paper))]/60 transition-colors duration-300 hover:text-[hsl(var(--ember))]">
                  <BrandGlyph item={s} size={30} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="font-meta text-center">{s.label}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* big numbers */}
      <section className="px-5 pb-28 md:px-10" aria-label="Quick facts">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-3">
          {[
            { n: `${CONTACT.years}+`, label: 'Years of experience' },
            { n: '50+', label: 'Projects delivered live' },
            { n: '5★', label: 'Maximum client ratings' },
          ].map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1}>
              <div className="border-t-2 border-[hsl(var(--ember))] pt-6">
                <p className="font-display text-6xl md:text-7xl">{f.n}</p>
                <p className="font-meta mt-3 text-[hsl(var(--muted))]">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
