import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#f8ddbf] via-[#f8ddbf] to-[#f8ddbf] pt-24">
      {/* Contact info bar at top */}
      <div className="absolute left-0 right-0 top-20 z-20 border-b border-[#2f0003]/10 bg-[#f8ddbf]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
            👋 Let&apos;s make your event unforgettable!
          </p>
          <div className="flex items-center gap-6 text-xs text-[#2f0003]/70">
            <a href="tel:+919289113590" className="flex items-center gap-1 transition hover:text-[#ee0202]">
              📞 <span className="hidden sm:inline">Call us:</span> +91 9289113590
            </a>
            <a href="mailto:contact@hideoutmedia.in" className="flex items-center gap-1 transition hover:text-[#ee0202]">
              💬 <span className="hidden sm:inline">Chat:</span> contact@hideoutmedia.in
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 px-6 py-16 lg:flex-row lg:items-center">
        {/* Left copy */}
        <div className="max-w-xl space-y-8">
          <p className="text-xs font-semibold tracking-wide text-[#2f0003]/70">
            🎉 Your favorite entertainment partners across India
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            We bring the{" "}
            <span className="bg-gradient-to-r from-[#2f0003] via-black to-[#ee0202] bg-clip-text text-transparent">
              laughter, music & magic
            </span>{" "}
            to your events
          </h1>
          <p className="text-sm leading-relaxed text-[#2f0003]/75 sm:text-base">
            Whether it&apos;s a hilarious comedian to crack up your team, a DJ to set the dance floor on fire, or an inspiring speaker to motivate your audience — we&apos;ve got the perfect artist for you! 
            <span className="mt-2 block text-[#ee0202]">
              ✨ Real talent. Real connections. Real memories.
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#ee0202] px-7 py-3 text-xs font-semibold tracking-wide text-[#f8ddbf] shadow-[0_15px_60px_rgba(0,0,0,0.7)] transition hover:bg-[#ff2626] hover:shadow-[0_20px_70px_rgba(238,2,2,0.5)]"
            >
              🎯 Let&apos;s Find Your Perfect Artist
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#artists"
              className="inline-flex items-center gap-2 rounded-full border border-[#2f0003]/30 bg-black/20 px-6 py-3 text-xs font-medium tracking-wide text-[#2f0003]/80 backdrop-blur transition hover:border-[#2f0003]/60 hover:bg-white/30 hover:text-black"
            >
              👀 Meet Our Artists
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs text-[#2f0003]/60">
            <div>
              <p className="flex items-center gap-1 text-lg font-semibold text-[#2f0003]">
                🎊 500+
              </p>
              <p className="mt-1 max-w-[8rem]">
                Happy clients who threw amazing events with us
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 text-lg font-semibold text-[#2f0003]">
                ⭐ 100+
              </p>
              <p className="mt-1 max-w-[8rem]">
                Talented artists who trust us (and audiences who love them!)
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 text-lg font-semibold text-[#2f0003]">
                🗺️ Pan-India
              </p>
              <p className="mt-1 max-w-[8rem]">
                From Mumbai to Delhi, Bangalore to Kolkata — we&apos;re everywhere you are
              </p>
            </div>
          </div>
        </div>

       {/* Right visual panel */}
       <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="parallax-card relative rounded-3xl border border-[#2f0003]/15 bg-[#2f0003] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between px-3 py-2 text-[10px] tracking-wide text-[#f8ddbf]/60">
                  <span>✨ Recent Hits</span>
                  <span className="flex items-center gap-1">
                    🎪 Live Shows
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ee0202]" />
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#2f0003]/10 bg-black/40">
                  <Image
                    src="/assets/hero-poster.jpeg"
                    alt="Live performance at corporate event"
                    width={900}
                    height={600}
                    className="h-64 w-full object-cover sm:h-80"
                    priority
                  />
                  <div className="grid gap-4 bg-black/60 p-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        Comedians
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Stand-up Comedy
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Renowned comedians to make your audience laugh out loud.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        DJs & Musicians
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Live Entertainment
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Top DJs and bands to set the perfect party vibe.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        Speakers
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Motivational Talks
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Inspiring speakers to energize your corporate teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="parallax-tagline pointer-events-none absolute -bottom-6 left-4 rounded-full bg-[#2f0003]/10 px-4 py-2 text-[10px] tracking-wide text-[#f8ddbf] backdrop-blur">
                💝 Where great events meet unforgettable moments
              </div>
            </div>
      </div>
    </section>
  );
}

