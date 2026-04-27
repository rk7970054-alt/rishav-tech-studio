import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { GraduationCap, Camera, FlaskConical, Trophy, Clock, ExternalLink } from "lucide-react";

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

      {/* Stats band */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { v: "20+", l: "Students mentored" },
          { v: "3 mo", l: "Studio experience" },
          { v: "10+", l: "Lab experiments" },
          { v: "1", l: "Scholarship awarded" },
        ].map((s) => (
          <div key={s.l} className="glass-card rounded-2xl p-5 text-center">
            <p className="font-display text-3xl font-bold text-gradient">{s.v}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="text-primary" /> Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">2019</p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  Maths Olympiad — 1st Prize
                </h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Won first prize in the Maths Olympiad in 2019 — an early recognition of
                  analytical thinking, problem-solving, and consistent effort.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Certification</p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  Time Management Skills
                </h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Completed a Time Management course focused on prioritization,
                  productivity, and balancing academics with creative pursuits.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  View certificate <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold">What teaching taught me</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Patience, structure, and the power of explaining things simply. Teaching forced me
            to truly understand — not just memorize.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold">What the studio taught me</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Light shapes everything. Composition is intentional. Good work needs both
            technical care and creative bravery.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
