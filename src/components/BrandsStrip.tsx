export default function BrandsStrip() {
  return (
    <section
      id="trust"
      className="relative border-y border-[#2f0003]/10 bg-[#f8ddbf]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,221,191,0.2),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <p className="max-w-sm text-xs font-medium tracking-wide text-[#2f0003]/70">
          🤝 Proud partners with some pretty awesome folks across India
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#2f0003]/60">
          <span className="rounded-full border border-[#2f0003]/20 px-4 py-2">
            🏢 Corporate Giants
          </span>
          <span className="rounded-full border border-[#2f0003]/20 px-4 py-2">
            🏨 Premium Hotels & Venues
          </span>
          <span className="rounded-full border border-[#2f0003]/20 px-4 py-2">
            💼 Startups & Enterprises
          </span>
          <span className="rounded-full border border-[#2f0003]/20 px-4 py-2">
            🎉 Event Planners
          </span>
        </div>
      </div>
    </section>
  );
}

