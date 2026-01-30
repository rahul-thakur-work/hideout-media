const whyUsPoints = [
  {
    title: "Most Exhaustive Artist List",
    description:
      "We provide a comprehensive catalogue of artists from across India - renowned stand-up comedians, popular motivational speakers, excellent DJs, talented musicians, and fluent anchors. Whether you need entertainment for a lavish wedding, corporate event, or intimate birthday celebration, we have the perfect artist for you.",
    icon: "🎭",
  },
  {
    title: "Streamlined & Hassle-Free Booking",
    description:
      "From shortlisting the right artist to securing bookings and getting the best prices, we ensure a seamless experience at every step. We understand the intricacies of artist booking so you don't have to. Our professional team handles all coordination and management.",
    icon: "⚡",
  },
  {
    title: "Most Competitive Prices Guaranteed",
    description:
      "We guarantee one of the best entertainment experiences at competitive fees anywhere in India. No hidden charges, no strings attached - just transparent pricing and professional service. We treat all our clients equally with ethical professionalism.",
    icon: "💰",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative bg-gradient-to-b from-[#f8ddbf] to-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(238,2,2,0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
            💝 Why people love working with us
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            We&apos;re not just booking agents — we&apos;re your event buddies! 🤝
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#2f0003]/75">
            We genuinely care about making your event special. No corporate jargon, no hidden fees, no surprises. 
            <span className="mt-2 block font-semibold text-[#2f0003]">
              Just honest recommendations, transparent pricing, and a team that goes the extra mile because we want you to succeed! ✨
            </span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whyUsPoints.map((point, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#2f0003]/15 bg-white/60 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.15)] backdrop-blur transition hover:shadow-[0_25px_90px_rgba(238,2,2,0.3)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ee0202] to-[#2f0003] text-2xl shadow-lg">
                {point.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#2f0003]">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#2f0003]/75">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-[#2f0003]/15 bg-gradient-to-br from-[#2f0003] to-black p-8 text-[#f8ddbf] shadow-[0_25px_90px_rgba(0,0,0,0.4)]">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ee0202]">500+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f8ddbf]/70">
                Events Delivered
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ee0202]">100+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f8ddbf]/70">
                Partner Venues
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ee0202]">Pan India</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f8ddbf]/70">
                All Major Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

