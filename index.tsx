/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aflix Infotech — AI Automation, SaaS & Custom Software" },
      {
        name: "description",
        content:
          "Aflix Infotech builds AI-powered automation, scalable SaaS platforms, mobile apps and CRM systems that help modern businesses grow faster.",
      },
      { property: "og:title", content: "Aflix Infotech — AI Automation & SaaS" },
      { property: "og:description", content: "Intelligent business systems — automation, software, marketing and execution as one growth engine." },
    ],
  }),
  component: Home,
});
