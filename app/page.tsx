import { InterfacePreview } from "@/components/lora/InterfacePreview";
import { ProductVisual } from "@/components/hardware/ProductVisual";
import { TextLink } from "@/components/ui/TextLink";
import { hardwareCategories } from "@/lib/hardware";
import { LORA_INTERFACES } from "@/lib/lora";
import { ROUTES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="page-wrap pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40">
        <p className="meta">Warix</p>
        <h1 className="display mt-6 max-w-5xl text-[42px] md:text-[64px] lg:text-[76px]">
          We build software and hardware as one system.
        </h1>
        <p className="mt-8 max-w-xl text-[20px] leading-relaxed text-muted md:text-[22px]">
          Warix designs the physical products. Lora is the software that runs
          through them — and on its own.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href={ROUTES.lora}>Explore Lora</TextLink>
          <TextLink href={ROUTES.hardware}>Explore hardware</TextLink>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Software</p>
        <h2 className="heading mt-5 text-[44px] md:text-[56px]">Lora</h2>
        <p className="subhead mt-6 max-w-3xl text-[30px] text-foreground md:text-[36px]">
          One software platform, wherever you use Warix.
        </p>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Lora can operate independently on computers and phones. It can also run
          throughout Warix hardware. The interface adapts to the device. The
          intelligence, identity, and connected systems stay the same.
        </p>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {LORA_INTERFACES.filter((item) => item.id !== "wearable").map((item) => (
            <figure key={item.id}>
              <InterfacePreview id={item.id} />
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-[15px] tracking-[-0.02em]">{item.name}</span>
                <span className="text-[13px] text-faint">Lora</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-[16px] text-muted">
          Different interfaces. Same software.
        </p>
        <div className="mt-6">
          <TextLink href={ROUTES.lora}>Explore Lora</TextLink>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Hardware</p>
        <h2 className="heading mt-5 max-w-3xl text-[44px] md:text-[56px]">
          An expanding physical portfolio.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Each product keeps its own name and body. The software inside it is
          Lora.
        </p>

        <div className="mt-16 space-y-20">
          {hardwareCategories.map((category) => (
            <article key={category.slug} className="grid items-end gap-8 lg:grid-cols-12">
              <ProductVisual
                id={category.slug}
                label={category.name}
                className="aspect-[16/10] lg:col-span-8"
              />
              <div className="lg:col-span-4">
                <p className="meta">{category.name}</p>
                <h3 className="subhead mt-3 text-[28px] md:text-[32px]">
                  {category.statement}
                </h3>
                {category.products.length ? (
                  <ul className="mt-5 space-y-1">
                    {category.products.map((product) => (
                      <li key={product.slug}>
                        <TextLink href={`/hardware/${category.slug}/${product.slug}`}>
                          {product.name}
                        </TextLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-[15px] text-faint">Forthcoming</p>
                )}
                <div className="mt-6">
                  <TextLink href={`/hardware/${category.slug}`}>
                    View {category.name.toLowerCase()}
                  </TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Software and hardware</p>
        <h2 className="heading mt-5 max-w-4xl text-[40px] md:text-[52px]">
          The implementation can change. The platform does not.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          A vehicle may require completely different software from a robot. That
          is fine. Both are still Lora. Hardware can be specialized. The software
          brand stays one platform.
        </p>

        <div className="mt-16">
          <p className="text-[22px] font-medium tracking-[-0.03em]">Lora</p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 md:grid-cols-5">
            {LORA_INTERFACES.map((item) => (
              <div key={item.id}>
                <p className="text-[15px] tracking-[-0.02em]">{item.name}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-faint">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Company</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          Warix sits above both layers.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          One company. Software through Lora. Hardware as an expanding set of
          physical products. The work is to build them as a system.
        </p>
        <div className="mt-8">
          <TextLink href={ROUTES.company}>About Warix</TextLink>
        </div>
      </section>
    </>
  );
}
