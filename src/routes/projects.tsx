import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { Leaf, Camera, ExternalLink, Award } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Certifications — Rishav Kumar" },
      {
        name: "description",
        content:
          "Aloe Vera Candy food processing project, photography work, and certifications including LinkedIn Learning Time Management.",
      },
      { property: "og:title", content: "Projects — Rishav Kumar" },
      {
        property: "og:description",
        content: "Food processing, photography projects, and certifications.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects & Certifications"
      title={
        <>
          Building, capturing & <span className="text-gradient">growing</span>
        </>
      }
      intro="Selected work from the lab, the lens, and continuous learning."
    >
      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-6">
        <article className="group glass-card rounded-2xl overflow-hidden">
          <div className="h-48 relative animated-mesh">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Leaf className="absolute bottom-4 left-4 text-primary" size={32} />
          </div>
          <div className="p-6">
            <span className="text-xs uppercase tracking-wider text-primary">Food Processing</span>
            <h3 className="mt-2 font-display text-xl font-bold">Aloe Vera Candy</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A collaborative food processing project focused on innovation and practical
              learning — exploring formulation, texture, and shelf-life.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Collaboration", "Formulation", "Innovation"].map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="group glass-card rounded-2xl overflow-hidden">
          <div className="h-48 relative bg-gradient-to-br from-primary/40 via-accent/30 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_0,transparent_40%)] opacity-20" />
            <Camera className="absolute bottom-4 left-4 text-foreground" size={32} />
          </div>
          <div className="p-6">
            <span className="text-xs uppercase tracking-wider text-primary">Creative</span>
            <h3 className="mt-2 font-display text-xl font-bold">Photography Projects</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A growing portfolio of work focused on lighting, composition, and storytelling
              through the lens.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Lighting", "Composition", "Storytelling"].map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Certifications */}
      <h2 className="mt-14 font-display text-2xl font-bold">Certifications & Learning</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <a
          href="https://www.linkedin.com/posts/rishav-kumar-83b090374_timemanagement-share-7389735562456514560-W93N"
          target="_blank"
          rel="noreferrer"
          className="glass-card rounded-2xl p-6 group hover:border-primary/40 transition-colors block"
        >
          <div className="flex items-start justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Award size={20} />
            </div>
            <ExternalLink
              size={16}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </div>
          <h3 className="mt-5 font-display text-lg font-bold">Time Management</h3>
          <p className="text-xs text-muted-foreground">LinkedIn Learning</p>
          <p className="mt-3 text-sm text-foreground/80">
            Focused on productivity, prioritization, and structured planning — reflecting a
            disciplined growth mindset.
          </p>
        </a>

        <div className="glass-card rounded-2xl p-6 flex flex-col justify-center">
          <p className="text-sm text-muted-foreground">
            More projects, lab reports and photography work coming soon as the journey unfolds.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
