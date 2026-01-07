import Image from "next/image";

const workItems = [
  {
    image: "/assets/shows-poster.png",
    alt: "Director and crew on set shooting branded content",
    category: "Brand series",
    title: "12-part vertical series for a fintech brand",
    description:
      "Idea to delivery in six weeks: concept, scripting, studio production and creator partnerships that drove 28% higher watch-through than benchmark.",
    tags: ["TikTok / Reels", "Studio production", "Brand integration"],
  },
  {
    image: "/assets/shows-poster.png",
    alt: "Podcast style long-form video production",
    category: "Original format",
    title: "Long-form creator show with embedded brand partners",
    description:
      "A talk-show style series built with recurring segments, giving brands ownable moments while keeping the community at the centre.",
    tags: ["YouTube", "Original IP", "Sponsorships"],
  },
  {
    image: "/assets/shows-poster.png",
    alt: "Multi-screen content strategy in a control room",
    category: "Media business",
    title: "End-to-end media & monetisation architecture",
    description:
      "Helping creator-led businesses structure channels, programming and monetisation so they can scale content and deal flow sustainably.",
    tags: ["Media strategy", "Revenue design", "Brand pipeline"],
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative bg-gradient-to-b from-[#f8ddbf] via-[#f8ddbf] to-[#f8ddbf] py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="parallax-slow absolute right-0 top-10 h-72 w-72 rounded-full bg-[#ee0202]/15 blur-3xl" />
        <div className="parallax-medium absolute left-10 bottom-0 h-64 w-64 rounded-full bg-[#2f0003]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2f0003]/70">
              Selected campaigns
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Media that doesn&apos;t just look good — it performs.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#2f0003]/75">
            From short-form vertical series to long-form originals, Hideout
            Media blends cinematic craft, platform-native thinking and
            measurable outcomes for every campaign.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <article
              key={index}
              className="parallax-card group flex flex-col overflow-hidden rounded-3xl border border-[#2f0003]/15 bg-[#f8ddbf] shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={600}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ee0202]">
                  {item.category}
                </p>
                <h3 className="text-base font-semibold text-[#2f0003]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2f0003]/70">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-[#2f0003]/60">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-[#2f0003]/20 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

