import {
  siWordpress, siReact, siJavascript, siTypescript, siHtml5, siCss,
  siPhp, siMysql, siNodedotjs, siTailwindcss, siVite, siGit,
  siWoo, siElementor, siGoogleads, siGoogleanalytics, siFigma,
} from 'simple-icons';
import { Image, PenTool } from 'lucide-react';

export interface StackItem {
  label: string;
  icon?: SimpleIconLike;
  lucide?: 'pen' | 'image';
}

type SimpleIconLike = Pick<typeof siWordpress, 'path' | 'hex' | 'title'>;

/** Tech & tools brand icons. */
export const STACK: StackItem[] = [
  { label: 'WordPress', icon: siWordpress },
  { label: 'React', icon: siReact },
  { label: 'JavaScript', icon: siJavascript },
  { label: 'TypeScript', icon: siTypescript },
  { label: 'HTML5', icon: siHtml5 },
  { label: 'CSS', icon: siCss },
  { label: 'PHP', icon: siPhp },
  { label: 'MySQL', icon: siMysql },
  { label: 'Node.js', icon: siNodedotjs },
  { label: 'Tailwind CSS', icon: siTailwindcss },
  { label: 'Vite', icon: siVite },
  { label: 'Git', icon: siGit },
  { label: 'WooCommerce', icon: siWoo },
  { label: 'Elementor', icon: siElementor },
  { label: 'Figma', icon: siFigma },
  { label: 'Google Ads', icon: siGoogleads },
  { label: 'Google Analytics', icon: siGoogleanalytics },
  { label: 'Photoshop', lucide: 'image' },
  { label: 'Illustrator', lucide: 'pen' },
];

export function BrandGlyph({ item, size = 22, className = '' }: { item: StackItem; size?: number; className?: string }) {
  if (item.icon) {
    return (
      <svg
        role="img"
        aria-label={item.icon.title}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
      >
        <path d={item.icon.path} />
      </svg>
    );
  }
  const Icon = item.lucide === 'pen' ? PenTool : Image;
  return <Icon size={size} strokeWidth={1.75} aria-label={item.label} className={className} />;
}
