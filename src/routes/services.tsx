import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { BookOpen, Camera, FlaskConical, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rishav Kumar" },
      {
        name: "description",
        content:
          "Academic tutoring for class 9th & 10th, photography services, and basic laboratory assistance.",
      },
      { property: "og:title", content: "Services — Rishav Kumar" },
      {
        property: "og:description",
        content: "Tutoring, photography, and lab assistance.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BookOpen,
    title: "Academic Tutoring",
    desc: "Personalized tutoring for classes 9th & 10th — building concept clarity and improving academic performance.",
    points: ["Concept-first teaching", "Doubt sessions", "Practice & revision plans"],
  },
  {
    icon: Camera,
    title: "Photography Services",
    desc: "Creative, high-quality images with strong composition and storytelling — portraits, products, and events.",
    points: ["Composition focus", "Natural & studio light", "Edited deliverables"],
  },
  {
    icon: FlaskConical,
    title: "Laboratory Assistance",
    desc: "Support with foundational lab experiments such as titration and distillation.",
    points: ["Procedure walkthroughs", "Calculations & reports", "Safe lab practices"],
  },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title={
        <>
          What I can <span className="text-gradient">help you with</span>
        </>
      }
      intro="Across science, education, and creative work — built around clarity and care."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <s.icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 text-foreground/80">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl font-bold">Have something in mind?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Let's chat about your project or learning goals.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
        >
          Let's Connect <ArrowRight size={16} />
        </Link>
      </div>
    </PageShell>
  );
}
