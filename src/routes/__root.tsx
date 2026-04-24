import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { title: "Eonix Studio" },
      {
        name: "description",
        content:
          "Eonix Studio — Emmanuel, machine learning engineer building predictive systems for customer churn and fraud detection.",
      },
      { name: "author", content: "Emmanuel · Eonix Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Eonix Studio" },
      { name: "twitter:title", content: "Eonix Studio" },
      { name: "description", content: "Eonix Studio is a modern, premium 2-page portfolio website for ML engineer Emmanuel." },
      { property: "og:description", content: "Eonix Studio is a modern, premium 2-page portfolio website for ML engineer Emmanuel." },
      { name: "twitter:description", content: "Eonix Studio is a modern, premium 2-page portfolio website for ML engineer Emmanuel." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2f9b58bc-ff95-4b73-8bbf-17b659745c97/id-preview-93721bae--dde1a670-7bb2-434d-815f-3d431a8f7347.lovable.app-1776783764152.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2f9b58bc-ff95-4b73-8bbf-17b659745c97/id-preview-93721bae--dde1a670-7bb2-434d-815f-3d431a8f7347.lovable.app-1776783764152.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
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
  return <Outlet />;
}
