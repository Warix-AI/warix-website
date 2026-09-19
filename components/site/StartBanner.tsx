import { ROUTES } from "@/lib/site";
import { PillLink } from "./PillLink";

export function StartBanner() {
  return (
    <section className="page-wrap py-8 md:py-12">
      <div className="flex flex-col items-center rounded-[20px] bg-[#1a1a1a] px-6 py-16 text-center md:py-24">
        <h2 className="display text-[36px] md:text-[52px] lg:text-[56px]">
          Get started with Lora
        </h2>
        <div className="mt-8">
          <PillLink href={ROUTES.loraApp} filled>
            Talk with Lora
          </PillLink>
        </div>
      </div>
    </section>
  );
}
