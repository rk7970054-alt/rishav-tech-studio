import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  hue: "white" | "blue";
  parallax: number; // parallax depth factor 0..1
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ tx: 0, ty: 0, x: 0, y: 0 });

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

    // Higher density, small subtle bubbles
    const area = width * height;
    const count = Math.min(180, Math.max(90, Math.floor(area / 11000)));

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6, // 0.6-2.2px (small like before)
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.07 + 0.08, // 8-15%
      hue: Math.random() > 0.55 ? "blue" : "white",
      parallax: Math.random() * 0.9 + 0.1, // depth
    }));

    const handleResize = () => setSize();
    const handlePointer = (e: PointerEvent) => {
      // normalize -0.5..0.5
      pointerRef.current.tx = (e.clientX / width - 0.5) * 2;
      pointerRef.current.ty = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointer);

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // ease pointer for smooth parallax
      pointerRef.current.x += (pointerRef.current.tx - pointerRef.current.x) * 0.04;
      pointerRef.current.y += (pointerRef.current.ty - pointerRef.current.y) * 0.04;
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // parallax offset (max ~18px)
        const ox = -px * 18 * p.parallax;
        const oy = -py * 18 * p.parallax;
        const cx = p.x + ox;
        const cy = p.y + oy;

        const baseColor =
          p.hue === "blue" ? "173, 216, 255" : "255, 255, 255";

        // soft glow via radial gradient (no canvas filter for perf)
        const glowR = p.r * 3.2;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        grad.addColorStop(0, `rgba(${baseColor}, ${p.alpha})`);
        grad.addColorStop(0.4, `rgba(${baseColor}, ${p.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${baseColor}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
        ctx.fill();

        // bright core bubble
        ctx.beginPath();
        ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${Math.min(1, p.alpha + 0.05)})`;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
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
