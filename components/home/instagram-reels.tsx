"use client";

import { useRef, useState } from "react";
import { reels } from "@/lib/home-content";

function ReelTile({ src, caption }: { src: string; caption?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <div
      onClick={toggle}
      className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded bg-[#EFEDE9]"
    >
      <video ref={videoRef} loop muted playsInline preload="metadata" src={src} className="absolute inset-0 h-full w-full object-cover" />
      {caption && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_30%)]" />
          <div className="pointer-events-none absolute bottom-[60px] left-3.5 right-3.5 text-right">
            <span className="text-xs font-semibold leading-[1.4] text-white">{caption}</span>
          </div>
        </>
      )}
      {paused && (
        <div className="pointer-events-none absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.65)_100%)] p-[18px]">
          <span className="text-[13px] font-semibold text-white">▶ Play Reel</span>
        </div>
      )}
    </div>
  );
}

export function InstagramReels() {
  return (
    <section className="relative px-5 sm:px-8 lg:px-12 py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">On Instagram</div>
            <h2 className="m-0 max-w-[600px] font-jost text-[clamp(28px,3.6vw,42px)] font-light uppercase leading-[1.1] text-ink">
              Behind the scenes, in motion
            </h2>
          </div>
          <a
            href="https://www.instagram.com/twinxinteriors"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap border-b border-brand pb-1 text-sm font-semibold text-ink no-underline"
          >
            Follow on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reels.map((reel) => (
            <ReelTile key={reel.id} src={reel.src} caption={reel.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}
