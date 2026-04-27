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
      title: "High Competition in the Field",
      desc: "The increasing number of students and professionals in this domain makes it essential to continuously improve skills and stand out.",
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
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-400/30",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  },
  {
    key: "weaknesses",
    label: "Weaknesses",
    icon: AlertTriangle,
    items: swot.weaknesses,
    accent: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-400/30",
    chip: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  },
  {
    key: "opportunities",
    label: "Opportunities",
    icon: Lightbulb,
    items: swot.opportunities,
    accent: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-400/30",
    chip: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  },
  {
    key: "threats",
    label: "Threats",
    icon: ShieldAlert,
    items: swot.threats,
    accent: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-400/30",
    chip: "bg-rose-500/15 text-rose-300 border-rose-400/30",
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
      {/* Tabular SWOT */}
      <div className="glass-card overflow-hidden rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="w-40 px-4 py-3 text-left font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Category
                </th>
                <th className="px-4 py-3 text-left font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Point
                </th>
                <th className="px-4 py-3 text-left font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {quadrants.flatMap((q) =>
                q.items.map((item, idx) => (
                  <tr
                    key={`${q.key}-${idx}`}
                    className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/[0.03]"
                  >
                    {idx === 0 && (
                      <td
                        rowSpan={q.items.length}
                        className={`px-4 py-4 align-top border-r border-white/10 bg-gradient-to-b ${q.accent}`}
                      >
                        <div className="flex flex-col gap-2">
                          <div
                            className={`inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs font-semibold ${q.chip}`}
                          >
                            <q.icon size={14} />
                            {q.label}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {q.items.length} {q.items.length === 1 ? "point" : "points"}
                          </span>
                        </div>
                      </td>
                    )}
                    <td className="px-4 py-4 align-top font-medium text-foreground whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="px-4 py-4 align-top text-muted-foreground">
                      {item.desc}
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>

    </PageShell>
  );
}
