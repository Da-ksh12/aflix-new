import { motion } from "framer-motion";
import { socialLinks } from "@/data/siteData";
import { ScrollFloat } from "@/components/effects/ScrollFloat";

export function ContactSocials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
          Follow along
        </span>
        <ScrollFloat as="h2" className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
          Come say hi on your favorite platform.
        </ScrollFloat>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Behind-the-scenes builds, product breakdowns and the occasional design rant.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group flex items-center justify-center gap-2 rounded-2xl border border-slate-200/70 px-4 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo/40 hover:bg-white hover:text-indigo hover:shadow-[0_15px_35px_-15px_rgba(24,92,183,0.6)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                <s.icon className="h-4 w-4" />
              </span>
              {s.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
