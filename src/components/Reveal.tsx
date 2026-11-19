import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/** Scroll-triggered reveal — content is never hidden if JS/motion fails. */
export function Reveal({ children, delay = 0, className, y = 36 }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Line-masked kinetic headline (inner text slides up out of an overflow mask).
 *  In-view is observed on the mask — the translated inner text itself is
 *  outside the viewport until animated, so it can't be the trigger. */
export function KineticLine({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const maskRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(maskRef, { once: true, margin: '-5% 0px' });

  if (reduce) return <span className={className}>{children}</span>;
  return (
    <span ref={maskRef} className="kinetic-line">
      <motion.span
        className={className}
        style={{ display: 'block' }}
        initial={false}
        animate={inView ? { y: 0 } : { y: '110%' }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
