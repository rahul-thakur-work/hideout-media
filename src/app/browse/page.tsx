import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import City from "@/lib/models/City";
import Category from "@/lib/models/Category";

// Make this page dynamic (no static generation at build time)
export const dynamic = 'force-dynamic';

export default async function BrowsePage() {
  await dbConnect();

  const cities = await City.find({}).sort({ popular: -1, name: 1 }).lean();
  const categories = await Category.find({}).lean();

  return (
    <div className="min-h-screen bg-[#f8ddbf] pt-20">
      <section className="border-b border-[#2f0003]/10 bg-gradient-to-b from-[#f8ddbf] to-white/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-4 text-3xl font-semibold text-[#2f0003] sm:text-4xl">
            Browse Artists by City & Category
          </h1>
          <p className="text-sm text-[#2f0003]/75 sm:text-base">
            Find the perfect artist for your event across India
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Categories */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-[#2f0003]">
              Browse by Category
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category: any) => (
                <div
                  key={category._id.toString()}
                  className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6 shadow-lg"
                >
                  <div className="mb-3 text-3xl">{category.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-[#2f0003]">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-[#2f0003]/70">
                    {category.description.substring(0, 100)}...
                  </p>
                  <div className="space-y-2">
                    {cities.slice(0, 3).map((city: any) => (
                      <Link
                        key={city._id.toString()}
                        href={`/book-${category.slug}-${city.slug}`}
                        className="block rounded-lg bg-[#f8ddbf]/50 px-3 py-2 text-xs text-[#2f0003]/80 transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                      >
                        {category.name} in {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#2f0003]">
              Browse by City
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city: any) => (
                <div
                  key={city._id.toString()}
                  className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6 shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#2f0003]">
                    {city.name}
                  </h3>
                  <p className="mb-4 text-xs text-[#2f0003]/60">{city.state}</p>
                  <div className="space-y-2">
                    {categories.map((category: any) => (
                      <Link
                        key={category._id.toString()}
                        href={`/book-${category.slug}-${city.slug}`}
                        className="block rounded-lg bg-[#f8ddbf]/50 px-3 py-2 text-xs text-[#2f0003]/80 transition hover:bg-[#ee0202] hover:text-[#f8ddbf]"
                      >
                        Book {category.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

