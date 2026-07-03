import { Navbar } from "@/components/Navbar";
import { Hero } from "./Hero";
import { MarqueeTools, MarqueeBrands } from "./Marquee";
import { Tech } from "./Tech";
import { Services } from "./Services";
import { Industries } from "./Industries";
import { Stats } from "./Stats";
import { WhyUs } from "./WhyUs";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";
import TeamOps from "./TeamPortrait";
import { ScrollFloat } from "../effects/ScrollFloat";

export function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <MarqueeTools />
      <Tech />
      <Services />
      <Industries />
      <ScrollFloat as="h2" className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl mt-6 mb-4" >
        Our Clients & Partners
      </ScrollFloat>
      <MarqueeBrands speed={14} reverse={true} />
      <MarqueeBrands speed={16} reverse={false} />
      <Stats />
      <WhyUs />
      <TeamOps />
      <Reviews />
      <Footer />
    </div>
  );
}
