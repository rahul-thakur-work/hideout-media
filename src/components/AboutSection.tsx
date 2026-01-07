import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(47,0,3,0.1),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row">
        <div className="parallax-card relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#2f0003]/15 bg-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
          <Image
            src="/assets/show-poster-surprise.jpeg"
            alt="Hideout Media team collaborating in a control room"
            width={1000}
            height={1000}
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8ddbf] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2f0003]/80">
              Behind the scenes
            </p>
            <p className="mt-2 text-sm font-semibold text-[#2f0003]">
              Built at the intersection of creators, studios and brands.
            </p>
          </div>
        </div>

        <div className="max-w-xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2f0003]/70">
            The hideout philosophy
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl text-[#2f0003]">
            A media company first, a production partner always.
          </h2>
          <p className="text-sm text-[#2f0003]/75">
            Hideout Media started as a creator-first studio, obsessing over
            what keeps audiences watching just one more video. That lens now
            shapes everything we do for brands and talent partners.
          </p>
          <p className="text-sm text-[#2f0003]/75">
            We think like showrunners and revenue operators, not just
            videographers—so every frame we shoot and every integration we
            design has a clear job to do for your funnel.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2f0003]/70">
            <div>
              <p className="text-sm font-semibold text-[#2f0003]">
                Studio in the city, strategy in the cloud
              </p>
              <p className="mt-1 max-w-xs">
                On-set where it matters, remote where it makes sense—optimised
                for fast-moving campaigns.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2f0003]">
                Platform-native thinking
              </p>
              <p className="mt-1 max-w-xs">
                We design for YouTube, Shorts, Reels, TikTok and podcasts from
                day zero, not in the edit suite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

