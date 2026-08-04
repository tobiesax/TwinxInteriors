import { Hero } from "@/components/home/hero";
import { ProofGallery } from "@/components/home/proof-gallery";
import { ExploreMaterials } from "@/components/home/explore-materials";
import { InstagramReels } from "@/components/home/instagram-reels";
import { ClientLogoMarquee } from "@/components/home/client-logo-marquee";
import { Testimonials } from "@/components/home/testimonials";
import { Reveal } from "@/components/reveal";
import { FlowButton } from "@/components/flow-button";
import { SolidButton } from "@/components/solid-button";
import { processSteps } from "@/lib/home-content";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      <ProofGallery />

      <section id="how-we-work" className="relative border-y border-black/[0.06] bg-white px-12 py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
            Our Design Process
          </div>
          <h2 className="m-0 mb-14 max-w-[640px] font-jost text-[clamp(30px,4vw,46px)] font-light leading-[1.1] text-ink">
            A straightforward procedure, start to finish.
          </h2>
          <Reveal className="flex flex-col">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="grid grid-cols-1 gap-4 border-t border-black/10 py-9 sm:grid-cols-[minmax(160px,280px)_1fr] sm:gap-10"
              >
                <div className="flex items-baseline gap-3.5">
                  <span className="font-poppins text-[15px] font-bold text-brand">{step.n}</span>
                  <span className="font-poppins text-xl text-ink">{step.title}</span>
                </div>
                <p className="m-0 max-w-[640px] text-base leading-[1.7] text-muted">{step.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative flex flex-wrap items-center justify-center gap-6 bg-cream px-12 py-11 text-center">
        <div className="font-poppins text-lg font-semibold text-ink">Know your process. Ready for your quote?</div>
        <FlowButton href="/contact" variant="solid" size="sm">
          Get a Project Quote
        </FlowButton>
      </section>

      <ExploreMaterials />

      <section className="relative flex flex-wrap items-center justify-center gap-6 bg-cream px-12 py-11">
        <div className="font-poppins text-lg font-semibold text-ink">Found the material for your space?</div>
        <FlowButton href="/contact" variant="solid" size="sm">
          Request a Quote
        </FlowButton>
      </section>

      <InstagramReels />

      <ClientLogoMarquee />

      <Testimonials />

      <section className="relative border-t border-black/[0.06] bg-cream px-12 py-[130px] text-center">
        <Reveal>
          <h2 className="m-0 mb-5 font-jost text-[clamp(34px,5vw,58px)] font-light leading-[1.08] text-ink">
            Ready to see what your space could be?
          </h2>
          <p className="m-0 mb-10 text-[17px] text-muted">Tell us about the space — we&apos;ll come back with a quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <SolidButton href="/contact" size="lg">
              Get a Project Quote
            </SolidButton>
            <FlowButton href="https://wa.me/27120040919" variant="outline-light" size="lg" external>
              Chat on WhatsApp
            </FlowButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
