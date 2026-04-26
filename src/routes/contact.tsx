import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { Mail, Linkedin, Send, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rishav Kumar" },
      {
        name: "description",
        content:
          "Get in touch with Rishav Kumar — email rk7970054@gmail.com or connect on LinkedIn.",
      },
      { property: "og:title", content: "Contact Rishav Kumar" },
      { property: "og:description", content: "Let's connect — collaborations, tutoring, photography." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:rk7970054@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell
      eyebrow="Contact"
      title={
        <>
          Let's <span className="text-gradient">connect</span>
        </>
      }
      intro="Open to collaborations, learning opportunities, tutoring requests, and photography projects."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Info */}
        <div className="space-y-4">
          <a
            href="mailto:rk7970054@gmail.com"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold">rk7970054@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rishav-kumar-83b090374"
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Linkedin size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="font-semibold">rishav-kumar-83b090374</p>
            </div>
          </a>

          <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Based in</p>
              <p className="font-semibold">Gaya, Bihar · India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-xs text-muted-foreground">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/40 resize-none"
              placeholder="Tell me about your project, question, or idea…"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
          >
            <Send size={16} /> {sent ? "Opening mail…" : "Send message"}
          </button>
        </form>
      </div>

      {/* FAQ */}
      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Frequently Asked</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              q: "How quickly do you respond?",
              a: "Usually within 24–48 hours via email or LinkedIn.",
            },
            {
              q: "Do you tutor online?",
              a: "Yes — online sessions for 9th & 10th grade students are available.",
            },
            {
              q: "Are you open to collaborations?",
              a: "Absolutely — food projects, photography, and learning content.",
            },
            {
              q: "Where are you based?",
              a: "Originally Gaya, Bihar — currently studying at LPU, Punjab.",
            },
          ].map((f) => (
            <div key={f.q} className="glass-card rounded-2xl p-5">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
