import { Link } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-background/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-semibold">
            <span className="text-gradient">Rishav Kumar</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Food Technology · Educator · Photographer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:rk7970054@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-full glass-card hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rishav-kumar-83b090374"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full glass-card hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rishav Kumar ·{" "}
          <Link to="/contact" className="hover:text-foreground">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
