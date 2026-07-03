import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Globe2,
  Layers3,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/home/Footer";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { productions, type Production } from "@/data/siteData";

export const Route = createFileRoute("/productions")({
  head: () => ({
    meta: [
      { title: "Productions — Aflix Infotech" },
      {
        name: "description",
        content:
          "A showcase of websites and applications we've designed, engineered and shipped — explore live previews and download our apps.",
      },
      { property: "og:title", content: "Productions — Aflix Infotech" },
      {
        property: "og:description",
        content:
          "Live previews of websites and mobile apps built by Aflix Infotech.",
      },
    ],
  }),
  component: ProductionsPage,
});

function ProductionsPage() {
  const [tab, setTab] = useState<"all" | "website" | "app">("all");
  const filtered =
    tab === "all" ? productions : productions.filter((p) => p.type === tab);
  const featured = filtered[0] ?? productions[0];
  const websiteCount = productions.filter((p) => p.type === "website").length;
  const appCount = productions.filter((p) => p.type === "app").length;
  const tabs = [
    { id: "all", label: "All", count: productions.length },
    { id: "website", label: "Websites", count: websiteCount },
    { id: "app", label: "Applications", count: appCount },
  ] as const;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-foreground">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
          <div className="absolute left-1/2 top-0 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(24,92,183,0.16),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-[#f6f8fb] to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            
            <ScrollFloat
              as="h1"
              className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl"
            >
              Digital products built to look sharp and work hard.
            </ScrollFloat>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A growing collection of websites, apps and product systems
              designed, engineered and launched by Aflix Infotech for real
              business workflows.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {[
                [productions.length, "total builds"],
                [websiteCount, "web launches"],
                [appCount, "app products"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-slate-200 px-4 py-4 last:border-r-0"
                >
                  <div className="text-2xl font-extrabold text-slate-950">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#production-grid"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.6)]"
              >
                Explore work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm"
              >
                Back to home
              </Link>
            </div>
          </div>

          <FeaturedProduction p={featured} />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Target,
              label: "Conversion-first",
              value: "Screens planned around action",
            },
            {
              icon: Layers3,
              label: "Product systems",
              value: "Reusable UI and workflows",
            },
            {
              icon: ShieldCheck,
              label: "Launch-ready",
              value: "QA, stores, hosting and handover",
            },
            {
              icon: BarChart3,
              label: "Measured impact",
              value: "Analytics, events and iteration",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-indigo shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">{item.label}</p>
                <p className="text-xs text-slate-500">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="production-grid" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                Selected work
              </span>
              <ScrollFloat
                as="h2"
                className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
              >
                Browse the production board
              </ScrollFloat>
            </div>

            <div className="inline-flex w-full overflow-x-auto rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur sm:w-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                    tab === t.id
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="prod-tab"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-indigo"
                    />
                  )}
                  {t.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      tab === t.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {t.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductionCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              How we ship
            </span>
            <ScrollFloat
              as="h2"
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
            >
              Built like products, not pretty placeholders.
            </ScrollFloat>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Every production gets a clear operating model: goals, design
              system, engineering track, launch checklist and post-launch
              learning loop.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Position",
                desc: "Define audience, product promise, core flows and conversion goals.",
              },
              {
                step: "02",
                title: "Prototype",
                desc: "Map screens, interactions, content blocks and acceptance criteria.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Engineer responsive UI, integrations, analytics and release workflows.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "QA, optimize, publish and hand over the system your team can run.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10"
              >
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.75)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                Production ready
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Want your website or app to appear in this kind of lineup?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                Bring us the business problem. We will shape the product, design
                the experience and build the launch path.
              </p>
            </div>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3.5 text-sm font-semibold text-white lg:mt-0"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeaturedProduction({ p }: { p: Production }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-indigo/20 via-sky-400/10 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-[32px] border border-white bg-slate-950 p-3 shadow-[0_40px_90px_-35px_rgba(15,23,42,0.6)]">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
          <img
            src={p.previewImage}
            alt={p.name}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/35 to-transparent" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-indigo shadow backdrop-blur">
            {p.type === "website" ? (
              <Globe2 className="h-3.5 w-3.5" />
            ) : (
              <Smartphone className="h-3.5 w-3.5" />
            )}
            Featured {p.type === "website" ? "website" : "app"}
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-white/12 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                  Current spotlight
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">{p.name}</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                  {p.tagline}
                </p>
              </div>
              <ProductionAction p={p} compact />
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-3">
          {p.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              className="rounded-2xl bg-white/8 px-4 py-3 text-white"
            >
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Stack
              </div>
              <div className="mt-1 text-sm font-bold">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProductionCard({ p, index }: { p: Production; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_-50px_rgba(15,23,42,0.65)] transition duration-300 group-hover:-translate-y-1 group-hover:border-indigo/30 group-hover:shadow-[0_30px_90px_-55px_rgba(24,92,183,0.8)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={p.previewImage}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-indigo shadow backdrop-blur">
            {p.type === "website" ? (
              <Globe2 className="h-3.5 w-3.5" />
            ) : (
              <Smartphone className="h-3.5 w-3.5" />
            )}
            {p.type === "website" ? "Website" : "Application"}
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-2xl font-extrabold text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-white/65">{p.tagline}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <p className="text-sm leading-relaxed text-slate-600">
            {p.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
            {[
              ["UI", "Polished"],
              ["Build", "Responsive"],
              ["Launch", "Ready"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {label}
                </div>
                <div className="mt-1 text-sm font-extrabold text-slate-950">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <ProductionAction p={p} />
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function ProductionAction({
  p,
  compact = false,
}: {
  p: Production;
  compact?: boolean;
}) {
  if (p.type === "website") {
    return (
      <a
        href={p.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/btn inline-flex items-center gap-2 rounded-full font-semibold transition ${
          compact
            ? "bg-white px-4 py-2 text-sm text-slate-950 hover:bg-indigo hover:text-white"
            : "bg-slate-950 px-5 py-2.5 text-sm text-white hover:bg-indigo"
        }`}
      >
        Live Preview
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
      </a>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {p.appStoreUrl && (
        <a
          href={p.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full font-semibold transition ${
            compact
              ? "bg-white px-4 py-2 text-sm text-slate-950 hover:bg-indigo hover:text-white"
              : "bg-slate-950 px-5 py-2.5 text-sm text-white hover:bg-indigo"
          }`}
        >
          <Apple className="h-4 w-4" /> App Store
        </a>
      )}
      {p.playStoreUrl && (
        <a
          href={p.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full border font-semibold transition ${
            compact
              ? "border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white hover:text-slate-950"
              : "border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-950 hover:border-indigo hover:text-indigo"
          }`}
        >
          <Play className="h-4 w-4" /> Google Play
        </a>
      )}
    </div>
  );
}
