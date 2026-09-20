import type { CoverTone } from "./stories";
import { ROUTES } from "./site";

export interface SoftwareProduct {
  name: string;
  href: string;
  blurb: string;
  tone: CoverTone;
  image?: string;
  onDark: boolean;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    name: "Lora",
    href: ROUTES.lora,
    blurb: "An AI assistant for answers and your apps.",
    tone: "night",
    image: "/lora-wash.png",
    onDark: true,
  },
  {
    name: "Cander",
    href: ROUTES.cander,
    blurb: "A platform that manages reputation across the web.",
    tone: "night",
    image: "/cander-wash.jpg",
    onDark: true,
  },
];

export const LOGIN_TARGETS = [
  { name: "Lora", href: ROUTES.loraApp },
  { name: "Cander", href: ROUTES.canderApp },
] as const;
