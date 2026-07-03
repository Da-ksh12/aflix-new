import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { MagneticButton } from "@/components/effects/MagneticButton";

const actions = [
  {
    label: "Email",
    value: "info@aflix.co.in",
    href: "mailto:info@aflix.co.in",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Quick chat",
    href: "https://wa.me/917818917538",
    icon: MessageCircle,
  },
  {
    label: "Call",
    value: "+91 78189 17538",
    href: "tel:+917818917538",
    icon: PhoneCall,
  },
];

export function ContactCTA() {
  return (
    <section className="pb-24 pt-6">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-white via-white to-indigo-50 p-8 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.75)] sm:p-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo via-sky-400 to-red-500" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo shadow-sm backdrop-blur">
                <CalendarCheck className="h-3.5 w-3.5" />
                Ready when you are
              </span>
              <h2 className="mt-5 max-w-2xl text-2xl font-extrabold text-slate-950 sm:text-4xl">
                Bring the idea. We will help shape the next clear move.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600">
                Send a short note, a rough brief, or just the problem you want solved.
                You will hear back with questions that actually move the project forward.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {actions.map((action) => (
                <MagneticButton
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-3xl border border-slate-200 bg-white/75 p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo/30 hover:bg-white hover:shadow-[0_24px_60px_-40px_rgba(24,92,183,0.8)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                    <action.icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {action.label}
                  </span>
                  <span className="mt-1 flex items-center justify-between gap-3 text-sm font-extrabold text-slate-950">
                    {action.value}
                    <ArrowRight className="h-4 w-4 shrink-0 text-indigo transition group-hover:translate-x-1" />
                  </span>
                </MagneticButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
