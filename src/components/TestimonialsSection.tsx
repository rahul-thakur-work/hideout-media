const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "HR Director, Tech Corp India",
    company: "Bangalore",
    text: "Working with Hideout Media was a wonderful experience. They organized a fantastic stand-up comedy night for our annual event. The comedian was professional, hilarious, and connected perfectly with our team. The booking process was seamless.",
    rating: 5,
  },
  {
    name: "Ankit Malhotra",
    role: "Event Manager",
    company: "Delhi NCR",
    text: "We booked a DJ through Hideout Media for our corporate celebration and the experience was exceptional. The team was responsive, flexible, and accommodating to all our last-minute requirements. Highly professional service!",
    rating: 5,
  },
  {
    name: "Sakshi Verma",
    role: "Wedding Planner",
    company: "Mumbai",
    text: "Very responsive and professional team! Having a comedian at our client's wedding was a different experience. The artist performed with such ease and made the crowd laugh in the most decent way. Much appreciated!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "Pune",
    text: "We recently connected with Hideout Media for a corporate event and our experience has been simply amazing. The motivational speaker they arranged was inspiring and exactly what our team needed. Great end-to-end support!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Marketing Head",
    company: "Hyderabad",
    text: "Smooth management from artist booking to the final performance. The anchor was professional, engaging, and kept our product launch event flowing perfectly. The team is very kind and easy to work with.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Operations Director",
    company: "Chandigarh",
    text: "Excellent service with good follow-up throughout. We booked both a comedian and a DJ for our annual party. Both artists were fantastic. Overall great work by the entire team. Thanks!",
    rating: 5,
  },
];

const artistTestimonials = [
  {
    name: "Gaurav Gupta",
    role: "Comedian",
    text: "Working with Hideout Media has been fantastic. They treat artists professionally, ensure timely payments, and book quality shows. The coordination is smooth and they truly understand what performers need.",
    image: "🎤",
  },
  {
    name: "Jeeveshu Ahluwalia",
    role: "Comedian",
    text: "One of the most professional booking agencies I've worked with. They maintain great relationships with both clients and artists. Clear communication, fair deals, and consistently good venues.",
    image: "😄",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#f8ddbf] py-24 text-[#2f0003]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(47,0,3,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-wide text-[#ee0202]">
            💬 Real stories from real people
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Here&apos;s what happens when events go right! 🎉
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#2f0003]/75">
            These aren&apos;t just reviews — they&apos;re stories of laughter, applause, and memories that people still talk about!
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-wide text-[#ee0202]">
            💼 From Our Happy Clients
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#2f0003]/15 bg-white/70 p-6 shadow-lg backdrop-blur transition hover:shadow-xl"
              >
                <div className="mb-3 flex gap-1 text-[#ee0202]">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#2f0003]/80">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-[#2f0003]/10 pt-4">
                  <p className="font-semibold text-[#2f0003]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#2f0003]/60">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[#2f0003]/50">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Testimonials */}
        <div>
          <h3 className="mb-6 text-center text-sm font-semibold tracking-wide text-[#ee0202]">
            🎭 Love from Our Artists
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {artistTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#2f0003]/15 bg-gradient-to-br from-[#2f0003] to-black p-8 text-[#f8ddbf] shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ee0202] text-3xl shadow-lg">
                  {testimonial.image}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#f8ddbf]/90">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-[#f8ddbf]/20 pt-4">
                  <p className="font-semibold text-[#f8ddbf]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#f8ddbf]/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

