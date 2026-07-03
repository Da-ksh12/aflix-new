import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Bot,
  Code2,
  Layers3,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Map, type MapViewport } from "@/components/ui/map";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { ScrollFloat } from "@/components/effects/ScrollFloat";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(120),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

const projectIntents = [
  {
    label: "Website",
    subject: "Website development enquiry",
    prompt: "I want to build or improve a website. Goals, pages, references, and timeline:",
    icon: Code2,
  },
  {
    label: "App",
    subject: "App development enquiry",
    prompt: "I want to build a mobile app. Core users, features, platforms, and timeline:",
    icon: Layers3,
  },
  {
    label: "Automation",
    subject: "Automation systems enquiry",
    prompt: "I want to automate a workflow. Current tools, repetitive steps, and desired outcome:",
    icon: Workflow,
  },
  {
    label: "AI growth",
    subject: "AI growth solutions enquiry",
    prompt: "I want AI to support growth. Data, channels, goals, and first use case:",
    icon: Bot,
  },
];

const responseSteps = ["Scope review", "Discovery call", "Proposal plan"];

export function ContactMapForm() {
  const [viewport, setViewport] = useState<MapViewport>({
    center: [77.6737, 27.4924],
    zoom: 11,
    bearing: 0,
    pitch: 0,
  });
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Thanks! We'll reply within one business day.");
    setData(initial);
    setSelectedIntent(null);
  };

  const chooseIntent = (intent: (typeof projectIntents)[number]) => {
    setSelectedIntent(intent.label);
    setData((d) => ({
      ...d,
      subject: d.subject || intent.subject,
      message: d.message || intent.prompt,
    }));
    setErrors((prev) => ({ ...prev, subject: undefined, message: undefined }));
  };

  return (
    <section id="contact-form" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo">
            Write to us
          </span>
          <ScrollFloat
            as="h2"
            className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
          >
            Find us on the map, reach us on the form.
          </ScrollFloat>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Give us a little context and we will come back with a focused next step,
            not a generic sales reply.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-[28px] border border-slate-200/70 p-3 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.6)]"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[20px]">
              <Map viewport={viewport} onViewportChange={setViewport} />
              <div className="absolute left-3 top-3 z-10 rounded-2xl bg-white/85 px-3 py-2 text-xs font-mono text-slate-700 shadow backdrop-blur">
                <span className="text-slate-500">lng:</span> {viewport.center[0].toFixed(3)}{" "}
                · <span className="text-slate-500">lat:</span> {viewport.center[1].toFixed(3)}{" "}
                · <span className="text-slate-500">zoom:</span> {viewport.zoom.toFixed(1)}
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo/10 text-indigo shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="text-sm">
                    <p className="font-bold text-slate-950">Aflix Infotech HQ</p>
                    <p className="text-slate-600">Agra, Uttar Pradesh, India</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs">
                      <a href="tel:+917818917538" className="inline-flex items-center gap-1.5 font-semibold text-indigo hover:underline">
                        <Phone className="h-3.5 w-3.5" /> +91 78189 17538
                      </a>
                      <a href="mailto:info@aflix.co.in" className="inline-flex items-center gap-1.5 font-semibold text-indigo hover:underline">
                        <Mail className="h-3.5 w-3.5" /> info@aflix.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 z-10 hidden max-w-[210px] rounded-2xl bg-slate-950/85 p-3 text-white shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                  Visit by plan
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Book a quick slot first so the right strategist is ready for you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard className="glass rounded-[28px] border border-slate-200/70 p-7 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.6)] sm:p-8">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo">
                      Project brief
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                      What should we help you build?
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm shadow-sm">
                    <span className="font-bold text-slate-950">1 business day</span>
                    <span className="block text-xs text-slate-500">usual response time</span>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-4">
                  {projectIntents.map((intent) => (
                    <button
                      key={intent.label}
                      type="button"
                      onClick={() => chooseIntent(intent)}
                      className={`group flex items-center gap-2 rounded-2xl border px-3 py-3 text-left text-sm font-bold transition ${
                        selectedIntent === intent.label
                          ? "border-indigo bg-indigo text-white shadow-[0_18px_40px_-24px_rgba(24,92,183,0.9)]"
                          : "border-slate-200 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:border-indigo/30 hover:bg-white hover:text-indigo"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition ${
                          selectedIntent === intent.label
                            ? "bg-white/20 text-white"
                            : "bg-indigo/10 text-indigo group-hover:bg-indigo group-hover:text-white"
                        }`}
                      >
                        <intent.icon className="h-4 w-4" />
                      </span>
                      {intent.label}
                    </button>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Name" error={errors.name}>
                    <input
                      value={data.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className={inputCls(!!errors.name)}
                    />
                  </FormField>
                  <FormField label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={data.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={inputCls(!!errors.email)}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Phone" error={errors.phone}>
                    <input
                      value={data.phone}
                      onChange={set("phone")}
                      placeholder="Optional"
                      className={inputCls(!!errors.phone)}
                    />
                  </FormField>
                  <FormField label="Subject" error={errors.subject}>
                    <input
                      value={data.subject}
                      onChange={set("subject")}
                      placeholder="How can we help?"
                      className={inputCls(!!errors.subject)}
                    />
                  </FormField>
                </div>
                <FormField label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    value={data.message}
                    onChange={set("message")}
                    placeholder="Tell us about your project, timeline and goals."
                    className={inputCls(!!errors.message)}
                  />
                </FormField>
                <MagneticButton
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit(e as unknown as React.FormEvent);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(24,92,183,0.7)] transition hover:-translate-y-0.5 hover:bg-[#124f9d]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </MagneticButton>
                <div className="grid gap-2 pt-2 sm:grid-cols-3">
                  {responseSteps.map((step, i) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-slate-200 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      <span className="mr-2 text-indigo">0{i + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function inputCls(err: boolean) {
  return `w-full rounded-xl border bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-inner transition placeholder:text-slate-400 hover:border-indigo/30 focus:outline-none focus:ring-2 ${
    err
      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
      : "border-slate-200 focus:border-indigo focus:ring-indigo/20"
  }`;
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
        {label}
      </span>
      {children}
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
