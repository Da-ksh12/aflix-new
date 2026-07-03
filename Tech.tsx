import { motion } from "framer-motion";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { TiltCard } from "@/components/effects/TiltCard";

export function Tech() {
  const items = [
    {
      label: "React / Next.js",
      img: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      label: "Node.js",
      img: "https://cdn.simpleicons.org/nodedotjs/339933",
    },
    {
      label: "Python AI",
      img: "https://www.python.org/static/img/python-logo-large.c36dccadd999.png",
    },
    {
    label: "AWS / Cloud",
    img: "https://touchlane.com/wp-content/uploads/2025/02/Amazon_Web_Services-Logo.wine_.png",
},
    {
      label: "Flutter Apps",
      img: "https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png", },
    {
      label: "Zapier",
      img: "https://cdn.simpleicons.org/zapier/FF4A00",
    },
    {
      label: "Postman",
      img: "https://cdn.simpleicons.org/postman/FF6C37",
    },
    {
      label: "WebFlow",
      img: "https://cdn.simpleicons.org/webflow/146EF5",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollFloat
          as="h2"
          className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl"
        >
          Technologies We Use
        </ScrollFloat>

        <div className="mt-12 grid grid-cols-2 gap-1 cursor-pointer sm:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <TiltCard max={12}>
                <SpotlightCard className="group flex flex-col items-center gap-3 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,70,229,0.18)
                ]">

                  {/* IMAGE ICON */}
                  <img
                    src={t.img}
                    alt={t.label}
                    className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {t.label}
                  </span>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}