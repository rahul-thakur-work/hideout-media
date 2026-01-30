export default function AboutComedy() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left: Minimal text */}
          <div>
            <div className="mb-12">
              <div className="mb-4 h-1 w-16 bg-[#ee0202]" />
              <h2 className="text-5xl font-bold leading-tight text-[#2f0003]">
                Building
                <br />
                Comedy's
                <br />
                <span className="italic text-[#ee0202]">Future</span>
              </h2>
            </div>
            
            <p className="text-xl leading-relaxed text-[#2f0003]/60">
              We don't just book gigs.
              <br /><br />
              We build careers, craft specials, run clubs, and turn comedians into household names.
            </p>
          </div>

          {/* Right: Minimal stats */}
          <div className="space-y-16">
            <div>
              <div className="mb-6 text-6xl font-bold text-[#2f0003]">50+</div>
              <h3 className="mb-2 text-2xl font-bold text-[#2f0003]">
                Comedians
              </h3>
              <p className="text-[#2f0003]/60">
                We manage careers, not just calendars.
              </p>
            </div>

            <div>
              <div className="mb-6 text-6xl font-bold text-[#2f0003]">1K+</div>
              <h3 className="mb-2 text-2xl font-bold text-[#2f0003]">
                Shows
              </h3>
              <p className="text-[#2f0003]/60">
                From clubs to stadiums. All sold out.
              </p>
            </div>

            <div>
              <div className="mb-6 text-6xl font-bold text-[#ee0202]">50M+</div>
              <h3 className="mb-2 text-2xl font-bold text-[#2f0003]">
                Views
              </h3>
              <p className="text-[#2f0003]/60">
                Content that actually gets watched.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

