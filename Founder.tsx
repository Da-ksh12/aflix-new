import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Parallax } from "@/components/effects/Parallax";
import { TiltCard } from "@/components/effects/TiltCard";
import { fadeUp } from "./fadeUp";

export function Founder() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Parallax offset={30}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-indigo/20 via-[#7c3aed]/15 to-transparent blur-2xl" />
            <TiltCard max={6} className="glass-strong relative h-full w-full overflow-hidden rounded-[32px] p-3">
              <img
                src="/images/founder.webp"
                alt="Founder, Aflix Infotech"
                className="h-full w-full rounded-[24px] object-cover"
              />
            </TiltCard>
            <div className="glass absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg [animation:pulse-glow_2.6s_ease-in-out_infinite]">
              <Sparkles className="h-3.5 w-3.5 text-indigo" /> Founder &amp; CEO
            </div>
          </motion.div>
        </Parallax>

        <motion.div {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
            Meet the Founder
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Building intelligent systems that{" "}
            <span className="text-gradient-indigo">grow businesses</span>.
          </h2>
          <p className="mt-5 text-slate-600">
            Aflix Infotech was founded with one belief — businesses don't just
            need software, they need complete systems that automate, scale and
            convert. From AI automation to custom SaaS, our team partners with
            founders to turn ideas into measurable growth.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "10+ years of combined engineering experience",
              "Trusted by 50+ growing brands across India",
              "Specialised in AI, automation and SaaS systems",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
