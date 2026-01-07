export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(238,2,2,0.5),_transparent_55%)] opacity-70" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2f0003]/70">
            Let&apos;s plan your next move
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Tell us about your brand, show or brief.
          </h2>
          <p className="mt-3 text-sm text-[#2f0003]/75">
            Share a few details and we&apos;ll reply with ideas, rough budgets
            and timeline options—no spam, no generic decks.
          </p>
        </div>

        <form className="mt-10 grid gap-6 rounded-3xl border border-[#2f0003]/20 bg-white/60 p-6 text-sm shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Work email
            </label>
            <input
              type="email"
              placeholder="you@brand.com"
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Company / channel
            </label>
            <input
              type="text"
              placeholder="Brand, creator or project name"
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              What are you looking for?
            </label>
            <select className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition focus:border-[#2f0003]/80">
              <option value="">Select an option</option>
              <option value="brand-deals">
                Brand deal / sponsorship campaign
              </option>
              <option value="production">
                End-to-end content production
              </option>
              <option value="media-business">
                Media & monetisation strategy
              </option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Tell us about the brief
            </label>
            <textarea
              rows={4}
              placeholder="Share goals, timelines, budget range, platforms and links to any reference work."
              className="w-full rounded-3xl border border-[#2f0003]/30 bg-white/80 px-4 py-3 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:col-span-2">
            <p className="max-w-sm text-[11px] text-[#2f0003]/65">
              We aim to reply within one working day with next steps. If you
              prefer, you can also reach us directly at{" "}
              <span className="font-semibold text-[#2f0003]">
                hello@hideout.media
              </span>
              .
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#ee0202] px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8ddbf] shadow-[0_15px_60px_rgba(0,0,0,0.9)] transition hover:bg-[#ff2626]"
            >
              Submit brief
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

