import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/hardware/ProductVisual";
import { TextLink } from "@/components/ui/TextLink";
import { getCategory, hardwareCategories } from "@/lib/hardware";
import { ROUTES } from "@/lib/site";

type Params = { category: string };

export function generateStaticParams() {
  return hardwareCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function HardwareCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <section className="page-wrap pt-16 pb-16 md:pt-24 md:pb-20">
        <p className="meta">Hardware</p>
        <h1 className="display mt-5 text-[48px] md:text-[68px]">{category.name}</h1>
        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-muted md:text-[22px]">
          {category.statement}
        </p>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
          {category.description}
        </p>
      </section>

      <section className="page-wrap pb-24 md:pb-32">
        <ProductVisual
          id={category.slug}
          label={category.name}
          className="aspect-[16/8] w-full"
        />

        {category.products.length ? (
          <div className="mt-20 space-y-20">
            {category.products.map((product) => (
              <article
                key={product.slug}
                className="grid items-end gap-8 lg:grid-cols-12"
              >
                <ProductVisual
                  id={product.slug}
                  label={product.name}
                  className="aspect-[16/10] lg:col-span-8"
                />
                <div className="lg:col-span-4">
                  <p className="text-[13px] text-faint">
                    {product.availabilityLabel}
                  </p>
                  <h2 className="subhead mt-2 text-[30px] md:text-[36px]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-[18px]">
                    {product.statement}
                  </p>
                  <div className="mt-6">
                    <TextLink href={`/hardware/${category.slug}/${product.slug}`}>
                      View {product.name}
                    </TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-16 max-w-md text-[17px] leading-relaxed text-muted">
            No products in this category yet. Warix will add them here as they
            are designed.
          </p>
        )}

        <div className="mt-16">
          <TextLink href={ROUTES.hardware}>All hardware</TextLink>
        </div>
      </section>
    </>
  );
}
