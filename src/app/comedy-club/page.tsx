import Link from "next/link";
import Image from "next/image";

const upcomingShows = [
  {
    date: "15",
    month: "FEB",
    day: "Saturday",
    time: "8:00 PM",
    comedian: "Rahul Dua",
    showTitle: "Confusing Things Tour",
    description: "Rahul dissects the weird things we do and accept as normal",
    venue: "The Hideout Mumbai",
    address: "Bandra West, Mumbai",
    price: "₹499",
    status: "Filling Fast",
    image: "/assets/shows-poster.png",
  },
  {
    date: "22",
    month: "FEB",
    day: "Saturday",
    time: "7:30 PM",
    comedian: "Gaurav Gupta",
    showTitle: "Clean Slate",
    description: "Family-friendly comedy that everyone can enjoy together",
    venue: "The Hideout Delhi",
    address: "Hauz Khas Village, Delhi",
    price: "₹599",
    status: "Available",
    image: "/assets/shows-poster.png",
  },
  {
    date: "01",
    month: "MAR",
    day: "Sunday",
    time: "8:30 PM",
    comedian: "Aditi Mittal",
    showTitle: "Girl Meets Mic",
    description: "Bold, brilliant, and unapologetically funny!",
    venue: "The Hideout Bangalore",
    address: "Indiranagar, Bangalore",
    price: "₹699",
    status: "Few Seats Left",
    image: "/assets/shows-poster.png",
  },
];

export default function ComedyClubPage() {
  return (
    <div className="min-h-screen bg-[#f8ddbf] pt-20">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2f0003] to-black py-24 text-[#f8ddbf]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8ddbf]/30 bg-white/10 px-6 py-2 backdrop-blur">
              <span className="text-2xl">🎪</span>
              <span className="text-sm font-medium">The Hideout Comedy Club</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
              India&apos;s Hottest
              <span className="mt-2 block bg-gradient-to-r from-[#ee0202] via-[#ff6b6b] to-[#ee0202] bg-clip-text text-transparent">
                Comedy Venue
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#f8ddbf]/80">
              Where India&apos;s finest comedians test new material, legends are made,
              and you laugh till your cheeks hurt. Join us every weekend for an
              unforgettable night! 😂
            </p>
          </div>

          {/* Club video showcase */}
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#f8ddbf]/20">
            <div className="aspect-video bg-black">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🎬</div>
                  <p className="text-lg font-semibold">Club Highlights</p>
                  <p className="mt-2 text-sm text-[#f8ddbf]/60">
                    Video: Behind the scenes & best moments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming shows */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#2f0003]">
              🎤 Upcoming Shows
            </h2>
            <p className="text-lg text-[#2f0003]/75">
              Book your seats now — our shows sell out fast!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {upcomingShows.map((show, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-[#2f0003]/10 bg-white shadow-lg transition hover:shadow-2xl"
              >
                {/* Show image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.showTitle}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Date badge */}
                  <div className="absolute left-4 top-4 rounded-2xl bg-[#ee0202] p-3 text-center text-white shadow-lg">
                    <div className="text-2xl font-bold">{show.date}</div>
                    <div className="text-xs font-semibold">{show.month}</div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#ee0202]">
                    {show.status}
                  </div>
                </div>

                {/* Show details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-1 text-2xl font-bold text-[#2f0003]">
                      {show.comedian}
                    </h3>
                    <p className="mb-2 italic text-[#2f0003]/70">
                      {show.showTitle}
                    </p>
                    <p className="text-sm text-[#2f0003]/60">
                      {show.description}
                    </p>
                  </div>

                  <div className="mb-6 space-y-2 border-t border-[#2f0003]/10 pt-4 text-sm text-[#2f0003]/70">
                    <p className="flex items-center gap-2">
                      <span>📅</span> {show.day}, {show.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📍</span> {show.venue}
                    </p>
                    <p className="flex items-center gap-2 text-xs">
                      <span className="ml-5">{show.address}</span>
                    </p>
                    <p className="flex items-center gap-2 font-semibold text-[#ee0202]">
                      <span>🎟️</span> Starting at {show.price}
                    </p>
                  </div>

                  <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ee0202] py-3 text-sm font-semibold text-white transition hover:bg-[#ff2626]">
                    Get Tickets Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club info */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#2f0003]">
                Why The Hideout?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#2f0003]">
                    🎭 Best Comedians, Every Weekend
                  </h3>
                  <p className="text-[#2f0003]/75">
                    We curate lineups featuring India&apos;s top comedians plus
                    exciting new talent. Every show is unique, fresh, and
                    guaranteed to make you laugh!
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#2f0003]">
                    🍻 Full Bar & Dining
                  </h3>
                  <p className="text-[#2f0003]/75">
                    Enjoy drinks and food while you laugh. Our menu is as
                    carefully crafted as our comedy lineup!
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#2f0003]">
                    📍 Three Locations
                  </h3>
                  <p className="text-[#2f0003]/75">
                    Mumbai (Bandra), Delhi (Hauz Khas), and Bangalore
                    (Indiranagar). More cities coming soon!
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#2f0003]">
                    🎟️ Affordable Tickets
                  </h3>
                  <p className="text-[#2f0003]/75">
                    Great comedy shouldn&apos;t cost a fortune. Tickets start at just
                    ₹499. Worth every rupee!
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#2f0003]/10 bg-[#f8ddbf] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#2f0003]">
                🎫 Group Bookings & Private Shows
              </h3>
              <p className="mb-6 leading-relaxed text-[#2f0003]/75">
                Planning a birthday party? Office celebration? We offer group
                discounts and can even arrange private shows for your event!
              </p>

              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ee0202]">✓</span>
                  <span>Groups of 10+: 10% off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee0202]">✓</span>
                  <span>Groups of 20+: 15% off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee0202]">✓</span>
                  <span>Private show bookings available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ee0202]">✓</span>
                  <span>Corporate packages with food & drinks</span>
                </li>
              </ul>

              <Link
                href="/#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2f0003] py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                💬 Enquire About Group Bookings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

