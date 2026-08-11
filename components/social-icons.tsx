function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82c-.87-.96-1.35-2.2-1.35-3.5h-3.07v13.6a2.9 2.9 0 1 1-2.05-2.77v-3.13a6 6 0 1 0 5.12 5.93V9.4a6.7 6.7 0 0 0 3.9 1.25V7.6a3.9 3.9 0 0 1-2.55-1.78Z" />
    </svg>
  );
}

export function SocialIcons({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.instagram.com/twinxinteriors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twinx Interiors on Instagram"
        className={linkClassName}
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.tiktok.com/@twinxinteriors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twinx Interiors on TikTok"
        className={linkClassName}
      >
        <TikTokIcon />
      </a>
    </div>
  );
}
