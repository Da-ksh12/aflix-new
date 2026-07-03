import { motion } from "framer-motion";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { SpotlightCard } from "@/components/effects/SpotlightCard";

export function WhyUs() {
  const features = [
    {
      label: "Lead Growth",
      value: "3×",
      desc: "Real estate clients scaled from 50 to 150+ leads/month.",
      img: "https://img.icons8.com/3d-fluency/256/combo-chart.png",
    },
    {
      label: "Revenue Generated",
      value: "₹10L+",
      desc: "High-converting funnels and automation systems built.",
      img: "https://img.icons8.com/3d-fluency/256/money-bag.png",
    },
    {
      label: "Businesses Automated",
      value: "50+",
      desc: "End-to-end automation for multiple industries.",
      img: "https://img.icons8.com/3d-fluency/256/robot-2.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-300/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-indigo-700">
            WHY CHOOSE US
          </span>

          <ScrollFloat
            as="h2"
            className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Proven Results, Real Impact
          </ScrollFloat>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Delivering scalable digital solutions with measurable business growth,
            innovation and exceptional customer experiences.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">

          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group cursor-pointer"
            >

              <SpotlightCard
                className=" relative overflow-hidden rounded-3xl border border-slate-200 bg-white
                p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#185CB7]
                hover:shadow-[0_20px_45px_rgba(24,92,183,.18)]">

                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity
                  duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-r
                  from-[#185CB7]/10 via-transparent to-[#D20612]/10
              "
                />

                {/* Icon */}
                <div
                  className=" mx-auto flex h-20 w-20 items-center justify-center rounded-full
                  bg-gradient-to-br from-[#e5e5e5] to-[#e5e5e5] shadow-lg transition-all
                  duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  <img
                    src={f.img}
                    alt={f.label}
                    className="h-11 w-11 object-contain drop-shadow-lg"
                  />
                </div>

                {/* Value */}

                <h3 className="mt-3 sm:mt-7 text-center text-2xl sm:text-4xl font-extrabold text-slate-900">
                  {f.value}
                </h3>

                {/* Label */}

                <h4 className="mt-2 text-center text-sm sm:text-xl font-bold text-slate-800">
                  {f.label}
                </h4>

                {/* Description */}

                <p className="mt-2 sm:mt-4 text-center text-xs sm:text-sm leading-7 text-slate-600">
                  {f.desc}
                </p>

                {/* Bottom Accent */}

                <div className=" absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#185CB7]
                to-[#D20612] transition-all duration-300 group-hover:w-full "
                />

              </SpotlightCard>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}