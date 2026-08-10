import Link from "next/link";

export function BackHomeButton() {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur transition-colors duration-200 hover:bg-brand hover:text-white"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
      </svg>
    </Link>
  );
}
