import Link from "next/link";
import type { ReactNode } from "react";

type FlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline-dark" | "outline-light";
  size?: "lg" | "md" | "sm";
  external?: boolean;
};

const variantClasses: Record<NonNullable<FlowButtonProps["variant"]>, string> = {
  solid: "bg-brand text-white border border-transparent",
  "outline-dark": "bg-transparent text-white border-[1.5px] border-white/70 hover:border-brand",
  "outline-light":
    "bg-transparent text-ink border-[1.5px] border-black/20 hover:border-brand",
};

const sizeClasses: Record<NonNullable<FlowButtonProps["size"]>, string> = {
  lg: "px-[34px] py-4 text-[15px]",
  md: "px-7 py-3.5 text-sm",
  sm: "px-[26px] py-3 text-sm",
};

export function FlowButton({
  href,
  children,
  variant = "solid",
  size = "md",
  external = false,
}: FlowButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      {...externalProps}
      className={`group relative inline-flex items-center overflow-hidden rounded-[3px] font-jost font-bold no-underline transition-colors duration-[400ms] ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      <span className="pointer-events-none absolute left-[22px] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand transition-[width,height] duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-[340px] group-hover:w-[340px]" />
      <span className="relative z-10 -mr-[18px] inline-block -translate-x-[140%] opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:mr-3 group-hover:translate-x-0 group-hover:opacity-100">
        →
      </span>
      <span className="relative z-10 ml-[14px] transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5">
        {children}
      </span>
    </Link>
  );
}
