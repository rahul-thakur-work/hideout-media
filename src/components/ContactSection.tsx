export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(238,2,2,0.5),_transparent_55%)] opacity-70" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
            💬 Let&apos;s chat about your event!
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Tell us what you&apos;re planning — we&apos;ll handle the rest! ✨
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#2f0003]/75">
            Just share a few details about your event, and we&apos;ll personally reach out with handpicked artist recommendations, honest pricing, and real availability. 
            <span className="mt-2 block font-semibold text-[#2f0003]">
              No robots, no automated replies — just real humans who care about making your event amazing! 🎉
            </span>
          </p>
        </div>

        <form className="mt-10 grid gap-6 rounded-3xl border border-[#2f0003]/20 bg-white/60 p-6 text-sm shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur md:grid-cols-3">
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
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              City
            </label>
            <input
              type="text"
              placeholder="Delhi, Mumbai, Bangalore, etc."
              className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Type of Event
            </label>
            <select className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition focus:border-[#2f0003]/80">
              <option value="">Select event type</option>
              <option value="corporate">Corporate Event</option>
              <option value="wedding">Wedding / Celebration</option>
              <option value="private">Private Party</option>
              <option value="online">Online Event</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Budget Range
            </label>
            <select className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition focus:border-[#2f0003]/80">
              <option value="">Select your budget</option>
              <option value="20-30k">₹20k - ₹30k</option>
              <option value="30-50k">₹30k - ₹50k</option>
              <option value="50-75k">₹50k - ₹75k</option>
              <option value="75k-1L">₹75k - ₹1 Lakh</option>
              <option value="1L-1.5L">₹1 Lakh - ₹1.5 Lakh</option>
              <option value="1.5L-2.5L">₹1.5 Lakh - ₹2.5 Lakh</option>
              <option value="2.5L+">₹2.5 Lakh+</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Artist Preference
            </label>
            <select className="h-10 w-full rounded-full border border-[#2f0003]/30 bg-white/80 px-4 text-xs text-[#2f0003] outline-none transition focus:border-[#2f0003]/80">
              <option value="">Select artist type</option>
              <option value="comedian">Comedian</option>
              <option value="dj">DJ / Musician / Band</option>
              <option value="speaker">Motivational Speaker</option>
              <option value="anchor">Anchor / Emcee</option>
              <option value="multiple">Multiple Artists</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-3">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-[#2f0003]/70">
              Event Details & Special Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your event date, venue, expected audience size, and any specific requirements..."
              className="w-full rounded-3xl border border-[#2f0003]/30 bg-white/80 px-4 py-3 text-xs text-[#2f0003] outline-none transition placeholder:text-[#2f0003]/40 focus:border-[#2f0003]/80"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:col-span-3">
            <p className="max-w-sm text-[11px] leading-relaxed text-[#2f0003]/65">
              <span className="mb-1 block font-semibold text-[#2f0003]">
                🚀 Quick response guaranteed!
              </span>
              We typically reply within a few hours (yes, really!) with personalized recommendations. Or call/WhatsApp us right now:{" "}
              <a href="tel:+919289113590" className="font-semibold text-[#ee0202] hover:underline">
                +91 9289113590
              </a>
              {" "}— we love chatting about events! 😊
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ee0202] px-8 py-3 text-xs font-semibold tracking-wide text-[#f8ddbf] shadow-[0_15px_60px_rgba(0,0,0,0.9)] transition hover:bg-[#ff2626] hover:shadow-[0_20px_70px_rgba(238,2,2,0.5)]"
            >
              🎯 Let&apos;s Do This!
              <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

