import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flashKey, setFlashKey] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          // re-trigger the flash every time the section enters view
          setFlashKey((k) => k + 1);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`reveal-section relative transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* bright flash overlay — peaks then fades over ~1s on each entry */}
      <div
        key={flashKey}
        className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,oklch(0.97_0.02_85),oklch(0.93_0.02_85)_60%,transparent_100%)] animate-[section-flash_1s_ease-out_forwards] mix-blend-screen"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
