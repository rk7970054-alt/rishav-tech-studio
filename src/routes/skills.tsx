import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { FlaskConical, Camera, Users, Code, Eye, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Expertise — Rishav Kumar" },
      {
        name: "description",
        content:
          "Technical, creative, and soft skills — from titration and food chemistry to photography, teaching, and communication.",
      },
      { property: "og:title", content: "Skills & Expertise — Rishav Kumar" },
      {
        property: "og:description",
        content: "Lab techniques, food science, photography, teaching, and more.",
      },
    ],
  }),
  component: SkillsPage,
});

type Skill = { name: string; level: number; icon: LucideIcon };
type Group = { title: string; tag: string; items: Skill[] };

const groups: Group[] = [
  {
    title: "Technical Skills",
    tag: "Hands-on",
    items: [
      { name: "Laboratory Techniques (Titration, Distillation)", level: 80, icon: FlaskConical },
      { name: "Food Science & Chemistry", level: 70, icon: FlaskConical },
      { name: "Coding (Beginner)", level: 35, icon: Code },
    ],
  },
  {
    title: "Creative Skills",
    tag: "Visual",
    items: [
      { name: "Photography", level: 85, icon: Camera },
      { name: "Composition & Visual Storytelling", level: 80, icon: Eye },
    ],
  },
  {
    title: "Soft Skills",
    tag: "People",
    items: [
      { name: "Communication & Teaching", level: 90, icon: MessageSquare },
      { name: "Adaptability", level: 85, icon: Users },
      { name: "Attention to Detail", level: 88, icon: Eye },
    ],
  },
];

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills & Expertise"
      title={
        <>
          A blend of <span className="text-gradient">science, art & people</span>
        </>
      }
      intro="A growing toolkit across the laboratory, the lens, and the classroom."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">{g.title}</h3>
              <span className="text-[10px] uppercase tracking-wider rounded-full bg-primary/15 text-primary px-2 py-0.5">
                {g.tag}
              </span>
            </div>
            <div className="mt-5 space-y-5">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <s.icon size={14} className="text-primary" />
                    <p className="text-sm">{s.name}</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--gradient-primary)] shadow-[0_0_12px_var(--color-primary)]"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools / Toolkit */}
      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">My Toolkit</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Instruments, tools and topics I work with regularly.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Burette",
            "Pipette",
            "Distillation Setup",
            "pH Meter",
            "DSLR Camera",
            "Lightroom",
            "Photoshop",
            "MS Office",
            "Notion",
            "LinkedIn Learning",
            "Food Chemistry",
            "Nutrition Basics",
          ].map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-primary/20 bg-primary/5 text-foreground/90 px-3 py-1.5 hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Currently learning */}
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Currently Learning",
            items: ["Advanced Food Chemistry", "Nutrition Science", "Lab Documentation"],
          },
          {
            title: "Exploring Next",
            items: ["Sustainable Packaging", "Food Microbiology", "Sensory Evaluation"],
          },
          {
            title: "Long-term Goals",
            items: ["R&D in Food Industry", "Published Research", "Mentoring Programs"],
          },
        ].map((c) => (
          <div key={c.title} className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold text-gradient">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {c.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
