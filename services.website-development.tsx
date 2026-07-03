import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { services } from "@/data/siteData";

const service = services.find((s) => s.slug === "website-development")!;

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: `${service.title} — Aflix Infotech` },
      { name: "description", content: service.description },
      { property: "og:title", content: `${service.title} — Aflix Infotech` },
      { property: "og:description", content: service.description },
      { property: "og:image", content: service.heroImage },
      { name: "twitter:image", content: service.heroImage },
    ],
  }),
  component: () => <ServiceDetailPage service={service} />,
});
