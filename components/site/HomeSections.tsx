import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";
import { ROUTES } from "@/lib/site";
import { InterfacePreview } from "@/components/one/InterfacePreview";

export function HomeHero() {
  return (
    <section className="page-wrap pt-20 pb-10 md:pt-28 md:pb-14">
      <h1 className="display max-w-4xl text-[42px] md:text-[64px] lg:text-[76px]">
        Building intelligent systems for people.
      </h1>
      <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
        Warix researches and develops AI products, software, and intelligent
        systems designed to make computing more useful, personal, and capable.
      </p>
      <div className="mt-14 overflow-hidden rounded-[4px] border border-border bg-paper md:mt-20">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/hero-field.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 1504px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function FeaturedOne() {
  return (
    <section className="page-wrap section-space border-t border-border">
      <p className="meta">Introducing One</p>
      <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[56px]">
        One place for your AI.
      </h2>
      <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
        One is a personal AI interface designed around conversation, voice,
        memory, and continuity — a product by Warix, not the entirety of Warix.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink href={ROUTES.one}>Learn about One</TextLink>
        <a
          href={ROUTES.oneApp}
          className="text-[15px] text-foreground/70 transition-colors hover:text-foreground"
        >
          Try One
        </a>
      </div>
      <div className="mt-14">
        <InterfacePreview className="min-h-[320px] md:min-h-[440px]" />
        <p className="mt-4 text-[13px] text-foreground/40">One by Warix</p>
      </div>
    </section>
  );
}

export function ResearchAreas({
  areas,
}: {
  areas: { title: string; body: string }[];
}) {
  const ids = ["agents", "interfaces", "connected", "applied"];

  return (
    <section className="page-wrap section-space border-t border-border">
      <p className="meta">What we&apos;re building</p>
      <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
        Research areas
      </h2>
      <div className="mt-14">
        {areas.map((area, index) => (
          <div
            key={area.title}
            id={ids[index]}
            className="scroll-mt-24 border-t border-border py-10 md:grid md:grid-cols-12 md:gap-8 md:py-12"
          >
            <h3 className="subhead text-[28px] md:col-span-4 md:text-[32px]">
              {area.title}
            </h3>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted md:col-span-8 md:mt-1 md:text-[18px]">
              {area.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductsSection({
  products,
}: {
  products: {
    name: string;
    href: string;
    blurb: string;
    tryHref?: string;
  }[];
}) {
  return (
    <section className="page-wrap section-space border-t border-border">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="meta">Products</p>
          <h2 className="heading mt-5 text-[36px] md:text-[48px]">Products</h2>
        </div>
        <TextLink href={ROUTES.products}>View all</TextLink>
      </div>

      <div className="mt-14 space-y-16">
        {products.map((product) => (
          <article key={product.name} className="border-t border-border pt-10">
            <div className="md:grid md:grid-cols-12 md:gap-10">
              <div className="md:col-span-5">
                <p className="text-[13px] text-foreground/45">By Warix</p>
                <h3 className="subhead mt-2 text-[36px] md:text-[44px]">
                  {product.name}
                </h3>
                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
                  {product.blurb}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  <TextLink href={product.href}>
                    Learn about {product.name}
                  </TextLink>
                  {product.tryHref ? (
                    <a
                      href={product.tryHref}
                      className="text-[15px] text-foreground/70 transition-colors hover:text-foreground"
                    >
                      Try {product.name}
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="mt-10 md:col-span-7 md:mt-0">
                <InterfacePreview className="min-h-[260px] md:min-h-[360px]" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function UpdatesSection({
  updates,
}: {
  updates: {
    date: string;
    category: string;
    title: string;
    href: string;
  }[];
}) {
  return (
    <section className="page-wrap section-space border-t border-border">
      <p className="meta">Latest</p>
      <h2 className="heading mt-5 text-[36px] md:text-[48px]">Updates</h2>
      <ul className="mt-12">
        {updates.map((item) => (
          <li key={item.title} className="border-t border-border">
            <LinkRow href={item.href}>
              <span className="text-[13px] text-foreground/45">{item.date}</span>
              <span className="text-[13px] text-foreground/45">
                {item.category}
              </span>
              <span className="text-[18px] font-medium tracking-[-0.03em] text-foreground md:text-[22px]">
                {item.title}
              </span>
            </LinkRow>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LinkRow({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="grid gap-2 py-8 transition-opacity hover:opacity-70 md:grid-cols-[5rem_7rem_1fr] md:items-baseline md:gap-8"
    >
      {children}
    </a>
  );
}

export function CompanyStatement() {
  return (
    <section className="page-wrap section-space border-t border-border">
      <h2 className="heading max-w-4xl text-[36px] md:text-[52px]">
        Technology should become easier to use as it becomes more capable.
      </h2>
      <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
        Warix builds simple interfaces on top of increasingly capable systems.
        The work is to keep people in the center as intelligence, tools, and
        devices grow more powerful.
      </p>
      <div className="mt-10">
        <TextLink href={ROUTES.company}>About Warix</TextLink>
      </div>
    </section>
  );
}
