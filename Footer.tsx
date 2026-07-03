import { Mail, MessageCircleIcon, Phone, Youtube, Instagram, Facebook, X, Linkedin, } from "lucide-react";
import { socialLinks } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="relative border-t border-white/60 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <img src="/logo.png" alt="Aflix Infotech" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-slate-600">
              AI-powered automation, SaaS platforms and digital systems for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Solutions</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {[
                "Website Development",
                "App Development",
                "Custom Software",
                "Automation Systems",
                "AI Growth Solutions",
              ].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-indigo">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {["Home", "Why Us"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-indigo">
                    {l}
                  </a>
                </li>
              ))}
              {["Productions", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`${l.toLowerCase()}`} className="transition hover:text-indigo">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo" />
                <a href="tel:+917818917538">+91 78189 17538</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircleIcon className="h-4 w-4 text-indigo" />
                <a href="https://wa.me/+917818917538">Hello WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo" />
                <a href="mailto:info@aflix.co.in">info@aflix.co.in</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <div className="mt-3 grid grid-cols-6 gap-3 sm:grid-cols-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center transition-transform hover:scale-110 group"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-slate-100 bg-white p-1.5 transition hover:border-indigo/40 hover:shadow-md">
                    <s.icon className="h-full w-full text-indigo" />
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 transition-colors group-hover:text-indigo">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
          © 2023 Aflix Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}