import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8ddbf] px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8 text-8xl">🎭</div>
        <h1 className="mb-4 text-4xl font-semibold text-[#2f0003] sm:text-5xl">
          Oops! This page went backstage...
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-[#2f0003]/75">
          Looks like this page took an early intermission! 🎪
          <span className="mt-2 block text-base">
            But don&apos;t worry — there&apos;s plenty of amazing stuff on the main stage. Let&apos;s get you back to the show!
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#ee0202] px-8 py-4 text-sm font-semibold tracking-wide text-[#f8ddbf] shadow-xl transition hover:bg-[#ff2626]"
          >
            🏠 Take Me Home
          </Link>
          <Link
            href="/#artists"
            className="inline-flex items-center gap-2 rounded-full border border-[#2f0003]/30 bg-white/70 px-8 py-4 text-sm font-semibold tracking-wide text-[#2f0003] transition hover:bg-white"
          >
            🎪 Browse Artists
          </Link>
        </div>
        <p className="mt-12 text-sm text-[#2f0003]/60">
          Still can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/#contact" className="font-semibold text-[#ee0202] hover:underline">
            Let&apos;s chat!
          </Link>
        </p>
      </div>
    </div>
  );
}

