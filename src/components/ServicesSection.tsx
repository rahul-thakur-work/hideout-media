const services = [
  {
    category: "Studio & production",
    title: "Concept, shoot & post",
    description:
      "Format development, scripting, direction, on-set crew and post-production for both short-form and long-form video.",
    features: [
      "Multi-cam studio shoots",
      "Vertical-first content",
      "Trailers, teasers & cutdowns",
    ],
  },
  {
    category: "Media & channel strategy",
    title: "Build a media business, not just a channel",
    description:
      "Programming strategy, release calendars, format stacks and analytics that keep you ahead of the algorithm.",
    features: [
      "YouTube & short-form audits",
      "IP & show bible development",
      "Multi-channel rollouts",
    ],
  },
  {
    category: "Brand partnerships",
    title: "From inbound leads to long-term deals",
    description:
      "Positioning, packaging and partnership operations that turn interest into repeatable revenue.",
    features: [
      "Brand decks & media kits",
      "Campaign architecture",
      "Deal structuring & reporting",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(238,2,2,0.4),_transparent_55%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2f0003]/70">
              What we do
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              One partner for content, media and deals.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#2f0003]/75">
            We sit at the intersection of a production house, a media company
            and a partnerships team—so you don&apos;t have to coordinate five
            different vendors to ship one great campaign.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#2f0003]/15 bg-white/50 p-6 backdrop-blur"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ee0202]">
                {service.category}
              </p>
              <h3 className="mt-3 text-base font-semibold text-[#2f0003]">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-[#2f0003]/75">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1 text-xs text-[#2f0003]/70">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

