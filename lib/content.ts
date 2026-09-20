import { ROUTES } from "./site";

export interface ResearchArea {
  title: string;
  body: string;
}

export interface Product {
  name: string;
  slug: string;
  href: string;
  blurb: string;
  accent: string;
  tryHref?: string;
}

export interface UpdateItem {
  date: string;
  category: string;
  title: string;
  href: string;
}

export interface OneConcept {
  title: string;
  body: string;
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: "Agents",
    body: "AI systems capable of understanding goals and taking actions.",
  },
  {
    title: "Interfaces",
    body: "New ways for people to interact with computing through language, voice, and intelligent interfaces.",
  },
  {
    title: "Connected systems",
    body: "Software that can work across tools, services, devices, and information.",
  },
  {
    title: "Applied AI",
    body: "Turning advances in AI into practical products people can actually use.",
  },
];

export const RESEARCH_TOPICS = [
  "AI agents",
  "Human–AI interaction",
  "Multimodal interfaces",
  "Memory and context",
  "Tool use",
  "Connected systems",
  "Applied AI products",
] as const;

export const PRODUCTS: Product[] = [
  {
    name: "One",
    slug: "one",
    href: ROUTES.one,
    blurb:
      "Personal AI built around a continuous relationship between you and your software.",
    accent: "#f4f3ef",
    tryHref: ROUTES.oneApp,
  },
];

export const UPDATES: UpdateItem[] = [
  {
    date: "2026",
    category: "Product",
    title: "Introducing One by Warix",
    href: ROUTES.one,
  },
  {
    date: "2026",
    category: "Company",
    title: "Warix: researching how intelligent systems should work with people",
    href: ROUTES.company,
  },
  {
    date: "2026",
    category: "Research",
    title: "Areas of work across agents, interfaces, and applied AI",
    href: ROUTES.research,
  },
];

export const ONE_CONCEPTS: OneConcept[] = [
  {
    title: "Conversation",
    body: "A continuous conversational interface instead of constantly starting over.",
  },
  {
    title: "Voice",
    body: "Natural real-time voice interaction built directly into the same experience.",
  },
  {
    title: "Memory",
    body: "One gradually understands relevant context and preferences across interactions.",
  },
  {
    title: "Anywhere",
    body: "The same AI experience can eventually extend across phone, desktop, web, messaging, and future devices.",
  },
  {
    title: "Connected intelligence",
    body: "Future capability for One to work with tools, services, information, and Warix products.",
  },
];
