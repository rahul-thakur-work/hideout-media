import Link from "next/link";

export default function BookComedianPage() {
  return (
    <div className="min-h-screen bg-[#f8ddbf] pt-20">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ee0202]/30 bg-[#ee0202]/10 px-6 py-2">
              <span className="text-2xl">🎤</span>
              <span className="text-sm font-semibold text-[#ee0202]">
                Book a Comedian
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-[#2f0003] sm:text-5xl">
              Let&apos;s Make Your Event Hilarious! 😂
            </h1>

            <p className="text-lg leading-relaxed text-[#2f0003]/75">
              Tell us about your event, and we&apos;ll personally recommend the
              perfect comedian(s) to make it unforgettable!
            </p>
          </div>

          {/* Booking form */}
          <form className="rounded-3xl border border-[#2f0003]/15 bg-white p-8 shadow-2xl md:p-12">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Event Type *
                </label>
                <select
                  required
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding / Sangeet</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="private">Private Party</option>
                  <option value="college">College Fest</option>
                  <option value="public">Public Show</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mumbai, Delhi, Bangalore..."
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Expected Audience Size *
                </label>
                <input
                  type="number"
                  required
                  placeholder="50, 100, 500..."
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                  Budget Range *
                </label>
                <select
                  required
                  className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
                >
                  <option value="">Select your budget</option>
                  <option value="under-50k">Under ₹50k</option>
                  <option value="50k-1L">₹50k - ₹1 Lakh</option>
                  <option value="1L-2L">₹1 Lakh - ₹2 Lakh</option>
                  <option value="2L-5L">₹2 Lakh - ₹5 Lakh</option>
                  <option value="5L-10L">₹5 Lakh - ₹10 Lakh</option>
                  <option value="10L+">₹10 Lakh+</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                Any Specific Comedian Preference?
              </label>
              <input
                type="text"
                placeholder="E.g., Rahul Dua, Gaurav Gupta, or 'open to suggestions'"
                className="w-full rounded-full border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-3 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-[#2f0003]">
                Tell Us More About Your Event
              </label>
              <textarea
                rows={5}
                placeholder="What's the occasion? Any special requirements? What vibe are you looking for? The more details, the better we can help!"
                className="w-full rounded-3xl border border-[#2f0003]/30 bg-[#f8ddbf]/30 px-6 py-4 text-[#2f0003] outline-none transition focus:border-[#ee0202] focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-[#2f0003]/70">
                <span className="font-semibold text-[#2f0003]">
                  🚀 Quick response guaranteed!
                </span>{" "}
                We&apos;ll get back to you within a few hours with comedian
                recommendations, pricing, and availability. Or call us now:{" "}
                <a
                  href="tel:+919289113590"
                  className="font-semibold text-[#ee0202] hover:underline"
                >
                  +91 9289113590
                </a>
              </p>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ee0202] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-xl transition hover:bg-[#ff2626] hover:shadow-2xl"
              >
                🎤 Get Comedian Recommendations
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>

          {/* Why book through us */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2f0003]/10 bg-white p-6 text-center">
              <div className="mb-3 text-4xl">⚡</div>
              <h3 className="mb-2 font-semibold text-[#2f0003]">
                Quick Response
              </h3>
              <p className="text-sm text-[#2f0003]/70">
                We reply within hours, not days
              </p>
            </div>

            <div className="rounded-2xl border border-[#2f0003]/10 bg-white p-6 text-center">
              <div className="mb-3 text-4xl">🎭</div>
              <h3 className="mb-2 font-semibold text-[#2f0003]">
                Perfect Match
              </h3>
              <p className="text-sm text-[#2f0003]/70">
                We recommend comedians who fit your vibe
              </p>
            </div>

            <div className="rounded-2xl border border-[#2f0003]/10 bg-white p-6 text-center">
              <div className="mb-3 text-4xl">💯</div>
              <h3 className="mb-2 font-semibold text-[#2f0003]">
                100% Guaranteed
              </h3>
              <p className="text-sm text-[#2f0003]/70">
                Professional artists, punctual & prepared
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-[#2f0003]/70">
              Need help deciding?
            </p>
            <Link
              href="/artists"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#2f0003] bg-white px-6 py-3 text-sm font-semibold text-[#2f0003] transition hover:bg-[#2f0003] hover:text-white"
            >
              🎤 Browse All Our Comedians
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

