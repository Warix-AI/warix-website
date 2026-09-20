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
    name: "One",
    href: ROUTES.one,
    blurb: "Personal AI built around conversation, voice, memory, and continuity.",
    tone: "night",
    image: "/lora-wash.png",
    onDark: true,
  },
];
