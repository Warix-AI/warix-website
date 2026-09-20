import { ROUTES } from "./site";

export type CoverTone = "night" | "paper" | "sand" | "ink" | "mist" | "grain";

export interface StoryCard {
  href: string;
  title: string;
  meta: string;
  tone: CoverTone;
  image?: string;
}

export const HERO_PROMPTS = [
  "What is One?",
  "How does Warix hardware work?",
  "Tell me about Fashion",
  "What can One do on its own?",
  "How do software and hardware stay one system?",
];

export const HERO_PILLS = [
  { label: "Talk with One", href: ROUTES.oneApp, compact: true },
  { label: "Hardware", href: ROUTES.hardware, compact: true },
  { label: "Company", href: ROUTES.company, compact: false },
];

export const FEATURED_PRIMARY: StoryCard = {
  href: "/hardware/fashion",
  title: "Fashion. Garments and objects still ahead of us.",
  meta: "Hardware",
  tone: "sand",
  image: "/fashion-featured.jpg",
};

export const SECTION_CARDS: StoryCard[] = [
  {
    href: ROUTES.one,
    title: "One — the Warix software platform.",
    meta: "Software",
    tone: "paper",
  },
  {
    href: ROUTES.hardware,
    title: "Fashion is the hardware category.",
    meta: "Hardware",
    tone: "ink",
  },
  {
    href: ROUTES.company,
    title: "About Warix. Software and hardware as one system.",
    meta: "Company",
    tone: "night",
  },
];

export const SOFTWARE_STORIES: StoryCard[] = [
  {
    href: ROUTES.one,
    title: "One is the entire software layer.",
    meta: "Software",
    tone: "paper",
  },
  {
    href: ROUTES.one,
    title: "Intelligence is part of the platform.",
    meta: "Software",
    tone: "mist",
  },
  {
    href: ROUTES.one,
    title: "One does not require Warix hardware.",
    meta: "Software",
    tone: "grain",
  },
];

export const HARDWARE_STORIES: StoryCard[] = [
  {
    href: "/hardware/fashion",
    title: "Fashion is the hardware category.",
    meta: "Hardware",
    tone: "sand",
  },
  {
    href: ROUTES.hardware,
    title: "Products keep their own names.",
    meta: "Hardware",
    tone: "ink",
  },
  {
    href: ROUTES.hardware,
    title: "The software throughout is One.",
    meta: "Hardware",
    tone: "night",
  },
];

export const COMPANY_STORIES: StoryCard[] = [
  {
    href: `${ROUTES.company}#philosophy`,
    title: "Build intelligence into the physical world.",
    meta: "Philosophy",
    tone: "ink",
  },
  {
    href: `${ROUTES.company}#story`,
    title: "Design both layers. Keep the software coherent.",
    meta: "Story",
    tone: "mist",
  },
  {
    href: `${ROUTES.company}#technology`,
    title: "The implementation can change. The platform does not.",
    meta: "Technology",
    tone: "grain",
  },
];
