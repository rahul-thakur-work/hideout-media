"use client";

import Link from "next/link";

export default function VideoHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
      {/* Minimal video background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/book-my-comedian.png"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Minimal content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-8 text-7xl font-bold leading-none text-white sm:text-8xl lg:text-9xl">
          Comedy.
          <span className="block italic text-[#ee0202]">Elevated.</span>
        </h1>

        <p className="mx-auto mb-12 max-w-md text-lg text-white/60">
          We manage India's finest comedians.
          <br />
          We produce unforgettable shows.
          <br />
          We run the club everyone talks about.
        </p>

        {/* Simple CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book-comedian"
            className="w-full border-b-2 border-[#ee0202] bg-[#ee0202] px-12 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#ff2626] sm:w-auto"
          >
            Book Now
          </Link>

          <Link
            href="/comedy-club"
            className="w-full border-b-2 border-white/20 px-12 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white/40 sm:w-auto"
          >
            Our Club
          </Link>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-white/20" />
      </div>
    </section>
  );
}

