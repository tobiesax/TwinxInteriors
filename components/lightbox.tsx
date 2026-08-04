"use client";

import Image from "next/image";

export type LightboxItem = { id: string; label: string; src: string; detail?: string };

export function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  heightClass = "h-[70vh]",
}: {
  item: LightboxItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  heightClass?: string;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(20,18,16,0.92)] p-12"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-8 top-7 cursor-pointer border-none bg-transparent text-3xl leading-none text-white"
      >
        ×
      </button>
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/[0.12] text-xl text-white transition-colors duration-200 hover:bg-white/[0.24]"
        >
          ‹
        </button>
      )}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/[0.12] text-xl text-white transition-colors duration-200 hover:bg-white/[0.24]"
        >
          ›
        </button>
      )}
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[1000px]">
        <div className={`relative ${heightClass} overflow-hidden rounded-[3px] bg-[#111]`}>
          <Image src={item.src} alt={item.label} fill className="object-contain" sizes="100vw" />
        </div>
        <div className="mt-5">
          <div className="text-[17px] font-bold text-white">{item.label}</div>
          {item.detail && (
            <div className="mt-2 max-w-[640px] text-[14.5px] leading-[1.7] text-[#D8D6D2]">{item.detail}</div>
          )}
        </div>
      </div>
    </div>
  );
}
