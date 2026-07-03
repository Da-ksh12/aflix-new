import { motion } from "framer-motion";
import { ArrowRight, Bot, Briefcase, Rocket, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { TiltCard } from "@/components/effects/TiltCard";
import { fadeUp } from "./fadeUp";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-indigo/10 blur-3xl [animation:float-y_8s_ease-in-out_infinite]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#7c3aed]/10 blur-3xl [animation:float-y_10s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            AI-Powered Solutions
            <br />
            That <span className="shimmer-text">Scale.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            We develop AI-powered automation software, scalable business systems, custom SaaS platforms, mobile apps, and digital infrastructures designed to help modern companies grow faster with technology.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#what-we-do"
              className="btn-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300"
            >
              <span className="relative z-10">Explore Software</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="/contact"
              strength={0.2}
              className="inline-flex items-center rounded-full border border-slate-400 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:!shadow-[0_0_3px_#185CB7,0_0_5px_#D20612]"
            >
              View Results
            </MagneticButton>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-3"
          >
            {[
              { n: "50+", l: "Projects Completed", icon: Briefcase },
              { n: "24+", l: "AI Systems Built", icon: Bot },
              { n: "24/7", l: "Support Available", icon: ShieldCheck },
            ].map((s) => (
              <SpotlightCard
                key={s.l}
                className="glass rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,70,229,0.18)]"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-indigo">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="mt-2 text-2xl font-extrabold text-slate-900">{s.n}</div>
                <div className="text-[11px] font-medium text-slate-500">{s.l}</div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>

        {/* Hero image card with tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <TiltCard max={8} className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-indigo/20 via-[#7c3aed]/10 to-transparent blur-2xl" />
            <SpotlightCard className="glass-strong relative h-full w-full overflow-hidden rounded-[36px] p-3">
              <img
                src="/images/hero-image.png"
                alt="Aflix Infotech — AI software solutions"
                className="h-full w-full rounded-[28px] object-cover"
              />
            </SpotlightCard>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-4 top-10 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-indigo" /> AI Automation
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-4 top-40 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg"
            >
              <Zap className="h-4 w-4 text-[#7c3aed]" /> Smart Workflows
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-4 left-8 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg"
            >
              <TrendingUp className="h-4 w-4 text-emerald-500" /> 3× Growth
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
