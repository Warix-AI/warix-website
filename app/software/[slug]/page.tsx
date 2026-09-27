import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SoftwareProductView } from "@/components/software/SoftwareProductView";
import { SOFTWARE_PRODUCTS, getSoftware } from "@/lib/catalog";

type Params = { slug: string };

export function generateStaticParams() {
  return SOFTWARE_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftware(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function SoftwareProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getSoftware(slug);
  if (!product) notFound();
  return <SoftwareProductView product={product} />;
}
