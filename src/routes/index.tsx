import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Award,
  Sparkles,
  FlaskConical,
  Camera,
  BookOpen,
  Quote,
} from "lucide-react";
import portrait from "../assets/rishav-photo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishav Kumar — Food Technologist & Creative" },
      {
        name: "description",
        content:
          "Exploring the science of food to build a healthier and sustainable future. Portfolio of Rishav Kumar.",
      },
      { property: "og:title", content: "Rishav Kumar — Food Technologist & Creative" },
      {
        property: "og:description",
        content:
          "BTech Food Technology undergraduate, educator, and creative photographer.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* hero ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[140px] animate-glow" />
        <div
          className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent/25 blur-[140px] animate-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-36 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles size={14} /> Available for collaborations
            </span>

            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Rishav Kumar</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl">
              BTech Food Technology Undergraduate · Aspiring Food Technologist ·
              Educator & Creative Enthusiast
            </p>

            <p className="mt-4 text-base text-foreground/80 italic max-w-xl">
              "Exploring the science of food to build a healthier and sustainable future."
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                Explore My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:rk7970054@gmail.com"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={16} /> rk7970054@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-kumar-83b090374"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* portrait card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-primary)] opacity-30 blur-2xl animate-glow" />
            <div className="relative glass-card rounded-3xl p-3 animate-float">
              <img
                src={portrait}
                alt="Rishav Kumar"
                width={996}
                height={800}
                className="rounded-2xl w-full h-auto object-cover aspect-[5/4]"
              />
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                <Award className="text-primary" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">Achievement</p>
                  <p className="text-sm font-semibold">LPUNEST 40% Scholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* highlight strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "2029", l: "Expected Graduation" },
            { v: "40%", l: "LPUNEST Scholarship" },
            { v: "3+", l: "Domains Explored" },
            { v: "100%", l: "Curiosity" },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-gradient">{s.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            What I do
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
            Three worlds, <span className="text-gradient">one curious mind</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            I move between the lab bench, the classroom, and the camera — connecting science,
            communication, and craft.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: FlaskConical,
              title: "Food Science",
              desc: "Lab techniques, food chemistry and sustainable food systems.",
              href: "/skills",
            },
            {
              icon: BookOpen,
              title: "Education",
              desc: "Tutoring 9th & 10th grade students with patience and clarity.",
              href: "/experience",
            },
            {
              icon: Camera,
              title: "Photography",
              desc: "Composition-led visual storytelling from studio experience.",
              href: "/projects",
            },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className="group glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <c.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured quote */}
      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <Quote className="text-primary" size={36} />
          <p className="mt-5 font-display text-2xl md:text-3xl leading-snug max-w-3xl">
            "Every great discovery in food science begins with a small, careful question — and
            the patience to follow it through."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— A guiding principle</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 animated-mesh opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Let's <span className="text-gradient">create something</span> together
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Open to collaborations, tutoring, photography projects and learning
              opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-semibold text-foreground hover:text-primary"
              >
                Read my story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
