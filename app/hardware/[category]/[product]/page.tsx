import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/hardware/ProductVisual";
import { TextLink } from "@/components/ui/TextLink";
import {
  getProduct,
  hardwareCategories,
} from "@/lib/hardware";
import { ROUTES } from "@/lib/site";

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
      <section className="page-wrap pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="meta">{category.name}</p>
        <h1 className="display mt-5 text-[52px] md:text-[72px]">{product.name}</h1>
        <p className="mt-6 max-w-2xl text-[22px] leading-relaxed text-muted md:text-[24px]">
          {product.statement}
        </p>
        <p className="mt-4 text-[14px] text-faint">{product.availabilityLabel}</p>
      </section>

      <section className="page-wrap pb-16">
        <ProductVisual
          id={product.slug}
          label={product.name}
          className="aspect-[16/9] w-full md:aspect-[16/8]"
        />
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Product</p>
        <p className="mt-5 max-w-2xl text-[20px] leading-relaxed text-muted md:text-[22px]">
          {product.description}
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Physical capabilities</p>
        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {product.capabilities.map((item) => (
            <div key={item.title}>
              <h2 className="text-[22px] font-medium tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="meta">Technology</p>
            <p className="mt-5 text-[18px] leading-relaxed text-muted md:text-[20px]">
              {product.technology}
            </p>
          </div>
          <div>
            <p className="meta">Lora</p>
            <p className="mt-5 text-[18px] leading-relaxed text-muted md:text-[20px]">
              {product.lora}
            </p>
          </div>
        </div>
      </section>

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
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Availability</p>
        <h2 className="heading mt-5 text-[36px] md:text-[44px]">
          {product.availabilityLabel}
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
          {product.name} is a Warix hardware product. It is not sold through
          this site.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href={`/hardware/${category.slug}`}>
            View {category.name.toLowerCase()}
          </TextLink>
          <TextLink href={ROUTES.lora}>Explore Lora</TextLink>
        </div>
      </section>
    </>
  );
}
