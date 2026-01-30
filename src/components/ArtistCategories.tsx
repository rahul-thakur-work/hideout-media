import Image from "next/image";
import Link from "next/link";

const artistCategories = [
  {
    image: "/assets/shows-poster.png",
    alt: "Stand-up comedian performing live on stage",
    category: "Comedians",
    slug: "comedian",
    title: "Book Stand-Up Comedians",
    description:
      "Hire the best stand-up comedians in India to make your corporate shows, weddings, and private events unforgettable. Our roster includes renowned comedians who specialize in clean, relatable humor that connects with diverse audiences.",
    tags: ["Corporate Shows", "Wedding Entertainment", "Private Events"],
    cta: "Book a Comedian",
    cities: ["delhi-ncr", "mumbai", "bangalore"],
  },
  {
    image: "/assets/shows-poster.png",
    alt: "DJ performing at a high-energy event",
    category: "DJs, Musicians & Bands",
    slug: "dj-musician",
    title: "Hire DJs and Live Musicians",
    description:
      "From high-energy DJs for your parties to soulful live bands for intimate gatherings, we have the perfect musical talent. Whether it's Bollywood, EDM, Rock, or Classical, our artists deliver performances that elevate your event.",
    tags: ["Wedding DJs", "Corporate Parties", "Live Bands"],
    cta: "Book a DJ",
    cities: ["delhi-ncr", "mumbai", "bangalore"],
  },
  {
    image: "/assets/shows-poster.png",
    alt: "Motivational speaker addressing a corporate audience",
    category: "Motivational Speakers",
    slug: "motivational-speaker",
    title: "Book Inspiring Motivational Speakers",
    description:
      "Energize your team with India's most inspiring motivational speakers. Perfect for corporate events, conferences, and team-building sessions, our speakers deliver powerful messages that drive real change and boost morale.",
    tags: ["Corporate Events", "Conferences", "Team Building"],
    cta: "Book a Speaker",
    cities: ["delhi-ncr", "mumbai", "bangalore"],
  },
  {
    image: "/assets/shows-poster.png",
    alt: "Professional anchor hosting a corporate event",
    category: "Anchors / Emcee",
    slug: "anchor",
    title: "Hire Professional Anchors & Emcees",
    description:
      "Our experienced anchors and emcees ensure your event flows seamlessly. Fluent, charismatic, and professional, they keep your audience engaged throughout product launches, weddings, conferences, and award ceremonies.",
    tags: ["Product Launches", "Weddings", "Award Shows"],
    cta: "Book an Anchor",
    cities: ["delhi-ncr", "mumbai", "bangalore"],
  },
];

export default function ArtistCategories() {
  return (
    <section
      id="artists"
      className="relative bg-gradient-to-b from-[#f8ddbf] via-[#f8ddbf] to-[#f8ddbf] py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="parallax-slow absolute right-0 top-10 h-72 w-72 rounded-full bg-[#ee0202]/15 blur-3xl" />
        <div className="parallax-medium absolute left-10 bottom-0 h-64 w-64 rounded-full bg-[#2f0003]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
              🎪 Who&apos;s in our family?
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Meet the stars who&apos;ll make your event shine! ✨
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#2f0003]/75">
            From stand-up comedians who&apos;ll have everyone in tears (the good kind!) to DJs who know exactly when to drop that beat — we&apos;ve handpicked the best talent across India, just for you! 🎵😂🎤
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {artistCategories.map((artist, index) => (
            <article
              key={index}
              className="parallax-card group flex flex-col overflow-hidden rounded-3xl border border-[#2f0003]/15 bg-white/80 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur"
            >
              <div className="overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.alt}
                  width={900}
                  height={600}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ee0202]">
                  {artist.category}
                </p>
                <h3 className="text-lg font-semibold text-[#2f0003]">
                  {artist.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#2f0003]/75">
                  {artist.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-[#2f0003]/60">
                  {artist.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-[#2f0003]/20 bg-[#f8ddbf]/50 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <Link
                    href={`/book-${artist.slug}-${artist.cities[0]}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ee0202] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] shadow-lg transition hover:bg-[#ff2626]"
                  >
                    View Artists
                    <span className="text-base">→</span>
                  </Link>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {artist.cities.slice(0, 3).map((city: string, idx: number) => (
                      <Link
                        key={idx}
                        href={`/book-${artist.slug}-${city}`}
                        className="text-[10px] text-[#2f0003]/60 hover:text-[#ee0202] underline"
                      >
                        {city.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

