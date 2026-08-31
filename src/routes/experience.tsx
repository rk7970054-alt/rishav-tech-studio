import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { GraduationCap, Camera, FlaskConical, Trophy, Clock, ExternalLink, HeartHandshake } from "lucide-react";
import ngo1 from "../assets/ngo/ngo-1.jpg.asset.json";
import ngo2 from "../assets/ngo/ngo-2.jpg.asset.json";
import ngo3 from "../assets/ngo/ngo-3.jpg.asset.json";
import ngo4 from "../assets/ngo/ngo-4.jpg.asset.json";

const ngoPhotos = [
  { src: ngo1.url, alt: "Rishav Kumar addressing village women during a Glad Bharat Foundation community session in Bodhgaya, Bihar" },
  { src: ngo2.url, alt: "Community awareness gathering with schoolchildren and villagers in Gaya, Bihar" },
  { src: ngo3.url, alt: "Rishav Kumar teaching students in a rural classroom in Bodhgaya, Bihar" },
  { src: ngo4.url, alt: "Rishav Kumar with the Glad Bharat Foundation team addressing villagers and children gathered on a mat in Bodhgaya, Bihar" },
];


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
    icon: HeartHandshake,
    title: "Internship — Glad Bharat Foundation (NGO)",
    period: "Bihar · Rural Education",
    bullets: [
      "Worked on grassroots education & rural development drives",
      "Conducted village awareness sessions with parents and children",
      "Taught and mentored students in government schools",
    ],
  },
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
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

      {/* NGO internship spotlight */}
      <div className="mt-14 glass-card rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <HeartHandshake size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-primary">Internship · Bihar</p>
            <h2 className="mt-1 font-display text-2xl font-bold">Glad Bharat Foundation</h2>
          </div>
        </div>

        <p className="mt-5 text-sm md:text-base text-foreground leading-relaxed">
          Glad Bharat Foundation is a Bihar-based NGO working at the grassroots of rural
          education and community development. During my internship I travelled to villages
          around Bodhgaya and Gaya, running awareness sessions with parents, enrolling
          out-of-school children, and teaching in government classrooms. The foundation works
          through local volunteers, door-to-door surveys, remedial learning camps, hygiene and
          nutrition drives, and skill sessions for women. Its quiet revolution lies in changing
          mindsets — convincing families that a girl's education matters, that school attendance
          builds futures. Dropout rates fell, classrooms filled up, and entire hamlets began
          treating learning as a shared responsibility rather than a privilege.
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ngoPhotos.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-xl border border-border">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
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
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">2019</p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  Maths Olympiad — 1st Prize
                </h3>
                <p className="mt-2 text-sm text-foreground">
                  Won first prize in the Maths Olympiad in 2019 — an early recognition of
                  analytical thinking, problem-solving, and consistent effort.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Certification</p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  Time Management Skills
                </h3>
                <p className="mt-2 text-sm text-foreground">
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
