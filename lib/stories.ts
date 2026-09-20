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
  "What is Warix?",
  "What is One?",
  "Tell me about research at Warix",
  "How do I get started with One?",
];
