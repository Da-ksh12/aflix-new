import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  GalleryHorizontalEnd,
  Layers3,
  Settings2,
  Workflow,
} from "lucide-react";
import { quickLinks } from "@/data/siteData";
import { ScrollFloat } from "@/components/effects/ScrollFloat";

const quickIcons = [
  Code2,
  Layers3,
  Settings2,
  Workflow,
  Bot,
  GalleryHorizontalEnd,
];

export function ContactQuickLinks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
            Quick links
          </span>
          <ScrollFloat
            as="h2"
            className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
          >
            Not sure where to start? Jump in here.
          </ScrollFloat>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((l, i) => (
            <motion.div
              key={l.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={l.to as never}
                className="glass group relative flex h-full items-start justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:bg-white hover:shadow-[0_22px_60px_-42px_rgba(24,92,183,0.8)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo via-sky-400 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                    {(() => {
                      const Icon = quickIcons[i] || ArrowUpRight;
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </span>
                  <div className="mt-4 text-base font-bold text-slate-950 group-hover:text-indigo">
                    {l.label}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{l.desc}</div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-indigo opacity-0 transition group-hover:opacity-100">
                    Explore service
                  </div>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
