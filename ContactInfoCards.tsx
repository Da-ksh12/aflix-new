import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { contactChannels } from "@/data/siteData";
import { SpotlightCard } from "@/components/effects/SpotlightCard";

const microCopy = [
  "Talk through scope, timelines, and budgets.",
  "Send briefs, references, or project questions.",
  "Fastest route for quick decisions and updates.",
  "Meet our core team in Uttar Pradesh.",
];

export function ContactInfoCards() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
              Choose your channel
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Reach the right desk, fast.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            Every channel lands with the same project team, so pick the path that
            feels easiest and we will keep the context moving.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactChannels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <SpotlightCard className="glass relative h-full overflow-hidden rounded-3xl border border-slate-200/70 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] transition duration-300 group-hover:-translate-y-1 group-hover:border-indigo/30 group-hover:shadow-[0_28px_80px_-50px_rgba(24,92,183,0.85)]">
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo via-sky-400 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-indigo ring-1 ring-white/60 transition group-hover:scale-105 group-hover:bg-indigo group-hover:text-white`}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                {c.label}
              </div>
              <div className="mt-1 text-base font-semibold text-slate-950">
                {c.value}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {microCopy[i]}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-indigo opacity-0 transition group-hover:opacity-100">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Open channel
              </div>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo" />
            </SpotlightCard>
          </motion.a>
        ))}
        </div>
      </div>
    </section>
  );
}
