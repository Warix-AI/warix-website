export type HardwareAvailability = "in-development" | "forthcoming";

export interface HardwareSpec {
  label: string;
  value: string;
}

export interface HardwareCapability {
  title: string;
  body: string;
}

export interface HardwareProduct {
  slug: string;
  name: string;
  statement: string;
  description: string;
  capabilities: HardwareCapability[];
  technology: string;
  lora: string;
  specs: HardwareSpec[];
  availability: HardwareAvailability;
  availabilityLabel: string;
}

export interface HardwareCategory {
  slug: string;
  name: string;
  statement: string;
  description: string;
  products: HardwareProduct[];
}

export const hardwareCategories: HardwareCategory[] = [
  {
    slug: "robots",
    name: "Robots",
    statement: "Machines built to work in physical space.",
    description:
      "Warix robots are hardware products with their own names and bodies. The software inside them is Lora.",
    products: [
      {
        slug: "aera",
        name: "Aera",
        statement: "A robot designed for work in the world, not demonstration.",
        description:
          "Aera is a Warix robot. It has its own body, sensors, and physical capabilities. Lora is integrated throughout — for tasks, status, cameras, conversation, and diagnostics — without becoming a separate robotics brand.",
        capabilities: [
          {
            title: "Physical presence",
            body: "Aera is built to move through space, carry sensors, and take on work that belongs in the world.",
          },
          {
            title: "Tasking",
            body: "Intent is given at the level of work, then carried out through the machine.",
          },
          {
            title: "Perception",
            body: "Cameras and onboard sensing feed the same software platform that runs on every other Warix surface.",
          },
        ],
        technology:
          "Aera is a hardware system: structure, actuation, power, and sensing designed together. Specialized software requirements for balance, safety, and motion still belong to Lora.",
        lora: "Lora is integrated throughout the robot. Controls, task management, status, camera feeds, automation, conversation, and diagnostics are interfaces into the same platform.",
        specs: [
          { label: "Category", value: "Robot" },
          { label: "Software", value: "Lora" },
          { label: "Interfaces", value: "Voice, conversation, controls, cameras" },
          { label: "Status", value: "In development" },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
    ],
  },
  {
    slug: "vehicles",
    name: "Vehicles",
    statement: "Machines built for motion.",
    description:
      "Warix vehicles are physical products first. Lora becomes the dashboard, the voice, and the system underneath.",
    products: [
      {
        slug: "vela",
        name: "Vela",
        statement: "A motorcycle designed as a connected machine.",
        description:
          "Vela is a Warix motorcycle. The vehicle has its own mechanical identity. Lora is integrated throughout — navigation, status, voice, controls, and alerts — without a separate vehicle operating system brand.",
        capabilities: [
          {
            title: "The machine",
            body: "A motorcycle with the proportions, structure, and physical presence of a vehicle — not a screen on wheels.",
          },
          {
            title: "On the move",
            body: "Information is limited to what belongs at speed: route, system status, and the next decision.",
          },
          {
            title: "Voice first",
            body: "When a screen is the wrong object, Lora is spoken to.",
          },
        ],
        technology:
          "Vela is designed as hardware: chassis, powertrain, and rider interface. Vehicle-specific software is still Lora, implemented for this machine.",
        lora: "Lora is integrated throughout the vehicle. The dashboard, navigation, system status, voice, controls, and alerts are Lora — adapted to a motorcycle.",
        specs: [
          { label: "Category", value: "Vehicle" },
          { label: "Type", value: "Motorcycle" },
          { label: "Software", value: "Lora" },
          { label: "Status", value: "In development" },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
    ],
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    statement: "Objects worn close, with almost no interface.",
    description:
      "Warix jewelry is physical first. When software is present, it is Lora — quiet, contextual, and small.",
    products: [
      {
        slug: "nara",
        name: "Nara",
        statement: "A piece that carries presence without asking for attention.",
        description:
          "Nara is a Warix jewelry piece. It is designed as an object. Lora appears only as lightweight context, notification, and voice — never as a second product name.",
        capabilities: [
          {
            title: "Object first",
            body: "The piece has to hold as jewelry before it holds as technology.",
          },
          {
            title: "A light surface",
            body: "Contextual information and simple signals, not a miniature computer on the body.",
          },
          {
            title: "Voice when needed",
            body: "Lora can be spoken to without opening a screen.",
          },
        ],
        technology:
          "Nara is a hardware object: material, scale, and wear. Any embedded software is part of Lora.",
        lora: "Lora is present as a lightweight interface — contextual information, notifications, voice, and simple controls — connected to the same platform.",
        specs: [
          { label: "Category", value: "Jewelry" },
          { label: "Software", value: "Lora" },
          { label: "Interface", value: "Lightweight, voice, notifications" },
          { label: "Status", value: "In development" },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
    ],
  },
  {
    slug: "wearables",
    name: "Wearables",
    statement: "Devices worn for information and control.",
    description:
      "Warix wearables are hardware with their own form. The software they run is Lora.",
    products: [
      {
        slug: "sol",
        name: "Sol",
        statement: "Close to the body. Quiet until it matters.",
        description:
          "Sol is a Warix wearable. It has its own hardware identity. Lora provides status, simple controls, notifications, and voice without becoming a companion-app brand.",
        capabilities: [
          {
            title: "Worn",
            body: "A physical device designed for the body, not a reduced phone.",
          },
          {
            title: "Status",
            body: "Device and, where it applies, health or environmental information at a glance.",
          },
          {
            title: "Control",
            body: "Quick actions and hardware controls when a larger surface is too much.",
          },
        ],
        technology:
          "Sol is designed as a wearable device: enclosure, sensors, power, and contact with skin. Its software is Lora.",
        lora: "Lora adapts to a small surface — notifications, voice, device information, and simple controls — while remaining the same platform.",
        specs: [
          { label: "Category", value: "Wearable" },
          { label: "Software", value: "Lora" },
          { label: "Interface", value: "Status, voice, simple controls" },
          { label: "Status", value: "In development" },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    statement: "Garments and objects still ahead of us.",
    description:
      "Fashion is an open hardware category. Products will be added here as they are designed.",
    products: [],
  },
];

export function getCategory(slug: string): HardwareCategory | undefined {
  return hardwareCategories.find((category) => category.slug === slug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string,
): { category: HardwareCategory; product: HardwareProduct } | undefined {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((item) => item.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}

export function hardwareHref(categorySlug: string, productSlug?: string) {
  return productSlug
    ? `/hardware/${categorySlug}/${productSlug}`
    : `/hardware/${categorySlug}`;
}

export function categoriesWithProducts() {
  return hardwareCategories.filter((category) => category.products.length > 0);
}
