import { useEffect, useRef } from 'react';

/**
 * Per-service hero animations (canvas 2D, lightweight).
 * Each service id maps to a themed ambient animation rendered behind the
 * hero copy. Honors prefers-reduced-motion by drawing a single static frame.
 */

const EMBER = '#ff8e4d';
const SIGNAL = '#0099ff';

type Fx = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;

/* ——— helpers ——— */
function ring(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, alpha: number, color = EMBER, lw = 1.5) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = lw;
  ctx.stroke();
  ctx.globalAlpha = 1;
}

/* ——— 1. web-design: drifting wireframe browser windows + blinking caret ——— */
const webDesign: Fx = (ctx, w, h, t) => {
  for (let i = 0; i < 5; i++) {
    const bw = 150 + i * 30;
    const bh = bw * 0.62;
    const x = ((t * (14 + i * 6) + i * 260) % (w + bw * 2)) - bw;
    const y = h * 0.16 + i * h * 0.16 + Math.sin(t * 0.7 + i * 1.4) * 12;
    ctx.strokeStyle = i % 2 ? SIGNAL : EMBER;
    ctx.globalAlpha = 0.32;
    ctx.lineWidth = 1.4;
    ctx.strokeRect(x, y, bw, bh);
    // title bar
    ctx.beginPath();
    ctx.moveTo(x, y + 16);
    ctx.lineTo(x + bw, y + 16);
    ctx.stroke();
    for (let d = 0; d < 3; d++) {
      ctx.beginPath();
      ctx.arc(x + 10 + d * 10, y + 8, 2.2, 0, Math.PI * 2);
      ctx.stroke();
    }
    // content lines
    for (let l = 0; l < 3; l++) {
      ctx.beginPath();
      ctx.moveTo(x + 12, y + 30 + l * 12);
      ctx.lineTo(x + 12 + (bw - 30) * (1 - l * 0.22), y + 30 + l * 12);
      ctx.stroke();
    }
  }
  // blinking caret
  if (Math.floor(t * 2) % 2 === 0) {
    ctx.fillStyle = EMBER;
    ctx.globalAlpha = 0.5;
    ctx.fillRect(w * 0.72, h * 0.78, 10, 20);
  }
  ctx.globalAlpha = 1;
};

/* ——— 2. wordpress: mosaic tiles flipping in and out ——— */
const wordpress: Fx = (ctx, w, h, t) => {
  const cell = 64;
  const cols = Math.ceil(w / cell) + 1;
  const rows = Math.ceil(h / cell) + 1;
  for (let cx = 0; cx < cols; cx++) {
    for (let cy = 0; cy < rows; cy++) {
      const phase = Math.sin(t * 0.9 + cx * 0.7 + cy * 1.3);
      if (phase > 0.55) {
        const a = (phase - 0.55) / 0.45;
        const pad = 8 * (1 - a);
        ctx.strokeStyle = (cx + cy) % 3 === 0 ? EMBER : SIGNAL;
        ctx.globalAlpha = 0.3 * a;
        ctx.lineWidth = 1.4;
        ctx.strokeRect(cx * cell + pad, cy * cell + pad, cell - pad * 2, cell - pad * 2);
      }
    }
  }
  ctx.globalAlpha = 1;
};

