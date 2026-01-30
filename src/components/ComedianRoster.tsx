import Link from "next/link";

const comedians = [
  {
    name: "Rahul Dua",
    tagline: "Storytelling Master",
    image: "https://admin.hire4event.com/assets/artistimage/17353031951735303195Rahul_Dua1.webp",
    shows: "500+",
    speciality: "Observational",
    slug: "rahul-dua",
  },
  {
    name: "Gaurav Gupta",
    tagline: "Clean Comedy",
    image: "https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/9636795_1701945116.webp",
    shows: "600+",
    speciality: "Corporate",
    slug: "gaurav-gupta",
  },
  {
    name: "Zakir Khan",
    tagline: "Voice of Youth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Zakir_khan_2.jpg/500px-Zakir_khan_2.jpg",
    shows: "700+",
    speciality: "Relatable Comedy",
    slug: "zakir-khan",
  },
  {
    name: "Vir Das",
    tagline: "Global Star",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vir_Das_at_the_2024_Edinburgh_Festival_Fringe_%28cropped%29.jpg/500px-Vir_Das_at_the_2024_Edinburgh_Festival_Fringe_%28cropped%29.jpg",
    shows: "800+",
    speciality: "International",
    slug: "vir-das",
  },
];

export default function ComedianRoster() {
  return (
    <section id="artists" className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <div className="mb-4 h-1 w-16 bg-[#ee0202]" />
          <h2 className="text-5xl font-bold">
            Our Roster
          </h2>
        </div>

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
          {comedians.map((comedian, index) => (
            <Link
              key={index}
              href={`/artist/${comedian.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-black"
            >
              <img
                src={comedian.image}
                alt={comedian.name}
                className="h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition group-hover:bg-black/20">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/60">
                  {comedian.speciality}
                </p>
                <h3 className="mb-1 text-2xl font-bold">
                  {comedian.name}
                </h3>
                <p className="text-sm text-white/60">
                  {comedian.tagline}
                </p>
                <div className="mt-4 h-px w-12 bg-[#ee0202] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/artists"
            className="inline-block border-b-2 border-white/20 px-12 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-white/40"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
