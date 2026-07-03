import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock3,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { contactChannels } from "@/data/siteData";

const chips = contactChannels.map((c) => ({
  ...c,
  icon: c.icon || Sparkles,
}));

const highlights = [
  { label: "Avg. reply", value: "< 1 day", icon: Clock3 },
  { label: "Discovery", value: "Free", icon: MessageSquareText },
  { label: "Launch help", value: "30 days", icon: BadgeCheck },
];

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(135deg,rgba(24,92,183,0.14),rgba(27,247,255,0.08)_42%,rgba(210,6,18,0.06))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#f6f8fb] to-transparent" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Start a project
          </div>
          <ScrollFloat
            as="h1"
            className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl"
          >
            Tell us about your next big move.
          </ScrollFloat>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Share the rough idea, the messy workflow, or the product you want to launch.
            We will help shape it into a clear plan for design, build, automation, and growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {chips.map((c) => (
              <MagneticButton
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass group inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo/40 hover:text-indigo hover:shadow-[0_18px_45px_-30px_rgba(24,92,183,0.75)]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                  <c.icon className="h-4 w-4" />
                </span>
                {c.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5" />
              </MagneticButton>
            ))}
          </div>
        </div>

        <div className="glass-strong relative overflow-hidden rounded-[32px] p-5 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.85)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo via-sky-400 to-red-500" />
          <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Project desk
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                  What happens after you ping us?
                </h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo text-white shadow-[0_16px_35px_-18px_rgba(24,92,183,0.9)]">
                <CalendarCheck className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-6 grid gap-3">
              {["We review your goals and current stack.", "You get a practical first-call agenda.", "We map scope, timeline, and next steps."].map((item, i) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 transition hover:border-indigo/30 hover:bg-white hover:shadow-sm"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-xs font-extrabold text-indigo shadow-sm transition group-hover:bg-indigo group-hover:text-white">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <item.icon className="h-4 w-4 text-indigo" />
                <p className="mt-3 text-lg font-extrabold text-slate-950">{item.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
