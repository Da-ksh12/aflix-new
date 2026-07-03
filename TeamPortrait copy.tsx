import { TiltCard } from "@/components/effects/TiltCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "./fadeUp";

export function TeamOps() {
  const team = [
    {
      name: "Daksh Sikarwar",
      role: "Founder",
      img: "./images/founder.webp",
      intro:
        "Builds AI workflows, lead routing logic, CRM triggers and hands-off operations for fast moving teams.",
    },
    {
      name: "Rohan Sethi",
      role: "Product Engineer",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
      intro:
        "Turns business ideas into stable SaaS dashboards, customer portals and internal software systems.",
    },
    {
      name: "Neha Kapoor",
      role: "Growth Strategist",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      intro: "Connects campaigns, landing pages and sales follow-ups into measurable growth loops.",
    },
    {
      name: "Kabir Sharma",
      role: "Cloud Architect",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      intro:
        "Designs secure cloud infrastructure, deployment pipelines and performance monitoring for every build.",
    },
    {
      name: "Isha Rao",
      role: "UI Systems Designer",
      img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=900&q=80",
      intro:
        "Shapes complex tools into clean interfaces that clients can understand, use and scale every day.",
    },
    {
      name: "Dev Malhotra",
      role: "Client Success",
      img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=900&q=80",
      intro:
        "Keeps launches organized with weekly updates, QA checks, handover plans and adoption support.",
    },
  ];

  const [active, setActive] = useState(0);
  const visibleTeam = [0, 1, 2].map((offset) => team[(active + offset) % team.length]);
  const slideNumber = Math.floor(active / 3) + 1;
  const totalSlides = Math.ceil(team.length / 3);

  const slide = (direction: "prev" | "next") => {
    setActive((current) => {
      const next = direction === "next" ? current + 3 : current - 3;
      return (next + team.length) % team.length;
    });
  };

  return (
    <section id="team" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">
              Stuff We Manage
            </span>
            <h2 className="mt-2 text-4xl font-extrabold leading-none text-slate-950 sm:text-5xl">
              Our Team
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
            <span>
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
            <span className="h-px w-20 bg-slate-300" />
            <span>Slide for more</span>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 lg:grid-cols-[1.45fr_0.95fr]"
          >
            <TeamPortrait member={visibleTeam[0]} featured />
            <div className="grid gap-5">
              <TeamPortrait member={visibleTeam[1]} />
              <TeamPortrait member={visibleTeam[2]} />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={() => slide("prev")}
            aria-label="Show previous team members"
            className="absolute left-0 top-1/2 z-20 grid h-16 w-16 -translate-x-2 -translate-y-1/2 place-items-center bg-white text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950 sm:-translate-x-4"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={() => slide("next")}
            aria-label="Show next team members"
            className="absolute right-0 top-1/2 z-20 grid h-16 w-16 translate-x-2 -translate-y-1/2 place-items-center bg-white text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950 sm:translate-x-4"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamPortrait({member, featured = false }: {
    member: { name: string; role: string; img: string; intro: string };
    featured?: boolean;
}) {
    return (
        <TiltCard max={featured ? 3 : 4} className="group h-full">
            <article tabIndex={0} className={`relative isolate overflow-hidden bg-slate-950 outline-none ${featured ? "min-h-[680px] lg:min-h-[980px]" : "min-h-[420px] lg:min-h-[480px]"}`}>
                <img src={member.img} alt={`${member.name}, ${member.role}`}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-slate-950/35 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 z-10 text-white sm:inset-x-8 sm:bottom-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{member.role}</p>
                    <h3 className={`${featured ? "text-4xl sm:text-5xl" : "text-3xl"} mt-2 font-extrabold`}>{member.name}</h3>
                    <p className="mt-4 max-w-xl translate-y-3 text-sm leading-relaxed text-white/78 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">{member.intro}</p>
                </div>

                <div className="absolute right-6 top-6 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    Intro
                </div>
            </article>
        </TiltCard>
    );
}
