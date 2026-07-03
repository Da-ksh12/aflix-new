import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { VerticalTicker } from "@/components/effects/VerticalTicker";
import { fadeUp } from "./fadeUp";
import { ScrollFloat } from "@/components/effects/ScrollFloat";

export function Reviews() {
  const reviews = [
    {
      n: "Arjun Mehta",
      t: "Aflix helped us automate our lead handling system and improved our workflow massively.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFabSOSIiq51MSGXx51VFmfW7Xiz1qP7CAkw_VAgRiQ1Jow68i6vXu6dQS&s=10",
    },
    {
      n: "Rahul Kapoor",
      t: "Their software and automation approach is far ahead of normal agencies. Professional and result-driven.",
      image: "https://www.shutterstock.com/image-photo/young-indian-man-paying-utility-260nw-2736168931.jpg",
    },
    {
      n: "Rohit Sharma",
      t: "We got a proper system, not just marketing. Their team built a complete growth setup for our business.",
      image: "https://img.magnific.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",
    },
    {
      n: "Neha Verma",
      t: "Their execution quality and support were excellent. We saw a much more organized system.",
      image: "https://img.magnific.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      n: "Priya Singh",
      t: "Best decision for our business systems. Their automation setup saved us time and improved conversions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy54SB3fL1DVPybZ9cDw1nJWW0o0W9ej2hCJDqoaD5qkPQg6ZgwRtWkowv&s=10",
    },
    {
      n: "Pooja Singh",
      t: "Very professional team. They understand business growth deeply and build practical systems around it.",
      image: "https://i.pravatar.cc/150?img=24",
    },
  ];

  const col1 = reviews.slice(0, 3);
  const col2 = reviews.slice(3);

  const Card = ({
    n,
    t,
    image,
  }: {
    n: string;
    t: string;
    image: string;
  }) => (
    <SpotlightCard className="glass rounded-2xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <Quote className="h-5 w-5 text-indigo/60" />

      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        {t}
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
        <img
          src={image}
          alt={n}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo/20"
        />

        <div>
          <div className="text-sm font-semibold text-slate-900">
            {n}
          </div>

          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );

  return (
    <section id="reviews" className="bg-[#f8fafc] py-13 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
            Reviews
          </span>

 <ScrollFloat>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trusted by
              Growing Businesses
          </h2>
 </ScrollFloat>

          <p className="mt-3 text-sm text-slate-500">
            Vertical auto-scroll — hover to pause
          </p>
        </motion.div>

        <div className="mt-12 grid h-[560px] gap-6 sm:grid-cols-2">
          <VerticalTicker
            duration={10}
            pauseOnHover
            className="space-y-6"
          >
            {col1.map((r) => (
              <Card key={r.n} {...r} />
            ))}
          </VerticalTicker>

          <VerticalTicker
            duration={10}
            reverse
            pauseOnHover
            className="space-y-6"
          >
            {col2.map((r) => (
              <Card key={r.n} {...r} />
            ))}
          </VerticalTicker>
        </div>
      </div>
    </section>
  );
}