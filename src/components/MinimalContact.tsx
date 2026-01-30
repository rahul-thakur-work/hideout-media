import Link from "next/link";

export default function MinimalContact() {
  return (
    <section id="contact" className="bg-black py-32 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-6xl font-bold">Let's Work</h2>
        
        <p className="mx-auto mb-12 max-w-md text-xl text-white/60">
          Book a comedian. Plan a show.
          <br />
          Partner with us.
        </p>

        <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book-comedian"
            className="w-full border-b-2 border-[#ee0202] bg-[#ee0202] px-12 py-4 text-sm font-bold uppercase tracking-wider transition hover:bg-[#ff2626] sm:w-auto"
          >
            Book Now
          </Link>

          <a
            href="mailto:contact@hideoutmedia.in"
            className="w-full border-b-2 border-white/20 px-12 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-white/40 sm:w-auto"
          >
            Email Us
          </a>

          <a
            href="tel:+919289113590"
            className="w-full border-b-2 border-white/20 px-12 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-white/40 sm:w-auto"
          >
            Call Us
          </a>
        </div>

        <div className="space-y-2 text-sm text-white/40">
          <p>+91 9289113590</p>
          <p>contact@hideoutmedia.in</p>
          <p>Mumbai • Delhi • Bangalore</p>
        </div>
      </div>
    </section>
  );
}

