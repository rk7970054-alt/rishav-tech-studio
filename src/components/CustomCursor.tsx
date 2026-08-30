import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);

      const el = e.target as HTMLElement | null;
      if (el) {
        const interactive = el.closest(
          'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-hover]'
        );
        setHovering(!!interactive);
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [hovering, visible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* face */}
        <circle cx="12" cy="12" r="10" fill="#f4d06a" stroke="#b8860b" strokeWidth="1" />
        {/* glasses */}
        <circle cx="8.2" cy="10" r="2.6" fill="rgba(20,20,20,0.85)" stroke="#1a1a1a" strokeWidth="1.2" />
        <circle cx="15.8" cy="10" r="2.6" fill="rgba(20,20,20,0.85)" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="10.8" y1="10" x2="13.2" y2="10" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="5.6" y1="9.4" x2="2.4" y2="8.2" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="18.4" y1="9.4" x2="21.6" y2="8.2" stroke="#1a1a1a" strokeWidth="1.2" />
        {/* lens shine */}
        <circle cx="7.4" cy="9.2" r="0.7" fill="rgba(255,255,255,0.7)" />
        <circle cx="15" cy="9.2" r="0.7" fill="rgba(255,255,255,0.7)" />
        {/* smile */}
        <path d="M8 14.5 Q12 18 16 14.5" stroke="#7a4f01" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
