"use client";

import { useEffect, useRef } from "react";

/**
 * Rede de nós/partículas que reage ao cursor (simula conexões neurais).
 * Canvas de fundo, pointer-events-none. Pausa fora da viewport e respeita
 * prefers-reduced-motion (nesse caso renderiza um campo estático discreto).
 */
export function ParticleNetwork({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    const el = canvas;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parent = el.parentElement as HTMLElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130;

    function build() {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((w * h) / 20000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        // atração suave ao cursor
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 160 && dm > 0.001) {
          p.vx += (dxm / dm) * 0.015;
          p.vy += (dym / dm) * 0.015;
        }
        p.x += p.vx;
        p.y += p.vy;
        // amortecimento e limites
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }
      // conexões
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const o = (1 - d / LINK) * 0.5;
            ctx.strokeStyle = `rgba(140,170,255,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // linha até o cursor quando perto
        const dxm = mouse.x - a.x;
        const dym = mouse.y - a.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < LINK) {
          const o = (1 - dm / LINK) * 0.7;
          ctx.strokeStyle = `rgba(124,77,255,${o})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(180,200,255,0.85)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let raf = 0;
    let running = false;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }
    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    build();
    if (reduce) {
      // campo estático (sem loop, sem reação ao cursor)
      draw();
      return () => {};
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => build();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.01 },
    );
    io.observe(parent);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
