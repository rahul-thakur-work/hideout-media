import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import Artist from "@/lib/models/Artist";

type Props = {
  params: { slug: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await dbConnect();
  const artist = await Artist.findOne({ slug: params.slug }).lean();

  if (!artist) {
    return {
      title: "Artist Not Found | Hideout Media",
    };
  }

  return {
    title: `Book ${artist.name} | ${artist.category} | Hideout Media`,
    description: artist.shortDescription,
  };
}

export default async function ArtistProfilePage({ params }: Props) {
  await dbConnect();

  const artist = await Artist.findOne({ slug: params.slug }).lean();

  if (!artist) {
    notFound();
  }

  const categoryDisplay = {
    comedian: "Comedian",
    "dj-musician": "DJ / Musician",
    "motivational-speaker": "Motivational Speaker",
    anchor: "Anchor / Emcee",
  }[artist.category];

  return (
    <div className="min-h-screen bg-[#f8ddbf] pt-20">
      {/* Hero Section */}
      <section className="border-b border-[#2f0003]/10 bg-gradient-to-b from-[#f8ddbf] to-white/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#2f0003]/60">
            <Link href="/" className="hover:text-[#ee0202]">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/book-${artist.category}-${artist.cities[0]}`}
              className="hover:text-[#ee0202]"
            >
              {categoryDisplay}
            </Link>
            <span>/</span>
            <span className="text-[#2f0003]">{artist.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-3xl border border-[#2f0003]/15 shadow-2xl">
              <Image
                src={artist.image}
                alt={artist.name}
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
              {artist.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-[#ee0202] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] shadow-lg">
                  Featured Artist
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h1 className="text-3xl font-semibold text-[#2f0003] sm:text-4xl">
                    {artist.name}
                  </h1>
                  {artist.verified && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                      ✓
                    </div>
                  )}
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#ee0202]">
                  {categoryDisplay}
                </p>
              </div>

              <p className="text-base leading-relaxed text-[#2f0003]/80">
                {artist.shortDescription}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#2f0003]/60">
                    Experience
                  </p>
                  <p className="text-xl font-semibold text-[#2f0003]">
                    {artist.experience} Years
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#2f0003]/60">
                    Shows Done
                  </p>
                  <p className="text-xl font-semibold text-[#2f0003]">
                    {artist.totalShows}+
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#2f0003]/60">
                    Rating
                  </p>
                  <p className="flex items-center gap-2 text-xl font-semibold text-[#2f0003]">
                    {artist.rating} <span className="text-[#ee0202]">⭐</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#2f0003]/60">
                    Starting From
                  </p>
                  <p className="text-xl font-semibold text-[#2f0003]">
                    ₹{(artist.priceRange.min / 1000).toFixed(0)}k
                  </p>
                </div>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ee0202] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-xl transition hover:bg-[#ff2626]"
              >
                Book {artist.name}
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Biography */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold text-[#2f0003]">
                About {artist.name}
              </h2>
              <p className="mb-6 leading-relaxed text-[#2f0003]/80">
                {artist.bio}
              </p>

              {/* Specialties */}
              <div className="mb-8">
                <h3 className="mb-3 text-lg font-semibold text-[#2f0003]">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map((specialty: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full border border-[#2f0003]/20 bg-white/70 px-4 py-2 text-sm text-[#2f0003]/80"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="mb-3 text-lg font-semibold text-[#2f0003]">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.languages.map((language: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#ee0202] px-4 py-2 text-sm font-semibold text-[#f8ddbf]"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              {artist.reviews && artist.reviews.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#2f0003]">
                    Client Reviews
                  </h3>
                  <div className="space-y-4">
                    {artist.reviews.map((review: any, idx: number) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6"
                      >
                        <div className="mb-2 flex gap-1 text-[#ee0202]">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <p className="mb-3 text-sm leading-relaxed text-[#2f0003]/80">
                          &quot;{review.review}&quot;
                        </p>
                        <p className="text-xs font-semibold text-[#2f0003]">
                          {review.clientName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Cities Available */}
              <div className="mb-6 rounded-3xl border border-[#2f0003]/15 bg-white/70 p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                  Cities Available
                </h3>
                <div className="space-y-2">
                  {artist.cities.map((city: string, idx: number) => (
                    <Link
                      key={idx}
                      href={`/book-${artist.category}-${city}`}
                      className="block rounded-lg border border-[#2f0003]/10 bg-[#f8ddbf]/50 px-4 py-2 text-sm text-[#2f0003]/80 transition hover:border-[#ee0202] hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                    >
                      {city.replace(/-/g, " ").toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              {artist.socialMedia &&
                Object.keys(artist.socialMedia).length > 0 && (
                  <div className="rounded-3xl border border-[#2f0003]/15 bg-white/70 p-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f0003]">
                      Follow on Social Media
                    </h3>
                    <div className="space-y-2">
                      {artist.socialMedia.instagram && (
                        <a
                          href={artist.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg border border-[#2f0003]/10 bg-[#f8ddbf]/50 px-4 py-3 text-sm text-[#2f0003]/80 transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                        >
                          <span>📷</span> Instagram
                        </a>
                      )}
                      {artist.socialMedia.youtube && (
                        <a
                          href={artist.socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg border border-[#2f0003]/10 bg-[#f8ddbf]/50 px-4 py-3 text-sm text-[#2f0003]/80 transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                        >
                          <span>▶️</span> YouTube
                        </a>
                      )}
                      {artist.socialMedia.twitter && (
                        <a
                          href={artist.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg border border-[#2f0003]/10 bg-[#f8ddbf]/50 px-4 py-3 text-sm text-[#2f0003]/80 transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                        >
                          <span>🐦</span> Twitter
                        </a>
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#2f0003]/10 bg-gradient-to-b from-white/50 to-[#f8ddbf] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-[#2f0003]">
            Ready to Book {artist.name}?
          </h2>
          <p className="mb-8 text-sm text-[#2f0003]/75">
            Get instant quote and check availability for your event.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#ee0202] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-xl transition hover:bg-[#ff2626]"
          >
            Get Quote & Availability
            <span className="text-lg">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

