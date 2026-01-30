export default function WorkShowcase() {
  const projects = [
    {
      title: "Netflix Special",
      year: "2024",
      image: "/assets/show-poster-surprise.jpeg",
      stat: "10M+ views",
    },
    {
      title: "Corporate Comedy Night",
      year: "2024",
      image: "/assets/shows-poster.png",
      stat: "500 guests",
    },
    {
      title: "Wedding Show",
      year: "2023",
      image: "/assets/hero-poster.jpeg",
      stat: "300 guests",
    },
  ];

  return (
    <section id="work" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <div className="mb-4 h-1 w-16 bg-[#ee0202]" />
          <h2 className="text-5xl font-bold text-[#2f0003]">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] overflow-hidden bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="mb-2 text-sm font-bold text-white/60">{project.year}</p>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60">{project.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
