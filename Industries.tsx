import { motion } from "framer-motion";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { TiltCard } from "@/components/effects/TiltCard";
import { RiArrowRightUpLine } from "react-icons/ri";

export function Industries() {
  const items = [
    {
      t: "Schools & Institutes",
      d: "Automation for admissions, fees, and communication.",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      link: "https://google.com",
    },
    {
      t: "Hospitals & Clinics",
      d: "Patient management, appointments and follow-ups.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com",
    },
    {
      t: "Real Estate",
      d: "Lead capture, CRM workflows and property inquiries.",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      link: "https://youtube.com",
    },
    {
      t: "E-Commerce",
      d: "Automated journeys, cart recovery and retention.",
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      link: "https://amazon.in",
    },
    {
      t: "Coaches & Consultants",
      d: "Personal brand funnels, booking and lead automation.",
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      link: "https://linkedin.com",
    },
    {
      t: "Businesses & Startups",
      d: "Custom software, websites and growth systems.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      link: "https://openai.com",
    },
  ];

  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollFloat
          as="h2"
          className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl"
        >
          Industries We Serve
        </ScrollFloat>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
            >
              <TiltCard
                max={5}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-3xl transition-all cursor-pointer duration-500 hover:-translate-y-2 hover:shadow-4xl hover:border-[#185CB7]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.t}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#185CB7] shadow-lg">
                    Website
                  </div>

                  {/* Arrow */}
                  <a
                    href={it.link}
                    target="_self"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-5 top-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-xl transition duration-300 group-hover:rotate-45 group-hover:bg-[#185CB7] group-hover:text-white">
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white">{it.t}</h3>

                    <p className="mt-1 text-sm text-white/80">
                      Premium Digital Solution
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
