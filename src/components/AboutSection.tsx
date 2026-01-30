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
              Our events
            </p>
            <p className="mt-2 text-sm font-semibold text-[#2f0003]">
              Creating unforgettable entertainment experiences across India.
            </p>
          </div>
        </div>

        <div className="max-w-xl space-y-5">
          <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
            🎪 Our story (the short version!)
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl text-[#2f0003]">
            We started with a simple idea: great events need great people ✨
          </h2>
          <p className="text-sm leading-relaxed text-[#2f0003]/75">
            Remember that feeling when everything just *clicks* at an event? The comedian who gets your crowd. The DJ who reads the room perfectly. The speaker who actually inspires instead of boring everyone. 
            <span className="mt-2 block font-semibold text-[#2f0003]">
              That&apos;s what we do — we find those perfect matches! 🎯
            </span>
          </p>
          <p className="text-sm leading-relaxed text-[#2f0003]/75">
            Over 500+ events later (yeah, we&apos;ve been busy!), from intimate birthday parties to massive corporate galas, we&apos;ve learned one thing: when you treat artists right and truly care about your clients, magic happens. No corporate BS, no hidden fees — just real people helping real people throw amazing events. 
            <span className="mt-2 block">
              🎉 Plus, we genuinely think laughter is the best medicine (science backs us up on this!)
            </span>
          </p>
          <div className="flex flex-wrap gap-6 pt-2 text-xs text-[#2f0003]/70">
            <div>
              <p className="text-sm font-semibold text-[#2f0003]">
                Pan-India Coverage
              </p>
              <p className="mt-1 max-w-xs">
                Serving Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune,
                Chandigarh, Hyderabad, and all major cities across India.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2f0003]">
                Comprehensive Artist Network
              </p>
              <p className="mt-1 max-w-xs">
                Access to 100+ top-rated comedians, DJs, musicians, motivational
                speakers, and professional anchors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

