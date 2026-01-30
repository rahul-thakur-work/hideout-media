import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/lib/mongodb";
import Artist from "@/lib/models/Artist";
import City from "@/lib/models/City";
import Category from "@/lib/models/Category";

type Props = {
  params: { category: string; city: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = params.category.replace(/-/g, " ");
  const cityName = params.city.replace(/-/g, " ");

  return {
    title: `Book ${categoryName} in ${cityName} | Hideout Media`,
    description: `Hire the best ${categoryName} in ${cityName} for your events. Professional artists for corporate events, weddings, and celebrations. Get instant quotes!`,
  };
}

export default async function CategoryCityPage({ params }: Props) {
  await dbConnect();

  const { category, city } = params;

  // Fetch artists
  const artists = await Artist.find({
    category: category,
    cities: city,
  })
    .sort({ rating: -1, totalShows: -1 })
    .lean();

  // Fetch city info
  const cityInfo = await City.findOne({ slug: city }).lean();

  // Fetch category info
  const categoryInfo = await Category.findOne({ slug: category }).lean();

  // Format for display
  const categoryDisplay =
    categoryInfo?.name || category.replace(/-/g, " ").toUpperCase();
  const cityDisplay = cityInfo?.name || city.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-[#f8ddbf] pt-20">
      {/* Header */}
      <section className="border-b border-[#2f0003]/10 bg-gradient-to-b from-[#f8ddbf] to-white/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#2f0003]/60">
            <Link href="/" className="hover:text-[#ee0202]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#2f0003]">
              Book {categoryDisplay} in {cityDisplay}
            </span>
          </nav>

          <h1 className="mb-4 text-3xl font-semibold text-[#2f0003] sm:text-4xl">
            Book {categoryDisplay} in {cityDisplay}
          </h1>

          <p className="max-w-3xl text-sm text-[#2f0003]/75 sm:text-base">
            {cityInfo?.description ||
              `Hire the best ${categoryDisplay.toLowerCase()} in ${cityDisplay} for your corporate events, weddings, and private celebrations. Professional artists with verified reviews and transparent pricing.`}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            <div className="rounded-full border border-[#2f0003]/20 bg-white/70 px-4 py-2">
              <span className="font-semibold text-[#2f0003]">
                {artists.length}
              </span>{" "}
              <span className="text-[#2f0003]/70">Artists Available</span>
            </div>
            <div className="rounded-full border border-[#2f0003]/20 bg-white/70 px-4 py-2">
              <span className="font-semibold text-[#2f0003]">✓</span>{" "}
              <span className="text-[#2f0003]/70">Verified Profiles</span>
            </div>
            <div className="rounded-full border border-[#2f0003]/20 bg-white/70 px-4 py-2">
              <span className="font-semibold text-[#2f0003]">💰</span>{" "}
              <span className="text-[#2f0003]/70">Transparent Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {artists.length === 0 ? (
            <div className="rounded-3xl border border-[#2f0003]/15 bg-white/70 p-12 text-center">
              <p className="mb-4 text-lg font-semibold text-[#2f0003]">
                No artists found in this category
              </p>
              <p className="mb-6 text-sm text-[#2f0003]/70">
                We're expanding our network! Contact us for artist
                recommendations.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ee0202] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] shadow-lg transition hover:bg-[#ff2626]"
              >
                Contact Us
                <span className="text-base">→</span>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {artists.map((artist: any) => (
                <Link
                  key={artist._id.toString()}
                  href={`/artist/${artist.slug}`}
                  className="group"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#2f0003]/15 bg-white/80 shadow-lg transition hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        width={600}
                        height={400}
                        className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      {artist.featured && (
                        <div className="absolute right-3 top-3 rounded-full bg-[#ee0202] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f8ddbf]">
                          Featured
                        </div>
                      )}
                      {artist.verified && (
                        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-[#2f0003]">
                            {artist.name}
                          </h3>
                          <p className="text-xs text-[#2f0003]/60">
                            {artist.experience} years experience
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-[#ee0202]">
                          <span className="text-sm font-semibold">
                            {artist.rating}
                          </span>
                          <span>⭐</span>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-[#2f0003]/75">
                        {artist.shortDescription}
                      </p>

                      <div className="mt-auto">
                        <div className="mb-3 flex flex-wrap gap-2 text-[10px]">
                          {artist.specialties.slice(0, 2).map((specialty: string, idx: number) => (
                            <span
                              key={idx}
                              className="rounded-full border border-[#2f0003]/20 bg-[#f8ddbf]/50 px-3 py-1 text-[#2f0003]/70"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-xs">
                            <p className="text-[#2f0003]/60">Starting from</p>
                            <p className="font-semibold text-[#2f0003]">
                              ₹{(artist.priceRange.min / 1000).toFixed(0)}k
                            </p>
                          </div>
                          <div className="rounded-full bg-[#ee0202] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f8ddbf] transition group-hover:bg-[#ff2626]">
                            View Profile →
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#2f0003]/10 bg-gradient-to-b from-white/50 to-[#f8ddbf] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-[#2f0003]">
            Can't Find What You're Looking For?
          </h2>
          <p className="mb-8 text-sm text-[#2f0003]/75">
            Contact us and we'll help you find the perfect artist for your event
            in {cityDisplay}.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ee0202] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-lg transition hover:bg-[#ff2626]"
          >
            Get Artist Recommendations
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

