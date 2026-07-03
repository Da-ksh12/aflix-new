import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BarChart3, CheckCircle2, ChevronDown, Clock3, Layers3,
  ShieldCheck, Sparkles, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/home/Footer";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { services, type ServiceItem } from "@/data/siteData";

export function ServiceDetailPage({ service }: { service: ServiceItem }) {
  const [activeProcess, setActiveProcess] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const others = services.filter((s) => s.slug !== service.slug);
  const activeStep = service.process[activeProcess];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-foreground">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(24,92,183,0.14),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#f6f8fb] to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-indigo shadow-sm backdrop-blur"
            >
              <img src={service.icon} alt={service.tagline} className="h-3.5 w-3.5" /> {service.tagline}
            </motion.span>
            <ScrollFloat
              as="h1"
              className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              {service.title}
            </ScrollFloat>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {[
                ["30d", "first release"],
                ["4x", "core phases"],
                ["100%", "handover"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-slate-200 px-4 py-4 last:border-r-0">
                  <div className="text-2xl font-extrabold text-slate-950">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.6)]"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="/products"
                strength={0.2}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm"
              >
                View our work
              </MagneticButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-indigo/20 via-sky-400/10 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white bg-slate-950 p-3 shadow-[0_40px_90px_-35px_rgba(15,23,42,0.6)]">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-full w-full rounded-[24px] object-cover opacity-90"
              />
              <div className="absolute inset-3 rounded-[24px] bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-white/12 p-5 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      Delivery board
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">{service.title}</h2>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-indigo">
                    <img src={service.icon} alt={service.title} className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {service.process.slice(0, 2).map((p) => (
                    <div key={p.step} className="rounded-2xl bg-white/10 p-3">
                      <div className="text-xs font-bold text-white/55">{p.step}</div>
                      <div className="mt-1 text-sm font-bold">{p.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg">
              <Sparkles className="h-3.5 w-3.5 text-indigo" /> {service.tagline}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, label: "Outcome-led planning", value: "Clarity before code" },
            { icon: Clock3, label: "Weekly operating rhythm", value: "No black-box builds" },
            { icon: ShieldCheck, label: "Launch-ready systems", value: "QA, docs, handover" },
            { icon: BarChart3, label: "Measured improvement", value: "Track adoption and ROI" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                Capability stack
              </span>
              <ScrollFloat
                as="h2"
                className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
              >
                What you get
              </ScrollFloat>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Each engagement combines strategy, design, engineering and launch operations into one accountable build track.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group"
              >
                <SpotlightCard className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_-32px_rgba(15,23,42,0.35)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_-38px_rgba(15,23,42,0.45)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-indigo via-sky-400 to-red-500 opacity-0 transition group-hover:opacity-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              Delivery system
            </span>
            <ScrollFloat as="h2" className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Our process
            </ScrollFloat>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              A senior-led workflow with clear gates, business checkpoints and a launch plan that does not leave your team guessing.
            </p>
            <div className="mt-8 grid gap-3">
              {service.process.map((p, i) => (
                <button
                  key={p.step}
                  type="button"
                  onClick={() => setActiveProcess(i)}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    activeProcess === i
                      ? "border-white/30 bg-white text-slate-950 shadow-2xl"
                      : "border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${
                    activeProcess === i ? "bg-indigo text-white" : "bg-white/10 text-white"
                  }`}>
                    {p.step}
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold">{p.title}</span>
                    <span className={`mt-1 block text-xs ${activeProcess === i ? "text-slate-500" : "text-white/55"}`}>
                      {p.desc}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white p-6 text-slate-950 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(24,92,183,0.18),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-indigo">
                <Layers3 className="h-3.5 w-3.5" /> Phase {activeStep.step}
              </div>
              <h3 className="mt-8 text-4xl font-extrabold">{activeStep.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                {activeStep.desc}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((d) => (
                  <div key={d} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo" />
                    <span className="text-sm font-semibold text-slate-700">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
              Scope clarity
            </span>
            <ScrollFloat as="h2" className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Deliverables
            </ScrollFloat>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Everything is packaged for practical business use: launch assets, team handover, documentation and the operational pieces needed after go-live.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm transition hover:border-indigo/30 hover:shadow-[0_20px_50px_-35px_rgba(24,92,183,0.55)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo" />
                <span className="font-semibold">{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
              Decision support
            </span>
            <ScrollFloat as="h2" className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Common questions
            </ScrollFloat>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Straight answers for budget owners, operators and founders evaluating the next build.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-indigo/30"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-base font-extrabold text-slate-950">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-indigo transition ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                  <span className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_35px_90px_-50px_rgba(15,23,42,0.8)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Ready when you are
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Turn {service.title.toLowerCase()} into a working business asset.
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
              <MagneticButton
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="/products"
                strength={0.2}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white"
              >
                View our work
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
                Explore more
              </span>
              <ScrollFloat
                as="h2"
                className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
              >
                Other services
              </ScrollFloat>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo">
              Full services overview <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}` as never}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo/30 hover:bg-white hover:shadow-[0_24px_60px_-40px_rgba(24,92,183,0.65)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white">
                  <img src={s.icon} alt={s.title} className="h-full w-full" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.tagline}</p>
                <ArrowRight className="mt-4 h-4 w-4 text-indigo transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
