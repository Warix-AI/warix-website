import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductConfigurator } from "@/components/hardware/ProductConfigurator";
import { getProduct, hardwareCategories } from "@/lib/hardware";

type Params = { category: string; product: string };

export function generateStaticParams() {
  return hardwareCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      product: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, product: slug } = await params;
  const match = getProduct(category, slug);
  if (!match) return {};
  return {
    title: `Design ${match.product.name}`,
    description: `Configure and order ${match.product.name}.`,
  };
}

export default async function HardwareDesignPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const match = getProduct(categorySlug, productSlug);
  if (!match) notFound();

  return (
    <ProductConfigurator category={match.category} product={match.product} />
  );
}
