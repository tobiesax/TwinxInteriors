"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  className = "",
  speed = 90,
  deleteSpeed = 55,
  startDelay = 300,
  loop = false,
  pauseAfterType = 1400,
  pauseAfterDelete = 500,
}: {
  text: string;
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  loop?: boolean;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    function typeStep(i: number) {
      if (cancelled) return;
      setCount(i);
      if (i < text.length) {
        timer = setTimeout(() => typeStep(i + 1), speed);
      } else if (loop) {
        timer = setTimeout(() => deleteStep(text.length), pauseAfterType);
      }
    }

    function deleteStep(i: number) {
      if (cancelled) return;
      setCount(i);
      if (i > 0) {
        timer = setTimeout(() => deleteStep(i - 1), deleteSpeed);
      } else {
        timer = setTimeout(() => typeStep(0), pauseAfterDelete);
      }
    }

    setCount(0);
    timer = setTimeout(() => typeStep(0), startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [text, speed, deleteSpeed, startDelay, loop, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span
          className="ml-[2px] inline-block w-[2px] animate-[caret-blink_1s_steps(1)_infinite] translate-y-[0.05em] bg-current align-middle"
          style={{ height: "0.85em" }}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
