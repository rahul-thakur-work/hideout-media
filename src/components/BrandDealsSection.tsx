const brandWork = [
  {
    type: "Brand Integration",
    title: "Amazon Prime Video - Comedy Specials",
    description:
      "Produced 5 stand-up specials for Prime Video with our managed comedians, reaching 10M+ viewers across India.",
    result: "10M+ views",
    icon: "🎬",
  },
  {
    type: "Content Creation",
    title: "Swiggy - Comedy Campaign",
    description:
      "Created viral comedy content series featuring relatable food delivery moments. 50+ videos, 25M combined views.",
    result: "25M+ views",
    icon: "📱",
  },
  {
    type: "Live Shows",
    title: "Tech Giants - Corporate Comedy",
    description:
      "Monthly comedy shows for Google, Amazon, Microsoft, and more. Making workplaces funnier, one laugh at a time!",
    result: "100+ corporate shows",
    icon: "🏢",
  },
];

export default function BrandDealsSection() {
  return (
    <section className="bg-[#f8ddbf] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[#ee0202]">
            🤝 Brand Collaborations
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#2f0003] sm:text-5xl">
            We Make Brands Funny
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#2f0003]/75">
            From viral campaigns to branded comedy specials — we help brands
            connect with audiences through laughter. Because funny content gets
            shared, remembered, and loved! 🚀
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {brandWork.map((work, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#2f0003]/10 bg-white p-8 transition hover:border-[#ee0202] hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ee0202] to-[#2f0003] text-3xl shadow-lg">
                {work.icon}
              </div>

              <div className="mb-3 inline-flex rounded-full bg-[#ee0202]/10 px-3 py-1 text-xs font-semibold text-[#ee0202]">
                {work.type}
              </div>

              <h3 className="mb-3 text-xl font-bold text-[#2f0003]">
                {work.title}
              </h3>

              <p className="mb-4 leading-relaxed text-[#2f0003]/75">
                {work.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#ee0202]">
                <span>✨</span>
                <span>{work.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Services for brands */}
        <div className="rounded-3xl border border-[#2f0003]/10 bg-white p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#2f0003]">
            What We Offer Brands
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 text-4xl">🎥</div>
              <h4 className="mb-2 font-semibold text-[#2f0003]">
                Content Creation
              </h4>
              <p className="text-sm text-[#2f0003]/70">
                Viral comedy videos for social media
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 text-4xl">🎤</div>
              <h4 className="mb-2 font-semibold text-[#2f0003]">
                Brand Integration
              </h4>
              <p className="text-sm text-[#2f0003]/70">
                Seamless product placement in shows
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 text-4xl">🎪</div>
              <h4 className="mb-2 font-semibold text-[#2f0003]">
                Sponsored Events
              </h4>
              <p className="text-sm text-[#2f0003]/70">
                Branded comedy shows & experiences
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 text-4xl">🎬</div>
              <h4 className="mb-2 font-semibold text-[#2f0003]">
                Video Production
              </h4>
              <p className="text-sm text-[#2f0003]/70">
                Full-service comedy content production
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/brand-partnerships"
              className="inline-flex items-center gap-2 rounded-full bg-[#ee0202] px-8 py-4 text-sm font-semibold text-[#f8ddbf] transition hover:bg-[#ff2626]"
            >
              🤝 Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

