import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SolidButton } from "@/components/solid-button";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Completed installs, no renders — feature walls, wardrobes, media walls, and hallways Twinx has actually built across Pretoria and Durban homes.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1400px] px-12 pb-16 pt-[120px]">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="h-px w-7 bg-brand" />
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Real Work</span>
        </div>
        <h1 className="m-0 mb-5 max-w-[800px] font-jost text-[clamp(38px,5.5vw,64px)] font-light uppercase leading-[1.08] text-ink">
          Completed installs, no renders.
        </h1>
        <p className="m-0 max-w-[600px] text-[17px] leading-[1.7] text-muted">
          A look inside spaces Twinx has actually built — feature walls, wardrobes, media walls, and hallways across
          Pretoria and Durban homes.
        </p>
      </section>

      <PortfolioGallery />

      <section className="w-full bg-cream px-12 py-[120px] text-center">
        <h2 className="m-0 mb-8 font-jost text-[clamp(28px,4vw,42px)] font-light text-ink">
          See something close to what you want?
        </h2>
        <SolidButton href="/contact" size="lg">
          Get a Project Quote
        </SolidButton>
      </section>
    </div>
  );
}
