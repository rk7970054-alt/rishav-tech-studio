import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { GraduationCap, MapPin, Sparkles, Award, Target, Briefcase, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rishav Kumar" },
      {
        name: "description",
        content:
          "About Rishav Kumar — Food Technology undergraduate from Gaya, Bihar, studying at Lovely Professional University.",
      },
      { property: "og:title", content: "About Rishav Kumar" },
      { property: "og:description", content: "Curious learner, detail-oriented, motivated." },
    ],
  }),
  component: AboutPage,
});

const traits = [
  { label: "Curious Learner", desc: "Always asking the next 'why'." },
  { label: "Detail-Oriented", desc: "Precision is a habit, not a task." },
  { label: "Adaptable", desc: "Comfortable across science, classroom and lens." },
  { label: "Motivated", desc: "Driven by impact and continuous growth." },
];

const timeline = [
  { year: "—", title: "10th & 12th", place: "Gaya, Bihar" },
  {
    year: "2025 – 2029",
    title: "BTech Food Technology",
    place: "Lovely Professional University",
  },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Me"
      title={
        <>
          A student passionate about <span className="text-gradient">food, science & people</span>
        </>
      }
      intro="From Gaya, Bihar, currently pursuing BTech in Food Technology at Lovely Professional University. Driven by a passion for food science, nutrition, and sustainable food systems."
    >
      {/* Bio + traits */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-7 space-y-4 text-foreground/90">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" /> Gaya, Bihar · India
          </div>
          <p>
            I'm an undergraduate exploring the intersection of <strong>food science</strong>,{" "}
            <strong>nutrition</strong>, and <strong>sustainability</strong>. My journey blends
            disciplined laboratory work with creative pursuits like photography and a love for
            teaching.
          </p>
          <p>
            Whether I'm running a titration, capturing a frame, or simplifying a chapter for a
            9th grader — I bring curiosity, patience, and care to the work.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {traits.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-white/5 bg-white/5 p-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />
                  <p className="text-sm font-semibold">{t.label}</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement card */}
        <div className="glass-card rounded-2xl p-7 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          <Award className="text-primary" size={28} />
          <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
            Recognition
          </p>
          <h3 className="mt-1 font-display text-xl font-bold">LPUNEST Qualified</h3>
          <p className="mt-3 text-sm text-foreground/80">
            Qualified the Lovely Professional University National Entrance and Scholarship Test
            and was awarded a <span className="text-primary font-semibold">40% scholarship</span>{" "}
            in recognition of academic potential and performance.
          </p>
        </div>
      </div>

      {/* Education timeline */}
      <div className="mt-10">
        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="text-primary" /> Education Timeline
        </h2>
        <div className="relative space-y-4 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent">
          {timeline.map((e) => (
            <div key={e.title} className="relative glass-card rounded-2xl p-5">
              <span className="absolute -left-[1.35rem] top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]" />
              <p className="text-xs text-primary font-medium">{e.year}</p>
              <p className="font-semibold">{e.title}</p>
              <p className="text-sm text-muted-foreground">{e.place}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future Planning */}
      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
          <Target className="text-primary" /> Future Planning
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Looking beyond the BTech — combining technical expertise with business acumen.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Briefcase size={20} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">MBA</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Pursue an MBA to strengthen my understanding of management, strategy, and
              leadership — bridging food technology with business.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Rocket size={20} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">Start My Own Business</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Launch my own venture in the food industry — focused on innovative,
              sustainable, and health-conscious products that make a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold mb-6">What I Value</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "Integrity", d: "Honest work, careful methods, transparent results." },
            { v: "Curiosity", d: "Asking better questions, not just finding answers." },
            { v: "Sustainability", d: "Mindful of impact — on people and planet." },
            { v: "Craft", d: "Pride in details, from a lab report to a photograph." },
          ].map((x) => (
            <div key={x.v} className="glass-card rounded-2xl p-5">
              <p className="font-display text-lg font-bold text-gradient">{x.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages & Interests */}
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold">Languages</h3>
          <div className="mt-4 space-y-3">
            {[
              { l: "English", v: 80 },
              { l: "Hindi", v: 95 },
            ].map((lang) => (
              <div key={lang.l}>
                <div className="flex justify-between text-sm">
                  <span>{lang.l}</span>
                  <span className="text-muted-foreground">{lang.v}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--gradient-primary)]"
                    style={{ width: `${lang.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold">Beyond Studies</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Photography",
              "Reading",
              "Sustainable Cooking",
              "Mentoring",
              "Nature Walks",
              "Self-learning",
            ].map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
