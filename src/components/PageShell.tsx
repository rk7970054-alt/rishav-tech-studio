import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen pt-32 pb-16">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px] animate-glow" />
        <div className="absolute top-40 right-0 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[120px] animate-glow" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground">{intro}</p>
          )}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
