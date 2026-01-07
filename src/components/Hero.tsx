import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#f8ddbf] via-[#f8ddbf] to-[#f8ddbf] pt-24">
      {/* Parallax background gradients */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="parallax-slow absolute -left-48 top-[-10%] h-80 w-80 rounded-full bg-[#ee0202]/20 blur-3xl" />
        <div className="parallax-medium absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#2f0003]/10 blur-3xl" />
        <div className="parallax-fast absolute left-1/4 bottom-[-20%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#ee0202]/30 blur-3xl" />
      </div> */}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 px-6 py-16 lg:flex-row lg:items-center">
        {/* Left copy */}
        <div className="max-w-xl space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2f0003]/70">
            Hideout Media Studio
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            We turn{" "}
            <span className="bg-gradient-to-r from-[#2f0003] via-black to-[#ee0202] bg-clip-text text-transparent">
              attention
            </span>{" "}
            into predictable brand deals.
          </h1>
          <p className="text-sm leading-relaxed text-[#2f0003]/75 sm:text-base">
            Hideout Media is a full-stack content studio and media business
            built for creators, talent and brands who want more than just
            views. We architect formats, produce at studio quality and
            engineer partnerships that drive revenue.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#ee0202] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-[0_15px_60px_rgba(0,0,0,0.7)] transition hover:bg-[#ff2626]"
            >
              Let&apos;s talk campaigns
              <span className="text-lg leading-none group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-[#2f0003]/30 bg-black/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#2f0003]/80 backdrop-blur hover:border-[#2f0003]/60 hover:text-black"
            >
              View our work
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs text-[#2f0003]/60">
            <div>
              <p className="font-semibold text-[#2f0003]">200M+</p>
              <p className="mt-1 max-w-[8rem]">
                Organic views generated across platforms
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#2f0003]">+35</p>
              <p className="mt-1 max-w-[8rem]">
                Brands trusted us with multi-platform campaigns
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#2f0003]">End-to-end</p>
              <p className="mt-1 max-w-[8rem]">
                From concept and production to brand partnership strategy
              </p>
            </div>
          </div>
        </div>

       {/* Right visual panel */}
       <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="parallax-card relative rounded-3xl border border-[#2f0003]/15 bg-[#2f0003] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-[#f8ddbf]/60">
                  <span>Campaign dashboard</span>
                  <span className="flex items-center gap-1">
                    Live campaigns
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ee0202]" />
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#2f0003]/10 bg-black/40">
                  <Image
                    src="/assets/hero-poster.jpeg"
                    alt="Cinematic studio team working on production"
                    width={900}
                    height={600}
                    className="h-64 w-full object-cover sm:h-80"
                    priority
                  />
                  <div className="grid gap-4 bg-black/60 p-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        Creator brands
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Hideout Originals
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Owned IP and flagship formats built in-house.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        Brand deals
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Integrated storytelling
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Deep brand integrations that feel native, not forced.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#f8ddbf]/60">
                        Media business
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f8ddbf]">
                        Revenue architecture
                      </p>
                      <p className="mt-1 text-[11px] text-[#f8ddbf]/65">
                        Monetisation strategy across ads, brands & IP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="parallax-tagline pointer-events-none absolute -bottom-6 left-4 rounded-full bg-[#2f0003]/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#f8ddbf] backdrop-blur">
                Built for creators, loved by brands.
              </div>
            </div>
      </div>
    </section>
  );
}

