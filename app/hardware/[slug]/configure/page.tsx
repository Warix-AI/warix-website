import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HardwareConfigure } from "@/components/hardware/HardwareConfigure";
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
  return { title: `Configure ${product.name}` };
}

export default async function ConfigurePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getHardware(slug);
  if (!product) notFound();
  return <HardwareConfigure product={product} />;
}
