import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { Sparkles, AlertTriangle, Lightbulb, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/swot")({
  head: () => ({
    meta: [
      { title: "SWOT Analysis — Rishav Kumar" },
      {
        name: "description",
        content:
          "A personal SWOT analysis of Rishav Kumar — strengths, weaknesses, opportunities, and threats.",
      },
      { property: "og:title", content: "SWOT Analysis — Rishav Kumar" },
      {
        property: "og:description",
        content: "Self-reflection through a structured SWOT analysis.",
      },
    ],
  }),
  component: SwotPage,
});

const swot = {
  strengths: [
    {
      title: "Hardworking and Dedicated",
      desc: "I consistently put in sincere effort toward my academic and personal goals, ensuring that I complete tasks with commitment and responsibility.",
    },
    {
      title: "High Patience Level",
      desc: "I am able to stay calm and focused while learning complex concepts or solving problems, which helps me improve steadily over time.",
    },
    {
      title: "Positive Mindset",
      desc: "I maintain an optimistic approach toward challenges, viewing them as opportunities to learn and grow rather than obstacles.",
    },
    {
      title: "Strong Adaptability",
      desc: "I can quickly adjust to new environments, situations, and learning methods, which helps me perform effectively in both academic and practical settings.",
    },
  ],
  weaknesses: [
    {
      title: "Limited Vocabulary (Actively Improving)",
      desc: "I sometimes face difficulty expressing ideas with advanced vocabulary, but I am actively working on improving this through reading, speaking practice, and continuous learning.",
    },
    {
      title: "Lack of Practical Exposure",
      desc: "As a student, my real-world experience is still developing; however, I am actively gaining hands-on exposure through laboratory work, projects, and practical learning opportunities.",
    },
  ],
  opportunities: [
    {
      title: "Access to Vast Online Learning Resources",
      desc: "With the availability of online platforms, I can continuously upgrade my knowledge and skills from anywhere at any time.",
    },
    {
      title: "Learning from Peers and Surroundings",
      desc: "Interacting with classmates, mentors, and professionals allows me to gain practical insights and improve my understanding.",
    },
    {
      title: "Growing Job Opportunities in Food and Technology Sectors",
      desc: "The increasing demand in food processing, safety, and innovation provides strong career prospects in my field.",
    },
    {
      title: "Advancement in AI and Technology",
      desc: "Emerging technologies create new ways to improve food systems, offering opportunities to learn and innovate.",
    },
    {
      title: "Government Support in Education and Innovation",
      desc: "Policies and initiatives supporting education and startups create a favorable environment for growth and development.",
    },
  ],
  threats: [
    {
      title: "Limited Networking",
      desc: "Not connecting with seniors, professors, or professionals can reduce exposure to opportunities.",
    },
    {
      title: "Rapid Technological Changes",
      desc: "Fast-paced advancements require constant learning and upskilling to remain relevant and competitive in the industry.",
    },
  ],
};

const quadrants = [
  {
    key: "strengths",
    label: "Strengths",
    icon: Sparkles,
    items: swot.strengths,
    accent: "from-emerald-600/15 to-emerald-600/5",
    border: "border-emerald-600/25",
    chip: "bg-emerald-600/15 text-emerald-800 border-emerald-600/30",
    bullet: "border-emerald-600/40 bg-emerald-600/20",
  },
  {
    key: "weaknesses",
    label: "Weaknesses",
    icon: AlertTriangle,
    items: swot.weaknesses,
    accent: "from-amber-600/15 to-amber-600/5",
    border: "border-amber-600/25",
    chip: "bg-amber-600/15 text-amber-800 border-amber-600/30",
    bullet: "border-amber-600/40 bg-amber-600/20",
  },
  {
    key: "opportunities",
    label: "Opportunities",
    icon: Lightbulb,
    items: swot.opportunities,
    accent: "from-sky-600/15 to-sky-600/5",
    border: "border-sky-600/25",
    chip: "bg-sky-600/15 text-sky-800 border-sky-600/30",
    bullet: "border-sky-600/40 bg-sky-600/20",
  },
  {
    key: "threats",
    label: "Threats",
    icon: ShieldAlert,
    items: swot.threats,
    accent: "from-rose-600/15 to-rose-600/5",
    border: "border-rose-600/25",
    chip: "bg-rose-600/15 text-rose-800 border-rose-600/30",
    bullet: "border-rose-600/40 bg-rose-600/20",
  },
];

function SwotPage() {
  return (
    <PageShell
      eyebrow="SWOT Analysis"
      title={
        <>
          A look at my <span className="text-gradient">SWOT</span>
        </>
      }
      intro="An honest self-assessment — strengths, weaknesses, opportunities, and threats — to guide my growth."
    >
      {/* 4-card SWOT grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {quadrants.map((q) => (
          <div
            key={q.key}
            className={`glass-card relative overflow-hidden rounded-2xl border ${q.border} bg-gradient-to-br ${q.accent} p-6 md:p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1`}
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl border ${q.chip}`}
              >
                <q.icon size={18} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {q.label}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {q.items.length} {q.items.length === 1 ? "point" : "points"}
                </p>
              </div>
            </div>

            <ul className="relative mt-5 space-y-4">
              {q.items.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full border ${q.bullet}`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Closing note */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Updated regularly as I grow, learn, and take on new challenges.
      </p>
    </PageShell>
  );
}
