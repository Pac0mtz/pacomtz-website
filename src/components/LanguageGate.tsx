import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import type { Lang } from '../lib/i18n';

/**
 * First-visit language gate: a branded modal asking English / Español.
 * Choice is persisted; afterwards the nav toggle takes over.
 */
export function LanguageGate() {
  const { chosen, setLang, t } = useLang();

  const pick = (l: Lang) => () => setLang(l);

  return (
    <AnimatePresence>
      {!chosen && (
        <motion.div
          key="lang-gate"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--ink))]/80 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lang-gate-title"
        >
          <motion.div
            className="grid-texture relative w-full max-w-lg overflow-hidden border border-white/15 bg-[hsl(var(--ink))] p-8 md:p-12"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ember slash */}
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-8 rotate-[28deg] bg-[hsl(var(--ember))]" aria-hidden="true" />

            <p className="font-meta text-[hsl(var(--ember))]">{t('gate.kicker')}</p>
            <h2 id="lang-gate-title" className="font-display mt-4 text-4xl normal-case md:text-5xl">
              {t('gate.title')}
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[hsl(var(--paper))]/85">
              {t('gate.text')}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={pick('en')}
                className="group flex min-h-[64px] items-center justify-between border border-white/20 px-5 font-meta transition-all duration-200 hover:border-[hsl(var(--ember))] hover:bg-[hsl(var(--ember))] hover:text-[hsl(var(--ink))]"
              >
                <span className="text-lg">{t('gate.en')}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                type="button"
                onClick={pick('es')}
                className="group flex min-h-[64px] items-center justify-between border border-white/20 px-5 font-meta transition-all duration-200 hover:border-[hsl(var(--ember))] hover:bg-[hsl(var(--ember))] hover:text-[hsl(var(--ink))]"
              >
                <span className="text-lg">{t('gate.es')}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            <p className="font-meta mt-6 text-[hsl(var(--muted))]">Paco Mtz · Cicero, Illinois</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
