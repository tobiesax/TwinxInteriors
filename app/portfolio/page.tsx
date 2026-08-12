import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SolidButton } from "@/components/solid-button";
import { BackHomeButton } from "@/components/back-home-button";
import { BackToTopButton } from "@/components/back-to-top-button";

export const metadata: Metadata = {
  title: "Portfolio — Real Installs Across South Africa",
  description:
    "Completed wall moulding, accent wall, wardrobe and media wall installs across South Africa — real projects, no renders. See the Twinx Interiors portfolio.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      <BackHomeButton />
      <BackToTopButton />

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-16 pt-24 lg:pt-[120px]">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="h-px w-7 bg-brand" />
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Real Work</span>
        </div>
        <h1 className="m-0 mb-5 max-w-[800px] font-jost text-[clamp(38px,5.5vw,64px)] font-light uppercase leading-[1.08] text-ink">
          Completed installs.
        </h1>
        <p className="m-0 max-w-[600px] text-[17px] leading-[1.7] text-muted">
          A look inside spaces Twinx has actually built — feature walls, wardrobes, media walls, and hallways across
          South Africa.
        </p>
      </section>

      <PortfolioGallery />

      <section className="w-full bg-cream px-5 sm:px-8 lg:px-12 py-16 lg:py-[120px] text-center">
        <h2 className="m-0 mb-8 font-jost text-[clamp(28px,4vw,42px)] font-light uppercase text-ink">
          See something close to what you want?
        </h2>
        <SolidButton href="/contact" size="lg">
          Request a Quote
        </SolidButton>
      </section>
    </div>
  );
}