/* ——— 3. seo: rising bar chart + climbing trend line ——— */
const seo: Fx = (ctx, w, h, t) => {
  const n = 9;
  const bw = Math.min(54, w / 14);
  const gap = bw * 0.7;
  const x0 = w - (n * (bw + gap)) - 30;
  const base = h * 0.88;
  for (let i = 0; i < n; i++) {
    const target = (i + 1) / n;
    const wave = 0.12 * Math.sin(t * 1.2 + i * 0.9);
    const bh = h * 0.5 * (target * 0.85 + 0.1 + wave);
    const x = x0 + i * (bw + gap);
    ctx.fillStyle = i === n - 1 ? EMBER : SIGNAL;
    ctx.globalAlpha = i === n - 1 ? 0.75 : 0.28;
    ctx.fillRect(x, base - bh, bw, bh);
  }
  // trend line with arrow
  ctx.globalAlpha = 0.6;
  ctx.strokeStyle = EMBER;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const x = x0 + i * (bw + gap) + bw / 2;
    const y = base - h * 0.5 * (((i + 1) / n) * 0.85 + 0.1) - 16;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  const ex = x0 + (n - 1) * (bw + gap) + bw / 2;
  const ey = base - h * 0.5 - 16;
  ctx.beginPath();
  ctx.moveTo(ex, ey);
  ctx.lineTo(ex - 12, ey + 2);
  ctx.moveTo(ex, ey);
  ctx.lineTo(ex - 4, ey + 12);
  ctx.stroke();
  ctx.globalAlpha = 1;
};

