import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Linkedin, Award, Sparkles } from "lucide-react";
import portrait from "../assets/rishav-portrait.jpg";

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
                alt="Rishav Kumar portrait"
                width={896}
                height={1024}
                className="rounded-2xl w-full h-auto object-cover"
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
    </div>
  );
}
