import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  ariaLabel?: string;
}

/** Infinite horizontal marquee — content duplicated once for a seamless loop. */
export function Marquee({ children, duration = 36, reverse = false, className = '', ariaLabel }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`} role={ariaLabel ? 'marquee' : undefined} aria-label={ariaLabel} aria-hidden={!ariaLabel}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
