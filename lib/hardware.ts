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
    slug: "fashion",
    name: "Fashion",
    statement: "Garments and objects still ahead of us.",
    description:
      "Fashion is the hardware category. Products will be added here as they are designed.",
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
