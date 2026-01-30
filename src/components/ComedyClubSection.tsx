import Link from "next/link";

export default function ComedyClubSection() {
  return (
    <section id="comedy-club" className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 h-1 w-16 bg-[#ee0202]" />
            <h2 className="mb-8 text-5xl font-bold leading-tight">
              The
              <br />
              Hideout
              <br />
              <span className="italic text-[#ee0202]">Club</span>
            </h2>
            <p className="mb-8 text-xl text-white/60">
              Where India's best comedians test new material.
              <br />
              Where legends are made.
            </p>
            <Link
              href="/comedy-club"
              className="inline-block border-b-2 border-[#ee0202] bg-[#ee0202] px-12 py-4 text-sm font-bold uppercase tracking-wider transition hover:bg-[#ff2626]"
            >
              View Shows
            </Link>
          </div>

          <div className="relative aspect-video overflow-hidden bg-[#2f0003]">
            <video
              className="h-full w-full object-cover opacity-50"
              loop
              muted
              playsInline
              poster="/assets/show-poster-surprise.jpeg"
            >
              <source src="/videos/comedy-club-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="grid gap-4 text-center md:grid-cols-3">
          <div className="border-t border-white/20 pt-8">
            <p className="mb-2 text-4xl font-bold">Weekly</p>
            <p className="text-sm text-white/60">Open Mic Nights</p>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="mb-2 text-4xl font-bold">50+</p>
            <p className="text-sm text-white/60">Shows per Month</p>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="mb-2 text-4xl font-bold">200</p>
            <p className="text-sm text-white/60">Seat Capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
