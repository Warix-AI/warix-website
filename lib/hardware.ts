export type HardwareAvailability = "in-development" | "forthcoming";

export interface HardwareSpec {
  label: string;
  value: string;
}

export interface HardwareCapability {
  title: string;
  body: string;
}

export interface HardwareStat {
  value: string;
  label: string;
}

export interface HardwareHighlight {
  title: string;
  body: string;
  image: string;
  cover?: boolean;
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
  slug: string;
  name: string;
  statement: string;
  description: string;
  image: string;
  heroImage: string;
  heroCover?: boolean;
  price: number;
  capabilities: HardwareCapability[];
  technology: string;
  lora: string;
  specs: HardwareSpec[];
  stats: HardwareStat[];
  highlights: HardwareHighlight[];
  configure: ConfigureGroup[];
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

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const hardwareCategories: HardwareCategory[] = [
  {
    slug: "fashion",
    name: "Fashion",
    statement: "Garments and objects still ahead of us.",
    description:
      "Fashion is the hardware category. Products keep their own names. The software throughout is Lora.",
    products: [
      {
        slug: "sunglasses",
        name: "Sunglasses",
        statement: "Intelligent eyewear that sees the world with you.",
        description:
          "Sunglasses are a Warix hardware product. They keep their own name. The software throughout is Lora.",
        image: "/hardware/sunglasses.png",
        heroImage: "/fashion-featured.jpg",
        heroCover: true,
        price: 420,
        capabilities: [
          {
            title: "Sight",
            body: "Built to sit on the face and stay with the wearer through the day.",
          },
          {
            title: "Presence",
            body: "A physical object first. The software layer does not replace the form.",
          },
          {
            title: "Lora",
            body: "Lora is the software throughout. The product does not invent a second brand.",
          },
        ],
        technology: "A physical product designed as hardware. The implementation can change.",
        lora: "Lora runs throughout. Sunglasses do not require a second software identity.",
        specs: [
          { label: "Category", value: "Fashion" },
          { label: "Form", value: "Eyewear" },
          { label: "Weight", value: "28 g" },
          { label: "Battery", value: "12 hours" },
          { label: "Software", value: "Lora" },
        ],
        stats: [
          { value: "12 hr", label: "Battery" },
          { value: "28 g", label: "Weight" },
          { value: "Lora", label: "Software" },
        ],
        highlights: [
          {
            title: "Made to be worn.",
            body: "A metal frame, gradient lenses, and a form that stays with the wearer. The object comes first.",
            image: "/fashion-featured.jpg",
            cover: true,
          },
          {
            title: "Lora, on the face.",
            body: "Answers, presence, and connected apps without a second software brand. Sunglasses stay Sunglasses.",
            image: "/hardware/sunglasses.png",
          },
        ],
        configure: [
          {
            id: "finish",
            name: "Finish",
            options: [
              { id: "silver", name: "Silver", price: 0, swatch: "#c8c8c8" },
              { id: "black", name: "Black", price: 0, swatch: "#1a1a1a" },
              { id: "gold", name: "Gold", price: 40, swatch: "#c2a36b" },
            ],
          },
          {
            id: "lens",
            name: "Lens",
            options: [
              { id: "gradient", name: "Gradient", price: 0 },
              { id: "solid", name: "Solid", price: 0 },
              { id: "photo", name: "Photochromic", price: 80 },
            ],
          },
          {
            id: "size",
            name: "Size",
            options: [
              { id: "52", name: "52", price: 0 },
              { id: "54", name: "54", price: 0 },
              { id: "56", name: "56", price: 0 },
            ],
          },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
      {
        slug: "puffer",
        name: "Puffer",
        statement: "A worn jacket that stays close to you.",
        description:
          "Puffer is a Warix hardware product. It keeps its own name. The software throughout is Lora.",
        image: "/hardware/puffer.png",
        heroImage: "/hardware/puffer.png",
        price: 580,
        capabilities: [
          {
            title: "Wear",
            body: "Designed to sit on the body and stay with the wearer through the day.",
          },
          {
            title: "Presence",
            body: "A physical object first. The software layer does not replace the form.",
          },
          {
            title: "Lora",
            body: "Lora is the software throughout. The product does not invent a second brand.",
          },
        ],
        technology: "A physical product designed as hardware. The implementation can change.",
        lora: "Lora runs throughout. Puffer does not require a second software identity.",
        specs: [
          { label: "Category", value: "Fashion" },
          { label: "Form", value: "Jacket" },
          { label: "Fill", value: "Down alternative" },
          { label: "Weather", value: "Wind and rain" },
          { label: "Software", value: "Lora" },
        ],
        stats: [
          { value: "All day", label: "Wear" },
          { value: "Weather", label: "Ready" },
          { value: "Lora", label: "Software" },
        ],
        highlights: [
          {
            title: "A jacket first.",
            body: "Hood, fill, and a cut that moves with the wearer. Hardware you put on, not a device you carry.",
            image: "/hardware/puffer.png",
          },
          {
            title: "Lora, throughout.",
            body: "The software layer stays Lora. Puffer does not invent a second brand to live in the garment.",
            image: "/hardware/puffer.png",
          },
        ],
        configure: [
          {
            id: "color",
            name: "Color",
            options: [
              { id: "black", name: "Black", price: 0, swatch: "#111111" },
              { id: "sand", name: "Sand", price: 0, swatch: "#c9c4ba" },
              { id: "ink", name: "Ink", price: 0, swatch: "#2a3344" },
            ],
          },
          {
            id: "fill",
            name: "Fill",
            options: [
              { id: "standard", name: "Standard", price: 0 },
              { id: "warm", name: "Warm", price: 60 },
            ],
          },
          {
            id: "size",
            name: "Size",
            options: [
              { id: "xs", name: "XS", price: 0 },
              { id: "s", name: "S", price: 0 },
              { id: "m", name: "M", price: 0 },
              { id: "l", name: "L", price: 0 },
              { id: "xl", name: "XL", price: 0 },
            ],
          },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
      {
        slug: "watch",
        name: "Watch",
        statement: "A timepiece that stays close to you.",
        description:
          "Watch is a Warix hardware product. It keeps its own name. The software throughout is Lora.",
        image: "/hardware/watch.png",
        heroImage: "/hardware/watch.png",
        price: 640,
        capabilities: [
          {
            title: "Wear",
            body: "Designed to sit on the wrist and stay with the wearer.",
          },
          {
            title: "Presence",
            body: "A physical object first. The software layer does not replace the form.",
          },
          {
            title: "Lora",
            body: "Lora is the software throughout. The product does not invent a second brand.",
          },
        ],
        technology: "A physical product designed as hardware. The implementation can change.",
        lora: "Lora runs throughout. Watch does not require a second software identity.",
        specs: [
          { label: "Category", value: "Fashion" },
          { label: "Form", value: "Watch" },
          { label: "Case", value: "41 mm" },
          { label: "Battery", value: "7 days" },
          { label: "Software", value: "Lora" },
        ],
        stats: [
          { value: "7 day", label: "Battery" },
          { value: "41 mm", label: "Case" },
          { value: "Lora", label: "Software" },
        ],
        highlights: [
          {
            title: "Time, worn.",
            body: "A square steel case and a strap that stays on the wrist. The object is a watch before it is anything else.",
            image: "/hardware/watch.png",
          },
          {
            title: "Lora on the wrist.",
            body: "Identity, answers, and connected systems without renaming the product. Watch stays Watch.",
            image: "/hardware/watch.png",
          },
        ],
        configure: [
          {
            id: "case",
            name: "Case",
            options: [
              { id: "steel", name: "Steel", price: 0, swatch: "#d0d0d0" },
              { id: "black", name: "Black", price: 40, swatch: "#1a1a1a" },
            ],
          },
          {
            id: "strap",
            name: "Strap",
            options: [
              { id: "black", name: "Black", price: 0, swatch: "#111111" },
              { id: "steel", name: "Steel", price: 80, swatch: "#c8c8c8" },
              { id: "sand", name: "Sand", price: 40, swatch: "#c9c4ba" },
            ],
          },
          {
            id: "size",
            name: "Size",
            options: [
              { id: "38", name: "38 mm", price: 0 },
              { id: "41", name: "41 mm", price: 0 },
            ],
          },
        ],
        availability: "in-development",
        availabilityLabel: "In development",
      },
    ],
  },
];

export const HARDWARE_MENU_PRODUCTS = hardwareCategories[0].products.map(
  (product) => ({
    name: product.name,
    href: `/hardware/fashion/${product.slug}/design`,
    blurb: product.statement,
    image: product.image,
    onDark: false,
  }),
);

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

export function hardwareDesignHref(categorySlug: string, productSlug: string) {
  return `/hardware/${categorySlug}/${productSlug}/design`;
}

export function categoriesWithProducts() {
  return hardwareCategories.filter((category) => category.products.length > 0);
}

export function selectedTotal(
  product: HardwareProduct,
  selected: Record<string, string>,
) {
  return product.configure.reduce((sum, group) => {
    const option = group.options.find((item) => item.id === selected[group.id]);
    return sum + (option?.price ?? 0);
  }, product.price);
}

export function defaultConfiguration(product: HardwareProduct) {
  return Object.fromEntries(
    product.configure.map((group) => [group.id, group.options[0].id]),
  );
}
