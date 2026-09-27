import { ONE_COPY } from "./copy";
import { EXTERNAL, ROUTES } from "./site";

export type Availability = "available" | "unavailable";

export interface SoftwareProduct {
  series: string;
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  href: string;
  appUrl: string;
  priceLabel: string;
  capabilities: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export interface ConfigureOption {
  id: string;
  name: string;
  price: number;
  swatch?: string;
}

export interface ConfigureGroup {
  id: string;
  name: string;
  help?: string;
  options: ConfigureOption[];
}

export interface HardwareProduct {
  series: string;
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  href: string;
  configureHref: string;
  image: string;
  price: number;
  availability: Availability;
  features: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  included: string[];
  compatibility: string[];
  configure: ConfigureGroup[];
  faqs: { q: string; a: string }[];
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    series: "S1",
    slug: "one",
    name: ONE_COPY.name,
    shortName: "One",
    blurb: ONE_COPY.blurb,
    description: ONE_COPY.description || ONE_COPY.blurb,
    href: ROUTES.softwareOne,
    appUrl: EXTERNAL.oneApp,
    priceLabel: "Plans available in One",
    capabilities: [...ONE_COPY.capabilities],
    faqs: [
      {
        q: "Is One the same as Warix?",
        a: "No. Warix is the company. One is a software product by Warix.",
      },
      {
        q: "Where do I use One?",
        a: "Open One at one.warix.co. Sign in with your Warix Account when prompted.",
      },
      {
        q: "Where do I view plans?",
        a: "View plans on the One product page, or inside One after you open the app.",
      },
    ],
  },
  {
    series: "S2",
    slug: "two",
    name: "Two",
    shortName: "S2 — Software Two",
    blurb: "A second Warix software surface for focused, structured work.",
    description:
      "Two is designed for structured AI workflows alongside One — same Warix Account, different product.",
    href: ROUTES.softwareTwo,
    appUrl: EXTERNAL.twoApp,
    priceLabel: "Coming with Warix Account",
    capabilities: [
      {
        title: "Structured sessions",
        body: "Organize work into clear threads without losing continuity.",
      },
      {
        title: "Shared identity",
        body: "Uses the same Warix Account as One and the rest of the ecosystem.",
      },
      {
        title: "Complementary to One",
        body: "Built to sit beside One — not replace it.",
      },
    ],
    faqs: [
      {
        q: "How is Two different from One?",
        a: "One is your continuous personal AI. Two is oriented toward structured work sessions.",
      },
      {
        q: "Same account?",
        a: "Yes. One Warix Account across One, Two, hardware, and account.warix.co.",
      },
    ],
  },
];

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    series: "H1",
    slug: "one",
    name: "One",
    shortName: "H1 — One",
    blurb: "Warix’s first intelligent hardware product.",
    description:
      "Hardware One is a physical Warix product designed to work with your Warix Account and software.",
    href: ROUTES.hardwareOne,
    configureHref: ROUTES.hardwareOneConfigure,
    image: "/hardware/sunglasses.png",
    price: 420,
    availability: "available",
    features: [
      {
        title: "Designed as hardware",
        body: "A physical product first — form, materials, and daily presence.",
      },
      {
        title: "Tied to your Warix Account",
        body: "Purchases and ownership attach to the same account used for software.",
      },
      {
        title: "Built for multiple units",
        body: "Own more than one H1. Each unit is a distinct device in Account.",
      },
    ],
    specs: [
      { label: "Series", value: "H1" },
      { label: "Category", value: "Hardware" },
      { label: "Software", value: "Warix Account + One" },
      { label: "Weight", value: "28 g" },
    ],
    included: [
      "Hardware One unit",
      "Charging cable",
      "Quick start guide",
      "One-year limited warranty",
    ],
    compatibility: [
      "Warix Account",
      "One (S1)",
      "Future Warix software products",
    ],
    configure: [
      {
        id: "finish",
        name: "Finish",
        options: [
          { id: "silver", name: "Silver", price: 0, swatch: "#c8c8c8" },
          { id: "graphite", name: "Graphite", price: 40, swatch: "#3a3a3a" },
          { id: "sand", name: "Sand", price: 40, swatch: "#d2c4b0" },
        ],
      },
      {
        id: "coverage",
        name: "Coverage",
        help: "Optional protection for your H1.",
        options: [
          { id: "none", name: "No coverage", price: 0 },
          { id: "care", name: "WarixCare · 2 years", price: 79 },
        ],
      },
      {
        id: "accessory",
        name: "Accessory",
        options: [
          { id: "none", name: "None", price: 0 },
          { id: "case", name: "Travel case", price: 49 },
          { id: "cable", name: "Extra cable", price: 29 },
        ],
      },
    ],
    faqs: [
      {
        q: "Is H1 the same as Software One?",
        a: "No. H1 is Hardware One. S1 is Software One. They share a Warix Account but are different products.",
      },
      {
        q: "Where do I manage my devices?",
        a: "Orders and owned devices are managed at account.warix.co.",
      },
    ],
  },
  {
    series: "H2",
    slug: "two",
    name: "Two",
    shortName: "H2 — Two",
    blurb: "The next Warix hardware form — in development.",
    description:
      "Hardware Two expands the Warix hardware family with a different form factor and configuration set.",
    href: ROUTES.hardwareTwo,
    configureHref: ROUTES.hardwareTwoConfigure,
    image: "/hardware/watch.png",
    price: 640,
    availability: "unavailable",
    features: [
      {
        title: "A second form",
        body: "Designed as a distinct H-series product — not a variant of H1.",
      },
      {
        title: "Same account ecosystem",
        body: "Purchases attach to your Warix Account when H2 becomes available.",
      },
    ],
    specs: [
      { label: "Series", value: "H2" },
      { label: "Category", value: "Hardware" },
      { label: "Status", value: "Coming soon" },
    ],
    included: ["Hardware Two unit", "Charging cable", "Quick start guide"],
    compatibility: ["Warix Account", "One (S1)", "Two (S2)"],
    configure: [
      {
        id: "size",
        name: "Size",
        options: [
          { id: "s", name: "Small", price: 0 },
          { id: "m", name: "Medium", price: 0 },
          { id: "l", name: "Large", price: 20 },
        ],
      },
      {
        id: "color",
        name: "Color",
        options: [
          { id: "black", name: "Black", price: 0, swatch: "#111111" },
          { id: "white", name: "White", price: 0, swatch: "#f4f4f4" },
        ],
      },
    ],
    faqs: [
      {
        q: "When can I buy H2?",
        a: "Hardware Two is not available yet. Join updates from the company page.",
      },
    ],
  },
];

export function getSoftware(slug: string) {
  return SOFTWARE_PRODUCTS.find((p) => p.slug === slug);
}

export function getHardware(slug: string) {
  return HARDWARE_PRODUCTS.find((p) => p.slug === slug);
}

export function selectedHardwareTotal(
  product: HardwareProduct,
  selection: Record<string, string>,
  quantity: number,
) {
  const extras = product.configure.reduce((sum, group) => {
    const option = group.options.find((o) => o.id === selection[group.id]);
    return sum + (option?.price ?? 0);
  }, 0);
  return (product.price + extras) * quantity;
}

export function defaultHardwareSelection(product: HardwareProduct) {
  return Object.fromEntries(
    product.configure.map((group) => [group.id, group.options[0]?.id ?? ""]),
  );
}
