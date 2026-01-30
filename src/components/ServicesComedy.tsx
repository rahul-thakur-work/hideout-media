const services = [
  {
    icon: "🏢",
    title: "Corporate Gigs",
    description:
      "Make your team laugh till their cheeks hurt! We curate corporate comedy shows that boost morale, break ice, and create memories.",
    features: [
      "Annual Day Celebrations",
      "Team Building Events",
      "Product Launch Entertainment",
      "Client Appreciation Shows",
    ],
    cta: "Book Corporate Show",
    link: "/services/corporate",
  },
  {
    icon: "🎉",
    title: "Private Events",
    description:
      "Birthday? Anniversary? Just Tuesday? We bring the laughs to your private celebrations with comedians who vibe with your crowd.",
    features: [
      "Birthday Party Comedy",
      "Wedding Sangeet Shows",
      "House Party Entertainment",
      "Milestone Celebrations",
    ],
    cta: "Book Private Show",
    link: "/services/private",
  },
  {
    icon: "🎪",
    title: "Public Shows",
    description:
      "Want to catch our comedians live? Check out our public shows across India! From intimate clubs to massive auditoriums.",
    features: [
      "Comedy Club Shows",
      "Stand-up Specials",
      "Festival Performances",
      "Theater Tours",
    ],
    cta: "View Shows",
    link: "/comedy-club",
  },
];

export default function ServicesComedy() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[#ee0202]">
            🎭 What We Do Best
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#2f0003] sm:text-5xl">
            Comedy for Every Occasion
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#2f0003]/75">
            Whether it&apos;s making your office party legendary, your birthday
            unforgettable, or running sold-out comedy clubs — we&apos;ve got you
            covered! 🎤
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#2f0003]/10 bg-[#f8ddbf] p-8 transition hover:border-[#ee0202] hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ee0202] to-[#2f0003] text-3xl shadow-lg">
                {service.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#2f0003]">
                {service.title}
              </h3>

              <p className="mb-6 leading-relaxed text-[#2f0003]/75">
                {service.description}
              </p>

              <ul className="mb-8 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[#2f0003]/70"
                  >
                    <span className="mt-1 text-[#ee0202]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={service.link}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2f0003] py-3 text-sm font-semibold text-[#f8ddbf] transition hover:bg-black"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

