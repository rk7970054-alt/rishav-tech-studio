import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  hue: "white" | "blue";
  parallax: number;
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ tx: 0, ty: 0, x: 0, y: 0, mx: -9999, my: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    const area = width * height;
    const count = Math.min(120, Math.max(60, Math.floor(area / 16000)));

    const mkParticle = (): Particle => {
      const r = Math.random() * 4 + 4; // 4-8px (medium)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.1 + 0.15, // 15-25%
        hue: Math.random() > 0.55 ? "blue" : "white",
        parallax: Math.random() * 0.9 + 0.1,
      };
    };

    const particles: Particle[] = Array.from({ length: count }, mkParticle);

    const handleResize = () => setSize();
    const handlePointer = (e: PointerEvent) => {
      pointerRef.current.tx = (e.clientX / width - 0.5) * 2;
      pointerRef.current.ty = (e.clientY / height - 0.5) * 2;
      pointerRef.current.mx = e.clientX;
      pointerRef.current.my = e.clientY;
    };
    const handleLeave = () => {
      pointerRef.current.mx = -9999;
      pointerRef.current.my = -9999;
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerleave", handleLeave);

    // Interaction tuning
    const INTERACT_RADIUS = 120; // small area around cursor
    const INTERACT_RADIUS_SQ = INTERACT_RADIUS * INTERACT_RADIUS;
    const FORCE_STRENGTH = 0.18; // gentle
    const MAX_SPEED = 1.4;
    const FRICTION = 0.96; // ease back to slow drift
    const REST_SPEED = 0.22;

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      pointerRef.current.x += (pointerRef.current.tx - pointerRef.current.x) * 0.04;
      pointerRef.current.y += (pointerRef.current.ty - pointerRef.current.y) * 0.04;
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;
      const mx = pointerRef.current.mx;
      const my = pointerRef.current.my;

      for (const p of particles) {
        // cursor interaction (gentle repel)
        if (mx > -9000) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < INTERACT_RADIUS_SQ && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / INTERACT_RADIUS; // 0..1
            const force = falloff * falloff * FORCE_STRENGTH; // smooth easing
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // clamp speed
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > MAX_SPEED) {
          p.vx = (p.vx / sp) * MAX_SPEED;
          p.vy = (p.vy / sp) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;

        // ease back toward calm drift speed
        if (sp > REST_SPEED) {
          p.vx *= FRICTION;
          p.vy *= FRICTION;
        }

        // wrap edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // parallax
        const ox = -px * 14 * p.parallax;
        const oy = -py * 14 * p.parallax;
        const cx = p.x + ox;
        const cy = p.y + oy;

        const baseColor = p.hue === "blue" ? "173, 216, 255" : "255, 255, 255";

        const glowR = p.r * 2.6;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        grad.addColorStop(0, `rgba(${baseColor}, ${p.alpha})`);
        grad.addColorStop(0.4, `rgba(${baseColor}, ${p.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${baseColor}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, p.r * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${Math.min(1, p.alpha + 0.05)})`;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
