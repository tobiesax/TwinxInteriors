"use client";

import { useRef } from "react";
import { SolidButton } from "@/components/solid-button";
import { FlowButton } from "@/components/flow-button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative flex h-[calc(100vh-76px)] items-end overflow-hidden px-12 pb-[60px]">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onEnded={(e) => {
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
          src="/uploads/hero-video.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-wrap items-start justify-between gap-8">
        <div className="min-w-[380px] max-w-[520px] flex-1">
          <div className="mb-6 flex items-center gap-2.5">
            <span className="h-px w-7 bg-white" />
            <span className="text-[13px] uppercase tracking-[0.14em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
              Pretoria &amp; Durban
            </span>
          </div>
          <h1 className="m-0 mb-5 font-jost text-[clamp(28px,4.2vw,50px)] font-light uppercase leading-[1.1] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]">
            Interiors, built for spaces that refuse to be ordinary.
          </h1>
          <p className="m-0 mb-8 max-w-[460px] text-sm leading-[1.6] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">
            Every space tells a story before a word is said. Twinx shapes that story — wall moulding, feature walls,
            and full room redesigns across South Africa.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <SolidButton href="/contact" size="lg">
              Get a Project Quote
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
        className="absolute bottom-7 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 p-2 text-white no-underline"
      >
        <span className="text-[11px] uppercase tracking-[0.14em] [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">Scroll</span>
        <span className="relative h-[26px] w-px bg-white/50">
          <span className="absolute left-[-2.5px] h-1.5 w-1.5 animate-[scroll-dot_1.8s_ease-in-out_infinite] rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
