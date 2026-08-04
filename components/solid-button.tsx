import Link from "next/link";
import type { ReactNode } from "react";

type SolidButtonProps = {
  href: string;
  children: ReactNode;
  size?: "lg" | "md";
  external?: boolean;
};

const sizeClasses: Record<NonNullable<SolidButtonProps["size"]>, string> = {
  lg: "px-8 py-4 text-[15px]",
  md: "px-7 py-3.5 text-sm",
};

export function SolidButton({ href, children, size = "lg", external = false }: SolidButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      {...externalProps}
      className={`inline-block rounded-[3px] bg-brand font-jost font-bold text-white no-underline transition-colors duration-200 hover:bg-brand-dark ${sizeClasses[size]}`}
    >
      {children}
    </Link>
  );
}
