import type { Project } from '../lib/data';

/** Real live-site screenshot framed as a browser window. */
function Mockup({ p }: { p: Project }) {
  const { fg, accent } = p.palette;
  const domain = p.url.replace(/^https?:\/\//, '');
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a]" aria-hidden="true">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        <span className="font-meta ml-3 flex h-5 flex-1 items-center truncate rounded-full bg-white/10 px-3 text-[10px] normal-case tracking-normal" style={{ color: `${fg}aa` }}>
          {domain}
        </span>
      </div>
      {/* real screenshot */}
      <img
        src={`/work/${p.id}.jpg`}
        alt=""
        loading="lazy"
        width={1200}
        height={900}
        className="h-[calc(100%-38px)] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title} — ${p.category}. Visit live site (opens in new tab)`}
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[0.985]">
        <Mockup p={p} />
      </div>
      <div className="flex flex-col gap-1.5 pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-display text-xl normal-case md:text-2xl">
          <span className="link-underline">{p.title}</span>
        </h3>
        <span className="font-meta sm:shrink-0 text-[hsl(var(--muted))]">{p.category}</span>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[hsl(var(--muted))]">{p.description}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {p.tags.map((t) => (
            <li key={t} className="font-meta border border-white/15 px-2.5 py-1 text-[hsl(var(--paper))]/80">
              {t}
            </li>
          ))}
        </ul>
        <span className="font-meta ml-auto inline-flex items-center gap-1.5 text-[hsl(var(--ember))]">
          Visit live site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}
