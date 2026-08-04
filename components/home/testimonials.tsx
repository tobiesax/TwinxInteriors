"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/home-content";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative border-t border-black/[0.06] bg-white px-12 py-[120px]">
      <div className="mx-auto max-w-[800px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">What Clients Say</div>
        <div className="flex min-h-[180px] items-center justify-center">
          <div key={active.id} className="animate-[fade-slide_0.6s_ease]">
            <p className="m-0 mb-6 font-jost text-[clamp(20px,2.4vw,28px)] font-light leading-[1.5] text-ink">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="text-sm font-semibold text-muted">{active.name}</div>
            <div className="text-[13px] text-muted-2">{active.role}</div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className="h-2 w-2 rounded-full border-none p-0"
              style={{ background: i === index ? "#E2372B" : "rgba(0,0,0,0.15)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
