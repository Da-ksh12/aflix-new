import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactFAQs } from "@/data/siteData";
import { ScrollFloat } from "@/components/effects/ScrollFloat";

export function ContactFAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-indigo shadow-sm">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </span>
          <ScrollFloat as="h2" className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Answers before you ask.
          </ScrollFloat>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Everything teams typically want to know before working with us.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass mt-10 rounded-[28px] border border-slate-200/70 p-2 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.5)] sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {contactFAQs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-slate-200/70 px-3">
                <AccordionTrigger className="text-left text-base font-semibold text-slate-950 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
