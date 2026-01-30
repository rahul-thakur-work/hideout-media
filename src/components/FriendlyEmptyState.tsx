import Link from "next/link";

interface FriendlyEmptyStateProps {
  title?: string;
  message?: string;
  emoji?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function FriendlyEmptyState({
  title = "Oops, nothing here yet!",
  message = "Don't worry, we're always adding new artists. Check back soon, or let us know what you're looking for!",
  emoji = "🎭",
  ctaText = "Get in Touch",
  ctaLink = "/#contact",
}: FriendlyEmptyStateProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-3xl border border-[#2f0003]/15 bg-white/70 p-12 text-center">
      <div className="text-6xl">{emoji}</div>
      <h3 className="text-xl font-semibold text-[#2f0003]">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-[#2f0003]/75">
        {message}
      </p>
      <Link
        href={ctaLink}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ee0202] px-6 py-3 text-xs font-semibold tracking-wide text-[#f8ddbf] shadow-lg transition hover:bg-[#ff2626]"
      >
        {ctaText}
        <span className="text-base">→</span>
      </Link>
    </div>
  );
}

