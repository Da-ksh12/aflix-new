import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Home,
  Mail,
  MessageCircle,
  Phone,
  SearchX,
  Sparkles,
} from "lucide-react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { contactChannels, services } from "../data/siteData";

const helpfulLinks = [
  { label: "Home", to: "/", desc: "Return to the main experience.", icon: Home },
  { label: "Productions", to: "/productions", desc: "Explore launched websites and apps.", icon: Compass },
  { label: "Contact", to: "/contact", desc: "Start a conversation with our team.", icon: MessageCircle },
];

const serviceLinks = services.slice(0, 5).map((service) => ({
  label: service.title,
  to: `/services/${service.slug}`,
  desc: service.tagline,
  icon: service.features[0]?.icon || Sparkles,
}));

function NotFoundComponent() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f6f8fb] px-4 py-8 text-slate-950 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(135deg,rgba(24,92,183,0.15),rgba(27,247,255,0.08)_42%,rgba(210,6,18,0.07))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo/30 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-start gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <section className="glass-strong relative overflow-hidden rounded-[28px] p-5 shadow-[0_35px_100px_-65px_rgba(15,23,42,0.85)] sm:rounded-[34px] sm:p-7 lg:p-9">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo via-sky-400 to-red-500" />
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo shadow-sm backdrop-blur sm:px-4 sm:text-xs">
            <SearchX className="h-3.5 w-3.5" />
            404 page
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-none tracking-tight text-slate-950 sm:mt-7 sm:text-6xl md:text-7xl lg:text-8xl">
            Lost link.
          </h1>
          <h2 className="mt-4 max-w-xl text-xl font-extrabold leading-tight text-slate-950 sm:mt-5 sm:text-2xl lg:text-3xl">
            The page you're looking for doesn't exist or has been moved.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            No dead end here. Jump back into the site, explore what we build, or
            contact Aflix Infotech and we will point you in the right direction.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-18px_rgba(24,92,183,0.8)] transition hover:-translate-y-0.5 hover:bg-[#124f9d]"
            >
              Go home
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo/30 hover:text-indigo"
            >
              Contact team
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 grid-cols-3 hidden">
            {contactChannels.slice(0, 3).map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border border-slate-200 bg-white/70 px-2 py-4 sm:p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo/30 hover:bg-white hover:shadow-[0_22px_60px_-42px_rgba(24,92,183,0.75)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                  <channel.icon className="h-4 w-4" />
                </span>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                  {channel.label}
                </span>
                <span className="mt-1 block text-sm font-extrabold text-slate-950 sm:text-base hidden sm:block">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {helpfulLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to as never}
                className="glass group relative overflow-hidden rounded-3xl border border-slate-200/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:bg-white hover:shadow-[0_24px_70px_-48px_rgba(24,92,183,0.85)] sm:p-5"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo via-sky-400 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-slate-950 group-hover:text-indigo">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <ArrowUpRight className="mt-4 h-4 w-4 text-indigo transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="glass rounded-[24px] border border-slate-200/70 p-4 shadow-[0_30px_80px_-58px_rgba(15,23,42,0.65)] sm:rounded-[30px] sm:p-5 lg:p-6 hidden sm:grid">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo sm:text-xs">
                  Popular services
                </span>
                <h2 className="mt-2 text-xl font-extrabold text-slate-950 sm:text-2xl">
                  Maybe you meant one of these.
                </h2>
              </div>
              <a
                href="mailto:info@aflix.co.in"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo transition hover:translate-x-0.5"
              >
                <Mail className="h-4 w-4" />
                info@aflix.co.in
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.to as never}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-indigo/30 hover:bg-white hover:shadow-sm"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                    <service.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold text-slate-950 group-hover:text-indigo">
                      {service.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {service.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:flex-wrap sm:items-center">
            <a className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo"
              href="tel:+917818917538" >
              <Phone className="h-4 w-4" />
              +91 78189 17538
            </a>
            <a href="https://wa.me/917818917538" target="_blank" rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-indigo/30 hover:text-indigo"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
            <span className="text-sm text-slate-500 sm:ml-auto">
              Available for new projects and support.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aflix Infotech" },
      { name: "description", content: "Trusted AI & Automation Company" },
      { name: "author", content: "AflixInfotech" },
      { property: "og:title", content: "AflixInfotech" },
      { property: "og:description", content: "Trusted AI & Automation Company" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@aflix" },
      { name: "twitter:title", content: "Aflix Info Tech" },
      { name: "twitter:description", content: "Trusted AI & Automation Company" },
      { property: "og:image", content: "logo.png" },
      { name: "twitter:image", content: "logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
