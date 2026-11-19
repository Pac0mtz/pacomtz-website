import { PROJECTS } from '../lib/data';
import { PROJECTS_ES } from '../lib/data-es';
import { useLang } from '../lib/i18n';
import { KineticLine, Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';

export default function Work() {
  const { lang, t } = useLang();
  const projects = lang === 'es' ? PROJECTS_ES : PROJECTS;

  return (
    <>
      <section className="grid-texture px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-meta mb-6 text-[hsl(var(--ember))]">{t('work.kicker')}</p>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)]">
            <KineticLine>{t('work.title')}</KineticLine>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[hsl(var(--paper))]/90">
              {t('work.intro')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* irregular editorial grid: featured spans 2/3, thumbnails compact */}
      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1} className={p.featured ? 'md:col-span-2' : ''}>
              <ProjectCard p={p} featured={p.featured} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
