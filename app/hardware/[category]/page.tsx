import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPhoto } from "@/components/hardware/ProductPhoto";
import { PillLink } from "@/components/site/PillLink";
import { TextLink } from "@/components/ui/TextLink";
import {
  formatUsd,
  getCategory,
  hardwareCategories,
  hardwareDesignHref,
  hardwareHref,
} from "@/lib/hardware";
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
        <div className="grid gap-10 md:grid-cols-3">
          {category.products.map((product) => (
            <article key={product.slug}>
              <ProductPhoto
                src={product.image}
                label={product.name}
                className="relative aspect-[4/3] rounded-[16px]"
              />
              <h2 className="subhead mt-5 text-[28px] md:text-[32px]">
                {product.name}
              </h2>
              <p className="mt-2 text-[16px] text-muted">
                {formatUsd(product.price)}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {product.statement}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <PillLink
                  href={hardwareDesignHref(category.slug, product.slug)}
                  filled
                >
                  Order Now
                </PillLink>
                <PillLink href={hardwareHref(category.slug, product.slug)}>
                  Learn
                </PillLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <TextLink href={ROUTES.products}>All products</TextLink>
        </div>
      </section>
    </>
  );
}
