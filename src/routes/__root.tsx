import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-card rounded-2xl p-10">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rishav Kumar — Food Technology Student & Creative" },
      {
        name: "description",
        content:
          "Portfolio of Rishav Kumar — BTech Food Technology undergraduate, educator, and photographer exploring the science of food.",
      },
      { property: "og:title", content: "Rishav Kumar — Food Technology Student & Creative" },
      { name: "twitter:title", content: "Rishav Kumar — Food Technology Student & Creative" },
      { name: "description", content: "Food Science Explorer showcases a BTech Food Technology undergraduate's skills, projects, and experience." },
      { property: "og:description", content: "Food Science Explorer showcases a BTech Food Technology undergraduate's skills, projects, and experience." },
      { name: "twitter:description", content: "Food Science Explorer showcases a BTech Food Technology undergraduate's skills, projects, and experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/37cacc77-8c16-499e-acaf-ab8901f66c17/id-preview-e71f657f--59d61555-f1dd-4e5d-aaa5-ba4c18f8559a.lovable.app-1777214750968.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/37cacc77-8c16-499e-acaf-ab8901f66c17/id-preview-e71f657f--59d61555-f1dd-4e5d-aaa5-ba4c18f8559a.lovable.app-1777214750968.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
