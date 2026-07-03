/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { navTabs, services, type NavTab } from "@/data/siteData";

const productDropdownItems = [
  "Aflix Restaurant Management Solution",
  "Aflix Delivery Management Solution",
  "Aflix COAM Management Solution",
  "Aflix Video Calling Solution",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [active, setActive] = useState<string>("#home");
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!onHome) return;
      const hashLinks = navTabs.filter(
        (t): t is Extract<NavTab, { kind: "hash" }> => t.kind === "hash",
      );
      const sections = hashLinks.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(hashLinks[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const handleHash = (href: string) => {
    setOpen(false);
    setMobileDropdown(null);
    if (onHome) {
      const el = document.querySelector(href);
      if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/", hash: href.replace("#", "") });
    }
  };

  // center logo with 3 each side
  const left = navTabs.slice(0, 3);
  const right = navTabs.slice(3);

  const renderLink = (l: NavTab, key: string) => {
if (l.kind === "route") {
  const isActive = location.pathname.startsWith(l.to);
  const hasProductDropdown = l.label === "Products";

  return (
    <li
      key={key}
      className={
        hasProductDropdown ? "group/products relative" : "relative"
      }
    >
      <Link
        to={l.to}
        onClick={() => {
          setOpen(false);
          setMobileDropdown(null);
        }}
        className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "text-indigo"
            : "text-slate-700 hover:text-slate-900"
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="absolute inset-0 -z-10 rounded-full bg-indigo/10 ring-1 ring-indigo/20"
          />
        )}

        <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo to-[#0562ee] transition-transform duration-300 group-hover:scale-x-100" />

        <span>{l.label}</span>

        {hasProductDropdown && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/products:rotate-180" />
        )}
      </Link>

      {hasProductDropdown && (
        <div className="absolute left-0 top-full z-50 hidden pt-3 group-hover/products:block">
          <ProductsDropdown />
        </div>
      )}
    </li>
  );
}
    const isActive = onHome && active === l.href;
    const hasWhatWeDoDropdown = l.label === "What we do";
    return (
      <li
        key={key}
        className={hasWhatWeDoDropdown ? "group/services relative" : "relative"}
      >
        <button
          onClick={() => handleHash(l.href)}
          className={`group relative inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            isActive ? "text-indigo" : "text-slate-700 hover:text-slate-900"
          }`}
        >
          {isActive && (
            <motion.span
              layoutId="nav-pill"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute inset-0 -z-10 rounded-full bg-indigo/10 ring-1 ring-indigo/20"
            />
          )}
          <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo to-[#0562ee] transition-transform duration-300 group-hover:scale-x-100" />
          {l.label}
          {hasWhatWeDoDropdown && (
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/services:rotate-180" />
          )}
        </button>
        {hasWhatWeDoDropdown && <WhatWeDoDropdown />}
      </li>
    );
  };

  const renderMobileLink = (l: NavTab, key: string) => {
    const hasDropdown = l.label === "Products" || l.label === "What we do";
    const expanded = mobileDropdown === l.label;
    const baseClass =
      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-white/60";

    if (hasDropdown) {
      return (
        <li key={key} className="w-full">
          <button
            type="button"
            onClick={() => setMobileDropdown(expanded ? null : l.label)}
            className={baseClass}
          >
            <span>{l.label}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {expanded && (
            <MobileDropdownPanel
              type={l.label === "Products" ? "products" : "services"}
              onNavigate={() => {
                setOpen(false);
                setMobileDropdown(null);
              }}
              onHashNavigate={() => handleHash("#what-we-do")}
            />
          )}
        </li>
      );
    }

    if (l.kind === "route") {
      return (
        <li key={key} className="w-full">
          <Link
            to={l.to as never}
            onClick={() => {
              setOpen(false);
              setMobileDropdown(null);
            }}
            className={baseClass}
          >
            <span>{l.label}</span>
          </Link>
        </li>
      );
    }

    return (
      <li key={key} className="w-full">
        <button
          type="button"
          onClick={() => handleHash(l.href)}
          className={baseClass}
        >
          <span>{l.label}</span>
        </button>
      </li>
    );
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
    >
      <nav
        className={`relative mx-auto flex w-full items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:w-[95%] md:w-[90%] lg:w-[58%] ${
          scrolled ? "glass-strong scale-[0.97] shadow-xl" : "glass shadow-sm"
        }`}
      >
        {/* Left tabs */}
        <ul className="hidden flex-1 items-center justify-end gap-1 lg:flex">
          {left.map((l, i) => renderLink(l, `l-${i}`))}
        </ul>

        {/* Center logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2 lg:mx-6">
          <img src="/logo.png" alt="Aflix Infotech" className="h-7 w-auto sm:h-8" />
        </Link>

        {/* Right tabs */}
        <ul className="hidden flex-1 items-center justify-start gap-1 lg:flex">
          {right.map((l, i) => renderLink(l, `r-${i}`))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-blue-600/5 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute top-[68px] mx-3 max-h-[calc(100vh-88px)] w-[calc(100%-1.5rem)] overflow-y-auto rounded-3xl p-3 lg:hidden"
        >
          <ul className="flex flex-col items-stretch gap-1">
            {navTabs.map((l, i) => renderMobileLink(l, `m-${i}`))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

function WhatWeDoDropdown() {
  return (
    <div className="invisible absolute left-1/2 top-full hidden w-[460px] -translate-x-1/2 translate-y-4 pt-4 opacity-0 transition-all duration-300 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100 lg:block">
      <div className="rounded-[28px] border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 backdrop-blur-xl">
        <div className="mt-4 grid gap-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}` as never}
              className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-indigo/5"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span>
                <span className="block text-sm font-semibold text-slate-800">
                  {service.title}
                </span>
                <span className="line-clamp-1 text-xs text-slate-500">
                  {service.tagline}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsDropdown() {
  return (
    <div className="invisible absolute left-1/2 top-full hidden w-100 -translate-x-1/2 translate-y-4 pt-4 opacity-0 transition-all duration-300 group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100 group-focus-within/products:visible group-focus-within/products:translate-y-0 group-focus-within/products:opacity-100 lg:block">
      <div className="rounded-[28px] -mt-4 border border-white/70 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 backdrop-blur-xl">
        <ul className="mt-4 space-y-3">
          {productDropdownItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm font-medium leading-5 text-slate-700"
            >
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo/15 ring-4 ring-indigo/5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
          <Link
            to="/productions"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0562ee]"
          >
            View Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-indigo/30 hover:text-indigo"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileDropdownPanel({
  type,
  onNavigate,
  onHashNavigate,
}: {
  type: "products" | "services";
  onNavigate: () => void;
  onHashNavigate: () => void;
}) {
  if (type === "services") {
    return (
      <div className="mx-2 mb-2 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-lg">
        <div className="mt-3 grid gap-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}` as never}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-indigo/5"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span>
                <span className="block text-sm font-semibold text-slate-800">
                  {service.title}
                </span>
                <span className="line-clamp-1 text-xs text-slate-500">
                  {service.tagline}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={onHashNavigate}
          className="mt-4 inline-flex w-full justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0562ee]"
        >
          View Services
        </button>
      </div>
    );
  }

  return (
    <div className="mx-2 mb-2 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-lg">
      <ul className="mt-3 space-y-3">
        {productDropdownItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm font-medium leading-5 text-slate-700"
          >
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo/15 ring-4 ring-indigo/5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-200 pt-4">
        <Link
          to="/productions"
          onClick={onNavigate}
          className="inline-flex justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0562ee]"
        >
          Products
        </Link>
        <Link
          to="/contact"
          onClick={onNavigate}
          className="inline-flex justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-indigo/30 hover:text-indigo"
        >
          Talk
        </Link>
      </div>
    </div>
  );
}
