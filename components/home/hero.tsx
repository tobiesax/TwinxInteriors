"use client";

import { SolidButton } from "@/components/solid-button";
import { FlowButton } from "@/components/flow-button";

export function Hero() {
  return (
    <section className="relative flex h-[calc(100dvh-64px)] min-h-[560px] items-end overflow-hidden px-5 sm:px-8 lg:px-12 pb-10 lg:h-[calc(100dvh-76px)] lg:pb-[60px]">
      <div className="absolute inset-0 z-0">
        {/* Mobile/tablet: dedicated portrait shot (9:16), no side-cropping like a landscape source would need */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/uploads/hero-video-mobile-portrait.mp4"
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
        />
        {/* Desktop: full-res hero video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/uploads/hero-video-3.mp4"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-wrap items-start justify-between gap-8">
        <div className="min-w-0 max-w-[520px] flex-1 sm:min-w-[380px]">
          <h1 className="m-0 mb-4 font-jost text-[clamp(30px,4.2vw,50px)] font-light uppercase leading-[1.15] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.3)] lg:mb-5 lg:leading-[1.1]">
            Interiors, built for spaces that refuse to be ordinary.
          </h1>
          <p className="m-0 mb-6 max-w-[460px] text-sm leading-[1.6] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.3)] lg:mb-8">
            Every space tells a story before a word is said. Twinx shapes that story — unique wall decor and
            cabinetry, and full room redesigns across South Africa.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
            <SolidButton href="/contact" size="lg">
              Request a Quote
            </SolidButton>
            <FlowButton href="/portfolio" variant="outline-dark" size="lg">
              See Our Work
            </FlowButton>
          </div>
        </div>
      </div>

      <a
        href="#how-we-work"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("how-we-work")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to next section"
        className="absolute bottom-7 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2 p-2 text-white no-underline lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.14em] [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">Scroll</span>
        <span className="relative h-[26px] w-px bg-white/50">
          <span className="absolute left-[-2.5px] h-1.5 w-1.5 animate-[scroll-dot_1.8s_ease-in-out_infinite] rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
