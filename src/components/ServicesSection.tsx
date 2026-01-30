export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Corporate Shows",
      subtitle: "Private & Public Gigs",
      description: "Custom comedy experiences for your team, clients, or audience.",
    },
    {
      number: "02",
      title: "Brand Deals",
      subtitle: "Collaborations",
      description: "Comedy content that makes your brand memorable and viral.",
    },
    {
      number: "03",
      title: "Artist Management",
      subtitle: "Career Building",
      description: "We don't just book gigs. We build legendary careers.",
    },
    {
      number: "04",
      title: "Show Production",
      subtitle: "End-to-End",
      description: "From concept to curtain call. Every detail handled.",
    },
  ];

  return (
    <section id="services" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <div className="mb-4 h-1 w-16 bg-[#ee0202]" />
          <h2 className="text-5xl font-bold text-[#2f0003]">
            What We Do
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group border-b border-r border-black/5 p-12 transition hover:bg-black hover:text-white"
            >
              <div className="mb-8 text-6xl font-bold text-black/5 transition group-hover:text-white/10">
                {service.number}
              </div>
              
              <h3 className="mb-2 text-3xl font-bold">
                {service.title}
              </h3>
              
              <p className="mb-4 text-sm font-medium text-[#ee0202] transition group-hover:text-[#ff6b6b]">
                {service.subtitle}
              </p>
              
              <p className="text-lg opacity-60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
