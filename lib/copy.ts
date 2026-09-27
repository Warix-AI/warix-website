import { EXTERNAL, ROUTES } from "./site";

export const HOME_COPY = {
  headline: "Building intelligent systems for the real world.",
  body: "Warix is an AI research and technology company. We study how AI can understand, reason, and work—and turn that into products people can use.",
  primaryCta: { label: "Explore our research", href: ROUTES.research },
  secondaryCta: { label: "Meet One", href: ROUTES.softwareOne },
} as const;

export const RESEARCH_COPY = {
  title: "Research",
  headline: "Exploring what intelligent systems can become.",
  body: "We focus on making AI more capable and useful across the tools people already use—agents, interaction, multimodal systems, connected tools, and autonomy.",
  cta: { label: "Explore Research", href: ROUTES.research },
  areas: [
    "Intelligent agents",
    "Human-computer interaction",
    "Multimodal systems",
    "Connected tools",
    "Autonomy",
    "People and AI together",
  ],
} as const;

export const PRODUCTS_COPY = {
  title: "Products",
  headline: "Research made useful.",
  body: "We build products that turn advances in AI into practical tools.",
} as const;

export const COMPANY_COPY = {
  title: "Company",
  headline: "Building for what comes next.",
  body: "Warix brings research, engineering, and product together—building AI today, with the foundation for new software and hardware systems ahead.",
  cta: { label: "About Warix", href: ROUTES.company },
} as const;

export const ONE_COPY = {
  name: "One",
  headline: "One place to work with AI.",
  blurb:
    "Chat, research, browse, connect your apps, and organize work in one intelligent workspace.",
  description:
    "One brings conversations, research, the web, your apps, and your work together.",
  capabilities: [
    {
      title: "Chat",
      body: "Think, create, analyze, and get things done through conversation.",
    },
    {
      title: "Research",
      body: "Go deeper on complex questions across sources, and turn research into answers.",
    },
    {
      title: "Browser",
      body: "Explore and work with the web directly inside One.",
    },
    {
      title: "Apps",
      body: "Connect the services you already use and bring them into One.",
    },
    {
      title: "Workspaces",
      body: "Keep conversations, apps, files, and context organized by work.",
    },
  ],
  openCta: { label: "Open One", href: EXTERNAL.oneApp },
  plansCta: { label: "View plans", href: `${ROUTES.softwareOne}#plans` },
  learnCta: { label: "Learn about One", href: ROUTES.softwareOne },
} as const;
