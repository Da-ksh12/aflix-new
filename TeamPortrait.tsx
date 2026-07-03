import { TiltCard } from "@/components/effects/TiltCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "./fadeUp";
import Ceo from "@/assets/Ceo.png";
import Founder from "@/assets/Founder.png";
import CoFounder from "@/assets/Co-Founder.png";
import SeniorDeveloper from "@/assets/SeniorDeveloper.png";
import SeniorFullStack from "@/assets/SeniorFullStackDev.png";
import BusinessAnalyst from "@/assets/BusinessAnalyst.png";
import GraphicDesigner from "@/assets/GraphicDesigner.png";
import FrontendDeveloper from "@/assets/frontendDeveloper.png";


export default function TeamOps() {
  const team = [
    {
      name: "Anil Chaudhary",
      role: "CEO",
      img: Ceo,
      intro: "Builds AI workflows, lead routing logic, CRM triggers and hands-off operations for fast moving teams.",
      link: "https://www.linkedin.com/in/anil-chaudhary-91066a359"
    },
    {
      name: "Vikram Singh",
      role: "Founder",
      img: Founder,
      intro: "Turns business ideas into stable SaaS dashboards, customer portals and internal software systems.",
      link: "https://www.linkedin.com/in/vikram-singh12"
    },
    {
      name: "Daksh Sikarwar",
      role: "Co-Founder",
      img: CoFounder,
      intro: "Builds AI workflows, lead routing logic, CRM triggers and hands-off operations for fast moving teams.",
      link: "https://www.linkedin.com/in/daksh-sikarwar-70979230b/"
    },
    {
      name: "Kartikey Baghel",
      role: "Full Stack Developer",
      img: SeniorFullStack,
      intro: "Designs secure cloud infrastructure, deployment pipelines and performance monitoring for every build.",
      link: "https://www.linkedin.com/in/kartikeybaghel"
    },
    {
      name: "Shubham Singh",
      role: "Senior Developer",
      img: SeniorDeveloper,
      intro: "Shapes complex tools into clean interfaces that clients can understand, use and scale every day.",
      link: "https://www.linkedin.com/in/shubham-kumar-b4a306293/"
    },
    {
      name: "Krati Jain",
      role: "Business Analyst",
      img: BusinessAnalyst,
      intro: "Keeps launches organized with weekly updates, QA checks, handover plans and adoption support.",
      link: "https://www.linkedin.com/in/krati-jain-941a80315"
    },
    {
      name: "Avni",
      role: "Graphic Designer",
      img: GraphicDesigner,
      intro: "Keeps launches organized with weekly updates, QA checks, handover plans and adoption support.",
      link: "https://www.linkedin.com/in/avni-bansal-ba5a83390/"
    },
    {
      name: "Sachin Mathur",
      role: "Genz Developer",
      img: FrontendDeveloper,
      intro: "Keeps launches organized with weekly updates, QA checks, handover plans and adoption support.",
      link: "https://www.linkedin.com/in/the-sachin-mathur/"
    },
    {
      name: "Anil Chaudhary",
      role: "CEO",
      img: Ceo,
      intro: "Builds AI workflows, lead routing logic, CRM triggers and hands-off operations for fast moving teams.",
      link: "https://www.linkedin.com/in/anil-chaudhary-91066a359/"
    }
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
        <motion.div {...fadeUp} className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" >
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
            className="grid grid-cols-[1.45fr_0.95fr] gap-3 sm:gap-5"
          >
            <TeamPortrait member={visibleTeam[0]} featured />
            <div className="grid gap-3 sm:gap-5">
              <TeamPortrait member={visibleTeam[1]} />
              <TeamPortrait member={visibleTeam[2]} />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={() => slide("prev")}
            aria-label="Show previous team members"
            className="absolute left-0 top-1/2 z-20 grid h-12 w-12 -translate-x-2 -translate-y-1/2 place-items-center bg-white text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950 sm:h-16 sm:w-16 sm:-translate-x-4"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
          <button
            type="button"
            onClick={() => slide("next")}
            aria-label="Show next team members"
            className="absolute right-0 top-1/2 z-20 grid h-12 w-12 translate-x-2 -translate-y-1/2 place-items-center bg-white text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950 sm:h-16 sm:w-16 sm:translate-x-4"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  intro: string;
  link: string;
}

interface TeamPortraitProps {
  member: TeamMember;
  featured?: boolean;
}

export function TeamPortrait({
  member,
  featured = false,
}: TeamPortraitProps) {
  return (
    <TiltCard max={featured ? 3 : 4} className="group h-full">
      <article onClick={() => window.open(member.link, "_blank")} tabIndex={0} className={`relative isolate overflow-hidden bg-slate-950 outline-none ${featured ? "min-h-[516px] sm:min-h-[680px] lg:min-h-[980px]" : "min-h-[252px] sm:min-h-[330px] lg:min-h-[480px]"}`}>
        <img src={member.img} alt={`${member.name}, ${member.role}`}
          className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-slate-950/35 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black via-black/70 to-transparent" />

        <div className="absolute inset-x-4 bottom-4 z-10 text-white sm:inset-x-8 sm:bottom-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-sm sm:tracking-[0.2em]">{member.role}</p>
          <h3 className={`${featured ? "text-3xl sm:text-5xl" : "text-xl sm:text-3xl"} mt-2 font-extrabold`}>{member.name}</h3>
          <p className="mt-0 max-h-0 max-w-xl translate-y-2 overflow-hidden text-xs leading-relaxed text-white/78 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-32 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-32 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:text-sm">{member.intro}</p>
        </div>
      </article>
    </TiltCard>
  );
}
