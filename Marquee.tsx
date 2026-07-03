import { useEffect, useState } from "react";
import { LogoLoop } from "@/components/effects/LogoLoop";
import { logos, marqueeLogos } from "@/data/siteData";

export function MarqueeTools() {
  return (
    <div className="border-y border-slate-200/70 bg-[#f8fafc] py-6">
      <LogoLoop
        speed={36}
        items={logos.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo/40 hover:text-indigo"
          >
            <Icon className="h-4 w-4 text-indigo" />
            {label}
          </div>
        ))}
      />
    </div>
  );
}

type MarqueeBrandsProps = {
  speed?: number;
  reverse?: boolean;
};

export function MarqueeBrands({
  speed = 36,
  reverse = false,
}: MarqueeBrandsProps) {
  const [gap, setGap] = useState(10);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const updateGap = () => setGap(mediaQuery.matches ? 30 : 10);

    updateGap();
    mediaQuery.addEventListener("change", updateGap);

    return () => mediaQuery.removeEventListener("change", updateGap);
  }, []);

  return (
    <div className="border-y border-slate-200/70 bg-[#f8fafc] py-6">
      <LogoLoop
        reverse={reverse}
        speed={speed}
        gap={gap}
        items={marqueeLogos.map(({ icon }) => (
          <div
            key={icon}
            className="flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo/40 hover:text-indigo"
          >
            <img src={icon} alt={icon} className="h-6 sm:h-10 w-full text-indigo" />
          </div>
        ))}
      />
    </div>
  );
}
