/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HorizontalScrollSection } from "@/components/effects/HorizontalScrollSection";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { TiltCard } from "@/components/effects/TiltCard";
import { fadeUp } from "./fadeUp";
import { services } from "@/data/siteData";

export function Services() {
  return (
    <section id="what-we-do" className="bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
            What We Build
          </span>
          <ScrollFloat className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Powerful products designed to Grow your business
          </ScrollFloat>
          <p className="mt-3 text-sm text-slate-500 lg:block hidden">
            Scroll to explore — pinned horizontal showcase
          </p>
        </motion.div>
      </div>

      <div className="mt-10 hidden lg:block">
        <HorizontalScrollSection>
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}` as never}
              className="block w-[420px] shrink-0"
            >
              <TiltCard variant="glossy" max={8} className="h-full rounded-3xl">
                <SpotlightCard className="glass-strong group relative h-[360px] overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.35)]">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo/15 blur-3xl" />
                  <div className="grid h-20 w-20 place-items-center rounded-2xl text-white shadow-lg">
                    <img src={s.icon} alt={s.title} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                  <div className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-indigo transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Link>
          ))}
        </HorizontalScrollSection>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:hidden">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              to={`/services/${s.slug}` as never}
              className="glass block rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl text-white">
                <img src={s.icon} alt={s.title} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.tagline}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
