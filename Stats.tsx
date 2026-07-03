import { motion } from "framer-motion";
import { CountUp } from "@/components/effects/CountUp";
import { SpotlightCard } from "@/components/effects/SpotlightCard";

export function Stats() {
  const items = [
    { n: 50, suf: "+", l: "Projects Delivered" },
    { n: 24, suf: "+", l: "AI Systems Built" },
    { n: 10, suf: "L+", l: "Revenue Generated", pre: "₹" },
    { n: 98, suf: "%", l: "Client Retention" },
  ];
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {items.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <SpotlightCard className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-extrabold text-slate-900">
                <CountUp to={s.n} suffix={s.suf} prefix={s.pre} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {s.l}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
