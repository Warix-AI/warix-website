import {
  CompanyStatement,
  FeaturedOne,
  HomeHero,
  ProductsSection,
  ResearchAreas,
  UpdatesSection,
} from "@/components/site/HomeSections";
import {
  PRODUCTS,
  RESEARCH_AREAS,
  UPDATES,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedOne />
      <ResearchAreas areas={RESEARCH_AREAS} />
      <ProductsSection products={PRODUCTS} />
      <UpdatesSection updates={UPDATES} />
      <CompanyStatement />
    </>
  );
}
