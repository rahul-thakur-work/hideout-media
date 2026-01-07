export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#2f0003] text-[#f8ddbf] bg-[#2f0003] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ee0202] text-xs font-semibold tracking-[0.18em]">
            HM
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Hideout Media
            </p>
            <p className="text-xs ">
              Media House & Brand Partnerships
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] md:flex">
          <a href="#work" className="hover:text-white/90">
            Work
          </a>
          <a href="#services" className="hover:text-white/90">
            Services
          </a>
          <a href="#brands" className="hover:text-white/90">
            Brands
          </a>
          <a href="#about" className="hover:text-white/90">
            About
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#ee0202] px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#f8ddbf] shadow-[0_0_30px_rgba(238,2,2,0.5)] hover:bg-[#ff2626]"
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}

