import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/home/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMapForm } from "@/components/contact/ContactMapForm";
import { ContactQuickLinks } from "@/components/contact/ContactQuickLinks";
import { ContactSocials } from "@/components/contact/ContactSocials";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aflix Infotech" },
      {
        name: "description",
        content:
          "Get in touch with Aflix Infotech. Book a call, WhatsApp, email or visit us — we reply within one business day.",
      },
      { property: "og:title", content: "Contact — Aflix Infotech" },
      {
        property: "og:description",
        content:
          "Talk to our team about websites, apps, custom software, automation and AI growth systems.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-foreground">
      <Toaster position="top-center" richColors />
      <Navbar />
      <ContactHero />
      <ContactInfoCards />
      <ContactMapForm />
      <ContactQuickLinks />
      <ContactSocials />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
