import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHero } from "@/components/hardware/ProductHero";
import { ProductHighlights } from "@/components/hardware/ProductHighlights";
import { ProductOrderBar } from "@/components/hardware/ProductOrderBar";
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
    title: match.product.name,
    description: match.product.statement,
  };
}

export default async function HardwareProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const match = getProduct(categorySlug, productSlug);
  if (!match) notFound();

  const { category, product } = match;

  return (
    <>
      <ProductHero category={category} product={product} />
      <ProductHighlights product={product} />

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Specifications</p>
        <dl className="mt-8 max-w-xl divide-y divide-border">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-6 py-4"
            >
              <dt className="text-[14px] text-muted">{spec.label}</dt>
              <dd className="text-[15px] tracking-[-0.02em]">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-xl text-[16px] leading-relaxed text-muted">
          {product.lora}
        </p>
      </section>

      <ProductOrderBar category={category} product={product} />
    </>
  );
}