/* ——— 4. social: drifting network of connected nodes ——— */
const social: Fx = (ctx, w, h, t) => {
  const N = 14;
  const pts: [number, number][] = [];
  for (let i = 0; i < N; i++) {
    const x = w * 0.5 + Math.sin(i * 2.4 + t * (0.25 + (i % 3) * 0.08)) * w * 0.42;
    const y = h * 0.5 + Math.cos(i * 1.7 + t * (0.3 + (i % 4) * 0.06)) * h * 0.38;
    pts.push([x, y]);
  }
  ctx.lineWidth = 1;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dx = pts[i][0] - pts[j][0];
      const dy = pts[i][1] - pts[j][1];
      const d = Math.hypot(dx, dy);
      if (d < w * 0.18) {
        ctx.strokeStyle = SIGNAL;
        ctx.globalAlpha = 0.28 * (1 - d / (w * 0.18));
        ctx.beginPath();
        ctx.moveTo(pts[i][0], pts[i][1]);
        ctx.lineTo(pts[j][0], pts[j][1]);
        ctx.stroke();
      }
    }
  }
  pts.forEach(([x, y], i) => {
    const r = 3 + (i % 3) * 1.6 + Math.sin(t * 2 + i) * 1.2;
    ctx.fillStyle = i % 4 === 0 ? EMBER : SIGNAL;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
};

/* ——— 5. ppc: expanding click ripples + crosshair ——— */
const ppc: Fx = (ctx, w, h, t) => {
  const spots: [number, number][] = [
    [w * 0.7, h * 0.3],
    [w * 0.85, h * 0.6],
    [w * 0.55, h * 0.75],
    [w * 0.9, h * 0.2],
  ];
  spots.forEach(([x, y], i) => {
    const cycle = (t * 0.5 + i * 0.25) % 1;
    ring(ctx, x, y, 8 + cycle * 90, 0.55 * (1 - cycle), i % 2 ? SIGNAL : EMBER, 2);
    ring(ctx, x, y, 4, 0.9, EMBER, 2);
  });
  // drifting crosshair
  const cx = w * 0.72 + Math.sin(t * 0.6) * w * 0.12;
  const cy = h * 0.45 + Math.cos(t * 0.45) * h * 0.18;
  ctx.strokeStyle = EMBER;
  ctx.globalAlpha = 0.6;
  ctx.lineWidth = 1.6;
  ring(ctx, cx, cy, 16, 0.65);
  ctx.beginPath();
  ctx.moveTo(cx - 26, cy); ctx.lineTo(cx - 10, cy);
  ctx.moveTo(cx + 10, cy); ctx.lineTo(cx + 26, cy);
  ctx.moveTo(cx, cy - 26); ctx.lineTo(cx, cy - 10);
  ctx.moveTo(cx, cy + 10); ctx.lineTo(cx, cy + 26);
  ctx.stroke();
  ctx.globalAlpha = 1;
};

/* ——— 6. branding: rotating concentric dashed arcs (mark sketching) ——— */
const branding: Fx = (ctx, w, h, t) => {
  const cx = w * 0.78;
  const cy = h * 0.42;
  for (let i = 0; i < 5; i++) {
    const r = 40 + i * 34;
    ctx.strokeStyle = i % 2 ? SIGNAL : EMBER;
    ctx.globalAlpha = 0.38 - i * 0.04;
    ctx.lineWidth = i === 0 ? 3 : 1.6;
    ctx.setLineDash([30 + i * 12, 18 + i * 8]);
    ctx.lineDashOffset = (i % 2 ? -1 : 1) * t * (22 + i * 9);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  // center monogram diamond
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(t * 0.4);
  ctx.strokeStyle = EMBER;
  ctx.globalAlpha = 0.6;
  ctx.lineWidth = 2.4;
  ctx.strokeRect(-14, -14, 28, 28);
  ctx.restore();
  ctx.globalAlpha = 1;
};

/* ——— 7. photo: rotating aperture blades opening and closing ——— */
const photo: Fx = (ctx, w, h, t) => {
  const cx = w * 0.76;
  const cy = h * 0.42;
  const R = Math.min(w, h) * 0.3;
  const blades = 7;
  const open = 0.5 + 0.42 * Math.sin(t * 0.8); // 0.08 → 0.92
  ring(ctx, cx, cy, R, 0.45, SIGNAL, 2);
  ctx.strokeStyle = EMBER;
  ctx.lineWidth = 1.8;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI * 2 + t * 0.25;
    const px = cx + Math.cos(a) * R;
    const py = cy + Math.sin(a) * R;
    const ta = a + Math.PI * (0.35 + open * 0.55);
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(cx + Math.cos(ta) * R * open, cy + Math.sin(ta) * R * open);
    ctx.stroke();
  }
  // flash glints
  for (let i = 0; i < 6; i++) {
    const ga = i * 1.1 + t * 0.5;
    const gx = cx + Math.cos(ga) * R * 1.25;
    const gy = cy + Math.sin(ga) * R * 1.25;
    const tw = (Math.sin(t * 3 + i * 2) + 1) / 2;
    ctx.fillStyle = EMBER;
    ctx.globalAlpha = 0.6 * tw;
    ctx.fillRect(gx - 1.5, gy - 1.5, 3, 3);
  }
  ctx.globalAlpha = 1;
};

/* ——— 8. maintenance: meshing gears ——— */
function gear(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, teeth: number, rot: number, color: string, alpha: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = a0 + (Math.PI * 2) / teeth * 0.45;
    const a2 = a0 + (Math.PI * 2) / teeth * 0.55;
    const a3 = a0 + (Math.PI * 2) / teeth;
    const ro = r * 1.18;
    ctx.lineTo(Math.cos(a0) * r, Math.sin(a0) * r);
    ctx.lineTo(Math.cos(a0) * ro, Math.sin(a0) * ro);
    ctx.lineTo(Math.cos(a1) * ro, Math.sin(a1) * ro);
    ctx.lineTo(Math.cos(a2) * r, Math.sin(a2) * r);
    ctx.lineTo(Math.cos(a3) * r, Math.sin(a3) * r);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.32, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  ctx.globalAlpha = 1;
}
const maintenance: Fx = (ctx, w, h, t) => {
  const cx = w * 0.76;
  const cy = h * 0.45;
  gear(ctx, cx, cy, 70, 10, t * 0.5, EMBER, 0.5);
  gear(ctx, cx + 108, cy - 66, 46, 8, -t * 0.5 * (70 / 46) + 0.35, SIGNAL, 0.45);
  gear(ctx, cx - 96, cy + 78, 36, 7, -t * 0.5 * (70 / 36) + 0.2, SIGNAL, 0.35);
};

const FX_BY_SERVICE: Record<string, Fx> = {
  'web-design': webDesign,
  wordpress,
  seo,
  social,
  ppc,
  branding,
  photo,
  maintenance,
};

export function ServiceHeroFX({ id }: { id: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const fx = FX_BY_SERVICE[id];

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !fx) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const size = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);

    const draw = (ms: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      fx(ctx, w, h, ms / 1000);
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [fx]);

  if (!fx) return null;
  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
