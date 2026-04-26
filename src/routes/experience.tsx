import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { GraduationCap, Camera, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Rishav Kumar" },
      {
        name: "description",
        content:
          "Teaching, photography studio, and laboratory experience that shaped Rishav Kumar's journey.",
      },
      { property: "og:title", content: "Experience — Rishav Kumar" },
      {
        property: "og:description",
        content: "Teaching, photography, and laboratory work.",
      },
    ],
  }),
  component: ExperiencePage,
});

const items = [
  {
    icon: GraduationCap,
    title: "Teaching Experience",
    period: "Self-initiated",
    bullets: [
      "Taught students of classes 9th & 10th",
      "Developed mentoring and communication skills",
      "Built clarity in fundamentals through patient explanation",
    ],
  },
  {
    icon: Camera,
    title: "Photography Studio",
    period: "3 months",
    bullets: [
      "Hands-on experience in a working studio environment",
      "Improved composition, lighting and editing workflow",
      "Developed an eye for visual storytelling",
    ],
  },
  {
    icon: FlaskConical,
    title: "Laboratory Work — LPU",
    period: "Ongoing",
    bullets: [
      "Performed titration, distillation and core lab experiments",
      "Built foundational technical knowledge in food chemistry",
      "Trained in lab safety and scientific documentation",
    ],
  },
];

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title={
        <>
          Where I've <span className="text-gradient">learned & contributed</span>
        </>
      }
      intro="A mix of academic, creative, and community-facing experiences."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <it.icon size={20} />
            </div>
            <p className="mt-5 text-xs text-primary font-medium">{it.period}</p>
            <h3 className="mt-1 font-display text-lg font-bold">{it.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {it.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
