import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HardwareProductView } from "@/components/hardware/HardwareProductView";
import { HARDWARE_PRODUCTS, getHardware } from "@/lib/catalog";

type Params = { slug: string };

export function generateStaticParams() {
  return HARDWARE_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getHardware(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function HardwareProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getHardware(slug);
  if (!product) notFound();
  return <HardwareProductView product={product} />;
}
